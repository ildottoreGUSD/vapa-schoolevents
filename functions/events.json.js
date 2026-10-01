/* GET /events.json: the calendar's events, read live from the Google Sheet.

   The sheet's "Published" tab is published to the web as CSV, and its URL is
   the Pages env var SHEET_CSV_URL. Only that tab is published. The form
   responses next to it hold staff emails and must never be.

   Tab columns (matched by header text, so order doesn't matter):
     Show · School · Title · Description · Location · Notes · Date · Time
   One row per performance date. Rows with the same School + Title merge into
   one event. If Show is FALSE the row is hidden, and a blank Show counts as
   shown.

   Output: { events, skipped, fetchedAt }. events matches index.html's
   FALLBACK_EVENTS: {school,title,desc,loc,notes,dates:[{d,t}]}. On any failure
   it returns 502, and the page keeps its built-in snapshot. */

const CACHE_SECONDS = 60;

export async function onRequestGet({ request, env, waitUntil }) {
  const cache = caches.default;
  const key = new Request(new URL("/events.json", request.url).toString());
  const hit = await cache.match(key);
  if (hit) return hit;

  if (!env.SHEET_CSV_URL) return fail("SHEET_CSV_URL is not set");

  let text;
  try {
    const res = await fetch(env.SHEET_CSV_URL, { redirect: "follow" });
    text = await res.text();
    if (!res.ok) return fail(`sheet answered ${res.status}`);
    // An unpublished tab answers 200 with Google's HTML sign-in/error page.
    if (/^\s*</.test(text)) return fail("sheet answered HTML, not CSV (is the tab still published?)");
  } catch (e) {
    return fail("sheet fetch failed: " + e.message);
  }

  const { events, skipped } = buildEvents(parseCsv(text));
  if (events.length === 0) return fail("sheet has no showable events", skipped);

  const res = new Response(JSON.stringify({ events, skipped, fetchedAt: new Date().toISOString() }), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": `public, max-age=${CACHE_SECONDS}`,
    },
  });
  waitUntil(cache.put(key, res.clone()));
  return res;
}

function fail(error, skipped) {
  return new Response(JSON.stringify({ error, skipped: skipped || [] }), {
    status: 502,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

/* RFC 4180: quoted fields may hold commas, newlines and "" escapes, and the
   descriptions use all three. */
export function parseCsv(text) {
  const rows = [];
  let row = [], field = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else q = false;
      } else field += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows;
}

const COLS = {
  show: /^show/i,
  school: /^school/i,
  title: /^(title|name|event)/i,
  desc: /^desc/i,
  loc: /^(location|where|venue)/i,
  notes: /^notes?/i,
  date: /^date/i,
  time: /^time/i,
};

export function buildEvents(rows) {
  const skipped = [];
  if (!rows.length) return { events: [], skipped };
  const header = rows[0].map(h => h.trim());
  const idx = {};
  for (const [k, re] of Object.entries(COLS)) idx[k] = header.findIndex(h => re.test(h));
  for (const k of ["school", "title", "date"]) {
    if (idx[k] < 0) return { events: [], skipped: [{ row: 1, reason: `no "${k}" column in header` }] };
  }

  const byKey = new Map();
  rows.slice(1).forEach((r, i) => {
    const rowNo = i + 2;
    const get = k => (idx[k] >= 0 ? (r[idx[k]] || "").trim() : "");
    if (r.every(c => !c.trim())) return;
    if (/^(false|no|n|0)$/i.test(get("show"))) return;

    const school = get("school").split(/\s*(?:·|;)\s*/).filter(Boolean).join(" · ");
    const title = get("title").replace(/\s+/g, " ");
    if (!school || !title) return skipped.push({ row: rowNo, reason: "missing school or title" });
    const d = normDate(get("date"));
    if (!d) return skipped.push({ row: rowNo, reason: `unreadable date "${get("date")}"` });
    const rawT = get("time");
    const t = rawT ? normTime(rawT) : "";
    if (rawT && !t) return skipped.push({ row: rowNo, reason: `unreadable time "${rawT}"` });

    const key = school.toLowerCase() + "\u0000" + title.toLowerCase();
    let e = byKey.get(key);
    if (!e) byKey.set(key, (e = { school, title, desc: "", loc: "", notes: "", dates: [] }));
    e.desc ||= get("desc");
    e.loc ||= get("loc");
    e.notes ||= get("notes");
    if (!e.dates.some(x => x.d === d && x.t === t)) e.dates.push({ d, t });
  });

  const events = [...byKey.values()];
  events.forEach(e => e.dates.sort((a, b) => sortKey(a) - sortKey(b)));
  events.sort((a, b) => sortKey(a.dates[0]) - sortKey(b.dates[0]));
  return { events, skipped };
}

const p2 = n => String(n).padStart(2, "0");

export function normDate(s) {
  let m;
  if ((m = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(s))) return valid(+m[1], +m[2], +m[3]);
  if ((m = /^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/.exec(s))) {
    const y = m[3].length === 2 ? 2000 + +m[3] : +m[3];
    return valid(y, +m[1], +m[2]);
  }
  if (/^\d{5}(\.\d+)?$/.test(s)) {
    // Sheets serial: days since 1899-12-30.
    const dt = new Date(Date.UTC(1899, 11, 30) + Math.floor(+s) * 86400000);
    return valid(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
  }
  return null;
}

function valid(y, mo, d) {
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
  return `${y}-${p2(mo)}-${p2(d)}`;
}

// Output is "h:mm AM", the only shape index.html's parse() reads.
export function normTime(s) {
  const m = /^(\d{1,2})(?::(\d{2}))?(?::\d{2})?\s*([ap])\.?\s*m?\.?$/i.exec(s) || /^(\d{1,2}):(\d{2})(?::\d{2})?()$/.exec(s);
  if (!m) return null;
  let h = +m[1];
  const mi = +(m[2] || 0);
  const ap = (m[3] || "").toUpperCase();
  if (mi > 59) return null;
  if (ap) {
    if (h < 1 || h > 12) return null;
  } else {
    if (h > 23) return null;
  }
  const isPm = ap ? ap === "P" : h >= 12;
  const h12 = ap ? h : (h % 12 || 12);
  return `${h12}:${p2(mi)} ${isPm ? "PM" : "AM"}`;
}

function sortKey(x) {
  const [y, m, d] = x.d.split("-").map(Number);
  let mins = 0;
  const tm = /^(\d+):(\d+) (AM|PM)$/.exec(x.t || "");
  if (tm) mins = ((+tm[1] % 12) + (tm[3] === "PM" ? 12 : 0)) * 60 + +tm[2];
  return Date.UTC(y, m - 1, d) + mins * 60000;
}

# GUSD VAPA Design System

The visual and editorial system of the **Glendale Unified School District Visual and Performing Arts (VAPA)** program, derived from the district's *Five-Year Strategic Plan for Visual & Performing Arts, 2026–2031*.

GUSD is a public school district in Glendale, California (223 N. Jackson Street, Glendale, CA 91206). VAPA is its arts department, led by a Senior Coordinator under Education Services. The program teaches five disciplines — Dance, Media Arts, Music, Theatre, and Visual Arts — sequentially from transitional kindergarten through grade twelve, anchored by a dedicated VAPA magnet elementary school (Keppel).

## Sources

| Source | Notes |
| --- | --- |
| `uploads/GUSD Strategic Arts Plan for PRINT PUBLICATION reduced.pdf` | 20-page US Letter print publication, the primary and only design source. Produced in Chrome (Skia/PDF m150) from an HTML layout, so the design is natively a 816×1056px web page. All colours, type sizes, page geometry and imagery in this system are measured from it. |
| `https://www.gusd.net/arts` | The public VAPA landing page. Referenced for copy and program context only; no assets were pulled from it. |
| `source/img/` | Every raster asset extracted from the PDF, at original resolution. |
| `source/shots/` | Page renders used to verify layout. |

Nothing else was provided: **no logo files, no font files, no brand guide, no codebase, no Figma file.** The seal in `assets/vapa-seal.png` is the district's own mark as embedded in the PDF, extracted rather than redrawn. Nothing in this system is invented artwork.

## The one product

This design system describes **one surface: a printed institutional publication.** GUSD did not supply an app, a website build, or a slide template, so this system does not pretend to describe those. The single UI kit — `ui_kits/strategic-plan/` — is a page-faithful recreation of the plan itself. Screen-only concerns (shadows, motion, hover states, the `Button` component) are marked as additions throughout, and are deliberately restrained so that on-screen work still reads as the same publication.

---

## Content fundamentals

**Voice.** Institutional, declarative, and unhedged. The plan states what will happen and what will prove it happened. It never sells, never exclaims (one exception: the district tagline "Preparing Our Students for Their Future!"), and never addresses the reader as "you." First person plural appears only inside quoted committee material — *"What creative, innovative actions can we take to address our challenges and move toward our vision?"* Everywhere else the subject is the district, the plan, or the action.

**Headlines are two short lines with a comma.** This is the single most recognisable copy pattern in the book:

> Twenty-four actions,
> five years, one system

> The whole spectrum,
> for every student

> Five years,
> three phases

> Built by the people
> who teach the work

Each is a fragment, not a sentence, and each is paired with a letterspaced all-caps eyebrow that names the section flatly: `THE PLAN AT A GLANCE`, `TK–12, ALL FIVE DISCIPLINES`, `IMPLEMENTATION ROADMAP`, `ACKNOWLEDGEMENTS`.

**Action titles are verb-first and title-cased.** "Optimize Site Expenditure Plan Development & Compliance Auditing." "Institutionalize an Annual GUSD VAPA Showcase." "Build Higher Education and Teacher Residency Pipelines." Steps beneath them are also verb-first but sentence-cased: "Define standardized, compliant budget workflows for VAPA allocations."

**Every action closes with an auditable outcome,** introduced by the literal word *Outcome* and a middle dot: "Outcome · Standardized committee structures active at 100% of school sites, with published agendas and compliant expenditure logs." The outcome is always a verifiable artefact — a log, a roster, a board adoption, a signed MOU — never a sentiment.

**Money is named, not implied.** Each action carries a `LOW / MEDIUM / HIGH IMPACT` marker and a one-sentence funding source: "Covered by existing general fund / LCAP staff hours." Where a figure exists it is given plainly: "Approximately $1,500–$6,000 per vehicle, depending on size."

**Punctuation.** The middle dot `·` is the system's connective tissue — it separates a label from its value (`Direction A · Goal 1`), a name from its role (`Ms. Jaclyn Scott · Keppel VAPA Magnet ES`), and items in a horizontal list (`The Music Center · Glendale Arts`). Em dashes set off appositives with spaces around them. En dashes carry ranges (`2026–2031`, `TK–12`, `grades 4–6`). Curly quotes throughout.

**Casing.** Sentence case for body copy and captions. Title Case for action titles and proper program names. ALL CAPS only for eyebrows, micro labels, and impact markers — and always with wide tracking, never tight.

**Numerals.** Spelled out when they open a headline ("Twenty-four actions"), set as figures everywhere else, and set very large when they are the point ("24", "6", "3", "5").

**No emoji. Anywhere.** Not in the publication, not on the site, not in this system.

---

## Visual foundations

**The two grounds.** The book alternates between exactly two page backgrounds and nothing else. **Navy `#0A1C30`** carries the cover, the vision statement, the discipline spread, the three strategic-direction dividers, and the back cover — the ceremonial pages. **Warm cream `#F7F3EA`** carries every working page: actions, roadmap, board mapping, process, acknowledgements. A reader can tell a chapter opening from a content page at arm's length. Never introduce a third ground.

**Colour roles.** `--gusd-blue #0F6FB4` is the working accent on cream — eyebrows, card rules, meter fills. `--vapa-visual-arts #F4B41B` (gold) is the accent on navy — eyebrows, the giant direction letter, the tagline. Green `#3FA535`, amber `#E0961A`, and red `#B4341F` are strictly status: low, medium, and high budget impact. The five discipline colours (pink, teal, purple, orange, gold) are used as a set — the spine bar on the cover and back cover, and as the top rule of each discipline card. Never use a discipline colour decoratively for something that is not that discipline.

**Type.** One display face and one text face. Display is a tight, tall-x-height grotesque at weight 800 with `-.015em` tracking, used for page titles (44px), the cover (60px), statements (30px), and oversized numerals (52px). Text is a neutral humanist sans at 14px/1.6. The **eyebrow** is the system's signature: 10–11px, weight 700, uppercase, tracked to `.22em` (and `.3em` on the cover). It always sits directly above the headline, and never below.

**Corners are square. All of them.** Cards, chips, image frames, meters, buttons — 0px radius throughout. The one place anything is rounded is nowhere. This is the fastest way to make new work look wrong: round a corner.

**Cards.** A card is a flat white (`#FFFFFF`) rectangle on cream, or `#12263F` on navy, with a 1px `#E5DECF` hairline border and a **4px coloured rule across its top edge** — blue for ordinary cards, red for the one action flagged as highest fiscal exposure, a discipline colour for a discipline card. Inner padding 24px. **No shadows, no gradients, no tints inside the card.** The top rule is the only decoration a card gets.

**Rules and dividers.** A 2px navy rule sits under the page eyebrow block and above tabular data. A 1px `#E5DECF` hairline separates rows, columns and footers. Rules do the work that shadows would do elsewhere.

**Imagery.** Documentary photography of real GUSD students and classrooms — a dance studio mid-warm-up, a ceramics wheel, an audio booth, a green-screen shoot, a theatre tech table, an eighth-grade perspective-drawing critique. Almost every subject is shot **from behind or in profile, working** — nobody poses, nobody makes eye contact with the camera. The colour is warm and unfiltered: fluorescent classroom light, wood, cream walls, no grade applied, no duotone, no grain. Photographs are placed as hard-edged rectangles, full-bleed or column-width, with no rounding, no border, and no overlay gradient. The one non-photographic image is the cover artwork (`assets/cover-artwork.png`), a painterly impasto composition around the district seal — **this image is AI-generated and should be treated as placeholder if the district commissions real cover art.**

**Layout.** 816×1056px page, 64px margins, 688px live area, 28px gutter. Content sits in one, two, or three columns; the two-column action grid is the workhorse. Page furniture is fixed: eyebrow at the top margin, running foot on the bottom margin with the section name left and the folio right. Nothing floats or overlaps.

**Transparency and blur: none.** The print system has no translucency. On-screen surfaces may use `rgba(255,255,255,.16)` for hairlines on navy and `rgba(255,255,255,.08)` for a selected nav row — nothing more, and never a backdrop blur.

**Motion (screen only).** 120/180/280ms with `cubic-bezier(.2,0,0,1)`. Colour and background-colour transitions only. No fades on page load, no slide-ins, no bounce, no spring, no parallax. If an interaction needs to be noticed, it changes colour.

**Hover and press (screen only).** Hover lightens the surface (`rgba(255,255,255,.05)` on navy) or darkens the ink (`--text-link` → `--text-link-hover`, blue to navy). Links carry a 35%-opacity blue underline that goes solid navy on hover. Press darkens rather than scales — nothing in this system ever shrinks, lifts, or grows on click.

**Shadows.** The publication has none. Two exist for screen use only, both faint and both warm-neutral: `--shadow-card` for a page floating on a workspace, `--shadow-raised` for the page preview in the UI kit. A card inside a layout gets a hairline border, not a shadow.

---

## Iconography

**There is no icon set in the source, and none has been invented.** The 20-page publication contains exactly zero icons: no glyph font, no SVG sprite, no PNG icon set, no illustration library. Meaning is carried entirely by type, colour, rules and photography — a discipline is identified by its colour bar and its name, an action's cost by a coloured word, a phase by a letterspaced label.

What stands in for iconography:

- **The five-colour discipline spine.** A flush row of five equal bars — pink, teal, purple, orange, gold — 14px tall, edge to edge. This is the closest thing the brand has to a mark besides the seal, and it opens and closes the book.
- **The district seal** (`assets/vapa-seal.png`) — a circular badge with sunrise-over-hills and the ring text "GLENDALE UNIFIED SCHOOL DISTRICT · VISUAL AND PERFORMING ARTS." Extracted from the PDF at 800×800. It appears only twice, small, in the top-left of the cover and back cover, always beside the two-line district wordmark set as an eyebrow. It is never enlarged, never recoloured, never used as a watermark.
- **Unicode punctuation as marks.** The middle dot `·`, the em dash `—`, and the en dash `–` carry structure. Bullet lists use a 6×6px solid blue square, not a glyph.
- **Bare numerals.** Actions are numbered `01`–`24`; directions are a single 120px letter `A` / `B` / `C`.

**If a future screen genuinely needs icons,** use a square-cornered, 1.5px-stroke outline set (Lucide is the closest match to the system's flat, unornamented character) at 16 or 20px, in `--text-muted` or `--gusd-blue`. Load it from CDN and note the addition. Do not add filled icons, duotone icons, or emoji.

---

## Index

### Root
- `styles.css` — the single global entry point; imports every token file. Consumers link this.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills front matter for use outside this project.
- `thumbnail.html` — the system's homepage tile.

### `tokens/`
`fonts.css` (webfont imports + substitution notice) · `colors.css` (brand, discipline, status, neutral, semantic) · `typography.css` (families, weights, display/text scales, tracking) · `spacing.css` (scale, page geometry, radii, rule weights) · `elevation.css` (screen-only shadows and motion) · `base.css` (body, link and selection defaults).

### `components/`
Eleven components across three directories. The inventory is drawn from what the publication actually defines; `Button` is the sole intentional addition (see below).

| Component | Directory | What it is |
| --- | --- | --- |
| `Eyebrow` | `publication/` | Letterspaced all-caps section marker, blue on cream or gold on navy |
| `DisciplineBar` | `publication/` | The five-colour spine, exported alongside `Eyebrow` |
| `PageHeading` | `publication/` | Eyebrow + display headline + lead, at three levels |
| `ActionCard` | `publication/` | A numbered action: phase, title, steps, impact, funding, outcome |
| `Callout` | `publication/` | Tinted supporting panel (funding sources, partner landscape) |
| `CalloutItem` | `publication/` | Term-and-definition item inside a `Callout` |
| `DisciplineCard` | `publication/` | One discipline as a photo card under its colour rule |
| `StatFigure` | `data/` | Oversized coloured numeral with caption |
| `StatRow` | `data/` | Hairline-divided row of `StatFigure`s |
| `ProgressMeter` | `data/` | Labelled count bar for "where the work sits" |
| `ImpactTag` | `data/` | Low / medium / high budget-impact marker plus funding note |
| `ImpactBar` | `data/` | Proportional stacked bar summarising all impacts |
| `Button` | `controls/` | Square-cornered action button |

**Intentional additions.** `Button` has no counterpart in the source — the source is print and contains no controls. It exists because any on-screen recreation needs one, and it is built strictly from the print system's own rules (square corners, flat fill, colour-only hover). Treat it as a screen affordance, not a brand element.

### `ui_kits/strategic-plan/`
A nine-page click-through recreation of the publication: cover, vision, the five disciplines, the plan at a glance, a strategic-direction divider, two action spreads, the implementation roadmap, and the back cover. See its own `README.md`.

### `guidelines/`
Eighteen specimen cards feeding the Design System tab, grouped **Brand**, **Colors**, **Type**, **Spacing**.

### `assets/`
`vapa-seal.png` (district seal) · `cover-artwork.png` (painterly cover image — AI-generated, treat as placeholder) · `discipline-{dance,media-arts,music,theatre,visual-arts}.png` · `photo-{classroom,ensemble,studio,workshop}.png`. Full-resolution originals of every extracted image are in `source/img/`.

---

## Known substitutions

**Fonts.** The PDF was printed from Chrome, which subsets and anonymises embedded fonts; the licensed originals cannot be recovered from the file. Measured average advance width is ~0.47em across display and text weights, indicating a tight, tall-x-height grotesque. **Archivo 800** stands in for display and **Inter** for text — both close to the printed specimen, both free. If GUSD supplies the real font files, drop them into `assets/` , replace the `@import` in `tokens/fonts.css` with `@font-face` rules, and delete `guidelines/type-substitution.html`.

**Cover artwork.** `assets/cover-artwork.png` is AI-generated imagery from the source document, not a commissioned illustration. It is included because it is what the publication uses, but it should not be treated as a permanent brand asset.

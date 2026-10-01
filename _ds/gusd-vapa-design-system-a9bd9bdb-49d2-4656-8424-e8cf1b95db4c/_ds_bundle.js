/* @ds-bundle: {"format":4,"namespace":"GUSDVAPADesignSystem_a9bd9b","components":[{"name":"Button","sourcePath":"components/controls/Button.jsx"},{"name":"ImpactTag","sourcePath":"components/data/ImpactTag.jsx"},{"name":"ImpactBar","sourcePath":"components/data/ImpactTag.jsx"},{"name":"ProgressMeter","sourcePath":"components/data/ProgressMeter.jsx"},{"name":"StatFigure","sourcePath":"components/data/StatFigure.jsx"},{"name":"StatRow","sourcePath":"components/data/StatFigure.jsx"},{"name":"ActionCard","sourcePath":"components/publication/ActionCard.jsx"},{"name":"Callout","sourcePath":"components/publication/Callout.jsx"},{"name":"CalloutItem","sourcePath":"components/publication/Callout.jsx"},{"name":"DisciplineCard","sourcePath":"components/publication/DisciplineCard.jsx"},{"name":"Eyebrow","sourcePath":"components/publication/Eyebrow.jsx"},{"name":"DisciplineBar","sourcePath":"components/publication/Eyebrow.jsx"},{"name":"PageHeading","sourcePath":"components/publication/PageHeading.jsx"}],"sourceHashes":{"components/controls/Button.jsx":"937e38b27ad8","components/data/ImpactTag.jsx":"bcbcdd2f232f","components/data/ProgressMeter.jsx":"f3aaa32d6f2e","components/data/StatFigure.jsx":"f9c5501b0b79","components/publication/ActionCard.jsx":"027561ef5b0b","components/publication/Callout.jsx":"e5293ca50dfa","components/publication/DisciplineCard.jsx":"c3418c3bc528","components/publication/Eyebrow.jsx":"ac0f1a2b05e2","components/publication/PageHeading.jsx":"3be06aef6b4f","ui_kits/strategic-plan/PublicationPage.jsx":"079953d4a155","ui_kits/strategic-plan/PublicationPage.standalone.jsx":"e5623bbd0a4f","ui_kits/strategic-plan/Screens.jsx":"87e25e42b8dc","ui_kits/strategic-plan/Screens.standalone.jsx":"761b0398ce1c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GUSDVAPADesignSystem_a9bd9b = window.GUSDVAPADesignSystem_a9bd9b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/controls/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Square-cornered button in the publication's ink/blue palette.
   The printed plan has no buttons; this exists for on-screen surfaces
   (the arts site, request forms) built from these tokens. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  as = 'button',
  href,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 14px' : size === 'lg' ? '15px 26px' : '11px 20px';
  const base = {
    font: size === 'sm' ? '600 12px/1 var(--font-display)' : '700 13px/1 var(--font-display)',
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    padding: pad,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .45 : 1,
    transition: 'background var(--motion-fast) linear,color var(--motion-fast) linear,border-color var(--motion-fast) linear',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    textDecoration: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--gusd-navy)',
      color: 'var(--gusd-white)'
    },
    accent: {
      background: 'var(--gusd-blue)',
      color: 'var(--gusd-white)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--gusd-navy)',
      borderColor: 'var(--gusd-navy)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gusd-blue)',
      borderColor: 'transparent'
    },
    onDark: {
      background: 'var(--vapa-visual-arts)',
      color: 'var(--gusd-navy)'
    }
  };
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: as === 'a' ? undefined : disabled,
    style: {
      ...base,
      ...(variants[variant] || variants.primary)
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/ImpactTag.jsx
try { (() => {
/* LOW / MEDIUM / HIGH budget-impact marker used on every action card. */
function ImpactTag({
  level = 'low',
  note,
  children
}) {
  const map = {
    low: 'var(--impact-low)',
    medium: 'var(--impact-medium)',
    high: 'var(--impact-high)'
  };
  const color = map[level] || map.low;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      borderTop: `var(--rule-heavy) solid ${color}`,
      paddingTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color
    }
  }, children || `${level} impact`), note && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, note));
}

/* Proportional stacked bar — the plan's "16 Low / 6 Med / 2 High" graphic. */
function ImpactBar({
  low = 0,
  medium = 0,
  high = 0,
  height = 34
}) {
  const seg = [['low', low, 'var(--impact-low)'], ['medium', medium, 'var(--impact-medium)'], ['high', high, 'var(--impact-high)']];
  const total = low + medium + high || 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height,
      width: '100%'
    }
  }, seg.filter(s => s[1] > 0).map(([k, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: v / total,
      background: c,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--type-label)',
      letterSpacing: '.01em',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }
  }, v / total > .12 ? `${v} ${k === 'medium' ? 'Med' : k === 'low' ? 'Low' : 'High'}` : v)));
}
Object.assign(__ds_scope, { ImpactTag, ImpactBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ImpactTag.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressMeter.jsx
try { (() => {
/* Labelled count bar — "A · Administration & Fiscal ... 5". */
function ProgressMeter({
  label,
  value,
  max = 24,
  tone = 'blue'
}) {
  const map = {
    blue: 'var(--gusd-blue)',
    green: 'var(--gusd-green)',
    amber: 'var(--gusd-amber)',
    purple: 'var(--vapa-music)'
  };
  const color = map[tone] || map.blue;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 13px/1 var(--font-display)',
      color
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: 'var(--neutral-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${Math.min(100, value / max * 100)}%`,
      background: color
    }
  })));
}
Object.assign(__ds_scope, { ProgressMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressMeter.jsx", error: String((e && e.message) || e) }); }

// components/data/StatFigure.jsx
try { (() => {
/* Oversized coloured numeral over a small label — the "24 / 6 / 3 / 5" row. */
function StatFigure({
  value,
  label,
  tone = 'blue',
  size = 'md'
}) {
  const map = {
    blue: 'var(--gusd-blue)',
    green: 'var(--gusd-green)',
    amber: 'var(--gusd-amber)',
    purple: 'var(--vapa-music)',
    navy: 'var(--gusd-navy)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-figure)',
      fontSize: size === 'sm' ? 38 : undefined,
      letterSpacing: 'var(--tracking-display)',
      color: map[tone] || map.blue
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, label));
}

/* A row of StatFigures separated by hairline rules, as printed. */
function StatRow({
  children
}) {
  const items = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length},1fr)`,
      borderTop: '2px solid var(--border-rule-strong)',
      borderBottom: '1px solid var(--border-rule)'
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 'var(--space-6) var(--space-5)',
      borderLeft: i ? '1px solid var(--border-rule)' : 'none'
    }
  }, c)));
}
Object.assign(__ds_scope, { StatFigure, StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatFigure.jsx", error: String((e && e.message) || e) }); }

// components/publication/ActionCard.jsx
try { (() => {
/* The plan's workhorse: a numbered action with steps, budget impact and outcome. */
function ActionCard({
  number,
  phase,
  title,
  steps = [],
  impact = 'low',
  impactLabel,
  funding,
  outcome,
  flag
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-rule)',
      borderTop: '2px solid var(--gusd-navy)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gusd-navy)'
    }
  }, "Action ", number, flag && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--impact-high)'
    }
  }, " \xB7 ", flag)), phase && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, phase)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '700 19px/1.22 var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, title), steps.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '10px 1fr',
      gap: 'var(--space-3)',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      marginTop: 8,
      background: 'var(--gusd-blue)'
    }
  }), /*#__PURE__*/React.createElement("span", null, s)))), /*#__PURE__*/React.createElement(__ds_scope.ImpactTag, {
    level: impact,
    note: funding
  }, impactLabel), outcome && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-heading)'
    }
  }, "Outcome \xB7"), " ", outcome));
}
Object.assign(__ds_scope, { ActionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/publication/ActionCard.jsx", error: String((e && e.message) || e) }); }

// components/publication/Callout.jsx
try { (() => {
/* Tinted panel for supporting lists — "Where the money comes from",
   "Partner landscape", strengths / challenges. */
function Callout({
  eyebrow,
  title,
  children,
  tone = 'panel',
  columns = 1
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: dark ? 'var(--surface-panel-dark)' : 'var(--surface-panel)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow-wide)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-eyebrow-on-dark)' : 'var(--text-eyebrow)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '700 17px/1.3 var(--font-display)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns},1fr)`,
      gap: 'var(--space-5)'
    }
  }, children));
}
function CalloutItem({
  term,
  children,
  tone = 'panel'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, term), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: dark ? 'var(--text-body-on-dark)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout, CalloutItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/publication/Callout.jsx", error: String((e && e.message) || e) }); }

// components/publication/DisciplineCard.jsx
try { (() => {
const DISCIPLINES = {
  dance: '--vapa-dance',
  'media-arts': '--vapa-media-arts',
  music: '--vapa-music',
  theatre: '--vapa-theatre',
  'visual-arts': '--vapa-visual-arts'
};

/* Photo card topped by its discipline's colour rule. */
function DisciplineCard({
  discipline = 'dance',
  name,
  image,
  caption,
  tone = 'dark'
}) {
  const color = `var(${DISCIPLINES[discipline] || DISCIPLINES.dance})`;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--rule-accent)',
      background: color
    }
  }), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '4/3',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 15px/1.2 var(--font-display)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, name), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: dark ? 'var(--text-body-on-dark)' : 'var(--text-muted)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { DisciplineCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/publication/DisciplineCard.jsx", error: String((e && e.message) || e) }); }

// components/publication/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The plan's signature section marker: letterspaced caps, optionally
   followed by the five-discipline colour bar. */
function Eyebrow({
  children,
  tone = 'blue',
  rule = false,
  size = 'md',
  style,
  ...rest
}) {
  const color = tone === 'gold' ? 'var(--text-eyebrow-on-dark)' : tone === 'muted' ? 'var(--text-muted)' : tone === 'navy' ? 'var(--gusd-navy)' : 'var(--text-eyebrow)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: size === 'sm' ? 'var(--type-eyebrow-sm)' : 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow-wide)',
      textTransform: 'uppercase',
      color
    }
  }, children), rule && /*#__PURE__*/React.createElement(DisciplineBar, null));
}
function DisciplineBar({
  width = 132,
  height = 5,
  gap = 6
}) {
  const colors = ['--vapa-dance', '--vapa-media-arts', '--vapa-music', '--vapa-theatre', '--vapa-visual-arts'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      width
    }
  }, colors.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      flex: 1,
      height,
      background: `var(${c})`
    }
  })));
}
Object.assign(__ds_scope, { Eyebrow, DisciplineBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/publication/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/publication/PageHeading.jsx
try { (() => {
/* Eyebrow + display headline + optional lead paragraph — the opening block
   of nearly every page in the plan. */
function PageHeading({
  eyebrow,
  children,
  lead,
  level = 2,
  tone = 'light',
  rule = false,
  align = 'left'
}) {
  const dark = tone === 'dark';
  const size = level === 1 ? 'var(--type-display-1)' : level === 3 ? 'var(--type-display-3)' : 'var(--type-display-2)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'gold' : 'blue',
    rule: rule
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: size,
      letterSpacing: 'var(--tracking-display)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, children), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure)',
      font: 'var(--type-lead)',
      color: dark ? 'var(--text-body-on-dark)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, lead));
}
Object.assign(__ds_scope, { PageHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/publication/PageHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/strategic-plan/PublicationPage.jsx
try { (() => {
/* Page frame + shared furniture for the GUSD VAPA Strategic Plan publication.
   The plan is authored on a US Letter page at 96dpi: 816 x 1056px, 64px margins. */
const pageBase = {
  width: 'var(--page-width)',
  height: 'var(--page-height)',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  flex: '0 0 auto',
  fontFamily: 'var(--font-text)',
  boxShadow: 'var(--shadow-raised)'
};
function PublicationPage({
  tone = 'light',
  children,
  bleed = false,
  label
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": label,
    style: {
      ...pageBase,
      background: dark ? 'var(--surface-page-dark)' : 'var(--surface-page)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
      padding: bleed ? 0 : 'var(--page-margin)'
    }
  }, children);
}

/* The five-discipline spine that opens and closes the book */
function Spine({
  height = 14
}) {
  const c = ['--vapa-dance', '--vapa-media-arts', '--vapa-music', '--vapa-theatre', '--vapa-visual-arts'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height
    }
  }, c.map(v => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      flex: 1,
      background: `var(${v})`
    }
  })));
}
function Seal({
  size = 34,
  tone = 'dark'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/vapa-seal.png",
    alt: "Glendale Unified School District, Visual and Performing Arts",
    width: size,
    height: size,
    style: {
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-heading)',
      lineHeight: 1.6
    }
  }, "Glendale Unified", /*#__PURE__*/React.createElement("br", null), "School District"));
}

/* Running foot used on every interior page */
function PageFoot({
  n,
  section,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--page-margin)',
      right: 'var(--page-margin)',
      bottom: 34,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 'var(--space-3)',
      borderTop: `1px solid ${dark ? 'var(--border-rule-dark)' : 'var(--border-rule)'}`,
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-body-on-dark)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, section), /*#__PURE__*/React.createElement("span", null, n));
}
function Rule({
  tone = 'light',
  weight = 2,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: weight,
      background: tone === 'dark' ? 'var(--border-rule-dark)' : 'var(--border-rule-strong)',
      ...style
    }
  });
}
Object.assign(window, {
  PublicationPage,
  Spine,
  Seal,
  PageFoot,
  Rule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/strategic-plan/PublicationPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/strategic-plan/PublicationPage.standalone.jsx
try { (() => {
/* Page frame + shared furniture for the GUSD VAPA Strategic Plan publication.
   The plan is authored on a US Letter page at 96dpi: 816 x 1056px, 64px margins. */
const pageBase = {
  width: 'var(--page-width)',
  height: 'var(--page-height)',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  flex: '0 0 auto',
  fontFamily: 'var(--font-text)',
  boxShadow: 'var(--shadow-raised)'
};
function PublicationPage({
  tone = 'light',
  children,
  bleed = false,
  label
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": label,
    style: {
      ...pageBase,
      background: dark ? 'var(--surface-page-dark)' : 'var(--surface-page)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
      padding: bleed ? 0 : 'var(--page-margin)'
    }
  }, children);
}

/* The five-discipline spine that opens and closes the book */
function Spine({
  height = 14
}) {
  const c = ['--vapa-dance', '--vapa-media-arts', '--vapa-music', '--vapa-theatre', '--vapa-visual-arts'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height
    }
  }, c.map(v => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      flex: 1,
      background: `var(${v})`
    }
  })));
}
function Seal({
  size = 34,
  tone = 'dark'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.vapaSeal,
    alt: "Glendale Unified School District, Visual and Performing Arts",
    width: size,
    height: size,
    style: {
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-heading)',
      lineHeight: 1.6
    }
  }, "Glendale Unified", /*#__PURE__*/React.createElement("br", null), "School District"));
}

/* Running foot used on every interior page */
function PageFoot({
  n,
  section,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--page-margin)',
      right: 'var(--page-margin)',
      bottom: 34,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 'var(--space-3)',
      borderTop: `1px solid ${dark ? 'var(--border-rule-dark)' : 'var(--border-rule)'}`,
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-body-on-dark)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, section), /*#__PURE__*/React.createElement("span", null, n));
}
function Rule({
  tone = 'light',
  weight = 2,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: weight,
      background: tone === 'dark' ? 'var(--border-rule-dark)' : 'var(--border-rule-strong)',
      ...style
    }
  });
}
Object.assign(window, {
  PublicationPage,
  Spine,
  Seal,
  PageFoot,
  Rule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/strategic-plan/PublicationPage.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/strategic-plan/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.GUSDVAPADesignSystem_a9bd9b;
const {
  Eyebrow,
  DisciplineBar,
  PageHeading,
  ActionCard,
  Callout,
  CalloutItem,
  DisciplineCard,
  StatFigure,
  StatRow,
  ProgressMeter,
  ImpactTag,
  ImpactBar
} = DS;

/* ── 01 Cover ─────────────────────────────────────────────── */
function CoverPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    bleed: true,
    label: "01 Cover"
  }, /*#__PURE__*/React.createElement(Spine, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10) var(--page-margin) var(--page-margin)',
      height: 'calc(100% - 14px)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Seal, null), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cover-artwork.png",
    alt: "",
    style: {
      width: '100%',
      height: 330,
      objectFit: 'cover',
      display: 'block',
      marginTop: 'var(--space-8)',
      border: '1px solid var(--border-rule-dark)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, "Five-year strategic plan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      font: 'var(--type-display-1)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-dark)'
    }
  }, "Visual &", /*#__PURE__*/React.createElement("br", null), "Performing Arts"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-rule-dark)',
      margin: 'var(--space-8) 0 var(--space-5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-display-3)',
      color: 'var(--vapa-visual-arts)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "2026\u20132031"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body-on-dark)'
    }
  }, "Preparing Our Students for Their Future!")))));
}

/* ── 02 Vision ────────────────────────────────────────────── */
function VisionPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    label: "02 A vision in motion"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, "A vision in motion"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-8) 0 0',
      font: 'var(--type-statement)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-dark)',
      maxWidth: '19ch',
      textWrap: 'balance'
    }
  }, "Every GUSD student, in every grade, at every school, experiences a world-class arts education \u2014 sequential, equitable, and taught across all five disciplines."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-ensemble.png",
    alt: "",
    style: {
      width: '100%',
      height: 250,
      objectFit: 'cover',
      display: 'block',
      margin: 'var(--space-12) 0 var(--space-10)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      borderTop: '1px solid var(--border-rule-dark)',
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-body-on-dark)',
      textWrap: 'pretty'
    }
  }, "GUSD has sustained a structural commitment to arts education through successive strategic plans. In Spring 2026 a VAPA planning committee of administrators, site leaders, and specialized educators built the roadmap that follows."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-body-on-dark)',
      textWrap: 'pretty'
    }
  }, "This plan deliberately maps arts objectives to Board of Education Priorities and LCAP goals, embedding the arts as a pillar of achievement, engagement, equity, and whole-child development.")), /*#__PURE__*/React.createElement(PageFoot, {
    n: "02",
    section: "Glendale Unified School District",
    tone: "dark"
  }));
}

/* ── 03 The five disciplines ──────────────────────────────── */
const DISCIPLINES = [{
  discipline: 'dance',
  name: 'Dance',
  image: '../../assets/discipline-dance.png'
}, {
  discipline: 'media-arts',
  name: 'Media Arts',
  image: '../../assets/discipline-media-arts.png'
}, {
  discipline: 'music',
  name: 'Music',
  image: '../../assets/discipline-music.png'
}, {
  discipline: 'theatre',
  name: 'Theatre',
  image: '../../assets/discipline-theatre.png'
}, {
  discipline: 'visual-arts',
  name: 'Visual Arts',
  image: '../../assets/discipline-visual-arts.png'
}];
function DisciplinesPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    label: "03 All five disciplines"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    tone: "dark",
    eyebrow: "TK\u201312, all five disciplines",
    lead: "Dance, Media Arts, Music, Theatre, and Visual Arts \u2014 offered sequentially from transitional kindergarten through grade twelve, anchored by a dedicated VAPA magnet elementary school."
  }, "The whole spectrum,", /*#__PURE__*/React.createElement("br", null), "for every student"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--page-gutter)',
      marginTop: 'var(--space-16)'
    }
  }, DISCIPLINES.map(d => /*#__PURE__*/React.createElement(DisciplineCard, _extends({
    key: d.discipline,
    tone: "dark"
  }, d)))), /*#__PURE__*/React.createElement(PageFoot, {
    n: "03",
    section: "The whole spectrum",
    tone: "dark"
  }));
}

/* ── 04 The plan at a glance ──────────────────────────────── */
function GlancePage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    label: "04 The plan at a glance"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    eyebrow: "The plan at a glance"
  }, "Twenty-four actions,", /*#__PURE__*/React.createElement("br", null), "five years, one system"), /*#__PURE__*/React.createElement(Rule, {
    style: {
      margin: 'var(--space-8) 0 0'
    }
  }), /*#__PURE__*/React.createElement(StatRow, null, /*#__PURE__*/React.createElement(StatFigure, {
    value: "24",
    label: "Action items",
    tone: "blue"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "6",
    label: "Goals",
    tone: "green"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "3",
    label: "Strategic directions",
    tone: "amber"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "5",
    label: "Years of delivery",
    tone: "purple"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Where the work sits"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "A \xB7 Administration & Fiscal",
    value: 5,
    max: 11,
    tone: "blue"
  }), /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "B \xB7 Learning & Curriculum",
    value: 11,
    max: 11,
    tone: "green"
  }), /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "C \xB7 Expansion & Partnerships",
    value: 8,
    max: 11,
    tone: "amber"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Budget impact"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ImpactBar, {
    low: 16,
    medium: 6,
    high: 2
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, "Two-thirds of the plan is absorbed by existing staff hours and district systems. Only two actions \u2014 facilities modernization and elementary curriculum adoption \u2014 carry high fiscal exposure."))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-classroom.png",
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 92,
      width: '100%',
      height: 180,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(PageFoot, {
    n: "04",
    section: "At a glance"
  }));
}

/* ── 05 Direction divider ─────────────────────────────────── */
function DirectionPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    label: "05 Strategic direction A"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(PageHeading, {
    tone: "dark",
    eyebrow: "Strategic direction A"
  }, "Program Administration", /*#__PURE__*/React.createElement("br", null), "& Fiscal Infrastructure"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 120px/1 var(--font-display)',
      color: 'var(--vapa-visual-arts)',
      letterSpacing: 'var(--tracking-display)',
      marginTop: -18
    }
  }, "A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--page-gutter)',
      marginTop: 'var(--space-12)'
    }
  }, [['Goal 1', 'Optimize fiscal management and cultivate alternative funding'], ['Goal 2', 'Modernize, sustain, and scale VAPA infrastructure and programming']].map(([g, t]) => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      background: 'var(--surface-panel-dark)',
      borderTop: '4px solid var(--gusd-blue)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, g), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: '800 21px/1.2 var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-dark)',
      textWrap: 'balance'
    }
  }, t)))), /*#__PURE__*/React.createElement(Callout, {
    tone: "dark",
    columns: 3,
    eyebrow: "What this direction delivers"
  }, /*#__PURE__*/React.createElement(CalloutItem, {
    tone: "dark",
    term: "Prop 28 oversight"
  }, "Standardized budget workflows and compliance auditing for every site expenditure plan."), /*#__PURE__*/React.createElement(CalloutItem, {
    tone: "dark",
    term: "Site advisory committees"
  }, "Committee structures active at 100% of schools, guiding School Site Councils."), /*#__PURE__*/React.createElement(CalloutItem, {
    tone: "dark",
    term: "Facilities & instruments"
  }, "District-wide inventory, equity audit, and a capital improvement schedule.")), /*#__PURE__*/React.createElement(PageFoot, {
    n: "05",
    section: "Direction A",
    tone: "dark"
  }));
}

/* ── 06 Actions spread ────────────────────────────────────── */
function ActionsPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    label: "06 Direction A, Goal 1"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    level: 3,
    eyebrow: "Direction A \xB7 Goal 1"
  }, "Optimize fiscal management and cultivate alternative funding for VAPA support"), /*#__PURE__*/React.createElement(Rule, {
    weight: 1,
    style: {
      background: 'var(--border-rule)',
      margin: 'var(--space-6) 0 var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(ActionCard, {
    number: "01",
    phase: "Phase 1",
    title: "Optimize Site Expenditure Plan Development & Compliance Auditing",
    steps: ['Define standardized, compliant budget workflows for VAPA allocations.', 'Integrate plan tracking into existing district systems (e.g., Doc-Tracking).', 'Run professional development seminars and webinars for site administrators on compliant spending.'],
    impact: "low",
    funding: "Development licenses; absorbed by existing administrative systems and central office staff hours.",
    outcome: "Live deployment of a clear digital program planning and accountability system."
  }), /*#__PURE__*/React.createElement(ActionCard, {
    number: "02",
    phase: "Phase 1",
    title: "Expand School-Based AMS (Prop 28) Advisory Committees",
    steps: ['Support Principals in establishing site VAPA advisory committees to guide School Site Councils.', 'Publish resources, orientation materials, and state spending guidelines.', 'Provide orientation sessions for schools on understanding Prop 28 regulations.'],
    impact: "low",
    funding: "Administrative coordination and guidelines development.",
    outcome: "Standardized committee structures active at 100% of school sites, with published agendas and compliant expenditure logs."
  })), /*#__PURE__*/React.createElement(Callout, {
    eyebrow: "Where the money comes from",
    title: "Every action in this plan is funded from one of six existing sources \u2014 no new general fund request.",
    columns: 3
  }, /*#__PURE__*/React.createElement(CalloutItem, {
    term: "Prop 28 / AMS"
  }, "Site expenditure plans covering equipment, materials, extra-hourly pay, and enrichment."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "LCAP & general fund staff hours"
  }, "Central office coordination, course profile work, and professional learning release days."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "Instructional materials"
  }, "Elementary and secondary curriculum adoption and assessment licensing."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "Facilities Master Plan & local bond"
  }, "Venue modernization and capital improvements to arts spaces."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "Title I"
  }, "Blended support for mobile media arts and alternative education enrichment."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "External grants"
  }, "The VAPA Teacher Specialist role and incentive-funded partnership programs.")), /*#__PURE__*/React.createElement(PageFoot, {
    n: "06",
    section: "Direction A \xB7 Goal 1"
  }));
}

/* ── 07 Highest-exposure action ───────────────────────────── */
function HighImpactPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    label: "07 Direction A, Goal 2"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    level: 3,
    eyebrow: "Direction A \xB7 Goal 2"
  }, "Modernize, sustain, and scale VAPA infrastructure and programming"), /*#__PURE__*/React.createElement(Rule, {
    weight: 1,
    style: {
      background: 'var(--border-rule)',
      margin: 'var(--space-6) 0 var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(ActionCard, {
    number: "03",
    phase: "Phase 1",
    title: "Publish Secondary VAPA Course Profiles & Articulation Maps",
    steps: ['Review all secondary master schedules to map core and elective sequences.', 'Publish standardized, user-friendly course profiles and pathways on the GUSD arts site.', 'Deploy student surveys to capture interest trends and identify high-demand disciplines.'],
    impact: "low",
    funding: "Covered by existing general fund / LCAP staff hours.",
    outcome: "100% of middle and high schools carry active, standards-aligned course profiles online; articulation maps completed for UC/CSU \u201Ca\u2013g\u201D pathways."
  }), /*#__PURE__*/React.createElement(ActionCard, {
    number: "04",
    phase: "Phase 1",
    title: "Cultivate Creative Industry & Fine Arts Partnerships for Advanced Courses",
    steps: ['Partner with digital production studios to integrate industry-standard AI literacy, digital asset ethics, and emerging creative tools into media arts profiles.', 'Establish recurring collaborative programs with major fine arts networks — The Music Center, Norton Simon Museum, Glendale Arts.'],
    impact: "medium",
    funding: "Restricted AMS allocations and possible incentive grant funds.",
    outcome: "All advanced secondary media arts profiles incorporate 2026 technical standards and digital ethics; formal agreements with at least 3 major arts organizations."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(ActionCard, {
    number: "05",
    phase: "Phase 1",
    flag: "Highest fiscal exposure in the plan",
    title: "Modernize VAPA Facilities and Upgrade Instructional Assets",
    steps: ['Conduct a comprehensive musical instrument inventory to determine site-by-site equity and replacement needs.', 'Collaborate with Facilities and site administrators to inspect performance venues and schedule improvements.'],
    impact: "high",
    impactLabel: "High impact \xB7 capital",
    funding: "AMS equipment allocations, the Facilities Master Plan, and local bond allocations.",
    outcome: "Verified instrument inventory asset log; approved capital project schedule and paid invoices for facility upgrades."
  })), /*#__PURE__*/React.createElement(PageFoot, {
    n: "07",
    section: "Direction A \xB7 Goal 2"
  }));
}

/* ── 08 Implementation roadmap ────────────────────────────── */
const YEARS = ['26–27', '27–28', '28–29', '29–30', '30–31'];
const ROWS = [['Goal 1 · Fiscal management', 0, 2, '--gusd-blue'], ['Goal 2 · Infrastructure', 0, 3, '--gusd-blue'], ['Goal 3 · Professional learning', 1, 3, '--gusd-green'], ['Goal 4 · Curricula', 0, 5, '--gusd-green'], ['Goal 5 · Outreach', 1, 4, '--vapa-theatre'], ['Goal 6 · Partnerships', 2, 3, '--vapa-theatre']];
function RoadmapPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    label: "08 Implementation roadmap"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    eyebrow: "Implementation roadmap"
  }, "Five years,", /*#__PURE__*/React.createElement("br", null), "three phases"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--page-gutter)',
      marginTop: 'var(--space-10)'
    }
  }, [['Phase 1', 'Years 1–2 · 2026–2028', '16 actions begin', '--gusd-blue'], ['Phase 2A', 'Years 3–4 · 2028–2030', '7 actions', '--gusd-green'], ['Phase 2B', 'Year 5 · 2030–2031', '2 actions', '--vapa-theatre']].map(([p, y, n, c]) => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      background: 'var(--surface-card)',
      borderTop: `4px solid var(${c})`,
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-display-3)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-heading)'
    }
  }, p), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)'
    }
  }, y), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: `var(${c})`,
      marginTop: 'var(--space-3)'
    }
  }, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '210px repeat(5,1fr)',
      gap: 4,
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      paddingBottom: 'var(--space-3)',
      borderBottom: '2px solid var(--border-rule-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", null), YEARS.map(y => /*#__PURE__*/React.createElement("span", {
    key: y,
    style: {
      textAlign: 'center'
    }
  }, y))), ROWS.map(([label, start, span, color]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'grid',
      gridTemplateColumns: '210px repeat(5,1fr)',
      gap: 4,
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid var(--border-rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, label), YEARS.map((y, i) => /*#__PURE__*/React.createElement("span", {
    key: y,
    style: {
      height: 14,
      background: i >= start && i < start + span ? `var(${color})` : 'var(--neutral-100)'
    }
  }))))), /*#__PURE__*/React.createElement(PageFoot, {
    n: "08",
    section: "Implementation roadmap"
  }));
}

/* ── 09 Back cover ────────────────────────────────────────── */
function BackPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    bleed: true,
    label: "09 Back cover"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--page-margin)',
      height: 'calc(100% - 14px)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 48
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-10) 0 0',
      font: 'var(--type-display-2)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-dark)'
    }
  }, "Visual and", /*#__PURE__*/React.createElement("br", null), "Performing Arts"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: 'var(--type-lead)',
      color: 'var(--vapa-visual-arts)'
    }
  }, "Preparing Our Students for Their Future!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      marginTop: 'var(--space-12)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-rule-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "Board of Education"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body-on-dark)',
      marginTop: 'var(--space-4)',
      lineHeight: 1.9
    }
  }, "Kathleen Cross \xB7 President", /*#__PURE__*/React.createElement("br", null), "Telly Tse \xB7 Vice President", /*#__PURE__*/React.createElement("br", null), "Greg Krikorian \xB7 Member", /*#__PURE__*/React.createElement("br", null), "Neda Farid \xB7 Member", /*#__PURE__*/React.createElement("br", null), "Dr. Aileen Dinkjian \xB7 Member")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "District leadership"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body-on-dark)',
      marginTop: 'var(--space-4)',
      lineHeight: 1.9
    }
  }, "Dr. Darneika Watson \xB7 Superintendent of Schools", /*#__PURE__*/React.createElement("br", null), "Dr. Kelly King \xB7 Assistant Superintendent, Education Services", /*#__PURE__*/React.createElement("br", null), "Dr. Emil Ahangarzadeh \xB7 Senior Coordinator, Visual and Performing Arts"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-caption)',
      color: 'var(--text-body-on-dark)',
      maxWidth: '54ch'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-on-dark)'
    }
  }, "Pending approval \xB7"), " This plan was presented to the Board of Education in July of 2026 and will be considered for approval at the August 11, 2026 regular meeting."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-on-dark)',
      textAlign: 'right',
      whiteSpace: 'nowrap'
    }
  }, "223 N. Jackson Street, Glendale, CA 91206", /*#__PURE__*/React.createElement("br", null), "(818) 241-3111 \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.gusd.net/arts",
    style: {
      color: 'var(--vapa-visual-arts)',
      borderBottom: 'none'
    }
  }, "gusd.net/arts")))), /*#__PURE__*/React.createElement(Spine, null));
}
const SCREENS = [{
  id: 'cover',
  name: 'Cover',
  el: CoverPage
}, {
  id: 'vision',
  name: 'Vision',
  el: VisionPage
}, {
  id: 'disciplines',
  name: 'Disciplines',
  el: DisciplinesPage
}, {
  id: 'glance',
  name: 'At a glance',
  el: GlancePage
}, {
  id: 'direction',
  name: 'Direction A',
  el: DirectionPage
}, {
  id: 'actions',
  name: 'Actions 01–02',
  el: ActionsPage
}, {
  id: 'high',
  name: 'Actions 03–05',
  el: HighImpactPage
}, {
  id: 'roadmap',
  name: 'Roadmap',
  el: RoadmapPage
}, {
  id: 'back',
  name: 'Back cover',
  el: BackPage
}];
Object.assign(window, {
  SCREENS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/strategic-plan/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/strategic-plan/Screens.standalone.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.GUSDVAPADesignSystem_a9bd9b;
const {
  Eyebrow,
  DisciplineBar,
  PageHeading,
  ActionCard,
  Callout,
  CalloutItem,
  DisciplineCard,
  StatFigure,
  StatRow,
  ProgressMeter,
  ImpactTag,
  ImpactBar
} = DS;

/* ── 01 Cover ─────────────────────────────────────────────── */
function CoverPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    bleed: true,
    label: "01 Cover"
  }, /*#__PURE__*/React.createElement(Spine, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10) var(--page-margin) var(--page-margin)',
      height: 'calc(100% - 14px)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Seal, null), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.coverArtwork,
    alt: "",
    style: {
      width: '100%',
      height: 330,
      objectFit: 'cover',
      display: 'block',
      marginTop: 'var(--space-8)',
      border: '1px solid var(--border-rule-dark)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, "Five-year strategic plan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      font: 'var(--type-display-1)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-dark)'
    }
  }, "Visual &", /*#__PURE__*/React.createElement("br", null), "Performing Arts"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-rule-dark)',
      margin: 'var(--space-8) 0 var(--space-5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-display-3)',
      color: 'var(--vapa-visual-arts)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "2026\u20132031"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body-on-dark)'
    }
  }, "Preparing Our Students for Their Future!")))));
}

/* ── 02 Vision ────────────────────────────────────────────── */
function VisionPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    label: "02 A vision in motion"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, "A vision in motion"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-8) 0 0',
      font: 'var(--type-statement)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-dark)',
      maxWidth: '19ch',
      textWrap: 'balance'
    }
  }, "Every GUSD student, in every grade, at every school, experiences a world-class arts education \u2014 sequential, equitable, and taught across all five disciplines."), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.photoEnsemble,
    alt: "",
    style: {
      width: '100%',
      height: 250,
      objectFit: 'cover',
      display: 'block',
      margin: 'var(--space-12) 0 var(--space-10)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      borderTop: '1px solid var(--border-rule-dark)',
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-body-on-dark)',
      textWrap: 'pretty'
    }
  }, "GUSD has sustained a structural commitment to arts education through successive strategic plans. In Spring 2026 a VAPA planning committee of administrators, site leaders, and specialized educators built the roadmap that follows."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-body-on-dark)',
      textWrap: 'pretty'
    }
  }, "This plan deliberately maps arts objectives to Board of Education Priorities and LCAP goals, embedding the arts as a pillar of achievement, engagement, equity, and whole-child development.")), /*#__PURE__*/React.createElement(PageFoot, {
    n: "02",
    section: "Glendale Unified School District",
    tone: "dark"
  }));
}

/* ── 03 The five disciplines ──────────────────────────────── */
const DISCIPLINES = [{
  discipline: 'dance',
  name: 'Dance',
  image: window.__resources.discDance
}, {
  discipline: 'media-arts',
  name: 'Media Arts',
  image: window.__resources.discMedia
}, {
  discipline: 'music',
  name: 'Music',
  image: window.__resources.discMusic
}, {
  discipline: 'theatre',
  name: 'Theatre',
  image: window.__resources.discTheatre
}, {
  discipline: 'visual-arts',
  name: 'Visual Arts',
  image: window.__resources.discVisual
}];
function DisciplinesPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    label: "03 All five disciplines"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    tone: "dark",
    eyebrow: "TK\u201312, all five disciplines",
    lead: "Dance, Media Arts, Music, Theatre, and Visual Arts \u2014 offered sequentially from transitional kindergarten through grade twelve, anchored by a dedicated VAPA magnet elementary school."
  }, "The whole spectrum,", /*#__PURE__*/React.createElement("br", null), "for every student"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--page-gutter)',
      marginTop: 'var(--space-16)'
    }
  }, DISCIPLINES.map(d => /*#__PURE__*/React.createElement(DisciplineCard, _extends({
    key: d.discipline,
    tone: "dark"
  }, d)))), /*#__PURE__*/React.createElement(PageFoot, {
    n: "03",
    section: "The whole spectrum",
    tone: "dark"
  }));
}

/* ── 04 The plan at a glance ──────────────────────────────── */
function GlancePage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    label: "04 The plan at a glance"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    eyebrow: "The plan at a glance"
  }, "Twenty-four actions,", /*#__PURE__*/React.createElement("br", null), "five years, one system"), /*#__PURE__*/React.createElement(Rule, {
    style: {
      margin: 'var(--space-8) 0 0'
    }
  }), /*#__PURE__*/React.createElement(StatRow, null, /*#__PURE__*/React.createElement(StatFigure, {
    value: "24",
    label: "Action items",
    tone: "blue"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "6",
    label: "Goals",
    tone: "green"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "3",
    label: "Strategic directions",
    tone: "amber"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "5",
    label: "Years of delivery",
    tone: "purple"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Where the work sits"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "A \xB7 Administration & Fiscal",
    value: 5,
    max: 11,
    tone: "blue"
  }), /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "B \xB7 Learning & Curriculum",
    value: 11,
    max: 11,
    tone: "green"
  }), /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "C \xB7 Expansion & Partnerships",
    value: 8,
    max: 11,
    tone: "amber"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Budget impact"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ImpactBar, {
    low: 16,
    medium: 6,
    high: 2
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, "Two-thirds of the plan is absorbed by existing staff hours and district systems. Only two actions \u2014 facilities modernization and elementary curriculum adoption \u2014 carry high fiscal exposure."))), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.photoClassroom,
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 92,
      width: '100%',
      height: 180,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(PageFoot, {
    n: "04",
    section: "At a glance"
  }));
}

/* ── 05 Direction divider ─────────────────────────────────── */
function DirectionPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    label: "05 Strategic direction A"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(PageHeading, {
    tone: "dark",
    eyebrow: "Strategic direction A"
  }, "Program Administration", /*#__PURE__*/React.createElement("br", null), "& Fiscal Infrastructure"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 120px/1 var(--font-display)',
      color: 'var(--vapa-visual-arts)',
      letterSpacing: 'var(--tracking-display)',
      marginTop: -18
    }
  }, "A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--page-gutter)',
      marginTop: 'var(--space-12)'
    }
  }, [['Goal 1', 'Optimize fiscal management and cultivate alternative funding'], ['Goal 2', 'Modernize, sustain, and scale VAPA infrastructure and programming']].map(([g, t]) => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      background: 'var(--surface-panel-dark)',
      borderTop: '4px solid var(--gusd-blue)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, g), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: '800 21px/1.2 var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-dark)',
      textWrap: 'balance'
    }
  }, t)))), /*#__PURE__*/React.createElement(Callout, {
    tone: "dark",
    columns: 3,
    eyebrow: "What this direction delivers"
  }, /*#__PURE__*/React.createElement(CalloutItem, {
    tone: "dark",
    term: "Prop 28 oversight"
  }, "Standardized budget workflows and compliance auditing for every site expenditure plan."), /*#__PURE__*/React.createElement(CalloutItem, {
    tone: "dark",
    term: "Site advisory committees"
  }, "Committee structures active at 100% of schools, guiding School Site Councils."), /*#__PURE__*/React.createElement(CalloutItem, {
    tone: "dark",
    term: "Facilities & instruments"
  }, "District-wide inventory, equity audit, and a capital improvement schedule.")), /*#__PURE__*/React.createElement(PageFoot, {
    n: "05",
    section: "Direction A",
    tone: "dark"
  }));
}

/* ── 06 Actions spread ────────────────────────────────────── */
function ActionsPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    label: "06 Direction A, Goal 1"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    level: 3,
    eyebrow: "Direction A \xB7 Goal 1"
  }, "Optimize fiscal management and cultivate alternative funding for VAPA support"), /*#__PURE__*/React.createElement(Rule, {
    weight: 1,
    style: {
      background: 'var(--border-rule)',
      margin: 'var(--space-6) 0 var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(ActionCard, {
    number: "01",
    phase: "Phase 1",
    title: "Optimize Site Expenditure Plan Development & Compliance Auditing",
    steps: ['Define standardized, compliant budget workflows for VAPA allocations.', 'Integrate plan tracking into existing district systems (e.g., Doc-Tracking).', 'Run professional development seminars and webinars for site administrators on compliant spending.'],
    impact: "low",
    funding: "Development licenses; absorbed by existing administrative systems and central office staff hours.",
    outcome: "Live deployment of a clear digital program planning and accountability system."
  }), /*#__PURE__*/React.createElement(ActionCard, {
    number: "02",
    phase: "Phase 1",
    title: "Expand School-Based AMS (Prop 28) Advisory Committees",
    steps: ['Support Principals in establishing site VAPA advisory committees to guide School Site Councils.', 'Publish resources, orientation materials, and state spending guidelines.', 'Provide orientation sessions for schools on understanding Prop 28 regulations.'],
    impact: "low",
    funding: "Administrative coordination and guidelines development.",
    outcome: "Standardized committee structures active at 100% of school sites, with published agendas and compliant expenditure logs."
  })), /*#__PURE__*/React.createElement(Callout, {
    eyebrow: "Where the money comes from",
    title: "Every action in this plan is funded from one of six existing sources \u2014 no new general fund request.",
    columns: 3
  }, /*#__PURE__*/React.createElement(CalloutItem, {
    term: "Prop 28 / AMS"
  }, "Site expenditure plans covering equipment, materials, extra-hourly pay, and enrichment."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "LCAP & general fund staff hours"
  }, "Central office coordination, course profile work, and professional learning release days."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "Instructional materials"
  }, "Elementary and secondary curriculum adoption and assessment licensing."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "Facilities Master Plan & local bond"
  }, "Venue modernization and capital improvements to arts spaces."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "Title I"
  }, "Blended support for mobile media arts and alternative education enrichment."), /*#__PURE__*/React.createElement(CalloutItem, {
    term: "External grants"
  }, "The VAPA Teacher Specialist role and incentive-funded partnership programs.")), /*#__PURE__*/React.createElement(PageFoot, {
    n: "06",
    section: "Direction A \xB7 Goal 1"
  }));
}

/* ── 07 Highest-exposure action ───────────────────────────── */
function HighImpactPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    label: "07 Direction A, Goal 2"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    level: 3,
    eyebrow: "Direction A \xB7 Goal 2"
  }, "Modernize, sustain, and scale VAPA infrastructure and programming"), /*#__PURE__*/React.createElement(Rule, {
    weight: 1,
    style: {
      background: 'var(--border-rule)',
      margin: 'var(--space-6) 0 var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(ActionCard, {
    number: "03",
    phase: "Phase 1",
    title: "Publish Secondary VAPA Course Profiles & Articulation Maps",
    steps: ['Review all secondary master schedules to map core and elective sequences.', 'Publish standardized, user-friendly course profiles and pathways on the GUSD arts site.', 'Deploy student surveys to capture interest trends and identify high-demand disciplines.'],
    impact: "low",
    funding: "Covered by existing general fund / LCAP staff hours.",
    outcome: "100% of middle and high schools carry active, standards-aligned course profiles online; articulation maps completed for UC/CSU \u201Ca\u2013g\u201D pathways."
  }), /*#__PURE__*/React.createElement(ActionCard, {
    number: "04",
    phase: "Phase 1",
    title: "Cultivate Creative Industry & Fine Arts Partnerships for Advanced Courses",
    steps: ['Partner with digital production studios to integrate industry-standard AI literacy, digital asset ethics, and emerging creative tools into media arts profiles.', 'Establish recurring collaborative programs with major fine arts networks — The Music Center, Norton Simon Museum, Glendale Arts.'],
    impact: "medium",
    funding: "Restricted AMS allocations and possible incentive grant funds.",
    outcome: "All advanced secondary media arts profiles incorporate 2026 technical standards and digital ethics; formal agreements with at least 3 major arts organizations."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(ActionCard, {
    number: "05",
    phase: "Phase 1",
    flag: "Highest fiscal exposure in the plan",
    title: "Modernize VAPA Facilities and Upgrade Instructional Assets",
    steps: ['Conduct a comprehensive musical instrument inventory to determine site-by-site equity and replacement needs.', 'Collaborate with Facilities and site administrators to inspect performance venues and schedule improvements.'],
    impact: "high",
    impactLabel: "High impact \xB7 capital",
    funding: "AMS equipment allocations, the Facilities Master Plan, and local bond allocations.",
    outcome: "Verified instrument inventory asset log; approved capital project schedule and paid invoices for facility upgrades."
  })), /*#__PURE__*/React.createElement(PageFoot, {
    n: "07",
    section: "Direction A \xB7 Goal 2"
  }));
}

/* ── 08 Implementation roadmap ────────────────────────────── */
const YEARS = ['26–27', '27–28', '28–29', '29–30', '30–31'];
const ROWS = [['Goal 1 · Fiscal management', 0, 2, '--gusd-blue'], ['Goal 2 · Infrastructure', 0, 3, '--gusd-blue'], ['Goal 3 · Professional learning', 1, 3, '--gusd-green'], ['Goal 4 · Curricula', 0, 5, '--gusd-green'], ['Goal 5 · Outreach', 1, 4, '--vapa-theatre'], ['Goal 6 · Partnerships', 2, 3, '--vapa-theatre']];
function RoadmapPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    label: "08 Implementation roadmap"
  }, /*#__PURE__*/React.createElement(PageHeading, {
    eyebrow: "Implementation roadmap"
  }, "Five years,", /*#__PURE__*/React.createElement("br", null), "three phases"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--page-gutter)',
      marginTop: 'var(--space-10)'
    }
  }, [['Phase 1', 'Years 1–2 · 2026–2028', '16 actions begin', '--gusd-blue'], ['Phase 2A', 'Years 3–4 · 2028–2030', '7 actions', '--gusd-green'], ['Phase 2B', 'Year 5 · 2030–2031', '2 actions', '--vapa-theatre']].map(([p, y, n, c]) => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      background: 'var(--surface-card)',
      borderTop: `4px solid var(${c})`,
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-display-3)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-heading)'
    }
  }, p), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)'
    }
  }, y), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: `var(${c})`,
      marginTop: 'var(--space-3)'
    }
  }, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '210px repeat(5,1fr)',
      gap: 4,
      font: 'var(--type-eyebrow-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      paddingBottom: 'var(--space-3)',
      borderBottom: '2px solid var(--border-rule-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", null), YEARS.map(y => /*#__PURE__*/React.createElement("span", {
    key: y,
    style: {
      textAlign: 'center'
    }
  }, y))), ROWS.map(([label, start, span, color]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'grid',
      gridTemplateColumns: '210px repeat(5,1fr)',
      gap: 4,
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid var(--border-rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, label), YEARS.map((y, i) => /*#__PURE__*/React.createElement("span", {
    key: y,
    style: {
      height: 14,
      background: i >= start && i < start + span ? `var(${color})` : 'var(--neutral-100)'
    }
  }))))), /*#__PURE__*/React.createElement(PageFoot, {
    n: "08",
    section: "Implementation roadmap"
  }));
}

/* ── 09 Back cover ────────────────────────────────────────── */
function BackPage() {
  return /*#__PURE__*/React.createElement(PublicationPage, {
    tone: "dark",
    bleed: true,
    label: "09 Back cover"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--page-margin)',
      height: 'calc(100% - 14px)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 48
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-10) 0 0',
      font: 'var(--type-display-2)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-dark)'
    }
  }, "Visual and", /*#__PURE__*/React.createElement("br", null), "Performing Arts"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: 'var(--type-lead)',
      color: 'var(--vapa-visual-arts)'
    }
  }, "Preparing Our Students for Their Future!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      marginTop: 'var(--space-12)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-rule-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "Board of Education"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body-on-dark)',
      marginTop: 'var(--space-4)',
      lineHeight: 1.9
    }
  }, "Kathleen Cross \xB7 President", /*#__PURE__*/React.createElement("br", null), "Telly Tse \xB7 Vice President", /*#__PURE__*/React.createElement("br", null), "Greg Krikorian \xB7 Member", /*#__PURE__*/React.createElement("br", null), "Neda Farid \xB7 Member", /*#__PURE__*/React.createElement("br", null), "Dr. Aileen Dinkjian \xB7 Member")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "District leadership"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body-on-dark)',
      marginTop: 'var(--space-4)',
      lineHeight: 1.9
    }
  }, "Dr. Darneika Watson \xB7 Superintendent of Schools", /*#__PURE__*/React.createElement("br", null), "Dr. Kelly King \xB7 Assistant Superintendent, Education Services", /*#__PURE__*/React.createElement("br", null), "Dr. Emil Ahangarzadeh \xB7 Senior Coordinator, Visual and Performing Arts"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-caption)',
      color: 'var(--text-body-on-dark)',
      maxWidth: '54ch'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-on-dark)'
    }
  }, "Pending approval \xB7"), " This plan was presented to the Board of Education in July of 2026 and will be considered for approval at the August 11, 2026 regular meeting."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-on-dark)',
      textAlign: 'right',
      whiteSpace: 'nowrap'
    }
  }, "223 N. Jackson Street, Glendale, CA 91206", /*#__PURE__*/React.createElement("br", null), "(818) 241-3111 \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.gusd.net/arts",
    style: {
      color: 'var(--vapa-visual-arts)',
      borderBottom: 'none'
    }
  }, "gusd.net/arts")))), /*#__PURE__*/React.createElement(Spine, null));
}
const SCREENS = [{
  id: 'cover',
  name: 'Cover',
  el: CoverPage
}, {
  id: 'vision',
  name: 'Vision',
  el: VisionPage
}, {
  id: 'disciplines',
  name: 'Disciplines',
  el: DisciplinesPage
}, {
  id: 'glance',
  name: 'At a glance',
  el: GlancePage
}, {
  id: 'direction',
  name: 'Direction A',
  el: DirectionPage
}, {
  id: 'actions',
  name: 'Actions 01–02',
  el: ActionsPage
}, {
  id: 'high',
  name: 'Actions 03–05',
  el: HighImpactPage
}, {
  id: 'roadmap',
  name: 'Roadmap',
  el: RoadmapPage
}, {
  id: 'back',
  name: 'Back cover',
  el: BackPage
}];
Object.assign(window, {
  SCREENS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/strategic-plan/Screens.standalone.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ImpactTag = __ds_scope.ImpactTag;

__ds_ns.ImpactBar = __ds_scope.ImpactBar;

__ds_ns.ProgressMeter = __ds_scope.ProgressMeter;

__ds_ns.StatFigure = __ds_scope.StatFigure;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.ActionCard = __ds_scope.ActionCard;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.CalloutItem = __ds_scope.CalloutItem;

__ds_ns.DisciplineCard = __ds_scope.DisciplineCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.DisciplineBar = __ds_scope.DisciplineBar;

__ds_ns.PageHeading = __ds_scope.PageHeading;

})();

/* @ds-bundle: {"format":3,"namespace":"HemaPortfolioDesignSystem_e1585a","components":[{"name":"Marquee","sourcePath":"components/brand/Marquee.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/brand/Marquee.jsx":"1ae8e6d68c06","components/brand/StatBlock.jsx":"95713bcc0138","components/core/Badge.jsx":"4cab7531180e","components/core/Button.jsx":"9d1908c151ad","components/core/Card.jsx":"f11c9936bbcc","components/core/Eyebrow.jsx":"a20ee2e8fafd","components/core/Input.jsx":"58c954950644","ui_kits/portfolio/Hero.jsx":"1f676d03a42a","ui_kits/portfolio/Services.jsx":"941ee8511353","ui_kits/portfolio/Work.jsx":"5dbb1c236904"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HemaPortfolioDesignSystem_e1585a = window.HemaPortfolioDesignSystem_e1585a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marquee — infinite horizontal scroll of italic-serif phrases separated
 * by a brass ✦. Set `items` to the phrase list. Pure CSS animation.
 */
function Marquee({
  items = [],
  speed = 22,
  style = {},
  ...rest
}) {
  const loop = [...items, ...items];
  const animName = 'hema-marquee-scroll';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border)',
      overflow: 'hidden',
      padding: '1.3rem 0',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes ${animName}{from{transform:translateX(0)}to{transform:translateX(-50%)}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: '3rem',
      animation: `${animName} ${speed}s linear infinite`
    }
  }, loop.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3rem',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.1rem',
      color: 'var(--text-body)'
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brass-bright)',
      fontStyle: 'normal'
    }
  }, "\u2726")))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — a big serif metric over a small label. The proof-point unit
 * for results ("+38%", "120+", "3.2×").
 */
function StatBlock({
  value,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
      lineHeight: 1,
      color: 'var(--brass-bright)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.6rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-snug)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / Tag — small pill label. Tone: 'brass' (tinted accent),
 * 'neutral' (hairline), 'solid' (brass fill).
 */
function Badge({
  tone = 'neutral',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    brass: {
      background: 'var(--brass-wash)',
      color: 'var(--brass-bright)',
      border: '1px solid transparent'
    },
    neutral: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    solid: {
      background: 'linear-gradient(135deg, var(--brass-bright), var(--brass))',
      color: 'var(--on-accent)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.02em',
      padding: '0.32rem 0.75rem',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — pill-shaped action control.
 * Variants: primary (brass gradient), ghost (hairline), link (text).
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.6rem 1.2rem',
      fontSize: '0.8rem'
    },
    md: {
      padding: '0.95rem 1.9rem',
      fontSize: '0.9rem'
    },
    lg: {
      padding: '1.15rem 2.3rem',
      fontSize: '1rem'
    }
  };
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    borderRadius: 'var(--radius-pill)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    textDecoration: 'none',
    border: '1px solid transparent',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, var(--brass-bright), var(--brass))',
      color: 'var(--on-accent)'
    },
    ghost: {
      background: 'transparent',
      borderColor: 'var(--border)',
      color: 'var(--text-strong)'
    },
    link: {
      background: 'transparent',
      color: 'var(--text-accent)',
      padding: 0,
      borderRadius: 0
    }
  };
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (variant === 'primary') {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--glow-brass)';
      } else if (variant === 'ghost') {
        e.currentTarget.style.borderColor = 'var(--accent-hover)';
        e.currentTarget.style.color = 'var(--accent-hover)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      if (variant === 'ghost') {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--text-strong)';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — raised surface with hairline border. Optional `interactive`
 * lifts and brightens its border on hover.
 */
function Card({
  interactive = false,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = '';
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = '';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — uppercase, tracked section label inside a hairline pill,
 * with an optional brass dot. The signature section marker.
 */
function Eyebrow({
  dot = true,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      padding: '0.5rem 1rem',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--brass-bright)'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field on a raised surface with a hairline border that
 * turns brass on focus. Pass `as="textarea"` for multiline.
 */
function Input({
  as = 'input',
  label,
  style = {},
  ...rest
}) {
  const Comp = as;
  const field = /*#__PURE__*/React.createElement(Comp, _extends({
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '0.85rem 1.1rem',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out)',
      resize: as === 'textarea' ? 'vertical' : undefined,
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--accent)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border)';
    }
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '0.5rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
const {
  Eyebrow,
  Button
} = window.HemaPortfolioDesignSystem_e1585a;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,155,92,0.18), transparent 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(to right, rgba(243,239,232,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,239,232,0.045) 1px, transparent 1px)',
      backgroundSize: '54px 54px',
      WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 25%, black 0%, transparent 85%)',
      maskImage: 'radial-gradient(ellipse 90% 70% at 50% 25%, black 0%, transparent 85%)'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2.5rem 6vw 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      color: 'var(--ink)'
    }
  }, "Hema", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.66rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-dim)',
      borderLeft: '1px solid var(--line)',
      paddingLeft: '0.6rem'
    }
  }, "Designer")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: '2.2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontSize: '0.85rem',
      color: 'var(--ink-dim)'
    }
  }, ['Work', 'Services', 'Process', 'Contact'].map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + l.toLowerCase(),
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l.toLowerCase());
    },
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, l)))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    as: "a",
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('contact');
    }
  }, "Book a call")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '3rem 6vw'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Conversion-Focused Funnels & Websites"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.8rem, 7.4vw, 6.4rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.01em',
      maxWidth: 1100,
      margin: '2rem 0 0',
      color: 'var(--ink)'
    }
  }, "Funnels & websites that don't just look good. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--brass-bright)'
    }
  }, "They convert.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.8rem',
      maxWidth: 560,
      fontSize: '1.05rem',
      lineHeight: 1.65,
      color: 'var(--ink-dim)'
    }
  }, "Conversion-focused funnels and premium websites designed to build trust, generate qualified leads, and help your business grow."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.6rem',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "a",
    href: "#work",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('work');
    }
  }, "See the work \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    as: "a",
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('contact');
    }
  }, "Start a project"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Services.jsx
try { (() => {
const {
  Eyebrow,
  Card,
  Input,
  Button
} = window.HemaPortfolioDesignSystem_e1585a;
const SERVICES = [{
  n: '01',
  t: 'Conversion funnels',
  d: 'Opt-in, sales, and booking funnels mapped to your customer journey and built to convert.'
}, {
  n: '02',
  t: 'Premium websites',
  d: 'Editorial, trust-first business sites that make premium brands feel premium.'
}, {
  n: '03',
  t: 'GHL & automation',
  d: 'GoHighLevel builds with nurture sequences, pipelines, and booking baked in.'
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      position: 'relative',
      padding: '6rem 6vw',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: false
  }, "Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
      color: 'var(--ink)',
      margin: '1rem auto 0',
      maxWidth: 540,
      lineHeight: 1.1
    }
  }, "Three ways I help businesses ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--brass-bright)'
    }
  }, "grow."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.4rem'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      color: 'var(--brass)'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: 'var(--ink)',
      margin: 0
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      margin: 0
    }
  }, s.d)))));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: 'relative',
      padding: '6rem 6vw 7rem',
      borderTop: '1px solid var(--line)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 60% 80% at 50% 120%, rgba(200,155,92,0.16), transparent 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 560,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Start a project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2rem, 4vw, 3.2rem)',
      color: 'var(--ink)',
      margin: '1.5rem 0 1rem',
      lineHeight: 1.05
    }
  }, "Let's build something that ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--brass-bright)'
    }
  }, "converts.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: '1.05rem',
      lineHeight: 1.65,
      margin: '0 0 2.4rem'
    }
  }, "Tell me about your business and what you're trying to grow. I'll reply within two business days."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--brass-bright)',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.6rem'
    }
  }, "Thanks \u2014 talk soon. \u2726") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@business.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    as: "textarea",
    label: "Project",
    rows: 4,
    placeholder: "What are you trying to grow?"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    style: {
      marginTop: '0.5rem',
      alignSelf: 'flex-start'
    }
  }, "Send it \u2192"))));
}
window.Services = Services;
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
const {
  Eyebrow,
  Card,
  Badge,
  StatBlock,
  Marquee
} = window.HemaPortfolioDesignSystem_e1585a;
const WORK = [{
  tag: 'Funnel build',
  title: 'Coaching launch funnel',
  desc: 'A 4-step funnel that lifted booked discovery calls by a third.',
  stat: '+38% calls'
}, {
  tag: 'Website',
  title: 'Premium clinic site',
  desc: 'Trust-first redesign for a private practice — refined, calm, fast.',
  stat: '2.1× leads'
}, {
  tag: 'GHL',
  title: 'Agency lead engine',
  desc: 'GoHighLevel build with automated nurture and booking.',
  stat: '−44% CPL'
}, {
  tag: 'Funnel build',
  title: 'Course waitlist',
  desc: 'Pre-launch waitlist funnel with social proof gating.',
  stat: '4,200 signups'
}];
function Work() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      position: 'relative',
      padding: '6rem 6vw',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1.5rem',
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: false
  }, "Selected Work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
      color: 'var(--ink)',
      margin: '1rem 0 0',
      maxWidth: 520,
      lineHeight: 1.1
    }
  }, "Projects built to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--brass-bright)'
    }
  }, "earn the click."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '3rem'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "120+",
    label: "Funnels shipped"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "6yrs",
    label: "Designing for conversion"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.4rem'
    }
  }, WORK.map(w => /*#__PURE__*/React.createElement(Card, {
    key: w.title,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.9rem',
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brass"
  }, w.tag), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, w.stat)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: 'var(--ink)',
      margin: '0.4rem 0 0'
    }
  }, w.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      margin: 0,
      flex: 1
    }
  }, w.desc), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--brass-bright)',
      fontSize: '0.85rem',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "View case study \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4rem',
      marginLeft: '-6vw',
      marginRight: '-6vw'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    items: ['High-converting landing pages', 'GHL & funnel builds', 'Premium business websites', 'Lead-gen focused design']
  })));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

})();

# Hema — Portfolio Design System

A personal design system for **Hema**, an independent designer specializing in **conversion-focused funnels and premium business websites**. The brand voice is confident and outcome-driven ("They convert."); the visual world is dark, warm, and editorial — near-black surfaces, a single brass accent, an elegant serif paired with a clean geometric sans.

**Source:** Derived from the provided "Hero — Variation 3" portfolio landing page (inline HTML/CSS). No codebase, Figma, or font binaries were supplied — fonts are loaded from Google Fonts (see Caveats).

---

## CONTENT FUNDAMENTALS
- **Voice:** Confident, plainspoken, results-first. Leads with the outcome, not the craft: "Funnels & websites that don't just look good. *They convert.*"
- **Person:** Speaks as **I** (the designer) to **you** (the business owner). "I'll reply within two business days." "Tell me about your business."
- **Casing:** Sentence case everywhere except eyebrow labels, which are UPPERCASE with wide tracking ("CONVERSION-FOCUSED FUNNELS & WEBSITES").
- **Sentence shape:** Short. Often a confident statement followed by a punchy fragment set in italic serif — that fragment is the emotional payload ("*They convert.*", "*earn the click.*", "*grow.*").
- **Punctuation/symbols:** Arrows on CTAs ("See the work →", "Send it →"). A brass four-point star ✦ is the brand glyph (marquee separators, footer, success states). No emoji.
- **Proof:** Concrete numbers carry weight — "+38% calls", "120+ funnels shipped", "−44% CPL". Claims are always backed by a metric.
- **Vibe:** Premium boutique-of-one. Trustworthy, calm, a little editorial — never loud or salesy despite being conversion-focused.

## VISUAL FOUNDATIONS
- **Color:** Near-black warm-cool background (`#0c0c10`), bone text (`#f3efe8`), muted lavender-grey secondary (`#a8a3b0`). A single accent: **brass**, ranging `#9a7438 → #c89b5c → #e3b878`. Brass appears as a 135° gradient on primary buttons, as bright italic accent text, and as 14%-opacity tinted washes. No second hue — restraint is the rule.
- **Type:** **Instrument Serif** for display (400 only; italic = the accent), **Plus Jakarta Sans** 400–700 for UI/body, **JetBrains Mono** for small technical labels (numbers, token names). Display headlines run large and tight (line-height 1.04, tracking -0.01em); body is generous (1.65).
- **Backgrounds:** Atmospheric, not flat. A radial brass glow blooms from the top center; a faint 54px grid is masked with a radial gradient so it fades at the edges. Contact section mirrors the glow from the bottom. No photography, no illustration in the source.
- **Spacing/layout:** `6vw` page gutters, centered hero, generous vertical rhythm (6rem section padding). Sections divided by hairline top borders.
- **Radii:** Pill (999px) for all controls, eyebrows, and badges. Cards at 18px. Inputs at 12px.
- **Borders:** Hairlines are the primary structural device — `rgba(243,239,232,0.10)`, brightening to brass on hover/focus. Almost no solid fills besides the brass CTA.
- **Shadows:** Minimal. Cards lift with a soft dark shadow on hover; the primary button casts a brass glow (`0 12px 30px -10px rgba(227,184,120,0.5)`).
- **Hover states:** Primary button translates up 2px + brass glow. Ghost button & cards brighten their hairline to brass. Links shift to bright brass.
- **Press/active:** Subtle — relies on the brass-deep token; no aggressive shrink.
- **Motion:** Smooth and unhurried — `cubic-bezier(0.22,1,0.36,1)`, 0.18–0.45s. The only looping animation is the capability marquee (linear, ~22s). No bounces.
- **Transparency/blur:** Used in washes and masks (grid fade, tinted badges) rather than glassmorphism. No heavy backdrop-blur.
- **Imagery vibe:** Warm, dark, premium. Were photography added, it should be moody and warm-toned to sit with the brass.

## ICONOGRAPHY
The source uses **no icon library**. Iconography is intentionally minimal and typographic:
- The brand glyph is a **brass four-point star ✦** (Unicode U+2726), used as marquee separators, in the footer, and in success states.
- **Arrows (→)** are plain Unicode characters appended to CTA copy, not SVG icons.
- Small **brass dots** (6px circles) mark eyebrow labels.
No icon font, sprite, or SVG set was provided. If a richer icon set becomes necessary, substitute a thin-stroke CDN set (e.g. **Lucide**, 1.5px stroke) to match the delicate hairline aesthetic — and flag the substitution. Emoji are never used.

---

## INDEX
**Root**
- `styles.css` — global entry (import this one file). `@import`s all token files.
- `tokens/` — `colors.css`, `typography.css`, `layout.css` (spacing/radii/shadows/motion), `fonts.css`.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry.

**Components** (`window.HemaPortfolioDesignSystem_e1585a`)
- `components/core/` — **Button**, **Eyebrow**, **Badge**, **Input**
- `components/brand/` — **Card**, **Marquee**, **StatBlock** (Card lives in core/, Marquee & StatBlock in brand/)

**UI Kit**
- `ui_kits/portfolio/` — full interactive one-page portfolio (Hero → Work → Services → Contact). See its `README.md`.

**Foundation cards** (`guidelines/*.card.html`) — render in the Design System tab: Colors (Neutrals, Brass), Type (Display, Body, Eyebrow), Spacing, Brand (Radii & Buttons, Atmosphere).

## CAVEATS
- **Fonts** are loaded from Google Fonts CDN, not local binaries — Instrument Serif, Plus Jakarta Sans, JetBrains Mono are the originals (no substitution), but if you need offline/self-hosted files, provide them and I'll add `@font-face` rules.
- Built from a **single hero page** — Work / Services / Contact sections are extrapolated in-brand, not taken from source. Confirm they match your intent.
- The `_ds_bundle.js` is compiled automatically; component cards and the UI kit depend on it being built (it loads after the first compile).

---
name: Sacred Circle
description: Warm parchment-and-gold Calgary umbrella home for nested healing, kids, and self-discovery paths.
colors:
  parchment: "#ede2d0"
  parchment-2: "#e4d6c0"
  parchment-hi: "#f5eee4"
  cream: "#e8ceb6"
  cream-hi: "#edd6c0"
  gold: "#C9A24B"
  gold-mid: "#9A7428"
  gold-deep: "#7A5C1E"
  ink: "#3D3429"
  muted: "#5F5346"
  olive: "#5C6B4A"
  peach: "#E8C4B0"
  charcoal: "#241C16"
  charcoal-warm: "#2E241C"
  line: "rgba(122,92,30,.32)"
  line-soft: "rgba(122,92,30,.2)"
  accent-rr: "#4A6B4A"
  accent-rr-mid: "#5C7A52"
  accent-astro: "#3D3A6B"
  accent-astro-mid: "#5A5580"
  foot-text: "#D4C4B0"
  foot-muted: "#A89888"
typography:
  display:
    fontFamily: "Cinzel, Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.2em"
    lineHeight: 1.2
  headline:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.65rem, 4.2vw, 2.35rem)"
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.4rem, 3vw, 1.9rem)"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Cinzel, Cormorant Garamond, Georgia, serif"
    fontSize: "0.68rem"
    fontWeight: 500
    letterSpacing: "0.2em"
    lineHeight: 1.2
rounded:
  sharp: "2px"
  full: "9999px"
spacing:
  section: "clamp(2rem, 4.5vw, 2.85rem)"
  shell-gutter: "1rem"
  card-gap: "1.1rem"
  card-pad: "1.4rem"
components:
  button-solid:
    backgroundColor: "{colors.gold-deep}"
    textColor: "{colors.cream-hi}"
    rounded: "{rounded.sharp}"
    padding: "0.65rem 1.45rem"
    height: "44px"
  button-solid-hover:
    backgroundColor: "{colors.gold-mid}"
    textColor: "{colors.cream-hi}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "0.65rem 1.45rem"
    height: "44px"
  button-ghost-hover:
    backgroundColor: "rgba(201,162,75,.14)"
    textColor: "{colors.ink}"
  button-on-dark:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.sharp}"
    padding: "0.65rem 1.45rem"
    height: "44px"
  nav:
    backgroundColor: "rgba(237,226,208,.96)"
    textColor: "{colors.ink}"
    height: "auto"
  card:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "1.4rem 1.25rem 1.45rem"
  card-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
---

# Design System: Sacred Circle

## Overview

**Creative North Star: "The Dragonfly Threshold"**

Sacred Circle is the warm front door — a parchment threshold where visitors pause, orient, and choose a path without pressure. The dragonfly (the live circular brand mark) is the quiet guide at that threshold: light, precise, and welcoming rather than clinical or mystical-hard-sell. Surfaces stay soft and paper-like; gold accents mark readiness and care; nested businesses keep their own voice once you step through.

The system favors calm density over spectacle: a centered shell, nearly sharp corners, thin gold hairlines, and serif headlines that feel handwritten-in-spirit without abandoning clarity. Motion is restrained (state transitions only). Page accents may shift for Rainbow Roots (green) and Astrology Discovery (indigo), but the umbrella default remains deep gold on warm parchment.

**Key Characteristics:**
- Warm parchment field with cream cards and charcoal footer
- Deep gold as the default accent; green/indigo only on nested page overrides
- Cinzel for micro display/eyebrows; Cormorant Garamond for headlines; Jost for UI and body
- Nearly sharp geometry (2px radius) and soft ambient shadows on lift
- Orient-then-deepen: hub cards point into nested pages rather than absorbing them

## Colors

The palette is warm earth and parchment — ink and muted brown for reading, gold for the circle’s voice, with olive and peach as supporting notes.

### Primary
- **Deep Threshold Gold** (`gold-deep` #7A5C1E): Default accent (`--accent`). Eyebrows, primary solid buttons, nav CTA, active nav, card CTAs, link color.
- **Mid Gold** (`gold-mid` #9A7428): Hover partner for solid buttons and borders; brand micro-label color.
- **Bright Gold** (`gold` #C9A24B): On-dark buttons, selection highlight, footer hover accents, ornament endpoints’ sibling glow.

### Secondary
- **Grove Olive** (`olive` #5C6B4A): “Growing / soon” status labels and soft secondary emphasis (not a second brand accent on the hub).
- **Soft Peach** (`peach` #E8C4B0): Supporting warm tint available in the token set for soft highlights.

### Page accent overrides (nested only)
- **Rainbow Roots green** (`accent-rr` #4A6B4A / `accent-rr-mid` #5C7A52): Overrides `--accent` / `--accent-mid` on the Rainbow Roots intro.
- **Astrology indigo** (`accent-astro` #3D3A6B / `accent-astro-mid` #5A5580): Overrides `--accent` / `--accent-mid` on the Astrology Discovery intro.
- Hub and Shadow & Light keep the default gold-deep accent.

### Neutral
- **Parchment** (`parchment` #ede2d0): Page background and sticky nav wash base.
- **Parchment Depth** (`parchment-2` #e4d6c0): Soft band / gradient midtone.
- **Parchment High** (`parchment-hi` #f5eee4): Lighter parchment lift.
- **Cream Card** (`cream` #e8ceb6): Cards, values, how-items, mobile panel.
- **Cream High** (`cream-hi` #edd6c0): Solid button label on gold; foot brand text partner.
- **Ink** (`ink` #3D3429): Primary text and headings.
- **Muted Brown** (`muted` #5F5346): Secondary body and supporting copy on parchment.
- **Charcoal** (`charcoal` #241C16) / **Warm Charcoal** (`charcoal-warm` #2E241C): Footer gradient and on-gold text where needed.
- **Gold Hairline** (`line` rgba(122,92,30,.32) / `line-soft` rgba(122,92,30,.2)): Borders and dividers.
- **Footer Text** (#D4C4B0) / **Footer Muted** (#A89888): Copy on the charcoal footer.

### Named Rules
**The One Accent Door Rule.** On Sacred Circle (hub) and Shadow & Light, the interactive accent is gold-deep. Green and indigo appear only as nested-page `--accent` overrides — never mixed onto the hub as competing brand colors.

## Typography

**Display Font:** Cinzel (with Cormorant Garamond / Georgia fallback)
**Body Font:** Jost (with system-ui fallback)
**Serif Headline Font:** Cormorant Garamond italic/roman (Georgia fallback)

**Character:** Cinzel carries ceremonial micro-labels (uppercase, tracked). Cormorant Garamond carries the human voice of headlines — often italic, medium weight. Jost keeps UI, body, and buttons quiet and contemporary so the serif can breathe.

### Hierarchy
- **Display / eyebrow** (Cinzel, ~0.68–0.84rem, weight 500, letter-spacing ~0.14–0.28em, uppercase): Section eyebrows, hub name, status chips, value titles.
- **Headline** (Cormorant Garamond italic, clamp ~1.65–2.35rem, weight 500, line-height 1.2): Page `h1` / hub line.
- **Title** (Cormorant Garamond, clamp ~1.4–1.9rem, weight 500): Section `h2`.
- **Card title** (Cormorant Garamond italic, ~1.1–1.3rem, weight 500–600): Card and how-item headings.
- **Body** (Jost, 16px, weight 400, line-height 1.6; measure roughly 40–42rem on centered intros): Primary reading text.
- **Label / button** (Jost, ~0.78rem, weight 500, letter-spacing ~0.1–0.12em, uppercase): Buttons and card CTAs.

### Named Rules
**The Serif Speaks Rule.** Human-facing headlines use Cormorant Garamond; Cinzel is reserved for tracked uppercase micro-display — never as long body copy.

## Layout

Content lives in a centered shell: `min(980px, calc(100% - 2rem))`. Sections use vertical padding `clamp(2rem, 4.5vw, 2.85rem)`. Hub rhythm is centered hero → about band → three offering cards → three how-steps → soft booking CTA → charcoal footer.

Grids default to three columns (values, offering cards, how-steps) and collapse to one column at **860px**. The sticky nav swaps to a burger + mobile panel at **720px**. Touch targets aim for ≥44px height on buttons, brand, and nav links.

## Elevation & Depth

Depth is mostly tonal: parchment → parchment-2 bands → cream cards with gold hairline borders. Shadows are soft and rare — ambient lift on interactive cards and the hero logo, not stacked material elevations.

### Shadow Vocabulary
- **Ambient card lift** (`box-shadow: 0 6px 20px rgba(61,52,41,.06)`): Token `--shadow`; used on card hover (and calm lift states).
- **Hero mark glow** (`box-shadow: 0 10px 32px rgba(61,52,41,.14)`): Circular hub logo only.
- **Sticky nav glass:** `rgba(237,226,208,.96)` with `backdrop-filter: blur(10px)` — functional sticky readability, not decorative glassmorphism.

### Named Rules
**The Flat-Until-Invite Rule.** Surfaces rest flat with a hairline border. Shadow appears as a response to hover/focus invitation, not as default chrome.

## Shapes

Nearly sharp everywhere: **2px** radius on buttons, cards, values, how-items, burger, and nav CTA. Circles are reserved for brand marks (logo crop, nav avatar). Ornaments are a diamond (rotated 6px square) between gradient hairlines — the circle’s quiet punctuation.

## Components

### Buttons
- **Shape:** Nearly sharp corners (2px); min-height 44px; uppercase Jost with tracked letters.
- **Primary (solid):** Deep gold background, cream-high label; hover shifts to mid gold.
- **Ghost:** Transparent with mid-gold border and ink label; hover washes light gold tint.
- **On-dark:** Bright gold on charcoal label for dark bands; ghost-dark outlined in gold for footer-adjacent actions.
- **Focus:** Shared `:focus-visible` — 2px mid-gold outline, 3px offset.

### Cards / Containers
- **Corner Style:** 2px
- **Background:** Cream on parchment
- **Border:** Gold hairline (`line`); hover strengthens to mid gold + ambient shadow
- **Internal Padding:** ~1.25–1.4rem
- **Behavior:** Whole-card link on hub offerings; status line (live vs growing) sits above italic title

### Navigation
- Sticky parchment glass bar; serif italic brand wordmark with Cinzel “Calgary” micro-line.
- Desktop links ≥44px tall; current page uses gold-deep.
- Nav CTA mirrors solid button (gold-deep / cream-hi).
- ≤720px: burger (44×44) opens cream mobile panel with full-width 48px rows.

### Eyebrow + ornament
- Cinzel uppercase eyebrow in accent color; centered ornament of two hairlines and a gold diamond under section titles.

### Skip link
- Off-screen until focused; gold-deep field with cream-high text.

## Do's and Don'ts

### Do:
- **Do** keep the hub accent as gold-deep and send visitors into nested pages for detail and booking.
- **Do** use cream cards with gold hairlines and 2px radius for offering, value, and how blocks.
- **Do** honor page accent overrides only on Rainbow Roots (green) and Astrology (indigo).
- **Do** preserve Felicia’s Shadow & Light voice and complementary-care legal stance on nested S&L — do not restyle that page as a different brand.

### Don't:
- **Don't** invent Rainbow Roots hours/ages/location or Astrology practitioner/format details.
- **Don't** fabricate testimonials, metrics, or clinical claims.
- **Don't** replace parchment/gold with cool gray SaaS chrome or heavy glassmorphism.
- **Don't** apply RR green or Astrology indigo accents on the Sacred Circle hub.
- **Don't** touch the legacy `shadownlight` / `shadow-light-reiki` site from this system.

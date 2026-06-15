# Pantaleone Sports Photography — Design System

A dark-first, **gallery-grade** design system for **Julian Pantaleone Sports Photography** — an
artistically creative, modern, heavily interactive portfolio showcasing sports
work from soccer and football to gymnastics and beyond.

The system is built so photographs are the hero: a near-black canvas, restrained
chrome, and the brand's electric blue used as a precise accent. The athletic
identity comes from condensed uppercase display type, wide-tracked mono labels,
and the angular monogram.

---

## Sources

- `uploads/Logo.png` — square monogram **mark** (JP shield in a ring), navy + electric blue on transparent.
- `uploads/ChatGPT Image Jun 11, 2026, 01_46_32 PM.png` — full **wordmark** lockup ("JULIAN PANTALEONE / SPORTS PHOTOGRAPHY").

No codebase, Figma file, or existing site was provided — the system is derived
from the two brand assets above plus the brief. Brand colors were sampled
directly from the logo pixels: **navy `#002060`**, **electric blue `#0070FF`**.

---

## Brand at a glance

- **Name:** Julian Pantaleone Sports Photography
- **What it is:** A photographer's portfolio + booking site, sport-spanning.
- **Personality:** Athletic, kinetic, precise, premium. Stadium-at-night energy.
- **Canvas:** Dark. Photos pop; UI recedes.
- **Signature accent:** Electric blue (`#0070FF`) — used sparingly, as a "floodlight."

---

## CONTENT FUNDAMENTALS

How copy is written across the brand.

- **Voice:** First person, the photographer speaking directly — *"I shoot the
  moments other people miss."* Confident but not boastful; lets the work carry weight.
- **Address:** Talks to the client/athlete as **you** ("Let's get your season on the wall").
- **Tone:** Punchy, kinetic, sport-literate. Short declaratives. Verbs of motion
  (catch, chase, freeze, frame). Avoids flowery art-speak.
- **Casing:** Headlines are **UPPERCASE** (display type). Body is sentence case.
  Eyebrows/labels are uppercase mono with wide tracking (echoing the logo tagline).
- **Numbers & metadata:** Embraced as texture — EXIF strings (`f/2.8 · 1/2000s · ISO 800`),
  shoot counts, dates. Set in mono. They signal craft and authenticity.
- **Emoji:** **None.** Never. The brand reads as professional sports media, not social-casual.
- **Punctuation:** The middot `·` and forward slash `/` are house separators in
  metadata and eyebrows. Em dashes for asides.
- **Example copy:**
  - Hero: *"IN THE FRAME — Sports photography that keeps the energy of the moment."*
  - Section eyebrow: `SELECTED WORK`
  - CTA: *"Book a shoot"*, *"Enter the portfolio"*
  - Caption: *"Last-minute winner · Premier League · 2025"*
  - About: *"I've spent ten seasons on the touchline. Here's what I've caught."*

---

## VISUAL FOUNDATIONS

- **Color:** Dark-first. The canvas is a cool, blue-tinted near-black
  (`--ink-850` / `--ink-900`). Identity blues — `--brand-navy #002060` and
  `--brand-blue #0070FF` — plus a brighter hover blue `#2E8BFF`. Neutrals are a
  cool "ink" ramp. Status colors (success/warning/danger) exist but are quiet.
  **Imagery vibe:** the curated demo set skews moody and high-contrast — floodlit
  pitches, dawn silhouettes, hard side-light — saturated but not garish.
- **Type:** Display = **Saira Condensed** (athletic, condensed, set UPPERCASE,
  weights 600–800). Body/UI = **Archivo** (clean grotesque, 400–700). Data/labels
  = **JetBrains Mono** (EXIF, eyebrows, counts). See *Font substitution* below.
- **Signature slant:** the logo's italic lettering is reproduced with a CSS
  `transform: skewX(-7deg)` utility (`.jp-slant`) on display type, not a true
  italic face — use it for emphasis on hero words.
- **Spacing:** 8px base rhythm; generous section padding (`--section-y` clamps
  4→8rem). Galleries breathe with `--space-4`/`--space-5` gaps.
- **Backgrounds:** Predominantly flat dark surfaces. Full-bleed photography is
  the primary "background" device (hero, section breaks). One radial
  **blue glow** (`--gradient-blue-glow`) used behind the mark / hero focal point.
  One linear brand gradient (navy→blue) used very sparingly. **No** noise,
  no busy patterns, no purple gradients.
- **Imagery treatment:** Photos sit in tight-radius frames (`--radius-photo` = 4px).
  Bottom **scrims** (`--scrim-bottom`) protect overlaid text. Hover = slow zoom
  (scale 1.06) + lift + deeper scrim + an accent rule that wipes in under the title.
- **Animation:** Confident, never bouncy. Primary easing `--ease-out`
  `cubic-bezier(.22,1,.36,1)`. Durations 140ms (UI) → 700ms (image/section reveals).
  Section content fades/rises in on enter. All motion respects
  `prefers-reduced-motion`.
- **Hover states:** Links/icons lighten toward white or shift to `--accent-hover`.
  Photo cards lift (`translateY(-4px)`) and zoom. Pills/buttons brighten.
- **Press states:** Buttons/icon-buttons scale to `--press-scale` (0.97); primary
  CTA darkens to `--accent-press`.
- **Borders & lines:** Hairlines are translucent white (`--border-subtle/-default/-strong`).
  Dark cards get an `--inset-hairline` to define their edge against the canvas.
- **Shadows:** Tuned for dark surfaces — soft, deep, low-opacity blacks
  (`--shadow-md/-lg/-photo`). The accent gets a **blue glow** (`--glow-blue`)
  instead of a colored shadow on hovered/active elements and the primary CTA.
- **Transparency & blur:** "Glass" chrome over imagery — `--glass-bg` +
  `--blur-md` backdrop — for floating controls, category chips over photos, and
  the sticky nav once scrolled.
- **Corner radii:** Small and sharp. Buttons/inputs `--radius-sm` (4px), photos 4px,
  cards `--radius-md` (8px). Pills only for filter chips. Nothing pillowy.
- **Cards:** Dark surface (`--surface-card`), inset hairline, soft shadow on hover.
  No heavy borders, no colored left-accent bars.
- **Layout rules:** Sticky top nav (transparent → glass on scroll). Full-bleed hero.
  Wide content max `--container-full` (1760px) for gallery grids; prose narrower.

---

## ICONOGRAPHY

- **Primary set:** [**Lucide**](https://lucide.dev) via CDN
  (`https://unpkg.com/lucide@latest`) — clean 2px-stroke, rounded line icons that
  match the modern, athletic feel without competing with the angular logo.
  Stroke weight is bumped to ~2.2 to read on the dark canvas.
- **Usage:** Icons are line (stroke), monochrome, inheriting `currentColor`.
  Used in nav, icon buttons, the lightbox (chevrons, X, share, download, heart),
  and metadata affordances. Sizes: 16 (sm) / 19 (md) / 22 (lg) px, matching `IconButton`.
- **No icon font** ships with the system; inline SVG (Lucide) only. **No emoji.**
  **No unicode glyphs** as icons — except the house separators `·` and `/` used
  *typographically* in metadata, not as icons.
- **Flag:** Lucide is a substitution (no original icon set was provided). Swap for a
  bespoke set later if desired; keep the 2px line style.
- **Logo assets:** `assets/logo-mark.png` + `assets/logo-wordmark.png` (full color,
  for **light** backgrounds) and `assets/logo-mark-light.png` +
  `assets/logo-wordmark-light.png` (reversed near-white, for the **dark** canvas —
  generated from the originals, see Caveats).

---

## FONT SUBSTITUTION (action needed)

The logo's custom lettering is bespoke. The system substitutes the closest
high-quality Google Fonts match:

- **Saira Condensed** for display headlines (the athletic condensed look).
- The logo's **italic slant** is reproduced via CSS skew, not an italic font file
  (Google's Saira Condensed italic could not be reliably fetched).

If you have the original brand fonts (or want a true italic face), send them and
we'll replace `assets/fonts/*` and the `@font-face` rules in `tokens/fonts.css`.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point consumers link (import list only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**`tokens/`** (all `@import`ed by `styles.css`)
- `fonts.css` — `@font-face` for Saira Condensed, Archivo, JetBrains Mono.
- `colors.css` — brand core, blue/ink ramps, semantic aliases, scrims, gradients.
- `typography.css` — families, scale, tracking, `.jp-display` / `.jp-slant` / `.jp-eyebrow` utilities.
- `spacing.css` — spacing scale, radii, containers, z-index.
- `effects.css` — shadows, blue glow, blur/glass, motion easing & durations.
- `base.css` — element defaults (the dark canvas, headings, links, scrollbars).

**`guidelines/`** — foundation specimen cards (Design System tab): brand colors,
blue & ink ramps, semantic/surfaces, gradient & scrim, display/body/mono type,
spacing scale, radii, elevation & glow, logo lockups.

**`components/`** — reusable React primitives (namespace
`window.PantaleoneSportsPhotoDesignSystem_6cf8d9`):
- `core/` — **Button**, **IconButton**, **Tag**, **Eyebrow**
- `forms/` — **Input**, **Textarea**
- `gallery/` — **PhotoCard**, **ExifBar**, **CategoryFilter**
- `brand/` — **Logo**

**`ui_kits/website/`** — high-fidelity portfolio website recreation
(`index.html` is the interactive click-through; screens in JSX).

**`assets/`** — logos (full-color + reversed), `fonts/` (woff2), `photos/`
(curated demo sports imagery — placeholder, replace with Julian's real work).

---

## Starting points & templates

- **Button** (Core) and **PhotoCard** (Gallery) are tagged as component starting points.
- **Portfolio Site** (`templates/portfolio-site/`) is the website template consuming
  projects can copy — loads the system via `ds-base.js` (one editable base path).

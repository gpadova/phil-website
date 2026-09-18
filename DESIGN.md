---
name: Pinpoint Financial
description: A banking hall in green marble, travertine and brass — the bank Phil tells you to become.
colors:
  hall: "#0d3629"
  hall-deep: "#082419"
  hall-vein: "#17503f"
  hall-lit: "#1f6a53"
  travertine: "#efe8da"
  travertine-deep: "#e3d9c5"
  travertine-shadow: "#cfc3a9"
  brass: "#c9a24d"
  brass-lit: "#e6c877"
  brass-deep: "#8f6f2a"
  brass-ink: "#46340e"
  ink: "#0b1210"
  ink-soft: "#2e3b35"
  ink-mute: "#5f6c66"
  on-hall: "#f2ecdd"
  on-hall-soft: "#cfe0d5"
  on-hall-mute: "#9db8aa"
typography:
  display:
    fontFamily: "Marcellus, Trajan Pro, Cinzel, serif"
    fontSize: "clamp(2.35rem, 2.35rem + 2.5vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0.035em"
  headline:
    fontFamily: "Marcellus, Trajan Pro, Cinzel, serif"
    fontSize: "clamp(2rem, 1.5rem + 1.5vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.035em"
  title:
    fontFamily: "Marcellus, Trajan Pro, Cinzel, serif"
    fontSize: "clamp(1.1rem, 1rem + 0.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.035em"
  body:
    fontFamily: "Source Serif 4, Charter, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Jost, Futura, Avenir Next, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
  tabular:
    fontFamily: "Jost, Futura, Avenir Next, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontFeature: "tnum, lnum"
rounded:
  none: "0px"
spacing:
  rail: "1px"
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.25rem"
  xl: "3.5rem"
  section: "5rem"
  section-lg: "7rem"
  gutter: "clamp(1rem, 4vw, 3.5rem)"
components:
  button-teller:
    backgroundColor: "{colors.travertine}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
  button-teller-hover:
    backgroundColor: "{colors.travertine}"
    textColor: "{colors.ink}"
  button-teller-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.on-hall}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
  button-teller-quiet-hover:
    backgroundColor: "transparent"
    textColor: "{colors.brass-lit}"
  field:
    backgroundColor: "{colors.travertine}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1rem"
  plate-travertine:
    backgroundColor: "{colors.travertine}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem"
  ledger-rail:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.brass-ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem 0"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-hall-soft}"
    typography: "{typography.label}"
  nav-link-hover:
    backgroundColor: "transparent"
    textColor: "{colors.brass-lit}"
---

# Design System: Pinpoint Financial

## Overview

**Creative North Star: "The Banking Hall"**

The site is a room, not a page. Its walls are banker's-green marble, the counter and every document laid on it are travertine, and every rail, rule and control edge is brushed brass. Brass is the only light source: nothing glows that is not brass, and brass glows only when it is active. Type is carved, not printed — inscriptional Roman capitals engraved into the stone with a lit top edge for the wordmark and every hook; Futura-class geometric capitals for signage, labels, controls and ledger numerals; a readable text serif for the teaching paragraphs. The materials are authored generative SVGs (marble veining, travertine grain, brushed brass), never photographs of stone.

Density is that of a well-run hall: generous section air (5–7rem), one column of teaching prose at a 62ch measure, and documents (tables, forms, panels) presented as travertine plates with a brass edge and a hard cast shadow onto the floor. Nothing is rounded except the one circular vault door. Depth is physical — plates sit on the hall, the vault door swings on a hinge — rather than tonal. The page refuses the category defaults it was built against: no navy hero, no three icon cards, no trust-badge strip, no black-and-neon fintech glow.

**Key Characteristics:**
- Three materials only: green marble (walls), travertine (counter and documents), brass (rails, edges, light).
- Brass emits light; nothing else does. Active state = the brass lights from within.
- Engraved capitals for the wordmark and every headline; the second line of a headline is brass-lit.
- Zero border radius. Plates, controls and fields are hard-cornered; only the vault is round.
- Ledger numerals are tabular, lining, right-aligned; a floor account never posts a negative entry.
- Reduced motion renders everything already settled (vault open, rows printed).

## Colors

Banker's green, warm stone and brass — a three-material palette where each material owns its own text colors.

### Primary
- **Brass** (`brass`): every rule, rail, control edge, focus ring, selection highlight, scrollbar thumb and the Pinpoint compass mark. The one hue that carries light.
- **Lit Brass** (`brass-lit`): the emitted light — the second line of every headline, hover/active brass edges, focus outlines, the glow color at 25–45% alpha.
- **Deep Brass** (`brass-deep`): resting brass edges (outer ring of plates and tellers), dividers on travertine at 25–60% alpha, the scrollbar thumb.
- **Brass Ink** (`brass-ink`): text and labels on brass surfaces and signage labels on travertine.

### Neutral
- **Hall** (`hall`): the marble wall — the base color under the `marble-green.svg` veining. Header, "What it does", and the vault section.
- **Deep Hall** (`hall-deep`): the floor. Page background, theme color, the gap color in every teller and plate ring (so the brass ring reads as set into the wall).
- **Vein Hall** (`hall-vein`): the lighter veined panel band under `marble-green-panel.svg`. Alternates with hall for "Three reasons", "Process" and the footer.
- **Lit Hall** (`hall-lit`): reserved highlight green; declared, unused on the landing page.
- **Travertine** (`travertine`): the counter. Every document plate, every teller control field, every input.
- **Deep Travertine** (`travertine-deep`): the ledger total row at 60% alpha.
- **Travertine Shadow** (`travertine-shadow`): grain shadow tone in the travertine material; declared for the material, not applied as a UI color.
- **Ink** (`ink`): text on travertine and brass; body figures in every table.
- **Soft Ink** (`ink-soft`): teaching paragraphs on travertine.
- **Mute Ink** (`ink-mute`): footnotes, placeholders, disclaimers on travertine.
- **On Hall** (`on-hall`): engraved capitals on the marble.
- **On Hall Soft** (`on-hall-soft`): teaching paragraphs and nav links on the marble.
- **On Hall Mute** (`on-hall-mute`): captions, the footer disclaimer, the phone line on the marble.

### Named Rules
**The One Light Rule.** Brass is the only emissive material. Glows (`rgba(230,200,119,…)` / `rgba(201,162,77,…)`) may only appear on a brass edge in a hover, focus or lit-text state. No green glow, no white glow, no colored shadows.

**The Material Owns Its Ink Rule.** Text on marble uses the `on-hall` family; text on travertine uses the `ink` family; text on brass uses `brass-ink`. Never carry `on-hall` onto travertine or `ink` onto marble.

**The Negative Ink Rule.** The only non-palette color is the ledger's loss red (`#8a2f1c` on down-year index figures; `#b3462e` on an invalid field border). It marks a loss or an error and nothing else, and it never appears on a floor account row.

## Typography

**Display Font:** Marcellus (with Trajan Pro, Cinzel, serif) — loaded via next/font as `--font-marcellus`, weight 400 only.
**Body Font:** Source Serif 4 (with Charter, Georgia, serif) — `--font-source-serif`, optical-size axis enabled.
**Label/Mono Font:** Jost (with Futura, Avenir Next, sans-serif) — `--font-signage`, weight 500 for signage, tabular figures for ledgers.

**Character:** A carved Roman capital for anything that must feel permanent, a geometric sans for anything that must be read at a glance across a hall, and a warm text serif for a man explaining money across a desk. Marcellus is always uppercase and always letterspaced (0.035em); it is never set in sentence case.

### Hierarchy
- **Display** (400, 2.35rem → 3.3rem sm → 4.1rem lg → 4.6rem xl, line-height 1.02): the hero hook only. Two or three lines; the last line is brass-lit. Text shadow gives the lit top edge (`0 1px 0 rgba(255,245,220,.12), 0 -1px 0 rgba(0,0,0,.55), 0 2px 6px rgba(0,0,0,.35)`).
- **Headline** (400, 2rem → 2.6rem sm, up to 3.3rem for the section opener, line-height 0.98): section hooks. Always two lines, second line brass-lit via `.engraved-lit`.
- **Title** (400, 1.1rem–1.5rem, line-height 0.98): plate headings ("How a bank works", "How it goes"), ledger rail terms, process step names, persona names. On travertine or brass use `.engraved-ink` (ink with a white top highlight).
- **Body** (400, 1.125rem base; hero lede 1.15–1.25rem; on-plate prose 1.02rem, line-height 1.55–1.6): teaching paragraphs at `--measure: 62ch`, `text-wrap: pretty`, paragraphs spaced 1.1em.
- **Label** (500, 0.72rem, tracking 0.16em, uppercase): signage — nav links, table headers, form labels, captions, durations, plate sub-heads. Controls use a slightly larger cut (0.8rem, tracking 0.18em).
- **Tabular** (Jost, `tnum lnum`, 14–16px): every ledger and comparison table. Figures right-aligned; the total row is `font-medium` on `travertine-deep/60`.
- **Roman Numerals** (Marcellus, 3.25–5.5rem, `brass-deep`): the three numbered teaching panels; the first panel is set one step larger.

### Named Rules
**The Second Line Lights Rule.** Every headline in the hall is two lines: the first line in `on-hall` (or `ink` on travertine), the second in lit brass. One lit line per headline, never the whole thing.

**The Signage Is Never a Kicker Rule.** Signage labels sit beside or below content (captions, table heads, form labels, durations, plate sub-heads). They do not sit above a headline as an eyebrow.

## Layout

The page is a single column of full-bleed material bands. Each band alternates wall material (`marble` → `marble-panel` → `marble` → `brass` → `marble-panel` → `marble` → `marble-panel` footer) so consecutive sections never share a surface. Inside each band, `.container-hall` sets the room: max-width 82rem, centered, with a fluid gutter of `clamp(1rem, 4vw, 3.5rem)`.

Section grammar is a 12-column grid at `lg` (1024px): the teaching column takes 5 of 12 and the document plate takes 7 (the hero inverts to 7 / 5 with the portrait plate right-aligned at 320–352px). Sections that alternate the document to the left use `order-*` so the headline still reads first on mobile. Below `lg` everything stacks in reading order: hook, prose, control, then the plate. Grid children carry `min-width: 0` so tables never widen the page; wide tables scroll inside `.table-scroll`.

Vertical rhythm: bands pad 5rem (`py-20`) rising to 7rem (`py-28`) at `sm`; the brass persona band pads 4–5rem; the footer 3–3.5rem. Inside a section, a brass rule with 5–7rem of margin separates sub-topics. Headline → prose is 1.5rem; prose → control is 2rem; plate → next plate is 3.5rem. Plates pad 1.75rem (`p-7`) rising to 2.25rem (`p-9`); tables use 1.25–1.75rem horizontal cell padding on edge columns and 0.75rem between figures.

Breakpoints as used: `sm` 640px (type steps up, tables show the hidden "Credited" column, form goes two-column), `md` 768px (nav links appear; footer two-column), `lg` 1024px (12-column section grid), `xl` 1280px (hero display steps to 4.6rem). Below `md` the three nav links are hidden and no menu replaces them; the wordmark and the teller window remain.

## Elevation & Depth

Depth is physical, not tonal. Documents and portraits are travertine plates set into the wall: a 1px brass border, a 1px inner dark line, a 6px gap in the wall color, a 1px `brass-deep` outer ring, and one long soft cast shadow to the floor. Controls use the same construction at a smaller scale (4px gap, 1px ring). The gap color must match the surface the element sits on — `hall-deep` on marble, `travertine` on travertine — so the ring reads as inset rather than floating. Brass light is the only other depth cue: an inset glow inside a control and a soft outer halo, both only in hover/focus.

### Shadow Vocabulary
- **Plate on hall** (`box-shadow: inset 0 0 0 1px rgba(0,0,0,.6), 0 0 0 6px var(--hall-deep), 0 0 0 7px var(--brass-deep), 0 30px 60px -20px rgba(0,0,0,.7)`): portrait plate and any document set directly on marble.
- **Plate on travertine** (`… 0 0 0 6px var(--travertine), 0 0 0 7px var(--brass-deep), 0 30px 60px -24px rgba(0,0,0,.45)`): every travertine document plate (ledger, tables, panels, form). Pair with the `.travertine` material.
- **Teller at rest** (`inset 0 0 0 1px rgba(255,244,214,.35), 0 0 0 4px var(--hall-deep), 0 0 0 5px var(--brass-deep), 0 10px 24px -8px rgba(0,0,0,.6)`): the control edge.
- **Teller lit** (`… 0 0 0 5px var(--brass-lit), 0 0 28px 2px rgba(230,200,119,.35), 0 14px 28px -8px rgba(0,0,0,.6)` plus `::after` `inset 0 0 18px 0 rgba(230,200,119,.45)`): hover / focus-visible.
- **Field focus** (`0 0 0 3px var(--hall-deep), 0 0 0 4px var(--brass), 0 0 20px 0 rgba(230,200,119,.35)`): the input ring lighting.
- **Engraving** (text-shadow, see Typography): the lit top edge on every Marcellus setting.

### Named Rules
**The Set-Into-The-Wall Rule.** Every brass ring has a gap the color of the surface behind it. A ring with the wrong gap color (or none) is floating, and nothing in the hall floats.

**The Lit-When-Touched Rule.** At rest brass is `brass` edged with `brass-deep`. Hover, focus-visible and active swap the ring to `brass-lit` and add the glow; nothing else changes color on interaction.

## Shapes

Hard-cornered throughout: `border-radius: 0` on plates, controls, fields, the scrollbar thumb and every table. The one circle is the vault — a 560px-max round steel frame with a double brass inset ring and a swinging door face. Rules are 1px brass hairlines that fade to `brass-deep` at both ends and terminate in 7px rotated-square chamfers (diamond ends) that sit 3px proud of the line. Panel dividers on travertine are 1px `brass-deep` at 25–60% alpha; the ledger total row and the IUL row use a 2px top border at 60%. Brass surfaces divide with `brass-ink` at 40–50%. Left-edge rules (`border-l` in `brass-ink/40`) mark stacked ledger entries on mobile only. The compass mark (`Mark.tsx`) is an eight-point star in a single brass fill with a stroked center ring — the one icon in the system; arrows are 18×12 square-capped strokes at 1.5px.

## Components

### Buttons — the Teller Window
A brass-framed travertine window with signage lettering. It is the single call to action and the only button style on the page.
- **Shape:** hard-cornered (0px); 1px `brass` border, ring as in Elevation.
- **Primary (`.teller`):** travertine field (`travertine.svg` at 600px tile), `ink` text, Jost 500 at 0.8rem / 0.18em uppercase, padding 0.95rem 1.5rem, 0.75rem gap to a square-capped arrow. In the top rail it is compressed to 0.75rem 1rem (1.5rem sides at `sm`) and its label shortens to "Learn more" on phones.
- **Hover / Focus:** `translateY(-1px)`, ring to `brass-lit`, outer halo and inset glow (420ms, `--ease-out-expo`). Active returns to `translateY(0)`. Disabled: opacity 0.55, no lift.
- **On travertine (`.teller-on-travertine`):** same window, gap color `travertine`, lighter cast shadow.
- **Quiet (`.teller-quiet`):** transparent, `on-hall` text, `brass-deep` border, no ring; hover lights border and text to `brass-lit` with a 24px halo. Used once for "Start with why".

### Cards / Containers — the Plate
Documents laid on the counter.
- **Corner Style:** 0px.
- **Background:** `.travertine` material (`travertine.svg` at 1200px tile) with `ink` text; the portrait plate is `hall-deep` behind the image.
- **Shadow Strategy:** `.plate` on marble, `.plate.plate-on-travertine` for documents (see Elevation).
- **Border:** 1px `brass`.
- **Internal Padding:** 1.75rem → 2.25rem at `sm`; tables run edge-to-edge with a header row (`engraved-ink` title left, signage note right) above a 1px `brass-deep/40` divider and a footnote in `ink-mute` at 0.875rem below.

### Inputs / Fields
- **Style:** travertine field, 1px `brass-deep` border, 0px radius, Source Serif 1.05rem in `ink`, padding 0.85rem 1rem, placeholder `ink-mute`. Labels are signage in `brass-ink` with 0.5rem to the field; optional hints inline in `ink-mute` sentence case. Selects draw a `brass-deep` chevron at right 1rem.
- **Hover:** border to `brass`.
- **Focus:** border `brass-lit`, ring `hall-deep` 3px + `brass` 1px + 20px glow, 300ms.
- **Error:** border and 1px ring `#b3462e`; message 0.875rem in `#8a2f1c` beneath. Submit is a `.teller.teller-on-travertine`; the success state is the same plate with an `engraved-ink` title and serif prose.

### Navigation — the Top Rail
The wordmark in engraved capitals (1.05rem → 1.25rem) at left, three signage links in `on-hall-soft` (hover `brass-lit`) at center from `md`, and the teller window at right. A full-width brass rule with chamfered ends closes the rail. On phones the links are removed; the teller window stays.

### Chips — the Highlight Line
Not a filter chip; the one highlighted line at the end of each teaching panel. Jost 500 at 0.92rem / 0.08em uppercase in `brass-ink`, on `brass/20` with a 2px `brass` bottom border, padding 0.25rem 0.5rem, inline-block.

### The Brass Rail
A full-bleed `.brass` band (`brass.svg`, 100% wide tile) with ink text. Used for the three-entry ledger rail under the hero (engraved-ink terms, `brass-ink` definitions at 30ch) and the persona band. Dividers inside brass are `brass-ink/50`.

### The Ledger
A travertine plate holding a tabular table. Rows print in on scroll: opacity 0, `translateY(6px)`, `blur(2px)` → settled, 520ms each, staggered `calc(var(--i) * 45ms)`. Down-year index figures are loss red; the held rows tint `brass/15` and read "0% · floor holds" in signage; the floor column never shows a negative. Total row: 2px `brass-deep/60` top border, `travertine-deep/60` fill, medium weight.

### The Vault
The signature. A round steel frame (`radial-gradient` of `#051a12 → #0b1210 → #082419`, inset rings `#8f6f2a` 10px and `#c9a24d` 12px) around a blurred travertine illustration (`filter: blur(5px)`, unselectable) and a drawn brass door face (SVG gradients, bolts, engraved "Pinpoint Financial" in Marcellus at `#e6c877`). When 45% of it enters the viewport the door rotates `-62deg` on a hinge at 6% left over 1800ms and the wheel turns −180° over 1600ms, once. Reduced motion renders the door already open.

### Reveal
Every section's content block enters with opacity 0 / `translateY(14px)` → settled over 900ms on `--ease-out-expo`, triggered at 20% intersection (10% for large plates) with a scroll fallback so nothing stays hidden. Reduced motion: no transform, no fade.

## Do's and Don'ts

### Do:
- **Do** build every document, form and portrait as a travertine plate with a brass edge and the correct gap color for its wall.
- **Do** set every headline in Marcellus uppercase with the second line in `.engraved-lit`.
- **Do** use `.signage` (Jost 500, 0.72rem, 0.16em, uppercase) for every label, caption, table head and duration.
- **Do** set figures in `.tabular` (Jost, `tnum lnum`), right-aligned, with the total row on `travertine-deep/60`.
- **Do** alternate wall bands (`marble` / `marble-panel` / `brass`) so no two adjacent sections share a surface.
- **Do** light brass (ring to `brass-lit` + glow, 300–420ms on `--ease-out-expo`) as the only hover/focus response.
- **Do** ship reduced-motion states as already settled: rows printed, door open, content visible.
- **Do** draw materials from `/materials/*.svg`; the authored tiles are the stone, not a placeholder.

### Don't:
- **Don't** round a corner anywhere but the vault; `border-radius: 0` is the house rule.
- **Don't** let any color glow but brass; no green, white or colored halos and no colored drop shadows.
- **Don't** set Marcellus in sentence case or below 400; it is an engraved capital.
- **Don't** put `on-hall` text on travertine or `ink` on marble; each material owns its ink.
- **Don't** place a signage label above a headline as an eyebrow or kicker.
- **Don't** post a negative figure in a floor-account column or use the loss red outside a loss or an error.
- **Don't** add icon cards, trust badges, a navy hero or a stock photograph of marble; the hall is drawn, not stocked.
- **Don't** introduce a second button style; the teller window (and its quiet variant) is the only control.

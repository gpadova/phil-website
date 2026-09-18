# Pinpoint Financial — planwithpinpoint.com

Landing page for Phil Isan, Certified IUL Specialist (Boca Raton, FL). One page, one action: "I'd like to learn more."

- Product truth: `PRODUCT.md` · Client brief: `docs/client-brief.md` · Brand research: `docs/research/brand-audit.md`
- Design system: `DESIGN.md` (world: *The Banking Hall* — banker's-green marble, brass, travertine; the numbers live behind a vault door)
- Surface brief / direction contract: `.impeccable/surfaces/src-app-page-tsx.md`

## Run

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build && pnpm start
pnpm lint     # biome
```

Stack: Next.js 16 (App Router), React 19, Tailwind v4, fonts via `next/font` (Marcellus, Jost, Source Serif 4). Fully static — no backend; the form composes an email to Phil.

## Structure

- `src/app/page.tsx` — the page (hall → three reasons → what it does → who → process → vault/form → footer)
- `src/app/globals.css` — tokens, materials, type roles, teller-window controls, plates, motion
- `src/components/` — `Reveal` (scroll reveal), `Ledger` (floor vs market table), `Vault` (drawn vault door), `LearnMoreForm`, `Mark` (compass)
- `public/materials/*.svg` — authored generative textures (marble, panel marble, travertine, brass)
- `public/brand/phil-portrait.jpg` — shipping portrait (provenance in the JPEG comment)

## Open items (need Phil)

- Booking tool: his Calendly (`calendly.com/phillipisan/30min`) exists but is unconfirmed — not linked yet.
- License number / states for the footer disclaimer; compliance read of the copy.
- DNS handoff from Hostinger; deploy target.
- A commissioned portrait and his own video for a future "learn" section.

# Product

<!-- impeccable:product-schema 1 -->

<!-- Source of truth: docs/client-brief.md (discovery call with Phil, Sep 2026) and the Attio contact record. Facts marked [inferred] were not confirmed by Phil directly; everything else is his own words, paraphrased. -->

## Platform

web

## Stack

Next.js 16 (App Router, React 19, Tailwind v4) — already scaffolded in this repo. Deploy target undecided; the domain (planwithpinpoint.com) is currently on Hostinger and the handoff plan is an open item.

## Users

**Primary:** individuals with serious, discretionary money — lump sums in the $300K–$1M range — who have heard something about "tax-free growth" or "being your own bank" and are looking for someone who can explain it properly. Profiles from Phil's own case work: a 69-year-old real estate investor who buys, renovates and flips apartment complexes; a 42-year-old single-dad business owner with a young son and succession exposure. They arrive from short-form content (Instagram / YouTube-style education) already curious, not cold.

**Situation:** they are researching, usually on a phone, deciding whether this person is credible enough to spend a call with. Their job on the page: "Is this what I think it is, is this guy legit, and how do I learn more?"

**Explicitly not for:** the LinkedIn employee crowd (already in 401(k)s, no discretionary income) and the successful-business-owner-with-a-CFO crowd. The site should not try to persuade skeptics; it should recognize people who are already looking.

## Product Purpose

The single-page site for Pinpoint Financial exists to do one thing: turn someone who is already curious into "That's interesting, I'd like to learn more" — a booked introductory call. It replaces a site Phil describes as bells, whistles and moving parts with no focused message.

Success = a visitor understands, in one focused read, what a properly structured IUL can do for money they already have, and requests a conversation. Secondary success = the page reads as authoritative enough that his short-form content can point to it.

## Positioning

Phil designs and manages properly structured, max-funded, tax-advantaged Indexed Universal Life policies as a financial asset class for people who are alive — the death benefit "comes along for the ride." His claim a neighbor cannot truthfully copy: the three reasons people reject life insurance (I have assets so I don't need it; it gets more expensive every year; it's illiquid) are all artifacts of bad structure, and he builds them the other way.

He is paid once, by the carrier, at placement. No fee to the client, ever. Then he manages the policy and index allocation every year for 20, 30 years or longer.

His stated message philosophy: "The message I want to put out is not what I'm selling — it's information, based on what people want to buy." The page teaches; the call sells.

## Operating Context

- **Working with him** is a multi-meeting process: introduction and expectation-setting → data collection → design (hours to 25+ hours of his work, minutes of the client's) → design review and edits → application (~3 hours his, ~30 minutes client's) → underwriting (typically 1–2 months) → placement. The client can walk away at any point.
- **Conversion mechanism:** a request for an introductory conversation. Primary: a short form that opens an email to phillip@planwithpinpoint.com (Phil replies himself). Secondary: phone 321-652-5057 and his Calendly, https://calendly.com/phillipisan/30min (found on his current funnel by the research agent; confirm he keeps it open).
- **Content plan:** Phil will record long-form video that gets cut into short-form for Instagram. The site should be able to hold a "learn" section (his content pillars) later without redesign.
- Phil is based in Boca Raton, Florida (Attio lists Delray Beach for the duplicate record; his own profiles say Boca Raton). Works virtually. No street address is published anywhere.

## Capabilities and Constraints

- Single landing page first; a resources/learn hub is a later extension.
- **Compliance constraint:** the specific illustration figures (6.59%, $4M, 5% loan rate, $969K, etc.) are carrier illustration outputs. Do not publish them on the page. Use concepts and analogies as the hook; gate the numbers behind the consultation. Where a number is used for a *general* contrast (IRA/401(k) contribution limits, 59½, 10% penalty, the 2008 drawdown-vs-recovery arithmetic, brokerage ~1%/yr fees), it is general-market fact, not a policy illustration, and may be used with a disclaimer.
- Required legal footer: general disclaimer that content is educational, not tax/legal advice; policy illustrations available on request; licensed in Florida [inferred — confirm licensing states and license number with Phil].
- Terminology: "Indexed Universal Life (IUL)", "max-funded", "cash value", "death benefit", "index allocation", "positive arbitrage", "be your own bank". Never "Pinpoint Planning and Strategic Consulting".
- Remove every trace of the legacy entity name.
- No TikTok links. Instagram/Facebook/LinkedIn links are on hold until the old posts are removed [inferred: do not link to socials in v1].
- Fast, mobile-first: the audience arrives from a phone.

## Brand Commitments

- **Name:** Pinpoint Financial. Domain planwithpinpoint.com. Email phillip@planwithpinpoint.com.
- **Person:** Phillip "Phil" Isan, Certified IUL Specialist, President of Pinpoint Financial. He is the brand — his face and his voice carry it.
- **Voice (binding):** blunt, allergic to fluff and jargon, speaks in analogies (the bank, the seed and the harvest, the $1,000 employee, the castle wall). Short sentences. Teaches rather than sells. Never "smoke and bells and whistles."
- **Page format he believes in:** hook → the fix/solution → what it is and its features → call to action.
- **Content models he admires:** Three Dimensional Wealth (Doug Andrew), Laser Financial — educational, plain-spoken, confident.
- Existing brand (see docs/research/brand-audit.md): the live site is a white-label "Virtual Family Office" template under the legacy name; everything Phil controls since Oct 2025 uses "PinPoint Financial" with a royal-blue teardrop compass mark and the tagline "Clarity, Certainty & Control". The compass star is the one durable asset — it is redrawn as a single-color mark in src/components/Mark.tsx. The blue palette and template look are anti-reference.

## Evidence on Hand

- docs/client-brief.md — full paraphrase of the discovery call, including the three objections, the benefit pillars, the two case-study profiles, the process, and his content pillars.
- Attio contact record: name, title, email, LinkedIn, location.
- Photos / logos recovered by the research agent live in docs/research/assets/ (not deployed). The shipping portrait is public/brand/phil-portrait.jpg — his office portrait from the Facebook page, cropped to exclude the baked-in logo; provenance embedded in the JPEG comment.
- **Absent — do not fabricate:** client testimonials, carrier names, credentials beyond "Certified IUL Specialist", years in business, press, exact license numbers, AUM figures, and any published policy illustration numbers.

## Product Principles

1. **One message, one action.** Everything on the page exists to earn "I'd like to learn more." Anything that doesn't is cut.
2. **Teach what they want to buy, not what he sells.** Lead with the problem the visitor already has (taxes on the harvest, locked-up money, market drawdowns), then reveal the instrument.
3. **Phil is the product.** His face, his analogies, his bluntness. No stock-photo handshake energy.
4. **Serious money, serious tone.** Premium and calm, not hype. The audience has $300K+ to place; the page should feel like the office of someone who deserves it.
5. **Concepts on the page, numbers in the room.** Compliance-safe by default; the illustration is the reason to book.

## Accessibility & Inclusion

Audience skews 40–70. Large readable type, strong contrast, generous tap targets, no autoplay motion that competes with reading, respects reduced-motion.

# Brand audit — Phillip Isan / PinPoint Financial

Researched 2026-09-18 via live browser. Companion file: `current-site-copy.md` (verbatim copy of every page). Saved assets are in `docs/research/assets/`.

## TL;DR

- There are **two brands in the wild**. The legacy one — *PinPoint Planning & Strategic Consulting* (light-blue compass wordmark, "Virtual Family Office / CPA partnerships" positioning, planwithpinpoint.com) — and the new one — *PinPoint Financial* (royal-blue `#1338be` teardrop-compass mark, "Certified IUL Specialist / tax-free retirement" positioning, pinpointfinancial.us, Instagram, Facebook, LinkedIn banner since ~Oct 2025). The new brand is used everywhere Phil personally controls; the old brand is still what the main website shows.
- The current website is a white-label template from the Elite Resource Team / biz-diagnostic "Virtual Family Office" program (identical layout, copy and imagery appear on northpointstrategies.com, whose images planwithpinpoint.com hot-links). It says nothing about Phil, nothing about IUL, has no phone/address, and Phil's headshot is **broken** because it is hot-linked from biz-diagnostic.com, which is down.
- Best assets found: a clean 1080x384 transparent PinPoint Financial wordmark, a 1080x1080 half-body portrait of Phil with the stacked logo (Facebook), a 769px square headshot (Instagram), and a 1092px circular headshot (LinkedIn screenshot).

---

## Source 1 — planwithpinpoint.com (current website)

**URL:** https://planwithpinpoint.com · Laravel/Tailwind site (`build/assets/app.*.js`), FontAwesome Pro, no meta description, no analytics tag seen, no favicon beyond `pinpoint-favicon.png`.
**Mirror:** https://pinpointfinancial.us/site/index.html — byte-for-byte the same site with the new logo swapped in, © 2025, plus Privacy/Disclaimer/Terms pages.

### Pages (see current-site-copy.md for full text)

| Page | What's there | Issues |
|---|---|---|
| Home | Video hero (yacht on turquoise sea) with H1 "PinPoint Planning & Strategic Consulting / Your Proactive and Holistic Partners"; three generic paragraphs; 3 stock cards (Advisory Services Team / Proactive Planning Team / Virtual Family Office); VFO diagram JPG; grey CTA band "Maximizing Our Clients' Potential…"; footer | Zero mention of Phil, IUL, life insurance, Boca Raton, or any outcome for the reader. Copy is abstract consultant-speak ("non traditional proactive planning organization & boutique virtual family office"). |
| Financial Planning | Bulleted list of 19 "Advanced Markets Solutions" incl. Private Placement Life Insurance, Premium Finance, Keyman, M&A | Just a list; no explanation, no hierarchy |
| VFO Services (+5 subpages) | Wistia video, 5 service cards each with 1 paragraph of generic copy and "Let's GO! … 30 Minute Discovery Call" CTA | 3 of 5 card images hot-linked from northpointstrategies.com |
| Planning Process | Three embedded PNG infographics (6-step proactive process, "MAP Planning Process", "MAP Review Process") | Text lives inside images (not accessible/SEO); 4 sub-nav links redirect to an external portal that is offline; desktop nav contains literal `https://[BrandURL]` placeholder links |
| Who We Serve | CPA Partnerships (primary audience!) and Business Owners | Speaks to CPAs, not to HNW individuals |
| Team (+3 subpages) | Cards rendered from a JSON feed; Phil listed as "Advanced Planning Lead" with a 3-paragraph bio; "Virtual Family Office" page lists ~100 third-party experts | Phil's headshot and every expert headshot are broken (biz-diagnostic.com unreachable) — cards render as blank grey gradient |
| Contact | Name/Company/Email/Phone/Message form only | No phone, address, map, hours or email in the page body |

### Visual style

- **Layout:** Standard template. Sticky white header with 330px logo left, bold nav right, two pill CTAs. Full-bleed hero with dark overlay + centered white text. Alternating light-grey (`#f3f4f6`) and white sections, 3-column card grids with drop shadows, rounded-lg corners. Reveal-on-scroll fade-ins. Grey "back to top" button.
- **Colors (computed):**
  - Nav text / headings: `#32506b` (slate blue-grey)
  - Buttons & links: `#1479a1` (teal-blue), hover/alt `#145da0`
  - Logo blue: `#41b9ed` (light sky blue) + `#000000` compass and sub-line
  - Section backgrounds: `#ffffff`, `#f3f4f6`, `#e5e7eb`
  - Hero overlays: `rgba(0,0,0,0.5–0.6)`
  - Process infographic: navy `#1f3f5f`-ish diagonal panel, `#5a9bc0` icons (image only)
  - Body text: `#000000` and `#4b5563`
- **Typography (computed):** everything is `ui-sans-serif, system-ui` — i.e. **no brand typeface loaded at all**; renders as SF Pro on Mac, Segoe on Windows. H1 60px/600, H2 30px/600, body 16–18px/400, nav 15–16px/700. Button radius 4px.
- **Imagery:** stock photography (hands with charts, meeting room, yacht, grey architecture), a grid of ~40 stock-looking expert headshots, and a busy corporate infographic. Nothing of Phil, nothing of Boca Raton.
- **Screenshots described:**
  1. *Hero* — logo top-left ("PinPoint" in light blue with a black compass rose replacing the "o", "PLANNING & STRATEGIC CONSULTING" in black caps below a rule). Two teal buttons top-right. Below, a full-width muted video of a sportfishing yacht on shallow turquoise water with white 60px H1 and a 20px sub-line. Feels like a generic wealth-management template; the video is the only "premium" note.
  2. *Meet Our Team* — three equal cards on light grey: two stock office photos and a mosaic of 40 headshots; centered `#32506b` titles and 2-line grey captions. Reads as corporate/committee, not a personal advisor.
  3. *VFO diagram* — white panel with a stylised blue-water sidebar and a hub-and-spoke infographic ("YOU (OUR CLIENT)" → compass → "VIRTUAL FAMILY OFFICE" → Tax / Wealth / Legal / Business). Dense, small type, low contrast pastel circles.
  4. *Closing CTA* — grey Gehry-style architecture photo with white 30px headline and a white outline "Contact Us" button; then a plain footer.
- **Tone of copy:** institutional, third-person plural ("we", "our clients"), heavy on abstractions (proactive, holistic, unparalleled, best-of-best, 21st-century business model) and CPA-recruitment language ("firm of the future"). Several typos ("insolation", "compliment", "non traditional"). No first-person voice, no proof, no numbers, no client outcomes.

### Assets on the site
- Logo: https://planwithpinpoint.com/storage/files/logo.png (400x130 PNG, transparent) → saved `pinpoint-logo.png`
- Favicon: https://planwithpinpoint.com/storage/files/pinpoint-favicon.png (256x256) → saved `pinpoint-favicon.png`
- Hero video: https://planwithpinpoint.com/storage/files/homepage/pinpoint-hp-banner.mp4 / .webm (not downloaded; stock yacht footage)
- Diagram: https://planwithpinpoint.com/storage/files/homepage/pinpoint-diagram.jpg (1280x720) → saved `pinpoint-diagram.jpg` (contains old brand name; reference only)
- Phil headshot (broken on site): https://biz-diagnostic.com/img/expert/20221125105953_Phillip%20Isan.png — host times out; **could not download**. Equivalent portrait obtained from Facebook/Instagram/LinkedIn instead.
- Process infographics: /storage/files/proactive-planning/{value-proposition,map-planning-process,map-review-process}.png (white-label program material; not downloaded)

### "Pinpoint Planning and Strategic Consulting" appears in
Every `<title>`, the logo, the homepage H1 and body, the diagram artwork, Wealth Management (x2), Tax Planning, CPA Partnerships, Phil's bio (x5), the footer on every page, the pinpointfinancial.us mirror, the go.pinpointfinancial.us funnel `<title>`, the LinkedIn company "Overview" text and Phil's LinkedIn Experience entry. Full list in current-site-copy.md.

---

## Source 1b — go.pinpointfinancial.us (lead-gen funnel, linked from Instagram/Facebook)

GoHighLevel page (images served via `images.leadconnectorhq.com`). Headline: "Register for this Free Training: How To Create The Foundation for a Tax-Free Retirement Without Any Additional Financial Outlay…". Blurred Wistia video of Phil at a desk, opt-in form (name/email/phone + SMS consent), "WHAT YOU'LL LEARN" section on a `#0d1470`-ish navy background with a `#4b95c2` card, dark footer with white compass icon, "Phillip Isan — Advanced Planning Director", admin@planwithpinpoint.com.
- Issues: "Questions? Call us: +1" — phone number never filled in (appears twice). `<title>` still says "PinPoint Planning & Strategic Consulting". Headline font is Montserrat; body falls back to Times in places. Orange `#f5a623` submit button clashes with the blue system.
- Assets: wordmark PNG (1080x384) and white compass icon (1080x1080) → saved `pinpoint-financial-logo-wide.png`, `pinpoint-financial-compass-icon.png`

---

## Source 2 — LinkedIn (personal)

**URL:** https://www.linkedin.com/in/phillip-isan-56443ab8 — loaded normally (the browser already had a session; no login was performed).

- **Name / headline:** Phillip Isan — "Certified IUL Specialist Designs Transformational Life Changing Wealth Solutions For Pre & Post Retirees that Optimize Existing Assets, Reduce Taxes, Enjoy Liquidity & Access, Safely Earning Returns with Tax Free Income."
- **Location:** United States (company page says South Florida / Boca Raton). Education: University of Florida. 3,084 followers, 500+ connections.
- **Contact info panel:** calendly.com and planwithpinpoint.com only (no phone/email shown).
- **Profile photo:** studio headshot, dark charcoal background, grey hair, open-collar white shirt, navy check blazer, warm smile. Signed CDN URL only serves 100px; captured a 1092px render via photo viewer → `phil-headshot-linkedin.png`.
- **Banner (800x200):** navy `#0b1a4a`→ dark-blue gradient; left third is a translucent compass-rose over blue water; center "PinPoint / Financial" (white + `#3b82f6`-ish blue, Poppins-style geometric sans) with a thin gold rule and italic tagline "Transforming Life Changing Financial Solutions For Business Owners — One Relationship At A Time"; right a hub-and-spoke "VIRTUAL FAMILY OFFICE" bubble diagram. → `phil-linkedin-banner.jpg`
- **About (tone: first person, punchy, numbers-heavy, ALL-CAPS emphasis, long bullet list):** "Taxes are the biggest theft on wealth followed by inflation and market corrections… I am a transformational wealth specialists who teaches and shows others how to avoid the three biggest risks to one's wealth: 1. Taxes 2. Inflation 3. Market Corrections. A fourth one is 'illiquidity'…" Bullets cover: optimize assets/minimize taxes; life insurance to increase enterprise value and tax-free exits; reposition working capital; supplemental lifetime tax-free retirement income; real-estate investors using IUL; max-funded IUL with minimum death benefit "Tax Free Rates of Returns Averaging 7-10% Net Of Expenses"; audit existing cash-value policies ("a Tax Time Bomb or The Goose That Laid The Golden Egg?"); 7–10% tax-free withdrawal vs the 4% rule. Closes: "…with control, clarity and confidence. It's a better approach."
- **Top skills / services:** Business Advisory, Deferred Comp/Cash Value/Pension Plans, Advanced Tax Planning to reduce TAX DRAG, Life Insurance Solutions & Review, Business Exit & Transition; services list: Financial Consulting, Tax Advisory, Financial Planning, Insurance, Retirement Planning, Life Insurance, Personal Tax Planning, Business/Management Consulting.
- **Experience:**
  - President — PinPoint Financial · Oct 2025–Present · South Florida
  - Founder & Director of Advanced Planning — PinPoint Planning & Strategic Consulting, LLC · Nov 2016–Present
  - Team Based Model Consultant — Elite Resource Team · Jan 2019–Jan 2025 (the VFO/CPA program the website template comes from)
  - SVP Capital Strategies, Risk Mgmt, PE, Investment & Asset Preservation — Great Point Capital LLC · Nov 2018–Mar 2022
  - VP Investment Management / SVP — Spectrum Capital Management · Nov 2018–Aug 2020
  - Investment Advisor Rep — Heron Financial Partners · Jul 2014–Nov 2016 (Melbourne, FL)
  - Financial Advisor — Edward Jones · Dec 2009–Jun 2014 (Melbourne, FL)
  - Founder — Grill 192 LLC (restaurant) · 2008–2009; Business Broker — Sunbelt · 2004–2006; CEO/COO multi-unit franchisee — Samurai Sam's Teriyaki Grill, Las Vegas · 1997–2004
- **Activity / posts' tone:** low volume. Own posts are mostly "starting a new position" announcements (three of them for PinPoint Financial, 14–31 reactions) and one question post ("Will your retirement savings maintain your lifestyle… taxes, inflation and market risk"). Comments on others' posts are enthusiastic, exclamation-heavy ("Let's Go!", "Get on it now. Be 'First'."), including endorsements of a honey brand and an epilepsy fundraiser. Reposts a viral "Denny's angel" story. Personal, warm, salesy; not thought-leadership.

### LinkedIn company page — https://www.linkedin.com/company/pinpointfinancial/
- Tagline: "Helping CPAs & Attorneys Maximize Client Outcomes With A Proactive Planning Team & The Power Of A Virtual Family Office" (old positioning). Financial Services · **Boca Raton, Florida** · 147 followers · 0–1 employees · **Phone 321-652-5057** · website www.planwithpinpoint.com · no posts.
- Overview copy still starts "Pinpoint Planning & Strategic Consulting is focused on working closely with CPAs, EAs…"
- Specialties: Tax Planning, Estate and Legacy Planning, Asset Protection, Legal, Risk Management, Insurance, Retirement Planning, Transition Planning, Charitable Gifting, Tax-Free Wealth Accumulation, Asset Preservation, Private Equity, Investment Management, Business Advisory.
- Logo (200x200): royal-blue teardrop/pin shape containing a white 4-point compass star with a bullseye centre → `pinpoint-financial-logo-icon-200.jpg`
- Cover (1128x191): aerial turquoise sea with a white yacht at right, faint compass watermark left, white "PinPoint FINANCIAL" wordmark and tagline **"Gain clarity, build certainty, and take control of your financial life."** → `pinpoint-financial-linkedin-cover.jpg`

---

## Source 3 — Instagram

**URL:** https://www.instagram.com/pinpointfinancial/ (found on first try; loaded without login wall). Handle **@pinpointfinancial**, display name "PinPoint Financial".
- 13 posts · 46 followers · 109 following. Bio: "💼 Create A Tax Free Retirement! / 🛡️Optimize Assets Minimize Taxes & Maximize Results! / 👇Liquidity, Access, Safety, Earning Returns With Tax Benefits!" Link: go.pinpointfinancial.us
- Profile picture (769x769): same studio headshot as LinkedIn but cut out on a flat royal-blue `#1338be`-ish background → `phil-instagram-profile.jpg`
- **Post style:** clearly templated (same agency/Canva system as the Facebook page): 4:5 cards, stock or AI-generated photos of silver-haired couples on yachts, beaches, meditating, at sunset; big condensed all-caps headline in navy `#1a2f8f` / royal blue with a white outline ("RETIREMENT SHOULD FEEL THIS STEADY.", "FINANCIAL FREEDOM FEELS LIKE THIS.", "DELIVERING SOLUTIONS WITH CONFIDENCE, CLARITY AND CONTROL", "KEEP MORE, STRESS LESS."), small stacked logo bottom corner; plus holiday cards (New Year 2026 gold fireworks, Santa on beach, Thanksgiving turkey, Veterans Day flag) and one dense text infographic ("HOW MUCH LONGER WOULD YOUR MONEY LAST WITHOUT TAXES? The 401(k) way vs The MFTA way"). Fonts: a condensed bold display (Bebas/Oswald-like) + Montserrat.
- **Engagement:** essentially none — the sampled post (27 Nov 2025) has 1 like, 0 comments. Posting stopped around New Year 2026. Captions are long, educational and CTA-driven (401(k) vs "max-funded tax-advantaged" contract, cites IRC §7702, 72(e), 101(a); hashtags #pinpointfinancial #planwithpinpoint #claritycertaintyandcontrol). Not engaging as a feed: generic stock people, no Phil, no faces of real clients, no video.
- Screenshot of the grid → `instagram-grid-screenshot.png`
- Variants checked: not needed (primary handle found).

---

## Source 4 — Facebook

**URL:** https://www.facebook.com/pinpointfinancialus (found via search "Phillip Isan pinpoint"; `facebook.com/pinpointfinancial` is an unrelated credit-repair business). No login performed.
- Page name "PinPoint Financial" · 16 followers · category "Consultor financeiro" (Financial consultant). Bio: "Helping families and business owners minimize taxes, protect and optimize their assets & enjoy tax free income with Clarity, Certainty & Control".
- Contact info: Instagram @pinpointfinancial · **Email phillip@pinpointfinancial.us** · Messenger · **WhatsApp +1 321-652-5057**.
- Profile picture: same blue-background headshot as Instagram. Cover: same yacht/turquoise artwork as the LinkedIn company cover, with a "pinpointfinancial.us" pill.
- Posts: same templated cards as Instagram (cross-posted). One notable original post (27 Oct 2025, 3 likes / 1 comment / 1 share): a **1080x1080 half-body portrait of Phil** — navy check blazer, open white shirt, blurred bright office-lobby background — with the stacked logo top-right. Caption: "What does the Smart Money do when it comes to protecting and growing their money? … LASER FUND METHOD providing LIQUIDITY, ACCESS, SAFETY OF PRINCIPLE EARNING RETURNS WITH TAX BENEFITS… My name is Phillip Isan and I am the Founder, Member Manager & Director of PinPoint Financial. We help successful individuals & businesses do just that with Clarity, Certainty and Control." → `phil-portrait-office-facebook.jpg`
- Phil's personal profile also surfaced (a beach photo captioned "Someday told me this was where the meeting was") — casual, Florida-coastal vibe.

---

## Current brand assets (docs/research/assets/)

| File | Size | Source | Notes |
|---|---|---|---|
| `pinpoint-financial-logo-wide.png` | 1080x384, PNG, transparent | go.pinpointfinancial.us | **Primary new logo.** "PinPoint" (geometric sans, Poppins-like, the "o" replaced by the teardrop-compass mark) over "FINANCIAL" in wide tracked caps. Single colour `#1338be`. Best quality logo available. |
| `pinpoint-financial-logo-350.png` | 350x180, PNG, transparent | pinpointfinancial.us | Same wordmark at web size |
| `pinpoint-financial-logo-icon-200.jpg` | 200x200, JPEG | LinkedIn company logo | Icon only: blue teardrop with white compass star. Has white background baked in. |
| `pinpoint-financial-linkedin-company-logo-screenshot.png` | 296x296 PNG | LinkedIn (screenshot) | Same icon, screenshot fallback |
| `pinpoint-financial-compass-icon.png` | 1080x1080, PNG | go.pinpointfinancial.us footer | **White** compass star on transparent — invisible on white; for dark backgrounds |
| `pinpoint-financial-linkedin-cover.jpg` | 1128x191, JPEG | LinkedIn company cover | Yacht/turquoise banner with white wordmark + tagline "Gain clarity, build certainty, and take control of your financial life." |
| `phil-linkedin-banner.jpg` | 800x200, JPEG | LinkedIn personal banner | Navy banner with wordmark, gold rule, VFO bubbles |
| `phil-linkedin-banner-screenshot.png` | 1566x397 PNG | screenshot | Higher-res render of the same banner |
| `phil-portrait-office-facebook.jpg` | 1080x1080, JPEG | Facebook post | **Best photo of Phil.** Half-body, blazer + open white shirt, bright blurred office; stacked logo top-right (would need cropping/removal for reuse). Good for hero/about. |
| `phil-headshot-linkedin.png` | 1092x1094, PNG | LinkedIn photo viewer (screenshot) | Circular crop, dark background; slight upscale softness |
| `phil-instagram-profile.jpg` | 769x769, JPEG | Instagram profile pic | Same headshot cut-out on flat royal-blue; sharp |
| `phil-linkedin-profile-screenshot.png` | 356x354 PNG | screenshot | Small fallback |
| `phil-headshot-calendly.jpg` | 200x200, JPEG | calendly.com/phillipisan avatar | Small; same headshot |
| `phil-portrait.jpg` | 1000x1000 JPEG | *pre-existing in folder (not created by this research)* | Circular dark-background headshot, same source photo |
| `pinpoint-logo.png` | 400x130, PNG, transparent | planwithpinpoint.com | **Legacy logo** — light-blue `#41b9ed` "PinPoint" with black compass rose, "PLANNING & STRATEGIC CONSULTING" sub-line. To be retired. |
| `pinpoint-favicon.png` | 256x256, PNG | planwithpinpoint.com | Legacy favicon (compass) |
| `pinpoint-diagram.jpg` | 1280x720, JPEG | planwithpinpoint.com | Legacy VFO diagram; reference only, contains old name |
| `instagram-grid-screenshot.png` | 1568x601 PNG | screenshot | Reference of current social style |

Not obtainable: the original headshot file on biz-diagnostic.com (host down); LinkedIn full-res profile photo (signed URL only serves 100px — use the Instagram 769px or Facebook 1080px instead).

---

## Contact & links

| Item | Value | Where found |
|---|---|---|
| Name / title | Phillip Isan — President, PinPoint Financial LLC (LinkedIn, since Oct 2025); "Founder, Member Manager & Director" (Facebook); "Advanced Planning Director" (funnel footer); "Advanced Planning Lead" (website) | multiple — titles are inconsistent |
| Phone | **321-652-5057** (also WhatsApp) | LinkedIn company page, Facebook |
| Email (new brand) | phillip@pinpointfinancial.us | Facebook |
| Email (old brand) | phillip@planwithpinpoint.com (site header), admin@planwithpinpoint.com (funnel footer) | website, funnel |
| Address | Boca Raton, Florida (HQ per LinkedIn); "South Florida". **No street address published anywhere.** | LinkedIn |
| Booking | https://calendly.com/phillipisan (landing) · https://calendly.com/phillipisan/30min ("30 Minute Meeting" — prep questions: goals, problems to solve, concerns, be prepared to discuss personal & business finances) | website |
| Websites | https://planwithpinpoint.com (live, old brand) · https://pinpointfinancial.us (mirror, new logo) · https://go.pinpointfinancial.us (training opt-in funnel) | |
| LinkedIn | https://www.linkedin.com/in/phillip-isan-56443ab8 · https://www.linkedin.com/company/pinpointfinancial/ | |
| Instagram | https://www.instagram.com/pinpointfinancial/ | |
| Facebook | https://www.facebook.com/pinpointfinancialus | |
| Video | Wistia account (media `qz8v0xzza2` on VFO page; another on funnel) | |
| Legal pages | pinpointfinancial.us/site/{privacy-policy,disclaimer,terms-and-conditions}.html — dated Aug 1 2025, generic, one placeholder left in ("[Insert appropriate age]") | |
| Taglines in use | "Gain clarity, build certainty, and take control of your financial life." (company cover) · "Clarity, Certainty & Control" / #claritycertaintyandcontrol (FB/IG) · "Transforming Life Changing Financial Solutions For Business Owners — One Relationship At A Time" (LinkedIn banner) · "Your Proactive and Holistic Partners" (website, legacy) | |

---

## Design takeaways

### Keep
- **The PinPoint Financial mark and wordmark** (`pinpoint-financial-logo-wide.png`). It's already on LinkedIn, Instagram, Facebook and the funnel; it's clean, single-colour and vector-like. Rebuild as SVG from the 1080px PNG.
- **Royal blue `#1338be`** as the one brand colour. It is consistent across the new logo, Instagram avatar, LinkedIn banner and social cards. Pair with a deep navy (the LinkedIn banner uses ~`#0b1a4a`; the funnel uses ~`#0d1470`) and lots of white/off-white.
- **The "Clarity, Certainty & Control" idea** — it's the only phrase used consistently across LinkedIn cover, Facebook bio and Instagram hashtags and it is the right register for HNW: calm, in-control, not hype.
- **Phil's portrait** (Facebook 1080px half-body; Instagram 769px headshot). Same session, same wardrobe (navy check blazer, open white shirt) — a coherent look to build around.
- **Calendly 30-minute discovery call** as the single CTA, and the phone number.
- **The coastal/Boca Raton cue** (turquoise water, yacht) appears in every brand surface. Keep the idea, but execute with restraint (one strong photograph, not stock yachts).

### Drop
- Everything "PinPoint Planning & Strategic Consulting": name, light-blue compass logo, favicon, the VFO diagram, the "Advisory Services Team / Proactive Planning Team / Virtual Family Office" IA, the ~100-expert directory, the CPA-partnership positioning, and all copy that mentions it (list in current-site-copy.md).
- The white-label template itself: stock hands-on-charts photos, images hot-linked from biz-diagnostic.com / northpointstrategies.com, text-in-PNG process pages, `[BrandURL]` placeholder links, the offline external portal links.
- System-font-only typography and the teal `#1479a1` / slate `#32506b` palette.
- The templated social-card aesthetic (condensed all-caps headlines with white outlines, AI-looking stock retirees, orange buttons on the funnel). It reads as mass-market lead-gen, the opposite of what a HNW prospect expects.
- Inconsistent job titles — pick one (President & Founder, PinPoint Financial) and use it everywhere.
- The "7–10% tax-free returns averaging…" style claims from LinkedIn — on a website they are a compliance risk and undermine trust; talk about structure and tax treatment, not return numbers.

### What would make the new site feel premium and trustworthy for a HNW audience
1. **Make it about Phil, in his voice.** Today the site has no person in it; the strongest thing he has is a good portrait, 16 years in the industry, a UF degree, and an operator's background (built and exited restaurant/franchise businesses, brokered businesses). HNW clients buy the advisor, not the "virtual family office". Lead with a large, well-lit photo of Phil, a first-person point of view, and a short credential strip (Certified IUL Specialist · since 2009 · Boca Raton).
2. **One idea per screen, plain English.** Replace "non traditional proactive planning organization & boutique virtual family office" with what he actually does: designs max-funded IUL policies so retirees keep tax-free income, liquidity and downside protection — and audits the policies people already own. Explain the mechanism (IRC §7702, policy loans) calmly, like a private banker would, not like a webinar funnel.
3. **Typography and space do the luxury work.** Load a real type pairing (a refined serif for headlines with a neutral grotesk for body, or a single high-quality geometric sans that matches the logo's Poppins-like letterforms), generous line-height, 80–120px section rhythm, max ~65ch measure, and a restrained palette: white, warm off-white, navy, one accent of `#1338be`. No gradients-on-stock-photos, no drop-shadow cards.
4. **Real proof and a clear, low-friction next step.** Show a specific worked example (the 401(k) $150k → $100k vs policy loan $100k → $100k comparison already in his content is good material when rendered as a clean chart), a short "how an engagement works" (Discovery call → policy design/audit → implementation → annual review), disclosures done properly, and a single CTA: "Book a 30-minute discovery call" (Calendly) with the phone number visible in the header. Add the Boca Raton address, a proper contact page, and working legal pages (finish the placeholders).
5. **Fix the trust leaks the current site has.** Broken headshots, images pulled from other advisors' domains, dead portal links, "+1" with no number, a 2025/2026 copyright mismatch between the two domains, and two competing brands. Consolidate to one domain (pinpointfinancial.us or planwithpinpoint.com with redirects), one name, one title, one phone, one email — and update the LinkedIn company overview and headline to match the site once it's live.

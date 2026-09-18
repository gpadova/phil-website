import Image from "next/image";
import { LearnMoreForm } from "@/components/LearnMoreForm";
import { Ledger } from "@/components/Ledger";
import { Mark } from "@/components/Mark";
import { Reveal } from "@/components/Reveal";
import { Vault } from "@/components/Vault";

const EMAIL = "phillip@planwithpinpoint.com";
const PHONE = "321-652-5057";
const PORTRAIT = "/brand/phil-portrait.jpg";

function Arrow() {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 6h15M11 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function Rule({ className = "" }: { className?: string }) {
  return <div className={`rule ${className}`} aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <a
        href="#learn-more"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-travertine focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to the request form
      </a>

      {/* ── The hall ─────────────────────────────────────────── */}
      <header className="marble relative">
        <div className="container-hall">
          <nav
            className="flex items-center justify-between gap-6 py-5 sm:py-6"
            aria-label="Primary"
          >
            <a
              href="#top"
              className="engraved text-[1.05rem] sm:text-[1.25rem]"
            >
              Pinpoint Financial
            </a>
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#three-reasons"
                className="signage text-on-hall-soft hover:text-brass-lit"
              >
                Why
              </a>
              <a
                href="#what-it-does"
                className="signage text-on-hall-soft hover:text-brass-lit"
              >
                What it does
              </a>
              <a
                href="#process"
                className="signage text-on-hall-soft hover:text-brass-lit"
              >
                How it works
              </a>
            </div>
            <a href="#learn-more" className="teller !py-3 !px-4 sm:!px-6">
              <span className="hidden sm:inline">
                I&rsquo;d like to learn more
              </span>
              <span className="sm:hidden">Learn more</span>
              <Arrow />
            </a>
          </nav>
          <Rule />
        </div>

        <section
          id="top"
          className="container-hall relative pb-12 pt-8 sm:pb-12 sm:pt-10 lg:pt-10"
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h1 className="engraved text-[2.35rem] leading-[1.02] sm:text-[3.3rem] lg:text-[4.1rem] xl:text-[4.6rem]">
                You don&rsquo;t need
                <br />
                life insurance.
                <br />
                <span className="engraved-lit">You need what this does.</span>
              </h1>
              <p className="prose-text mt-7 max-w-[38rem] text-[1.15rem] leading-[1.55] text-on-hall-soft sm:text-[1.25rem]">
                Serious money, growing without a tax bill waiting at the end.
                Money you can still put your hands on while it keeps growing.
                And a floor under it when the market falls. That&rsquo;s what a
                properly built policy does. Most aren&rsquo;t built properly.
                Mine are.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="#learn-more" className="teller">
                  I&rsquo;d like to learn more
                  <Arrow />
                </a>
                <a href="#three-reasons" className="teller teller-quiet">
                  Start with why
                </a>
              </div>
            </div>

            <figure className="lg:col-span-5 lg:justify-self-end">
              <div className="plate mx-auto w-full max-w-[320px] overflow-hidden bg-hall-deep lg:max-w-[352px]">
                <Image
                  src={PORTRAIT}
                  alt="Phil Isan, Certified IUL Specialist, President of Pinpoint Financial"
                  width={1000}
                  height={1600}
                  priority
                  sizes="(min-width: 1024px) 352px, (min-width: 640px) 320px, 80vw"
                  className="aspect-[5/8] h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mx-auto mt-5 flex max-w-[352px] flex-col items-center gap-1 text-center">
                <span className="engraved text-base">Phil Isan</span>
                <span className="signage text-on-hall-mute">
                  Certified IUL Specialist · Boca Raton, FL
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Brass ledger rail */}
        <div className="brass">
          <div className="container-hall">
            <dl className="grid gap-y-5 py-7 text-ink sm:grid-cols-3 sm:gap-x-10 sm:py-8">
              {[
                [
                  "Growth",
                  "Tax-advantaged, like a Roth — without the contribution cap or the income cutoff.",
                ],
                [
                  "Access",
                  "Borrow against it whenever you want. The full balance keeps compounding.",
                ],
                [
                  "Protection",
                  "When the index has a down year, your account posts zero. Not a loss.",
                ],
              ].map(([term, def]) => (
                <div
                  key={term}
                  className="border-l border-brass-ink/40 pl-4 sm:border-l-0 sm:pl-0"
                >
                  <dt className="engraved engraved-ink text-xl sm:text-2xl">
                    {term}
                  </dt>
                  <dd className="mt-1.5 max-w-[30ch] text-[0.98rem] leading-snug text-brass-ink">
                    {def}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Three reasons ──────────────────────────────────── */}
        <section id="three-reasons" className="marble-panel">
          <div className="container-hall py-20 sm:py-28">
            <Reveal className="max-w-[46rem]">
              <h2 className="engraved text-[2rem] sm:text-[2.8rem] lg:text-[3.3rem]">
                Three reasons people say no.
                <br />
                <span className="engraved-lit">
                  All three are structure problems.
                </span>
              </h2>
              <p className="prose-text mt-6 text-on-hall-soft">
                I hear them every week from people who are smart with money.
                They&rsquo;re right about life insurance the way it&rsquo;s
                usually sold. They&rsquo;re wrong about what it can be when
                someone builds it for a living person instead of a funeral.
              </p>
            </Reveal>

            <Reveal
              as="ol"
              className="travertine plate plate-on-travertine mt-14 divide-y divide-brass-deep/35"
              threshold={0.1}
            >
              {[
                {
                  n: "I",
                  said: "I have assets. I don't need life insurance.",
                  answer:
                    "You're not buying it for what happens when you die. You're buying it for what it does while you're alive: a place for serious money to grow, be borrowed against, and be protected. The death benefit comes along for the ride.",
                  line: "It's an asset class, not a policy.",
                },
                {
                  n: "II",
                  said: "It gets more expensive every year, and I have better uses for my money.",
                  answer:
                    "Built the usual way, yes. Built under the right sections of the tax code — maximum funding, minimum insurance — the cost of coverage goes down as a share of what you own, year after year, while the balance goes up.",
                  line: "Cost falls. Balance rises. That's the design.",
                },
                {
                  n: "III",
                  said: "It's illiquid. Once my money's in, I can't get it out.",
                  answer:
                    "You can borrow against the cash value whenever you want, with no repayment schedule. The full balance keeps earning while the loan is out. And when you're gone, the loan settles from the death benefit — so it never has to be paid back.",
                  line: "Your money stays yours to use.",
                },
              ].map((item, i) => (
                <li
                  key={item.n}
                  className={`grid gap-x-8 gap-y-4 px-6 py-8 sm:px-9 sm:py-10 lg:grid-cols-[6rem_1fr_1.15fr] ${i === 0 ? "lg:py-14" : ""}`}
                >
                  <span
                    className={`engraved engraved-ink leading-none ${i === 0 ? "text-[4.5rem] sm:text-[5.5rem]" : "text-[3.25rem] sm:text-[4rem]"}`}
                    style={{ color: "var(--brass-deep)" }}
                    aria-label={`Reason ${i + 1}`}
                  >
                    {item.n}
                  </span>
                  <blockquote>
                    <p
                      className={`engraved engraved-ink leading-[1.12] ${i === 0 ? "text-[1.6rem] sm:text-[2rem]" : "text-[1.3rem] sm:text-[1.55rem]"}`}
                    >
                      &ldquo;{item.said}&rdquo;
                    </p>
                  </blockquote>
                  <div>
                    <p className="prose-text text-[1.02rem] leading-[1.6] text-ink-soft">
                      {item.answer}
                    </p>
                    <p className="mt-5 inline-block border-b-2 border-brass bg-brass/20 px-2 py-1 font-signage text-[0.92rem] font-medium uppercase tracking-[0.08em] text-brass-ink">
                      {item.line}
                    </p>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── What it does ───────────────────────────────────── */}
        <section id="what-it-does" className="marble">
          <div className="container-hall py-20 sm:py-28">
            {/* Protection */}
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-5">
                <h2 className="engraved text-[2rem] sm:text-[2.6rem]">
                  When the market falls,
                  <br />
                  <span className="engraved-lit">this doesn&rsquo;t.</span>
                </h2>
                <div className="prose-text mt-6 text-on-hall-soft">
                  <p>
                    Say you had $100,000 in the market and it dropped 35%.
                    You&rsquo;re at $65,000. Next year it roars back 20%. Feel
                    good? You&rsquo;re at $78,000. Still down. Still years from
                    even.
                  </p>
                  <p>
                    Now say the down year didn&rsquo;t touch you. You&rsquo;re
                    still at $100,000 when the 20% year comes. That&rsquo;s
                    $120,000. Same market. Same two years. One account
                    eliminated the bad year — and the arithmetic of digging out
                    of it.
                  </p>
                  <p>
                    That&rsquo;s what an indexed account with a floor does. It
                    follows the index up. In the years the index goes down, it
                    posts zero and starts the next year from there.
                  </p>
                </div>
                <a href="#learn-more" className="teller mt-8">
                  I&rsquo;d like to learn more
                  <Arrow />
                </a>
              </Reveal>
              <div className="lg:col-span-7">
                <Ledger />
              </div>
            </div>

            <Rule className="my-20 sm:my-28" />

            {/* Access: be your own bank */}
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <Reveal className="order-2 lg:order-1 lg:col-span-7">
                <div className="travertine plate plate-on-travertine p-7 sm:p-9">
                  <h3 className="engraved engraved-ink text-xl sm:text-2xl">
                    How a bank works
                  </h3>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="signage text-brass-ink">
                        The bank&rsquo;s bank
                      </p>
                      <p className="mt-2 text-[1rem] leading-[1.55] text-ink-soft">
                        Takes your deposit, pays you a little for it, lends it
                        out at several times that rate. The spread is the
                        business. They&rsquo;ve been doing it since before your
                        grandfather.
                      </p>
                    </div>
                    <div>
                      <p className="signage text-brass-ink">Your bank</p>
                      <p className="mt-2 text-[1rem] leading-[1.55] text-ink-soft">
                        Your cash value keeps earning at its full rate. You
                        borrow against it at the policy&rsquo;s loan rate and
                        put the money to work outside — a building, a position,
                        a business. Two engines running on one dollar.
                      </p>
                    </div>
                  </div>
                  <Rule className="my-6 !bg-none !bg-brass-deep/50" />
                  <p className="prose-text text-[1.02rem] text-ink-soft">
                    When the outside investment earns more than the loan costs,
                    the difference is yours. That&rsquo;s positive arbitrage,
                    and it&rsquo;s the whole reason banks own the tallest
                    buildings in town. The exact loan rate and crediting terms
                    are in your illustration.
                  </p>
                </div>
              </Reveal>
              <Reveal className="order-1 lg:order-2 lg:col-span-5">
                <h2 className="engraved text-[2rem] sm:text-[2.6rem]">
                  Be your
                  <br />
                  <span className="engraved-lit">own bank.</span>
                </h2>
                <div className="prose-text mt-6 text-on-hall-soft">
                  <p>
                    Here&rsquo;s the part nobody explains. When you take a loan
                    against a properly built policy, the cash value
                    doesn&rsquo;t go down. It keeps compounding on the full
                    amount. The loan sits on the side, at a fixed rate, with no
                    payment schedule.
                  </p>
                  <p>
                    So a real estate investor pulls out a down payment, buys the
                    building, and the money that funded the down payment is
                    still growing back at the office. A father pulls out four
                    years of tuition and the account never notices.
                  </p>
                  <p>
                    You don&rsquo;t have to pay it back. If you never do, it
                    settles out of the death benefit and the rest goes to your
                    family — tax-free.
                  </p>
                </div>
              </Reveal>
            </div>

            <Rule className="my-20 sm:my-28" />

            {/* Growth: seed vs harvest */}
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-5">
                <h2 className="engraved text-[2rem] sm:text-[2.6rem]">
                  Pay tax on the seed.
                  <br />
                  <span className="engraved-lit">Not the harvest.</span>
                </h2>
                <div className="prose-text mt-6 text-on-hall-soft">
                  <p>
                    The traditional plan says defer. Put money in a 401(k), skip
                    the tax now, pay it later. What they don&rsquo;t say: later,
                    the money is four times bigger, everything costs four times
                    more, and the tax bill is on the whole forest instead of the
                    seed you planted.
                  </p>
                  <p>
                    A properly funded policy takes money you&rsquo;ve already
                    paid tax on and grows it without a second bill. You take it
                    out through policy loans — not withdrawals — so it comes out
                    the way it went in: tax-free.
                  </p>
                  <p>
                    And there&rsquo;s no cap. No income cutoff. No waiting until
                    59&frac12;. No 10% penalty for touching your own money.
                  </p>
                </div>
              </Reveal>
              <Reveal className="lg:col-span-7">
                <div className="travertine plate plate-on-travertine overflow-hidden">
                  <div className="flex items-baseline justify-between gap-6 border-b border-brass-deep/40 px-5 py-4 sm:px-7">
                    <p className="engraved engraved-ink text-lg sm:text-xl">
                      Where serious money can go
                    </p>
                    <p className="signage text-brass-ink">
                      2026 limits, under 50
                    </p>
                  </div>
                  <div className="table-scroll">
                    <table className="tabular w-full min-w-[520px] text-[15px] sm:text-base">
                      <thead className="signage text-brass-ink">
                        <tr>
                          <th
                            scope="col"
                            className="px-5 py-3 text-left font-medium sm:px-7"
                          >
                            Account
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3 text-right font-medium"
                          >
                            Yearly cap
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3 text-right font-medium"
                          >
                            Locked until
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 text-right font-medium sm:px-7"
                          >
                            Taxed on the way out
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-ink">
                        {[
                          ["IRA", "$7,500", "59½", "Yes, fully"],
                          ["401(k)", "$24,500", "59½", "Yes, fully"],
                          [
                            "Roth IRA",
                            "$7,500",
                            "59½ on growth",
                            "No — if you qualify",
                          ],
                          ["Brokerage", "None", "Never", "Every year you sell"],
                        ].map(([a, cap, lock, tax]) => (
                          <tr key={a} className="border-t border-brass-deep/25">
                            <td className="px-5 py-3 font-medium sm:px-7">
                              {a}
                            </td>
                            <td className="px-3 py-3 text-right">{cap}</td>
                            <td className="px-3 py-3 text-right">{lock}</td>
                            <td className="px-5 py-3 text-right sm:px-7">
                              {tax}
                            </td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-brass-deep/60 bg-brass/15 font-medium">
                          <td className="px-5 py-3 sm:px-7">Max-funded IUL</td>
                          <td className="px-3 py-3 text-right">
                            Set by design
                          </td>
                          <td className="px-3 py-3 text-right">Never</td>
                          <td className="px-5 py-3 text-right sm:px-7">
                            No — via policy loans
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="border-t border-brass-deep/40 px-5 py-4 text-sm leading-snug text-ink-mute sm:px-7">
                    IRS contribution limits for 2026; Roth IRAs also phase out
                    above certain incomes. Policy loans are generally not
                    taxable while the policy stays in force. This is education,
                    not tax advice — bring your CPA into the room.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Who walks in ───────────────────────────────────── */}
        <section className="brass">
          <div className="container-hall py-16 sm:py-20">
            <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h2 className="engraved engraved-ink text-[1.9rem] sm:text-[2.4rem]">
                  Who walks into this office
                </h2>
                <p className="mt-4 max-w-[34ch] text-[1.05rem] leading-[1.55] text-brass-ink">
                  People with money that&rsquo;s already made. Not the mass
                  market, not a 401(k) match. If you&rsquo;re thinking in the
                  hundreds of thousands, this is built for you.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                {[
                  {
                    who: "The investor in his sixties",
                    what: "Buys apartment complexes, fixes them, sells in five years. Wants a place for a million dollars that grows tax-advantaged and lets him borrow the next down payment without selling anything.",
                  },
                  {
                    who: "The business owner with a young son",
                    what: "Forty-two, single dad, the company is the family's whole income. Wants his boy's education and start in life covered no matter what — and a growing account he can use in the meantime.",
                  },
                ].map((p) => (
                  <div
                    key={p.who}
                    className="border-t border-brass-ink/50 pt-5"
                  >
                    <p className="engraved engraved-ink text-[1.25rem]">
                      {p.who}
                    </p>
                    <p className="mt-3 text-[1rem] leading-[1.55] text-brass-ink">
                      {p.what}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Process ────────────────────────────────────────── */}
        <section id="process" className="marble-panel">
          <div className="container-hall py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-5">
                <h2 className="engraved text-[2rem] sm:text-[2.6rem]">
                  No fee to you.
                  <br />
                  <span className="engraved-lit">Ever.</span>
                </h2>
                <div className="prose-text mt-6 text-on-hall-soft">
                  <p>
                    I get paid once, by the insurance carrier, when a policy is
                    placed. You never write me a check. You can walk away at any
                    point in the process and owe nothing.
                  </p>
                  <p>
                    Compare that to a brokerage account charging about one
                    percent of everything you own, every year, for the rest of
                    your life. On a serious balance that&rsquo;s a serious
                    number — and it never stops.
                  </p>
                  <p>
                    After placement, I manage the policy with you every year —
                    the index allocations, the loans, the funding — for as long
                    as you have it. Twenty years, thirty, longer.
                  </p>
                </div>
              </Reveal>
              <Reveal className="lg:col-span-7">
                <div className="travertine plate plate-on-travertine p-7 sm:p-9">
                  <p className="engraved engraved-ink text-xl sm:text-2xl">
                    How it goes
                  </p>
                  <ol className="mt-6 divide-y divide-brass-deep/30">
                    {[
                      [
                        "Introduction",
                        "A conversation. What you have, what you want it to do, whether this is a fit. Expectations set both ways.",
                        "30 min of yours",
                      ],
                      [
                        "Data",
                        "The facts of your situation. Income, assets, timeline, who you're protecting.",
                        "An hour of yours",
                      ],
                      [
                        "Design",
                        "I build the case: funding schedule, insurance amount, index strategy, loan plan. This is the work.",
                        "Hours of mine",
                      ],
                      [
                        "Review",
                        "We walk through the design line by line. Change anything. Then we walk through it again.",
                        "An hour of yours",
                      ],
                      [
                        "Application",
                        "I pre-fill it. You fill in the rest with me on the phone.",
                        "30 min of yours",
                      ],
                      [
                        "Underwriting",
                        "The carrier does its due diligence. I keep you posted.",
                        "1–2 months",
                      ],
                      [
                        "Placement",
                        "The policy goes in force. Now the real work starts — and I'm here for it, every year.",
                        "Ongoing",
                      ],
                    ].map(([step, desc, time], i) => (
                      <li
                        key={step}
                        className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[2.2rem_1fr_auto] sm:items-baseline"
                      >
                        <span className="tabular text-sm font-medium text-brass-ink">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="engraved engraved-ink text-[1.1rem]">
                            {step}
                          </p>
                          <p className="mt-1 text-[0.98rem] leading-[1.55] text-ink-soft">
                            {desc}
                          </p>
                        </div>
                        <span className="signage mt-1 text-brass-ink sm:mt-0 sm:text-right">
                          {time}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── The vault ──────────────────────────────────────── */}
        <section id="learn-more" className="marble relative scroll-mt-6">
          <div className="container-hall py-20 sm:py-28">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <Vault />
              </div>
              <div className="lg:col-span-7">
                <Reveal>
                  <h2 className="engraved text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
                    The numbers stay
                    <br />
                    <span className="engraved-lit">in the room.</span>
                  </h2>
                  <p className="prose-text mt-6 text-on-hall-soft">
                    Every case I build is a real illustration with real figures
                    — funding, growth, loans, death benefit, year by year to age
                    100. They&rsquo;re yours to see, and they&rsquo;re built
                    around you, not posted on a website. Tell me who you are and
                    I&rsquo;ll get back to you myself.
                  </p>
                </Reveal>
                <div className="mt-8">
                  <LearnMoreForm />
                </div>
                <p className="mt-6 text-[0.98rem] leading-[1.6] text-on-hall-mute">
                  Rather talk? Call{" "}
                  <a
                    href={`tel:+1${PHONE.replace(/-/g, "")}`}
                    className="text-on-hall-soft underline hover:text-brass-lit"
                  >
                    {PHONE}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="marble-panel border-t border-brass-deep/50">
        <div className="container-hall py-12 sm:py-14">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <Mark className="h-9 w-9 text-brass" />
              <p className="engraved mt-4 text-[1.15rem]">Pinpoint Financial</p>
              <p className="mt-3 text-[0.98rem] leading-[1.55] text-on-hall-mute">
                Phil Isan, Certified IUL Specialist.
                <br />
                Boca Raton, Florida. Working with clients across the country by
                phone and video.
              </p>
              <p className="mt-4 flex flex-col gap-1">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-on-hall-soft underline hover:text-brass-lit"
                >
                  {EMAIL}
                </a>
                <a
                  href={`tel:+1${PHONE.replace(/-/g, "")}`}
                  className="text-on-hall-soft underline hover:text-brass-lit"
                >
                  {PHONE}
                </a>
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="signage text-brass">Read this part</p>
              <p className="mt-3 max-w-[72ch] text-[0.9rem] leading-[1.6] text-on-hall-mute">
                Everything on this page is education, not a recommendation, and
                not tax or legal advice. Indexed universal life insurance is a
                life insurance contract; policy values depend on the funding,
                the crediting method, caps, participation rates, charges, and
                the carrier&rsquo;s terms, all of which are shown in a
                personalized illustration available on request. Loans and
                withdrawals reduce cash value and death benefit and may have tax
                consequences if a policy lapses or is surrendered. Guarantees
                are backed by the claims-paying ability of the issuing carrier.
                The examples on this page are hypothetical and are not a policy
                illustration. Talk to your own tax and legal advisors.
              </p>
              <p className="mt-4 text-[0.85rem] text-on-hall-mute">
                &copy; {new Date().getFullYear()} Pinpoint Financial. Licensed
                life insurance agent, Florida.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

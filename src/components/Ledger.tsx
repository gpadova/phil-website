import { Reveal } from "./Reveal";

/* Hypothetical index years. Both accounts start at $100,000.
   The market account takes every year as it comes; the floor account
   takes the up years and posts 0% in the down years. Synthetic, for
   the concept only — not a policy illustration. */
const YEARS = [
  { y: 1, r: -0.35 },
  { y: 2, r: 0.2 },
  { y: 3, r: 0.12 },
  { y: 4, r: -0.08 },
  { y: 5, r: 0.15 },
  { y: 6, r: 0.1 },
  { y: 7, r: -0.18 },
  { y: 8, r: 0.09 },
];

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const pct = (r: number) =>
  `${r > 0 ? "+" : r < 0 ? "−" : ""}${Math.abs(r * 100).toFixed(0)}%`;

function rows() {
  let market = 100_000;
  let floor = 100_000;
  return YEARS.map(({ y, r }) => {
    market = Math.round(market * (1 + r));
    const credited = Math.max(r, 0);
    floor = Math.round(floor * (1 + credited));
    return { y, r, market, floor, credited, held: r < 0 };
  });
}

export function Ledger() {
  const data = rows();
  const last = data[data.length - 1];
  return (
    <Reveal
      attr="data-print"
      threshold={0.25}
      className="travertine plate plate-on-travertine overflow-hidden"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-brass-deep/40 px-5 py-4 sm:px-7">
        <p className="engraved engraved-ink text-lg sm:text-xl">
          Two accounts. Same market.
        </p>
        <p className="signage text-brass-ink">
          Hypothetical · both start at $100,000
        </p>
      </div>
      <div className="table-scroll">
        <table className="tabular w-full text-[14px] sm:text-base">
          <thead>
            <tr className="signage text-brass-ink">
              <th
                scope="col"
                className="px-5 py-3 text-left font-medium sm:px-7"
              >
                Year
              </th>
              <th scope="col" className="px-3 py-3 text-right font-medium">
                Index
              </th>
              <th scope="col" className="px-3 py-3 text-right font-medium">
                Market account
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3 text-right font-medium sm:table-cell"
              >
                Credited
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-right font-medium sm:px-7"
              >
                Floor account
              </th>
            </tr>
          </thead>
          <tbody className="text-ink">
            {data.map((row, i) => (
              <tr
                key={row.y}
                className={`ledger-row border-t border-brass-deep/25 ${row.held ? "bg-brass/15" : ""}`}
                style={{ "--i": i } as React.CSSProperties}
              >
                <td className="px-4 py-3 text-left sm:px-7">{row.y}</td>
                <td
                  className={`px-3 py-3 text-right ${row.r < 0 ? "text-[#8a2f1c]" : ""}`}
                >
                  {pct(row.r)}
                </td>
                <td className="px-3 py-3 text-right">
                  {usd.format(row.market)}
                </td>
                <td className="hidden px-3 py-3 text-right sm:table-cell">
                  {row.held ? (
                    <span className="signage text-brass-ink">
                      0% · floor holds
                    </span>
                  ) : (
                    pct(row.credited)
                  )}
                </td>
                <td className="px-5 py-3 text-right font-medium sm:px-7">
                  {usd.format(row.floor)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr
              className="ledger-row border-t-2 border-brass-deep/60 bg-travertine-deep/60 font-medium text-ink"
              style={{ "--i": data.length } as React.CSSProperties}
            >
              <td className="px-5 py-3 sm:px-7" colSpan={2}>
                After {last.y} years
              </td>
              <td className="px-3 py-3 text-right">
                {usd.format(last.market)}
              </td>
              <td className="hidden px-3 py-3 text-right sm:table-cell" />
              <td className="px-5 py-3 text-right sm:px-7">
                {usd.format(last.floor)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="border-t border-brass-deep/40 px-5 py-4 text-sm leading-snug text-ink-mute sm:px-7">
        A made-up sequence of index years to show one idea: the floor account
        never posts a down year. Real indexed accounts also have crediting caps
        or participation rates that trim the up years — that&rsquo;s in the
        illustration, and the illustration is in the room.
      </p>
    </Reveal>
  );
}

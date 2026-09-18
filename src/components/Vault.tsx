import { Reveal } from "./Reveal";

/* Synthetic rows: the shape of a carrier illustration, deliberately unreadable.
   Nothing here is a real policy figure. */
const GATED_ROWS = [
  ["1", "70", "•••,•••", "•••,•••", "•,•••,•••"],
  ["2", "71", "•••,•••", "•••,•••", "•,•••,•••"],
  ["3", "72", "•••,•••", "•••,•••", "•,•••,•••"],
  ["4", "73", "•••,•••", "•••,•••", "•,•••,•••"],
  ["5", "74", "•••,•••", "•••,•••", "•,•••,•••"],
  ["6", "75", "•••,•••", "•,•••,•••", "•,•••,•••"],
  ["7", "76", "—", "•,•••,•••", "•,•••,•••"],
  ["8", "77", "—", "•,•••,•••", "•,•••,•••"],
  ["9", "78", "—", "•,•••,•••", "•,•••,•••"],
  ["10", "79", "—", "•,•••,•••", "•,•••,•••"],
  ["11", "80", "—", "•,•••,•••", "•,•••,•••"],
  ["12", "81", "—", "•,•••,•••", "•,•••,•••"],
];

function DoorFace() {
  const bolts = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    return { x: 200 + Math.cos(a) * 176, y: 200 + Math.sin(a) * 176 };
  });
  const spokes = Array.from({ length: 6 }, (_, i) => (i / 6) * 360);
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      role="img"
      aria-label="A bank vault door, drawn in brass on green steel"
    >
      <title>Vault door</title>
      <defs>
        <radialGradient id="doorField" cx="42%" cy="38%" r="70%">
          <stop offset="0" stopColor="#1f6a53" />
          <stop offset="0.55" stopColor="#0f3d2f" />
          <stop offset="1" stopColor="#082419" />
        </radialGradient>
        <linearGradient id="brassRim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6c877" />
          <stop offset="0.5" stopColor="#c9a24d" />
          <stop offset="1" stopColor="#8f6f2a" />
        </linearGradient>
        <linearGradient id="brassRimRev" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e6c877" />
          <stop offset="0.5" stopColor="#c9a24d" />
          <stop offset="1" stopColor="#8f6f2a" />
        </linearGradient>
        {/* One light source, upper left: a specular sweep that every brass surface shares. */}
        <linearGradient id="specular" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff6dc" stopOpacity="0.85" />
          <stop offset="0.22" stopColor="#fff6dc" stopOpacity="0.25" />
          <stop offset="0.5" stopColor="#fff6dc" stopOpacity="0" />
          <stop offset="0.8" stopColor="#2a1d05" stopOpacity="0.35" />
          <stop offset="1" stopColor="#2a1d05" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="boltHead" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#fff1c8" />
          <stop offset="0.45" stopColor="#d4ad57" />
          <stop offset="1" stopColor="#7a5d21" />
        </radialGradient>
        <filter id="cast" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow
            dx="1.6"
            dy="2.4"
            stdDeviation="1.4"
            floodColor="#000"
            floodOpacity="0.55"
          />
        </filter>
        <filter id="castWheel" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="3"
            dy="5"
            stdDeviation="3"
            floodColor="#000"
            floodOpacity="0.5"
          />
        </filter>
        <filter id="brushed" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.9"
            numOctaves="1"
            seed="5"
            result="n"
          />
          <feColorMatrix
            in="n"
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 0.95  0 0 0 0 0.75  0 0 0 0.22 0"
          />
        </filter>
        <clipPath id="rimClip">
          <path
            d="M200 2a198 198 0 1 0 0.01 0Z M200 12a188 188 0 1 1 -0.01 0Z"
            clipRule="evenodd"
          />
        </clipPath>
      </defs>
      {/* Rim: brass, brushed, with the sweep */}
      <circle cx="200" cy="200" r="198" fill="url(#brassRim)" />
      <rect
        width="400"
        height="400"
        filter="url(#brushed)"
        clipPath="url(#rimClip)"
      />
      <circle cx="200" cy="200" r="198" fill="url(#specular)" opacity="0.9" />
      <circle cx="200" cy="200" r="190" fill="url(#doorField)" />
      <circle
        cx="200"
        cy="200"
        r="190"
        fill="none"
        stroke="#000"
        strokeOpacity="0.45"
        strokeWidth="5"
      />
      <circle
        cx="200"
        cy="200"
        r="189"
        fill="none"
        stroke="#fff6dc"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <circle
        cx="200"
        cy="200"
        r="160"
        fill="none"
        stroke="url(#brassRimRev)"
        strokeWidth="3"
      />
      <circle
        cx="200"
        cy="200"
        r="160"
        fill="none"
        stroke="url(#specular)"
        strokeWidth="3"
        opacity="0.7"
      />
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="#0b1210"
        strokeWidth="1.5"
        opacity="0.7"
      />
      {bolts.map((b) => (
        <g key={`${b.x}-${b.y}`} filter="url(#cast)">
          <circle
            cx={b.x}
            cy={b.y}
            r="7"
            fill="url(#boltHead)"
            stroke="#5c4614"
            strokeWidth="0.8"
          />
          <circle cx={b.x} cy={b.y} r="2" fill="#3b2b08" />
          <circle
            cx={b.x - 1.2}
            cy={b.y - 1.4}
            r="0.9"
            fill="#fff6dc"
            opacity="0.8"
          />
        </g>
      ))}
      <text
        x="200"
        y="96"
        textAnchor="middle"
        fontFamily="var(--font-marcellus), serif"
        fontSize="17"
        letterSpacing="4"
        fill="#e6c877"
        opacity="0.95"
      >
        PINPOINT FINANCIAL
      </text>
      <text
        x="200"
        y="318"
        textAnchor="middle"
        fontFamily="var(--font-jost), sans-serif"
        fontSize="10.5"
        letterSpacing="4"
        fill="#e6c877"
        opacity="0.85"
      >
        ILLUSTRATIONS · BY APPOINTMENT
      </text>
      {/* The wheel */}
      <g className="vault-wheel" filter="url(#castWheel)">
        <circle
          cx="200"
          cy="200"
          r="78"
          fill="none"
          stroke="url(#brassRim)"
          strokeWidth="14"
        />
        <circle
          cx="200"
          cy="200"
          r="78"
          fill="none"
          stroke="url(#specular)"
          strokeWidth="14"
          opacity="0.8"
        />
        <circle
          cx="200"
          cy="200"
          r="84.5"
          fill="none"
          stroke="#fff6dc"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="71.5"
          fill="none"
          stroke="#3b2b08"
          strokeOpacity="0.7"
          strokeWidth="1.2"
        />
        {spokes.map((deg) => (
          <g key={deg} transform={`rotate(${deg} 200 200)`}>
            <rect
              x="194"
              y="120"
              width="12"
              height="80"
              fill="url(#brassRim)"
            />
            <rect
              x="194"
              y="120"
              width="12"
              height="80"
              fill="url(#specular)"
              opacity="0.6"
            />
            <rect
              x="196.5"
              y="120"
              width="1.6"
              height="80"
              fill="#fff6dc"
              opacity="0.55"
            />
            <rect
              x="204"
              y="120"
              width="1.4"
              height="80"
              fill="#2a1d05"
              opacity="0.45"
            />
            <circle
              cx="200"
              cy="120"
              r="9"
              fill="url(#boltHead)"
              stroke="#5c4614"
              strokeWidth="1.2"
            />
          </g>
        ))}
        <circle
          cx="200"
          cy="200"
          r="24"
          fill="url(#brassRimRev)"
          stroke="#5c4614"
          strokeWidth="1.5"
        />
        <circle cx="200" cy="200" r="24" fill="url(#specular)" opacity="0.7" />
        <circle cx="200" cy="200" r="9" fill="#0b1210" />
        <circle cx="197" cy="196" r="2.2" fill="#fff6dc" opacity="0.5" />
      </g>
    </svg>
  );
}

export function Vault() {
  return (
    <Reveal
      attr="data-vault"
      threshold={0.45}
      className="relative mx-auto w-full max-w-[560px]"
    >
      {/* Steel frame */}
      <div
        className="relative aspect-square w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #051a12 0 58%, #0b1210 62%, #082419 100%)",
          boxShadow:
            "inset 0 0 0 10px #8f6f2a, inset 0 0 0 12px #c9a24d, inset 0 0 40px 20px rgba(0,0,0,0.8), 0 0 0 1px #5c4614, 0 40px 90px -30px rgba(0,0,0,0.9)",
        }}
      >
        {/* What's behind the door: the shape of a carrier illustration, blurred by design */}
        <div
          className="absolute inset-[7%] overflow-hidden rounded-full travertine"
          aria-hidden="true"
        >
          <div className="gated h-full w-full p-8 pt-16 text-ink">
            <p className="signage mb-3 text-brass-ink">
              Illustration · Synthetic sample
            </p>
            <table className="tabular w-full text-[13px] font-medium leading-7">
              <thead>
                <tr className="text-brass-ink">
                  <th className="text-left font-medium">YR</th>
                  <th className="text-left font-medium">AGE</th>
                  <th className="text-right font-medium">PREMIUM</th>
                  <th className="text-right font-medium">ACCUM</th>
                  <th className="text-right font-medium">BENEFIT</th>
                </tr>
              </thead>
              <tbody>
                {GATED_ROWS.map((r) => (
                  <tr key={r[0]} className="border-t border-brass-deep/60">
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td className="text-right">{r[2]}</td>
                    <td className="text-right">{r[3]}</td>
                    <td className="text-right">{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* The door */}
        <div
          className="vault-door absolute inset-[3%] rounded-full"
          style={{ filter: "drop-shadow(-20px 10px 30px rgba(0,0,0,0.6))" }}
        >
          <DoorFace />
        </div>
      </div>
    </Reveal>
  );
}

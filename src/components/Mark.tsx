/* The Pinpoint compass, redrawn as one brass mark. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <path d="M50 4 L57 43 L50 50 L43 43 Z" />
        <path d="M50 96 L43 57 L50 50 L57 57 Z" />
        <path d="M4 50 L43 43 L50 50 L43 57 Z" />
        <path d="M96 50 L57 57 L50 50 L57 43 Z" />
        <path d="M22 22 L47 41 L50 50 L41 47 Z" opacity="0.7" />
        <path d="M78 22 L59 47 L50 50 L53 41 Z" opacity="0.7" />
        <path d="M22 78 L41 53 L50 50 L47 59 Z" opacity="0.7" />
        <path d="M78 78 L53 59 L50 50 L59 53 Z" opacity="0.7" />
      </g>
      <circle
        cx="50"
        cy="50"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="50" cy="50" r="2.2" fill="currentColor" />
    </svg>
  );
}

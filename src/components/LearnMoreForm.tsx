"use client";

import { type FormEvent, useId, useState } from "react";

const EMAIL = "phillip@planwithpinpoint.com";

const RANGES = [
  "Under $250,000",
  "$250,000 – $500,000",
  "$500,000 – $1,000,000",
  "Over $1,000,000",
  "Not sure yet",
];

type Errors = Partial<Record<"name" | "email", string>>;

export function LearnMoreForm() {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<null | { name: string }>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const range = String(fd.get("range") ?? "").trim();
    const note = String(fd.get("note") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Your name, so Phil knows who he's writing back to.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "An email address Phil can reply to.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = `I'd like to learn more — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      range ? `Looking at placing: ${range}` : null,
      "",
      note || "I saw the site and I'd like to learn more.",
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent({ name });
  }

  if (sent) {
    return (
      <div
        className="travertine plate plate-on-travertine p-7 sm:p-9"
        aria-live="polite"
      >
        <p className="engraved engraved-ink text-2xl sm:text-3xl">
          Your email is open.
        </p>
        <p className="prose-text mt-4 text-ink-soft">
          Send it as it is, or add anything you want Phil to know first. He
          reads every one himself and replies within a business day. If your
          mail app didn&rsquo;t open, write to{" "}
          <a className="text-brass-ink underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="travertine plate plate-on-travertine p-7 sm:p-9"
      aria-describedby={`${id}-help`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor={`${id}-name`}
            className="signage block text-brass-ink"
          >
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            className="field mt-2"
            placeholder="How Phil should address you"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? `${id}-name-err` : undefined}
          />
          {errors.name && (
            <p id={`${id}-name-err`} className="mt-2 text-sm text-[#8a2f1c]">
              {errors.name}
            </p>
          )}
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor={`${id}-email`}
            className="signage block text-brass-ink"
          >
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className="field mt-2"
            placeholder="Where he should reply"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? `${id}-email-err` : undefined}
          />
          {errors.email && (
            <p id={`${id}-email-err`} className="mt-2 text-sm text-[#8a2f1c]">
              {errors.email}
            </p>
          )}
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor={`${id}-phone`}
            className="signage block text-brass-ink"
          >
            Phone{" "}
            <span className="normal-case tracking-normal text-ink-mute">
              (optional)
            </span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="field mt-2"
            placeholder="If you'd rather talk"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor={`${id}-range`}
            className="signage block text-brass-ink"
          >
            Money you&rsquo;re thinking about
          </label>
          <select
            id={`${id}-range`}
            name="range"
            className="field mt-2"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a range
            </option>
            {RANGES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor={`${id}-note`}
            className="signage block text-brass-ink"
          >
            What made you curious?{" "}
            <span className="normal-case tracking-normal text-ink-mute">
              (optional)
            </span>
          </label>
          <textarea
            id={`${id}-note`}
            name="note"
            rows={3}
            className="field mt-2 resize-y"
            placeholder="A video, a question, a number you want to see"
          />
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="teller teller-on-travertine">
          I&rsquo;d like to learn more
          <Arrow />
        </button>
        <p id={`${id}-help`} className="text-sm leading-snug text-ink-mute">
          Opens an email to Phil. No list, no drip sequence — a person writes
          back.
        </p>
      </div>
    </form>
  );
}

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

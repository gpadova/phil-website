"use client";

import { type ReactNode, useEffect, useRef } from "react";

/**
 * Marks its element `data-reveal="in"` once it enters the viewport.
 * The CSS in globals.css owns the motion; with reduced motion nothing moves.
 * A scroll fallback catches elements a fast scroll jumps past, so nothing
 * stays hidden because it was never observed intersecting.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  attr = "data-reveal",
  threshold = 0.2,
}: {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  attr?: "data-reveal" | "data-print" | "data-vault";
  threshold?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const value = attr === "data-vault" ? "open" : "in";
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      el.setAttribute(attr, value);
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * (1 - threshold * 0.5) || r.bottom < 0)
        reveal();
    };
    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting || e.boundingClientRect.bottom < 0) reveal();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [attr, threshold]);

  const Component = Tag as unknown as "div";
  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${attr === "data-reveal" ? "reveal " : ""}${className}`}
      {...{ [attr]: "" }}
    >
      {children}
    </Component>
  );
}

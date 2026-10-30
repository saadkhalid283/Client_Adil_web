"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

/* Deterministic (no Math.random) so server and client markup match. */
const FLAKES = [
  { x: 6, s: 18, d: 24, l: -3, o: 0.3, r: 1 },
  { x: 17, s: 12, d: 19, l: -11, o: 0.22, r: -1 },
  { x: 29, s: 22, d: 27, l: -17, o: 0.18, r: 1 },
  { x: 41, s: 14, d: 21, l: -6, o: 0.32, r: -1 },
  { x: 53, s: 20, d: 26, l: -22, o: 0.2, r: 1 },
  { x: 64, s: 12, d: 17, l: -9, o: 0.28, r: -1 },
  { x: 75, s: 16, d: 23, l: -14, o: 0.24, r: 1 },
  { x: 84, s: 22, d: 28, l: -25, o: 0.15, r: -1 },
  { x: 92, s: 13, d: 18, l: -5, o: 0.3, r: 1 },
  { x: 47, s: 17, d: 25, l: -19, o: 0.14, r: -1 },
];

function Flake() {
  const arm = (a: number) => (
    <g transform={`rotate(${a})`}>
      <path d="M-9 0H9M6.5 -2.4L9 0L6.5 2.4M-6.5 -2.4L-9 0L-6.5 2.4" />
    </g>
  );
  return (
    <svg className="fx-flake__svg" viewBox="-10 -10 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" aria-hidden="true" focusable="false">
      {arm(0)}
      {arm(60)}
      {arm(120)}
    </svg>
  );
}

/** Ambient background snow for the hero. Pure CSS motion; the observer only pauses it off-screen. */
export function SnowDrift() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      el.classList.toggle("is-paused", !entry.isIntersecting);
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="fx-snow" aria-hidden="true">
      {FLAKES.map((f, i) => (
        <span
          key={i}
          className={`fx-flake${f.r < 0 ? " fx-flake--rev" : ""}`}
          style={{ "--x": `${f.x}%`, "--s": `${f.s}px`, "--d": `${f.d}s`, "--l": `${f.l}s`, "--o": f.o } as CSSProperties}
        >
          <Flake />
        </span>
      ))}
    </div>
  );
}

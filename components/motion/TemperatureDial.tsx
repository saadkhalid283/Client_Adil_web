"use client";

import { useEffect, useRef } from "react";

const FROM = 45;
const TO = 22;
const DURATION = 1600;

/** Count-down runs once per page load (module scope survives route changes). */
let played = false;

interface TemperatureDialProps {
  /** "panel": numeral + thin bar overlaid on the AC illustration display. "compact": horizontal phone strip. */
  variant: "panel" | "compact";
  caption?: string;
}

/**
 * Final state (SSR + first client render): 22°C with the bar full and cool.
 * After mount: numeral 45 -> 22 (rAF, ease-out) while the bar fills and crossfades hot -> cool.
 * Progress is written as CSS vars (--fx-p fill, --fx-c cool opacity); no React state per frame.
 */
export function TemperatureDial({ variant, caption }: TemperatureDialProps) {
  const root = useRef<HTMLDivElement>(null);
  const val = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const r = root.current;
    const v = val.current;
    if (!r || !v || played) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (v.getClientRects().length === 0) return; // hidden twin (other breakpoint)
    let raf = 0;
    let start = 0;
    const set = (t: number) => {
      const e = 1 - Math.pow(1 - t, 3);
      v.textContent = String(Math.round(FROM - (FROM - TO) * e));
      r.style.setProperty("--fx-p", String(0.2 + 0.8 * e));
      r.style.setProperty("--fx-c", String(e));
    };
    const finish = () => {
      v.textContent = String(TO);
      r.style.removeProperty("--fx-p");
      r.style.removeProperty("--fx-c");
      r.classList.remove("is-running");
    };
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / DURATION, 1);
      set(t);
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        played = true;
        finish();
      }
    };
    r.classList.add("is-running");
    set(0);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      finish();
    };
  }, []);

  return (
    <div ref={root} className={`fx-dial fx-dial--${variant}`}>
      <div className="fx-dial__num" dir="ltr" aria-hidden="true">
        <span ref={val}>{TO}</span>
        <span>°C</span>
      </div>
      <div className="fx-dial__side">
        <div className="fx-dial__bar" aria-hidden="true">
          <span className="fx-dial__fill fx-dial__fill--hot" />
          <span className="fx-dial__fill fx-dial__fill--cool" />
        </div>
        {caption ? <p className="fx-dial__cap">{caption}</p> : null}
      </div>
    </div>
  );
}

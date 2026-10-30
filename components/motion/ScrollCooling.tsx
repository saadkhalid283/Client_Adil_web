"use client";

import { useEffect, useRef } from "react";

/** 3px page-progress bar on the header's bottom edge. Coral at the top of the page, indigo at the bottom. */
export function ScrollCooling() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.setProperty("--fx-sp", p.toFixed(4));
    };
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="fx-sc" aria-hidden="true">
      <span className="fx-sc__l fx-sc__l--hot" />
      <span className="fx-sc__l fx-sc__l--cool" />
    </div>
  );
}

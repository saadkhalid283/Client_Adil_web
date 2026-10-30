import type { CSSProperties } from "react";

/* Abstract Jeddah skyline, stroke only, left to right: mid-rise blocks, Jeddah Tower spire,
   King Fahd Fountain jet + spray arcs, mosque (dome + minaret), more blocks, Corniche waterline + 3 wave ticks.
   Keep the key landmarks in the central ~45% so the `slice` crop on phones keeps them. */
const PATHS = [
  "M40 100V62L58 54H96V100",
  "M110 100V44L132 34L154 44V100",
  "M190 100V58H214V46H246V100",
  "M280 100V52L300 44H330V100",
  "M384 100L396 40L402 20L408 40L420 100M391 72H413M395 52H409",
  "M520 98V26",
  "M520 26Q468 30 440 98M520 26Q572 30 600 98",
  "M640 100V72H736V100M656 72Q690 28 724 72M690 50V36",
  "M748 100V46H762V100M746 46L755 28L764 46M746 60H764",
  "M800 100V50H836V38H870V100",
  "M900 100V60L920 52H950V100",
  "M985 100V34L1002 24L1020 34V100",
  "M1060 100V66H1100V100M1130 100V54H1160V100",
  "M0 100H1200",
  "M240 106q6-4 12 0t12 0M520 106q6-4 12 0t12 0M900 106q6-4 12 0t12 0",
];

interface SkylineDrawProps {
  /** "load": draws on page load (hero). "reveal": draws when the wrapper's .is-visible is set by the shell observer. */
  trigger: "load" | "reveal";
  className?: string;
}

/**
 * SSR / no-JS / reduced-motion = fully drawn. The draw-in (stroke-dashoffset) is the one documented
 * non-transform/opacity animation. vector-effect:non-scaling-stroke is deliberately NOT used: it breaks
 * pathLength-normalised dashes in Chrome/Safari, so the stroke is 2 user units (about 1.2 to 2.1px under the slice scale).
 */
export function SkylineDraw({ trigger, className }: SkylineDrawProps) {
  const svg = (
    <svg
      className={`fx-sk fx-sk--${trigger}`}
      viewBox="0 0 1200 110"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS.map((d, i) => (
        <path key={i} d={d} pathLength={1} style={{ "--i": Math.min(i, 14) } as CSSProperties} />
      ))}
    </svg>
  );
  return trigger === "reveal" ? (
    <div className={`fx-skw${className ? ` ${className}` : ""}`} data-reveal aria-hidden="true">
      {svg}
    </div>
  ) : (
    <div className={`fx-skw${className ? ` ${className}` : ""}`} aria-hidden="true">
      {svg}
    </div>
  );
}

import type { CSSProperties } from "react";

const STAR_PATH = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
const GAP = 2;

interface RatingStarsProps {
  /** Rating out of 5; stars fill to exactly this value (4.8 = four full stars and the fifth 80% filled). */
  value: number;
  size?: number;
  /** Adds the one-time sequential pop used in the hero. */
  pop?: boolean;
  label?: string;
}

function Star({ className, index }: { className?: string; index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={{ "--i": index } as CSSProperties}
      focusable="false"
      aria-hidden="true"
    >
      <path d={STAR_PATH} />
    </svg>
  );
}

export function RatingStars({ value, size = 18, pop = false, label }: RatingStarsProps) {
  const v = Math.max(0, Math.min(5, value));
  const whole = Math.floor(v);
  const fillWidth = whole * (size + GAP) + (v - whole) * size;
  const stars = [0, 1, 2, 3, 4];
  return (
    <span
      className="rs"
      dir="ltr"
      role="img"
      aria-label={label ?? `${v} / 5`}
      style={{ "--rs-size": `${size}px` } as CSSProperties}
    >
      <span className="rs__row rs__row--base" aria-hidden="true">
        {stars.map((i) => <Star key={i} index={i} />)}
      </span>
      <span className="rs__row rs__row--fill" style={{ width: `${fillWidth}px` }} aria-hidden="true">
        {stars.map((i) => <Star key={i} index={i} className={pop ? "fx-star" : undefined} />)}
      </span>
    </span>
  );
}

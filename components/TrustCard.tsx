"use client";

import { Star } from "lucide-react";
import type { Translations } from "@/lib/types";
import { trustCopy } from "@/lib/content/trust";

interface TrustProps {
  L: Translations;
  isAr: boolean;
}

/** "Check us before you call" fact card: who runs it, hours, area, rating. */
export function TrustCard({ isAr }: TrustProps) {
  const c = isAr ? trustCopy.ar : trustCopy.en;
  return (
    <div className="trust-card" data-reveal>
      <h3 className="trust-card-title">{c.title}</h3>
      <dl className="trust-dl">
        <div className="trust-row">
          <dt>{c.owner}</dt>
          <dd>{c.ownerValue}</dd>
        </div>
        <div className="trust-row">
          <dt>{c.hours}</dt>
          <dd><bdi>{c.hoursValue}</bdi></dd>
        </div>
        <div className="trust-row">
          <dt>{c.area}</dt>
          <dd>{c.areaValue}</dd>
        </div>
        <div className="trust-row">
          <dt>{c.rating}</dt>
          <dd>
            <span className="trust-stars" role="img" aria-label={c.ratingNote}>
              {[0, 1, 2, 3, 4].map((n) => (
                <Star key={n} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <bdi className="trust-rating">{c.ratingValue}</bdi>
          </dd>
        </div>
      </dl>
    </div>
  );
}

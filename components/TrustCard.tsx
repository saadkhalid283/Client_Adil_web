"use client";

import { RATING } from "@/lib/constants";
import { GoogleLogo } from "@/components/GoogleLogo";
import { RatingStars } from "@/components/RatingStars";
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
            <GoogleLogo size={18} />
            <RatingStars value={Number(RATING)} size={15} label={c.ratingNote} />
            <bdi className="trust-rating">{c.ratingValue}</bdi>
          </dd>
        </div>
      </dl>
    </div>
  );
}

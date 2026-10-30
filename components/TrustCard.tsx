"use client";

import { Banknote, CreditCard, Star } from "lucide-react";
import type { Translations } from "@/lib/types";
import { trustCopy } from "@/lib/content/trust";
import { ServiceAreaSection } from "./ServiceAreaSection";

interface TrustProps {
  L: Translations;
  isAr: boolean;
}

function TrustCard({ isAr }: TrustProps) {
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
        <div className="trust-row">
          <dt>{c.payment}</dt>
          <dd>
            <ul className="trust-pay">
              <li className="trust-pay-chip"><Banknote size={16} aria-hidden="true" />{c.cash}</li>
              <li className="trust-pay-chip"><CreditCard size={16} aria-hidden="true" />{c.mada}</li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  );
}

export function TrustAndArea({ L, isAr }: TrustProps) {
  return (
    <section id="about" className="section-wrap section-wrap--tint trust-sec">
      <div className="section-inner trust-grid" data-stagger>
        <TrustCard L={L} isAr={isAr} />
        <ServiceAreaSection isAr={isAr} />
      </div>
    </section>
  );
}

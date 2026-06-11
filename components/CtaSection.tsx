"use client";

import { MessageCircle, Phone } from "lucide-react";
import type { Translations } from "@/lib/types";
import { wa, PHONE_PRIMARY } from "@/lib/constants";

export function CtaSection({ L }: { L: Translations }) {
  return (
    <section className="cta-section">
      <div className="cta-section__glow" />
      <div className="cta-section__inner" data-reveal>
        <h2 className="cta-section__title">{L.ctaTitle}</h2>
        <p className="cta-section__sub">{L.ctaSub}</p>
        <div className="cta-section__actions">
          <a href={wa(L.floatMsg)} className="btn-wa">
            <MessageCircle size={18} />
            {L.ctaWa}
          </a>
          <a href={`tel:${PHONE_PRIMARY}`} className="btn-outline-light">
            <Phone size={18} />
            {L.ctaCall}
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Phone } from "lucide-react";
import type { Translations } from "@/lib/types";
import { wa, PHONE_PRIMARY } from "@/lib/constants";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SendLocationButton } from "./SendLocationButton";

export function CtaSection({ L }: { L: Translations }) {
  return (
    <section className="cta-section">
      <div className="cta-section__glow" />
      <div className="cta-section__inner" data-reveal>
        <h2 className="cta-section__title">{L.ctaTitle}</h2>
        <p className="cta-section__sub">{L.ctaSub}</p>
        <div className="cta-section__actions">
          <a href={wa(L.floatMsg)} className="btn-wa" data-call onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}>
            <WhatsAppIcon size={20} />
            {L.ctaWa}
          </a>
          <a href={`tel:${PHONE_PRIMARY}`} className="btn-outline-light" data-call onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}>
            <Phone size={18} aria-hidden="true" />
            {L.ctaCall}
          </a>
        </div>
        <SendLocationButton isAr={L.dir === "rtl"} />
      </div>
    </section>
  );
}

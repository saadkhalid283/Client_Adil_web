"use client";

import { MessageCircle, Phone } from "lucide-react";
import type { Translations } from "@/lib/types";
import { wa, PHONE_PRIMARY } from "@/lib/constants";

export function MobileCtaBar({ L }: { L: Translations }) {
  return (
    <div className="mobile-cta-bar" data-mobile>
      <a href={wa(L.floatMsg)} className="mobile-cta-bar__btn mobile-cta-bar__wa" onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}>
        <MessageCircle size={18} />
        {L.waBtn}
      </a>
      <a href={`tel:${PHONE_PRIMARY}`} className="mobile-cta-bar__btn mobile-cta-bar__call" onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}>
        <Phone size={18} />
        {L.callBtn}
      </a>
    </div>
  );
}

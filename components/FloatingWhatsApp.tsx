"use client";

import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Translations } from "@/lib/types";
import { wa } from "@/lib/constants";

export function FloatingWhatsApp({ L }: { L: Translations }) {
  return (
    <a
      href={wa(L.floatMsg)}
      className="float-wa"
      data-desktop
      aria-label="WhatsApp"
      title={L.waBtn}
      onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

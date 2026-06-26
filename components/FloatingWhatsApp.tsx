"use client";

import { MessageCircle } from "lucide-react";
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
      <MessageCircle size={28} />
    </a>
  );
}

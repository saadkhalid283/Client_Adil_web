"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import type { Translations } from "@/lib/types";
import { wa, PHONE_PRIMARY } from "@/lib/constants";
import { heroContent } from "@/lib/content/hero";

/** Auto-hiding bottom dock. Tucks away while any `[data-call]` element is on screen. */
export function MobileCtaBar({ L }: { L: Translations }) {
  const C = L.dir === "rtl" ? heroContent.ar : heroContent.en;
  const [tucked, setTucked] = useState(true);

  useEffect(() => {
    const visible = new Set<Element>();
    let observer: IntersectionObserver | null = null;

    const scan = () => {
      observer?.disconnect();
      visible.clear();
      const targets = document.querySelectorAll("[data-call]");
      if (targets.length === 0) {
        setTucked(false);
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) visible.add(entry.target);
            else visible.delete(entry.target);
          }
          setTucked(visible.size > 0);
        },
        { rootMargin: "0px 0px -72px 0px" },
      );
      targets.forEach((el) => observer?.observe(el));
    };

    scan();
    const t = window.setTimeout(scan, 0);
    window.addEventListener("load", scan);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", scan);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="dock" data-mobile data-tucked={tucked} aria-hidden={tucked} inert={tucked}>
      <a href={wa(L.floatMsg)} className="dock__btn dock__wa tap" onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}>
        <MessageCircle size={20} aria-hidden="true" />
        {C.dockWa}
      </a>
      <a href={`tel:${PHONE_PRIMARY}`} className="dock__btn dock__call tap" onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}>
        <Phone size={20} aria-hidden="true" />
        {C.dockCall}
      </a>
    </div>
  );
}

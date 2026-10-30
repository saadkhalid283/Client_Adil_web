"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone, X } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { NAV_ITEMS } from "@/lib/nav";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";
import { isActivePath } from "./Header";
import { useDialog } from "./useDialog";

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { L, isAr } = useSite();
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useDialog(open, onClose, panelRef, closeRef);
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <div
      ref={panelRef}
      className="sh-overlay sh-menu"
      data-open={open}
      role="dialog"
      aria-modal="true"
      aria-label={isAr ? "القائمة" : "Menu"}
      aria-hidden={!open}
      inert={!open}
    >
      <div className="sh-overlay__bar">
        <span className="sh-overlay__title">{isAr ? "القائمة" : "Menu"}</span>
        <button ref={closeRef} type="button" className="sh-icon-btn tap" onClick={onClose} aria-label={isAr ? "إغلاق" : "Close"}>
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <nav className="sh-menu__nav" aria-label={isAr ? "القائمة الرئيسية" : "Main menu"}>
        <ul>
          {NAV_ITEMS.slice(0, 7).map((n, i) => {
            const active = isActivePath(pathname, n.href);
            return (
              <li key={n.href} style={{ "--i": i } as React.CSSProperties}>
                <Link href={n.href} className={`sh-menu__item${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined} onClick={onClose}>
                  <span className="sh-menu__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="sh-menu__text">
                    <span className="sh-menu__title">{isAr ? n.ar : n.en}</span>
                    <span className="sh-menu__sub">{isAr ? n.subAr : n.subEn}</span>
                  </span>
                  <Arrow className="sh-menu__arrow" size={22} aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sh-menu__foot">
        <div className="sh-menu__prefs">
          <LangToggle />
          <ThemeToggle />
        </div>
        <div className="sh-menu__cta">
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="sh-btn sh-btn--call tap"
            onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}
          >
            <Phone size={20} aria-hidden="true" />
            {L.callBtn}
          </a>
          <a
            href={wa(L.floatMsg)}
            className="sh-btn sh-btn--wa tap"
            onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
          >
            <WhatsAppIcon size={20} />
            {L.waBtn}
          </a>
        </div>
      </div>
    </div>
  );
}

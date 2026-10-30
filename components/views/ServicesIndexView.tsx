"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { AirVent, Fan, Phone, Refrigerator, Snowflake, WashingMachine, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BrandsSection } from "@/components/BrandsSection";
import { CtaSection } from "@/components/CtaSection";
import { useSite } from "@/lib/site-context";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import { SERVICES } from "@/lib/services-registry";
import type { ServiceSlug } from "@/lib/services-registry";

export const SERVICE_ICONS: Record<ServiceSlug, LucideIcon> = {
  "window-ac-repair": AirVent,
  "split-ac-repair": Snowflake,
  "central-ac": Fan,
  "washing-machine-repair": WashingMachine,
  "refrigerator-repair": Refrigerator,
  "appliance-pipe-installation": Wrench,
};

export const accentStyle = (color: string) => ({ "--svc-accent": color }) as CSSProperties;

export function ServicesIndexView() {
  const { L, isAr } = useSite();
  const helpTitle = isAr ? "غير متأكد أي خدمة تحتاج؟" : "Not sure which service you need?";
  const helpText = isAr
    ? "صف المشكلة أو أرسل صورة على واتساب وسنخبرك بما يلزم."
    : "Describe the problem or send a photo on WhatsApp and we will tell you what it needs.";
  const waMsg = isAr ? "السلام عليكم، لدي مشكلة في جهاز وأحتاج مساعدة." : "Hello, I have a problem with an appliance and need help.";

  return (
    <div className="svcp">
      <PageHero
        eyebrowAr="خدماتنا"
        eyebrowEn="Our services"
        titleAr="خدمات إصلاح الأجهزة والتكييف في جدة"
        titleEn="Home Appliance & AC Repair in Jeddah"
        subAr="اختر الخدمة لمعرفة المشاكل التي نفحصها وكيف نعمل."
        subEn="Pick a service to see the problems we look at and how we work."
        crumbs={[
          { ar: "الرئيسية", en: "Home", href: "/" },
          { ar: "خدماتنا", en: "Services" },
        ]}
      />

      <section className="svcp-wrap" aria-label={isAr ? "قائمة الخدمات" : "Services list"}>
        <div className="svcp-inner">
          <ul className="svcp-grid" data-stagger>
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug];
              return (
                <li key={s.slug} data-reveal>
                  <Link href={`/services/${s.slug}`} className="svcp-card lift tap" style={accentStyle(s.color)}>
                    <span className="svcp-icon"><Icon size={26} aria-hidden="true" /></span>
                    <h2 className="svcp-card__name">{isAr ? s.ar : s.en}</h2>
                    <p className="svcp-card__desc">{isAr ? s.dAr : s.dEn}</p>
                    <span className="svcp-card__more">
                      {isAr ? "عرض الخدمة" : "View service"}
                      <span className="svcp-card__arrow" aria-hidden="true">{isAr ? "←" : "→"}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="svcp-wrap svcp-wrap--tint">
        <div className="svcp-inner">
          <div className="svcp-help" data-reveal>
            <h2 className="svcp-help__title">{helpTitle}</h2>
            <p className="svcp-help__text">{helpText}</p>
            <div className="svcp-help__actions">
              <a
                href={wa(waMsg)}
                className="svcp-btn svcp-btn--wa tap"
                data-call
                onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
              >
                <WhatsAppIcon size={22} />
                {L.ctaWa}
              </a>
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="svcp-link"
                onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}
              >
                <Phone size={18} aria-hidden="true" />
                {L.ctaCall}
              </a>
            </div>
          </div>
        </div>
      </section>

      <BrandsSection L={L} />
      <CtaSection L={L} />
    </div>
  );
}

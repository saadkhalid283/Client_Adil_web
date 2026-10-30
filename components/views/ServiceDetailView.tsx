"use client";

import Link from "next/link";
import { AlertCircle, Check } from "lucide-react";
import { RingingPhone } from "@/components/motion/RingingPhone";
import { PageHero } from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CtaSection } from "@/components/CtaSection";
import { useSite } from "@/lib/site-context";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import { SERVICES, getService } from "@/lib/services-registry";
import type { ServiceSlug } from "@/lib/services-registry";
import { serviceContent } from "@/lib/content/services";
import { SERVICE_ICONS, accentStyle } from "./ServicesIndexView";

export function ServiceDetailView({ slug }: { slug: ServiceSlug }) {
  const { L, isAr } = useSite();
  const service = getService(slug);
  const c = serviceContent[slug];
  if (!service) return null;

  const Icon = SERVICE_ICONS[slug];
  const name = isAr ? service.ar : service.en;
  const intro = isAr ? c.introAr : c.introEn;
  const others = SERVICES.filter((s) => s.slug !== slug);
  const phoneLabel = PHONE_PRIMARY;

  return (
    <div className="svcp" style={accentStyle(service.color)}>
      <PageHero
        eyebrowAr="خدمة"
        eyebrowEn="Service"
        titleAr={service.ar}
        titleEn={service.en}
        subAr={c.heroSubAr}
        subEn={c.heroSubEn}
        crumbs={[
          { ar: "الرئيسية", en: "Home", href: "/" },
          { ar: "خدماتنا", en: "Services", href: "/services" },
          { ar: service.ar, en: service.en },
        ]}
      />

      <section className="svcp-wrap">
        <div className="svcp-inner">
          <div className="svcp-intro" data-reveal>
            <span className="svcp-icon svcp-icon--lg"><Icon size={36} aria-hidden="true" /></span>
            <div className="svcp-intro__text">
              {intro.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="svcp-cta" data-reveal>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="svcp-btn svcp-btn--call tap"
              data-call
              onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}
            >
              <RingingPhone size={20} />
              <span>{L.callBtn}</span>
              <span className="svcp-btn__num">{phoneLabel}</span>
            </a>
            <a
              href={wa(isAr ? c.waMessageAr : c.waMessageEn)}
              className="svcp-btn svcp-btn--wa tap"
              data-call
              onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
            >
              <WhatsAppIcon size={22} />
              {L.ctaWa}
            </a>
            <p className="svcp-cta__note">{isAr ? "السعر يُتفق عليه قبل أن نبدأ" : "Price agreed before we start"}</p>
          </div>
        </div>
      </section>

      <section className="svcp-wrap svcp-wrap--tint">
        <div className="svcp-inner">
          <h2 className="svcp-h2" data-reveal>{isAr ? "مشاكل نفحصها" : "Problems we look at"}</h2>
          <ul className="svcp-list" data-stagger>
            {c.problems.map((p) => (
              <li key={p.en} className="svcp-item lift" data-reveal>
                <AlertCircle size={20} aria-hidden="true" />
                <span>{isAr ? p.ar : p.en}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="svcp-wrap">
        <div className="svcp-inner">
          <h2 className="svcp-h2" data-reveal>{isAr ? "ما تحصل عليه" : "What you get"}</h2>
          <ul className="svcp-list" data-stagger>
            {c.included.map((p) => (
              <li key={p.en} className="svcp-item svcp-item--ok lift" data-reveal>
                <Check size={20} aria-hidden="true" />
                <span>{isAr ? p.ar : p.en}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="svcp-wrap svcp-wrap--tint">
        <div className="svcp-inner">
          <h2 className="svcp-h2" data-reveal>{L.howTitle}</h2>
          <ol className="svcp-steps" data-stagger>
            {L.steps.map((s, i) => (
              <li key={s.t} className="svcp-step lift" data-reveal>
                <span className="svcp-step__n" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3 className="svcp-step__t">{s.t}</h3>
                  <p className="svcp-step__d">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="svcp-wrap">
        <div className="svcp-inner">
          <h2 className="svcp-h2" data-reveal>{isAr ? "أسئلة عن هذه الخدمة" : "Questions about this service"}</h2>
          <div className="svcp-faq" data-reveal>
            {c.faqs.map((f) => (
              <details key={f.q.en} className="svcp-faq__item">
                <summary className="svcp-faq__sum">
                  <span className="svcp-faq__q">{isAr ? f.q.ar : f.q.en}</span>
                  <span className="svcp-faq__icon" aria-hidden="true" />
                </summary>
                <p className="svcp-faq__a">{isAr ? f.a.ar : f.a.en}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="svcp-wrap svcp-wrap--tint" aria-label={isAr ? "خدمات أخرى" : "Other services"}>
        <div className="svcp-inner">
          <h2 className="svcp-h2" data-reveal>{isAr ? "خدمات أخرى" : "Other services"}</h2>
          <ul className="svcp-other" data-stagger>
            {others.map((s) => {
              const OtherIcon = SERVICE_ICONS[s.slug];
              return (
                <li key={s.slug} data-reveal>
                  <Link href={`/services/${s.slug}`} className="svcp-other__link lift tap" style={accentStyle(s.color)}>
                    <span className="svcp-icon"><OtherIcon size={20} aria-hidden="true" /></span>
                    <span className="svcp-other__name">{isAr ? s.ar : s.en}</span>
                    <span aria-hidden="true">{isAr ? "←" : "→"}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaSection L={L} />
    </div>
  );
}

"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { AirVent, Fan, Refrigerator, Snowflake, WashingMachine, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SiteProps } from "@/lib/site-props";
import { SERVICES } from "@/lib/services-registry";
import type { ServiceSlug } from "@/lib/services-registry";

const ICONS: Record<ServiceSlug, LucideIcon> = {
  "window-ac-repair": AirVent,
  "split-ac-repair": Snowflake,
  "central-ac": Fan,
  "washing-machine-repair": WashingMachine,
  "refrigerator-repair": Refrigerator,
  "appliance-pipe-installation": Wrench,
};

export function ServicesSection({ L, isAr }: SiteProps) {
  const viewLabel = isAr ? "عرض الخدمة" : "View service";
  const allLabel = isAr ? "كل الخدمات" : "All services";
  const arrow = isAr ? "←" : "→";

  return (
    <section id="services" className="section-wrap section-wrap--tint">
      <div className="section-inner">
        <div className="section-head" style={{ textAlign: "center" }} data-reveal>
          <span className="section-eyebrow">{L.servicesTitle}</span>
          <h2 className="section-title">{L.servicesSub}</h2>
          <div className="section-rule" />
        </div>

        <div className="svc-grid" data-stagger>
          {SERVICES.map((svc) => {
            const Icon = ICONS[svc.slug];
            return (
              <div key={svc.slug} className="svc-cell" data-reveal>
                <Link
                  href={`/services/${svc.slug}`}
                  className="svc-card svc-card--link lift tap"
                  style={{ "--svc-accent": svc.color } as CSSProperties}
                >
                  <span
                    className="svc-icon-wrap"
                    style={{ background: `${svc.color}18`, border: `1.5px solid ${svc.color}30` }}
                  >
                    <Icon size={24} color={svc.color} aria-hidden="true" />
                  </span>
                  <h3 className="svc-title">{isAr ? svc.ar : svc.en}</h3>
                  <p className="svc-desc">{isAr ? svc.dAr : svc.dEn}</p>
                  <span className="svc-cta">
                    {viewLabel}
                    <span className="svc-cta__arrow" aria-hidden="true">{arrow}</span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="svc-all" data-reveal>
          <Link href="/services" className="svc-all__link u-link">
            {allLabel}
            <span aria-hidden="true">{arrow}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

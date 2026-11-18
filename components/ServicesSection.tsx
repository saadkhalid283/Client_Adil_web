"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import type { SiteProps } from "@/lib/site-props";
import { SERVICES } from "@/lib/services-registry";

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
            return (
              <div key={svc.slug} className="svc-cell" data-reveal>
                <Link
                  href={`/services/${svc.slug}`}
                  className="svc-card svc-card--link svc-card--media lift tap"
                  style={{ "--svc-accent": svc.color } as CSSProperties}
                >
                  <span className="svc-media" aria-hidden="true">
                    <img src={`/images/services/${svc.slug}.webp`} width={480} height={480} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span className="svc-body">
                    <h3 className="svc-title">{isAr ? svc.ar : svc.en}</h3>
                    <p className="svc-desc">{isAr ? svc.dAr : svc.dEn}</p>
                    <span className="svc-cta">
                      {viewLabel}
                      <span className="svc-cta__arrow" aria-hidden="true">{arrow}</span>
                    </span>
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

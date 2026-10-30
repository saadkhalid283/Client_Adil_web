"use client";

import type { SiteProps } from "@/lib/site-props";
import { whyData } from "@/lib/data";

export function WhySection({ L, isAr }: SiteProps) {
  const items = whyData(isAr ? "ar" : "en");

  return (
    <section id="why" className="section-wrap section-wrap--dark">
      <div className="section-inner">
        {/* Heading */}
        <div className="section-head" style={{ textAlign: "center" }} data-reveal>
          <span className="section-eyebrow">{L.whyTitle}</span>
          <h2 className="section-title">{L.whySub}</h2>
          <div className="section-rule" />
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
          }}
          data-grid="why"
          data-stagger
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="why-cell" data-reveal>
                <div className="why-card lift">
                  <div className="why-icon-wrap">
                    <Icon size={26} color="var(--teal-2)" aria-hidden="true" />
                  </div>
                  <div className="why-stat">{item.stat}</div>
                  <div className="why-label">{item.label}</div>
                  <p className="why-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

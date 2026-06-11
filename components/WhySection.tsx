"use client";

import type { SiteProps } from "@/lib/site-props";
import { whyData } from "@/lib/data";

export function WhySection({ L, isAr }: SiteProps) {
  const items = whyData(isAr ? "ar" : "en");

  return (
    <section id="why" className="section-wrap section-wrap--dark">
      <div className="section-inner">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "52px" }} data-reveal>
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
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="why-card" data-reveal>
                <div className="why-icon-wrap">
                  <Icon size={26} color="var(--teal-2)" />
                </div>
                <div className="why-stat">{item.stat}</div>
                <div className="why-label">{item.label}</div>
                <p className="why-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

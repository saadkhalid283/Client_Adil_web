"use client";

import type { Translations } from "@/lib/types";
import { BRANDS } from "@/lib/constants";

export function BrandsSection({ L }: { L: Translations }) {
  return (
    <section className="section-wrap section-wrap--tint section-wrap--brands" aria-label={L.brandsTitle}>
      <div className="section-inner">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "34px" }} data-reveal>
          <span className="section-eyebrow">{L.brandsEyebrow}</span>
          <h2 className="section-title section-title--compact">{L.brandsTitle}</h2>
          <div className="section-rule" />
        </div>

        {/* Marquee of brand chips — duplicated row makes the loop seamless */}
        <div className="brands-marquee" data-reveal dir="ltr">
          <div className="brands-track">
            {[0, 1].map((copy) => (
              <div className="brands-row" key={copy} aria-hidden={copy === 1 || undefined}>
                {BRANDS.map((brand) => (
                  <span className="brand-chip" key={brand}>{brand}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

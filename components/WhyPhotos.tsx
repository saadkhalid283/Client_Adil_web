"use client";

import Link from "next/link";
import { useSite } from "@/lib/site-context";
import { whyPhotos } from "@/lib/content/photos";

/** Stepped editorial photo row shown above the "What you get with every job" heading. */
export function WhyPhotos() {
  const { isAr } = useSite();
  return (
    <ul className="wp" data-stagger>
      {whyPhotos.map((p, i) => {
        const label = isAr ? p.label.ar : p.label.en;
        return (
          <li key={p.src} className="wp__item" data-reveal>
            <Link href={p.href} className="wp__link tap" aria-label={label}>
              <span className="wp__frame">
                <img
                  className="wp__img"
                  src={p.src}
                  alt={isAr ? p.alt.ar : p.alt.en}
                  width={1000}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: p.pos }}
                />
                <span className="wp__idx" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="wp__cap">
                  <span>{label}</span>
                  <span className="wp__arrow" aria-hidden="true">{isAr ? "←" : "→"}</span>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

"use client";

import Link from "next/link";
import { useSite } from "@/lib/site-context";
import { SERVICES } from "@/lib/services-registry";
import type { ServiceSlug } from "@/lib/services-registry";
import { ART } from "@/components/HeroArt";
import type { ArtKind } from "@/components/HeroArt";

const ROWS: { slug: ServiceSlug; art: ArtKind }[] = [
  { slug: "washing-machine-repair", art: "washer" },
  { slug: "refrigerator-repair", art: "fridge" },
];

/** Phone-only zigzag under the hero: washer on one side, fridge on the other, each opens its service page. */
export function ApplianceDuo() {
  const { isAr } = useSite();
  const kicker = isAr ? "ولا نتوقف عند المكيفات" : "We fix more than ACs";
  const view = isAr ? "عرض الخدمة" : "View service";
  const arrow = isAr ? "←" : "→";

  return (
    <section className="duo" aria-label={kicker}>
      <div className="duo__inner">
        <p className="duo__kicker" data-reveal>{kicker}</p>
        {ROWS.map((r, i) => {
          const svc = SERVICES.find((s) => s.slug === r.slug);
          if (!svc) return null;
          const a = ART[r.art];
          const img = <img className="duo__img" src={a.src} width={a.width} height={a.height} alt="" loading="lazy" decoding="async" />;
          const text = (
            <div className="duo__text">
              <h2 className="duo__title">{isAr ? svc.ar : svc.en}</h2>
              <p className="duo__desc">{isAr ? svc.dAr : svc.dEn}</p>
              <span className="duo__cta">{view}<span aria-hidden="true">{arrow}</span></span>
            </div>
          );
          return (
            <Link key={r.slug} href={`/services/${r.slug}`} className={`duo__row tap ${i % 2 ? "duo__row--flip" : ""}`} data-reveal>
              {i % 2 ? <>{text}{img}</> : <>{img}{text}</>}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Words } from "@/components/motion/Words";
import { useSite } from "@/lib/site-context";

export interface PageCrumb {
  ar: string;
  en: string;
  href?: string;
}

interface PageHeroProps {
  eyebrowAr: string;
  eyebrowEn: string;
  titleAr: string;
  titleEn: string;
  subAr?: string;
  subEn?: string;
  crumbs: PageCrumb[];
}

/** Shared inner-page banner: breadcrumbs, eyebrow, the page's single h1 and an optional intro. */
export function PageHero({ eyebrowAr, eyebrowEn, titleAr, titleEn, subAr, subEn, crumbs }: PageHeroProps) {
  const { isAr } = useSite();
  const sub = isAr ? subAr : subEn;
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <nav aria-label={isAr ? "مسار التنقل" : "Breadcrumb"} className="crumbs">
          <ol>
            {crumbs.map((c, i) => (
              <li key={`${c.en}-${i}`}>
                {c.href ? <Link href={c.href}>{isAr ? c.ar : c.en}</Link> : <span aria-current="page">{isAr ? c.ar : c.en}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <span className="section-eyebrow section-eyebrow--orange page-hero__eyebrow">{isAr ? eyebrowAr : eyebrowEn}</span>
        <h1 className="page-hero__title"><Words text={isAr ? titleAr : titleEn} trigger="load" /></h1>
        {sub ? <p className="page-hero__sub">{sub}</p> : null}
        <div className="section-rule section-rule--orange section-rule--left" />
      </div>
    </section>
  );
}

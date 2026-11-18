"use client";

import Link from "next/link";
import { Words } from "@/components/motion/Words";
import { useSite } from "@/lib/site-context";
import { PageArt } from "@/components/HeroArt";
import type { ArtKind } from "@/components/HeroArt";

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
  /** Optional appliance picture floated on the far side of the banner. */
  art?: ArtKind;
}

/** Shared inner-page banner: breadcrumbs, eyebrow, the page's single h1 and an optional intro. */
export function PageHero({ eyebrowAr, eyebrowEn, titleAr, titleEn, subAr, subEn, crumbs, art }: PageHeroProps) {
  const { isAr } = useSite();
  const sub = isAr ? subAr : subEn;
  return (
    <section className={art ? "page-hero page-hero--art" : "page-hero"}>
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
        {art ? <PageArt kind={art} /> : null}
        <div className="section-rule section-rule--orange section-rule--left" />
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { Gallery } from "@/components/Gallery";
import { useSiteProps } from "@/lib/site-context";
import { galleryData } from "@/lib/data";
import { pageCopy, workLinks } from "@/lib/content/pages";

export function OurWorkView() {
  const site = useSiteProps();
  const { L, isAr } = site;
  return (
    <>
      <PageHero
        {...pageCopy.work}
        crumbs={[
          { ar: "الرئيسية", en: "Home", href: "/" },
          { ar: "أعمالنا", en: "Our work" },
        ]}
      />
      <Gallery {...site} />
      <section className="section-wrap pg-work">
        <div className="section-inner">
          <ul className="pg-work__grid" data-stagger>
            {galleryData.map((slide, i) => {
              const link = workLinks[i];
              return (
                <li key={slide.image} className="pg-work__card lift" data-reveal>
                  <img
                    className="pg-work__img"
                    src={slide.image}
                    alt={isAr ? slide.altAr : slide.altEn}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pg-work__body">
                    <h3 className="pg-work__title">{isAr ? slide.ar : slide.en}</h3>
                    <p className="pg-work__desc">{isAr ? slide.descAr : slide.descEn}</p>
                    {link ? (
                      <Link className="pg-work__link u-link tap" href={link.href}>
                        {isAr ? link.ar : link.en}
                        <span aria-hidden="true">{isAr ? "←" : "→"}</span>
                      </Link>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <CtaSection L={L} />
    </>
  );
}

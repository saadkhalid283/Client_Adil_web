"use client";

import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { WhySection } from "@/components/WhySection";
import { StraightAnswers } from "@/components/StraightAnswers";
import { TrustCard } from "@/components/TrustCard";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BrandsSection } from "@/components/BrandsSection";
import { useSiteProps } from "@/lib/site-context";
import { pageCopy, aboutCopy } from "@/lib/content/pages";

export function AboutView() {
  const site = useSiteProps();
  const { L, isAr } = site;
  const copy = isAr ? aboutCopy.ar : aboutCopy.en;
  return (
    <>
      <PageHero
        {...pageCopy.about}
        crumbs={[
          { ar: "الرئيسية", en: "Home", href: "/" },
          { ar: "من نحن", en: "About us" },
        ]}
      />
      <WhySection {...site} />
      <StraightAnswers isAr={isAr} />
      <section className="section-wrap pg-trust">
        <div className="section-inner">
          <div className="section-head" data-reveal>
            <h2 className="section-title">{copy.trustTitle}</h2>
            <div className="section-rule section-rule--orange section-rule--left" />
          </div>
          <div data-reveal>
            <TrustCard L={L} isAr={isAr} />
          </div>
        </div>
      </section>
      <HowItWorksSection L={L} />
      <BrandsSection L={L} />
      <CtaSection L={L} />
    </>
  );
}

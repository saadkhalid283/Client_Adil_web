"use client";

import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BrandsSection } from "@/components/BrandsSection";
import { CtaSection } from "@/components/CtaSection";
import { useSiteProps } from "@/lib/site-context";
import { pageCopy } from "@/lib/content/pages";

export function OurWorkView() {
  const site = useSiteProps();
  const { L } = site;
  return (
    <>
      <PageHero
        {...pageCopy.work}
        crumbs={[
          { ar: "الرئيسية", en: "Home", href: "/" },
          { ar: "أعمالنا", en: "Our work" },
        ]}
      />
      <ServicesSection {...site} />
      <HowItWorksSection L={L} />
      <BrandsSection L={L} />
      <CtaSection L={L} />
    </>
  );
}

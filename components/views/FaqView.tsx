"use client";

import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { useSiteProps } from "@/lib/site-context";
import { pageCopy } from "@/lib/content/pages";

export function FaqView() {
  const site = useSiteProps();
  return (
    <>
      <PageHero
        {...pageCopy.faq}
        crumbs={[
          { ar: "الرئيسية", en: "Home", href: "/" },
          { ar: "أسئلة شائعة", en: "FAQ" },
        ]}
      />
      <FaqSection {...site} />
      <CtaSection L={site.L} />
    </>
  );
}

"use client";

import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { useSiteProps } from "@/lib/site-context";
import { pageCopy } from "@/lib/content/pages";

export function ReviewsView() {
  const site = useSiteProps();
  return (
    <>
      <PageHero
        {...pageCopy.reviews}
        crumbs={[
          { ar: "الرئيسية", en: "Home", href: "/" },
          { ar: "آراء العملاء", en: "Reviews" },
        ]}
      />
      <ReviewsSection {...site} />
      <CtaSection L={site.L} />
    </>
  );
}

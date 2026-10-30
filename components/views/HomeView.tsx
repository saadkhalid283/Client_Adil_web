"use client";

import { useSiteProps } from "@/lib/site-context";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { BrandsSection } from "@/components/BrandsSection";
import { WhySection } from "@/components/WhySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";

export function HomeView() {
  const siteProps = useSiteProps();
  const { L } = siteProps;

  return (
    <>
      <Hero L={L} />
      <ServicesSection {...siteProps} />
      <BrandsSection L={L} />
      <WhySection {...siteProps} />
      <HowItWorksSection L={L} />
      <ReviewsSection {...siteProps} />
      <FaqSection {...siteProps} limit={5} />
      <CtaSection L={L} />
    </>
  );
}

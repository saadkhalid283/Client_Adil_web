"use client";

import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { useSiteProps } from "@/lib/site-context";
import { pageCopy } from "@/lib/content/pages";

export function ContactView() {
  const site = useSiteProps();
  return (
    <>
      <PageHero
        {...pageCopy.contact}
        crumbs={[
          { ar: "الرئيسية", en: "Home", href: "/" },
          { ar: "تواصل معنا", en: "Contact" },
        ]}
      />
      <ContactSection {...site} compact />
    </>
  );
}

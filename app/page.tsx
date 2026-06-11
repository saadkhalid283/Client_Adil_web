"use client";

import { useState, useEffect, useCallback } from "react";
import { translations } from "@/lib/translations";
import type { Lang } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { WhySection } from "@/components/WhySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Gallery } from "@/components/Gallery";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileCtaBar } from "@/components/MobileCtaBar";

const SECTION_IDS = ["home", "services", "why", "reviews", "contact"];

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const L = translations[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = L.dir;
    document.documentElement.lang = lang;
  }, [lang, L.dir]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      root.classList.add("reveal-on");
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const siteProps = { lang, L, isAr, go };

  return (
    <div dir={L.dir} className="site-root">
      <Navbar
        L={L}
        scrolled={scrolled}
        active={active}
        onLangToggle={() => setLang(isAr ? "en" : "ar")}
        go={go}
      />
      <Hero L={L} />
      <ServicesSection {...siteProps} />
      <WhySection {...siteProps} />
      <HowItWorksSection L={L} />
      <Gallery {...siteProps} />
      <ReviewsSection {...siteProps} />
      <ContactSection {...siteProps} />
      <CtaSection L={L} />
      <Footer {...siteProps} />
      <FloatingWhatsApp L={L} />
      <MobileCtaBar L={L} />
    </div>
  );
}

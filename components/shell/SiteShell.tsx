"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useSite } from "@/lib/site-context";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Header } from "./Header";
import { MenuOverlay } from "./MenuOverlay";
import { SearchOverlay } from "./SearchOverlay";
import { SiteFooter } from "./SiteFooter";

type Overlay = "menu" | "search" | null;

export function SiteShell({ children }: { children: ReactNode }) {
  const { L, isAr } = useSite();
  const pathname = usePathname();
  const [overlay, setOverlay] = useState<Overlay>(null);
  const mainRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const firstRender = useRef(true);

  const closeOverlay = useCallback(() => setOverlay(null), []);
  const openMenu = useCallback(() => setOverlay("menu"), []);
  const openSearch = useCallback(() => setOverlay("search"), []);

  useLayoutEffect(() => {
    document.documentElement.classList.add("reveal-on");
  }, []);

  // One shared IntersectionObserver for every [data-reveal] element.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    observerRef.current = observer;
    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, []);

  // Route change: re-scan for reveal targets, watch main for late-mounted ones.
  useEffect(() => {
    const scan = () => {
      const observer = observerRef.current;
      if (!observer) return;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => observer.observe(el));
    };
    const timer = window.setTimeout(scan, 30);
    let frame = 0;
    const mutations = new MutationObserver(() => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(scan);
    });
    if (mainRef.current) mutations.observe(mainRef.current, { childList: true, subtree: true });
    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
      mutations.disconnect();
    };
  }, [pathname]);

  // Route change: top of page, overlays closed, focus on main (not on first load).
  useEffect(() => {
    window.scrollTo(0, 0);
    setOverlay(null);
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const t = window.setTimeout(() => mainRef.current?.focus({ preventScroll: true }), 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <a href="#main" className="sh-skip">{isAr ? "تخطَّ إلى المحتوى" : "Skip to content"}</a>
      <Header ref={menuBtnRef} onOpenMenu={openMenu} onOpenSearch={openSearch} menuOpen={overlay === "menu"} />
      <main id="main" key={pathname} ref={mainRef} className="page-enter" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
      <FloatingWhatsApp L={L} />
      <MobileCtaBar L={L} />
      <MenuOverlay open={overlay === "menu"} onClose={closeOverlay} />
      <SearchOverlay open={overlay === "search"} onClose={closeOverlay} />
    </>
  );
}

"use client";

import { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Search, Snowflake } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { NAV_ITEMS } from "@/lib/nav";
import { PHONE_PRIMARY } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";

export function isActivePath(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  menuOpen: boolean;
}

export const Header = forwardRef<HTMLButtonElement, HeaderProps>(function Header(
  { onOpenMenu, onOpenSearch, menuOpen },
  menuBtnRef,
) {
  const { L, isAr } = useSite();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [first, ...rest] = L.brand.split(" ");

  return (
    <header className={`sh-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="sh-header__inner">
        <Link href="/" className="sh-brand" aria-label={L.brand}>
          <span className="sh-brand__logo" aria-hidden="true">
            <Snowflake size={20} color="#fff" />
          </span>
          <span className="sh-brand__text">
            <span className="sh-brand__name">
              <span>{first}</span> {rest.join(" ")}
            </span>
            <span className="sh-brand__sub">{L.brandSub}</span>
          </span>
        </Link>

        <nav className="sh-nav" aria-label={isAr ? "التنقل الرئيسي" : "Primary"}>
          <ul>
            {NAV_ITEMS.map((n) => {
              const active = isActivePath(pathname, n.href);
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={`sh-nav__link u-link${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {isAr ? n.ar : n.en}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sh-actions">
          <button
            type="button"
            className="sh-icon-btn tap"
            onClick={onOpenSearch}
            aria-label={isAr ? "بحث" : "Search"}
            aria-haspopup="dialog"
          >
            <Search size={20} aria-hidden="true" />
          </button>
          <ThemeToggle className="sh-desk" />
          <LangToggle className="sh-lang--hdr" />
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="sh-call sh-desk tap"
            onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}
          >
            <Phone size={16} aria-hidden="true" />
            {L.callBtn}
          </a>
          <button
            ref={menuBtnRef}
            type="button"
            className="sh-icon-btn tap"
            onClick={onOpenMenu}
            aria-label={isAr ? "القائمة" : "Menu"}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
});

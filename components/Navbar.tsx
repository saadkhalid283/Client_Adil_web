"use client";

import { Snowflake, Globe, Phone, MapPin, Clock } from "lucide-react";
import type { Translations } from "@/lib/types";
import { PHONE_PRIMARY } from "@/lib/constants";

interface NavbarProps {
  L: Translations;
  scrolled: boolean;
  active: string;
  onLangToggle: () => void;
  go: (id: string) => void;
}

export function Navbar({ L, scrolled, active, onLangToggle, go }: NavbarProps) {
  const navItems = [
    { id: "home",     label: L.nav.home },
    { id: "services", label: L.nav.services },
    { id: "why",      label: L.nav.why },
    { id: "reviews",  label: L.nav.reviews },
    { id: "contact",  label: L.nav.contact },
  ];

  return (
    <div className="header-stack">
      {/* Top contact bar (desktop) */}
      <div className="topbar" data-desktop>
        <div className="topbar__inner">
          <div className="topbar__group">
            <span className="topbar__item">
              <MapPin size={13} color="var(--orange-2)" />
              {L.address}
            </span>
          </div>
          <div className="topbar__group">
            <span className="topbar__item">
              <Clock size={13} color="var(--orange-2)" />
              {L.hours}
            </span>
            <span className="topbar__dot" />
            <a className="topbar__item" href={`tel:${PHONE_PRIMARY}`}>
              <Phone size={13} color="var(--orange-2)" />
              {PHONE_PRIMARY}
            </a>
          </div>
        </div>
      </div>

      <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          {/* Brand */}
          <div className="navbar__brand" onClick={() => go("home")} role="button" tabIndex={0}>
            <div className="navbar__logo-icon">
              <Snowflake size={20} color="#fff" />
            </div>
            <div>
              <div className="navbar__brand-name">
                <span>{L.brand.split(" ")[0]}</span>{" "}
                {L.brand.split(" ").slice(1).join(" ")}
              </div>
              <div className="navbar__brand-sub">{L.brandSub}</div>
            </div>
          </div>

          {/* Desktop nav links */}
          <nav data-desktop>
            <ul className="navbar__links" style={{ display: "flex" }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <span
                    className={`navlink${active === item.id ? " navlink--active" : ""}`}
                    onClick={() => go(item.id)}
                    role="button"
                    tabIndex={0}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="navbar__actions">
            <button className="lang-toggle" onClick={onLangToggle} type="button">
              <Globe size={14} />
              {L.langBtn}
            </button>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="btn-call navbar__call-btn"
              style={{ padding: "10px 18px", fontSize: "13px" }}
              data-desktop
            >
              <Phone size={14} />
              {L.callBtn}
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

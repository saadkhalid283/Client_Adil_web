"use client";

import { Snowflake, Phone, MapPin, Clock } from "lucide-react";
import type { SiteProps } from "@/lib/site-props";
import { PHONE_PRIMARY } from "@/lib/constants";

export function Footer({ L, isAr, go }: SiteProps) {
  const navItems = [
    { id: "home",     label: L.nav.home },
    { id: "services", label: L.nav.services },
    { id: "why",      label: L.nav.why },
    { id: "reviews",  label: L.nav.reviews },
    { id: "contact",  label: L.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner" data-grid="footer">
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--teal), var(--teal-2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Snowflake size={18} color="#fff" />
            </div>
            <div className="footer-brand-name">
              <span>{L.brand.split(" ")[0]}</span>{" "}
              {L.brand.split(" ").slice(1).join(" ")}
            </div>
          </div>
          <p className="footer-tagline">{L.footerTag}</p>
        </div>

        {/* Quick links */}
        <div>
          <div className="footer-heading">{L.quickLinks}</div>
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="footer-link"
                  onClick={(e) => { e.preventDefault(); go(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <div className="footer-heading">{L.footerContact}</div>
          <div className="footer-contact-item">
            <Phone size={14} color="var(--teal-2)" style={{ flexShrink: 0, marginTop: 2 }} />
            <a href={`tel:${PHONE_PRIMARY}`} onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}>{PHONE_PRIMARY}</a>
          </div>
          <div className="footer-contact-item">
            <MapPin size={14} color="var(--teal-2)" style={{ flexShrink: 0, marginTop: 2 }} />
            <span>{L.address}</span>
          </div>
          <div className="footer-contact-item">
            <Clock size={14} color="var(--teal-2)" style={{ flexShrink: 0, marginTop: 2 }} />
            <span>{L.hours}</span>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {L.brand}. {L.rights}.
          </span>
          <span style={{ color: "rgba(255,255,255,0.22)", fontSize: "11px" }}>
            {isAr ? "مصنوع بـ ♥ في جدة" : "Made with ♥ in Jeddah"}
          </span>
        </div>
      </div>
    </footer>
  );
}

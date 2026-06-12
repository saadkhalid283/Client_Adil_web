"use client";

import { Phone, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import type { SiteProps } from "@/lib/site-props";
import { wa, PHONE_PRIMARY, MAP_SRC, DIRECTIONS_LINK } from "@/lib/constants";

export function ContactSection({ L, isAr }: SiteProps) {
  return (
    <section id="contact" className="section-wrap">
      <div className="section-inner">
        {/* Heading */}
        <div style={{ marginBottom: "48px" }} data-reveal>
          <span className="section-eyebrow section-eyebrow--orange">{L.contactTitle}</span>
          <h2 className="section-title">{L.contactSub}</h2>
          <div className="section-rule section-rule--orange section-rule--left" style={{ marginTop: "16px" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            alignItems: "start",
          }}
          data-grid="contact"
        >
          {/* Left: Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }} data-reveal>
            {/* Primary phone */}
            <div className="contact-card">
              <div
                className="contact-icon-wrap"
                style={{ background: "var(--orange-soft)", border: "1.5px solid var(--orange-border)" }}
              >
                <Phone size={20} color="var(--orange)" />
              </div>
              <div>
                <div className="contact-label">{L.primaryLine}</div>
                <a className="contact-value" href={`tel:${PHONE_PRIMARY}`}>
                  {PHONE_PRIMARY}
                </a>
                <div className="contact-sub">{L.callUs}</div>
              </div>
            </div>

            {/* Address */}
            <div className="contact-card">
              <div
                className="contact-icon-wrap"
                style={{ background: "var(--teal-soft)", border: "1.5px solid var(--teal-border)" }}
              >
                <MapPin size={20} color="var(--teal)" />
              </div>
              <div>
                <div className="contact-label">{L.addressLabel}</div>
                <div className="contact-value" style={{ cursor: "default" }}>{L.address}</div>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-card">
              <div
                className="contact-icon-wrap"
                style={{ background: "rgba(99,102,241,0.1)", border: "1.5px solid rgba(99,102,241,0.2)" }}
              >
                <Clock size={20} color="#6366f1" />
              </div>
              <div>
                <div className="contact-label">{L.hoursLabel}</div>
                <div className="contact-value" style={{ cursor: "default" }}>{L.hours}</div>
              </div>
            </div>

            {/* WhatsApp CTA card */}
            <a className="wa-contact-btn" href={wa(L.floatMsg)}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MessageCircle size={24} color="#fff" />
              </div>
              <div>
                <div className="wa-contact-text">{L.waCard}</div>
                <div className="wa-contact-sub">{L.waCardSub}</div>
              </div>
            </a>
          </div>

          {/* Right: Map + directions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }} data-reveal>
            <div className="map-wrap">
              <iframe
                src={MAP_SRC}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع عادل للتبريد والتكييف"
              />
            </div>
            <a
              href={DIRECTIONS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-call"
              style={{ justifyContent: "center" }}
            >
              <Navigation size={18} />
              {isAr ? "احصل على الاتجاهات" : "Get Directions"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

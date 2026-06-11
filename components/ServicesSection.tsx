"use client";

import type { CSSProperties } from "react";
import { MessageCircle } from "lucide-react";
import type { SiteProps } from "@/lib/site-props";
import { servicesData, moreServices } from "@/lib/data";
import { wa } from "@/lib/constants";

const AVATAR_COLORS = ["#0ea5e9", "#6366f1", "#14b8a6", "#f97316", "#8b5cf6", "#ef4444"];

export function ServicesSection({ L, isAr }: SiteProps) {
  const services = servicesData(isAr ? "ar" : "en");
  const more = moreServices(isAr ? "ar" : "en");

  return (
    <section id="services" className="section-wrap section-wrap--tint">
      <div className="section-inner">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "48px" }} data-reveal>
          <span className="section-eyebrow">{L.servicesTitle}</span>
          <h2 className="section-title">{L.servicesSub}</h2>
          <div className="section-rule" />
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
          }}
          data-grid="services"
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const color = svc.color || AVATAR_COLORS[i % AVATAR_COLORS.length];
            const title = isAr ? svc.ar : svc.en;
            const desc = isAr ? svc.dAr : svc.dEn;
            return (
              <div
                key={i}
                className="svc-card"
                style={{ "--svc-accent": color } as CSSProperties}
                data-reveal
              >
                <div
                  className="svc-icon-wrap"
                  style={{
                    background: `${color}18`,
                    border: `1.5px solid ${color}30`,
                  }}
                >
                  <Icon size={24} color={color} />
                </div>
                <h3 className="svc-title">{title}</h3>
                <p className="svc-desc">{desc}</p>
                <a href={wa(svc.msg)} className="svc-cta">
                  <MessageCircle size={14} />
                  {L.requestBtn}
                  <span style={{ fontSize: "16px" }}>{isAr ? "←" : "→"}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* More services */}
        <div className="more-services-wrap" data-reveal>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--muted)",
              whiteSpace: "nowrap",
            }}
          >
            {L.moreTitle}
          </span>
          {more.map((s, i) => {
            const Icon = s.icon;
            const label = isAr ? s.ar : s.en;
            return (
              <div key={i} className="more-svc-item">
                <Icon size={16} color="var(--teal)" />
                <span className="more-svc-label">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { BadgeCheck, Phone, Zap } from "lucide-react";
import type { Translations } from "@/lib/types";
import { wa, PHONE_PRIMARY, RATING } from "@/lib/constants";
import { reviewsData } from "@/lib/data";
import { heroContent } from "@/lib/content/hero";
import { useOpenNow } from "@/lib/use-open-now";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Hero({ L }: { L: Translations }) {
  const isAr = L.dir === "rtl";
  const C = isAr ? heroContent.ar : heroContent.en;
  const open = useOpenNow();
  const review = reviewsData[0];
  const statusText = open === null ? L.heroEyebrow : open ? C.open : C.closed;
  const statusState = open === null ? "pending" : open ? "open" : "closed";

  const stats = [
    { num: "4.8", suffix: "★", label: isAr ? "تقييم العملاء" : "Customer rating" },
    { num: "7/7", suffix: "", label: isAr ? "متاح كل أيام الأسبوع" : "Available every day" },
    { num: isAr ? "نفس" : "Same", suffix: isAr ? " اليوم" : "-day", label: isAr ? "خدمة سريعة" : "Fast service" },
  ];

  return (
    <section id="home" className="hero-section">
      {/* Soft decorative blobs */}
      <div
        className="hero-blob"
        style={{ top: "-80px", insetInlineEnd: "-60px", width: "340px", height: "340px", background: "radial-gradient(circle, rgba(79,70,229,0.16), transparent 70%)" }}
      />
      <div
        className="hero-blob"
        style={{ bottom: "-60px", insetInlineStart: "-40px", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(245,96,61,0.14), transparent 70%)" }}
      />
      <div className="hero-grid-lines" />

      <div className="hero-inner">
        <div className="hero-grid" style={{ display: "grid" }}>
          {/* Text content */}
          <div className="hero-copy">
            <div className="hero-eyebrow-row">
              <div className="hero-eyebrow-wrap" data-state={statusState}>
                <span className="hero-eyebrow-dot" aria-hidden="true" />
                <span className="hero-eyebrow-text" role="status">{statusText}</span>
              </div>
              <span className="verified-badge">
                <BadgeCheck size={15} />
                {L.verifiedBadge}
              </span>
            </div>

            <h1 className="hero-h1">
              {L.heroTitle1}
              <br />
              <span className="hero-h1-accent">{L.heroTitle2}</span>{" "}
              <span className="hero-h1-guarantee">{L.heroTitle3}</span>
            </h1>

            <p className="hero-sub">{L.heroSub}</p>

            <div className="hero-actions">
              <a href={`tel:${PHONE_PRIMARY}`} data-call className="hero-call tap" onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}>
                <Phone size={24} aria-hidden="true" />
                <span className="hero-call__text">
                  <span className="hero-call__label">{C.callLabel}</span>
                  <span className="hero-call__num" dir="ltr">{PHONE_PRIMARY}</span>
                </span>
              </a>
              <a href={wa(L.heroMsg)} className="hero-wa tap" onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}>
                <WhatsAppIcon size={20} />
                {C.waLabel}
              </a>
            </div>
            <p className="hero-micro">{C.microcopy}</p>

            <div className="hero-proof">
              <div className="hero-proof__line">
                <strong dir="ltr">{RATING}</strong>
                <span className="hero-proof__stars" aria-hidden="true">★★★★★</span>
                <span>· 18 {C.ratingLine}</span>
              </div>
              <figure className="hero-quote">
                <blockquote>{isAr ? review.ar : review.en}</blockquote>
                <figcaption>{review.name}</figcaption>
              </figure>
            </div>

            <div className="hero-badges">
              {L.badges.map((b, i) => (
                <span key={i} className="hero-badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="hero-illus fade-in" data-desktop>
            <div className="hero-float-rating">
              <div className="hero-float-stars">★★★★★</div>
              <div className="hero-float-label">{L.heroRating}</div>
            </div>

            <div className="hero-illus-card">
              <svg
                viewBox="0 0 360 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", maxWidth: "340px" }}
                aria-hidden="true"
              >
                {/* Backdrop */}
                <rect x="60" y="0" width="240" height="240" className="hero-svg-bg" />

                {/* AC unit body */}
                <rect x="44" y="48" width="272" height="100" className="hero-svg-body" strokeWidth="2.5" />

                {/* Display panel */}
                <rect x="62" y="66" width="88" height="50" className="hero-svg-brand" />
                <text x="106" y="98" fill="#ffffff" fontSize="20" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">22°C</text>

                {/* Power light */}
                <rect x="164" y="74" width="12" height="12" className="hero-svg-coral" />

                {/* Vent louvres */}
                {[104, 118, 132].map((y) => (
                  <line key={y} x1="170" y1={y} x2="300" y2={y} className="hero-svg-louvre" strokeWidth="3" />
                ))}

                {/* Cold air streams */}
                {[120, 160, 200, 240].map((x, i) => (
                  <path
                    key={x}
                    d={`M ${x} 162 C ${x + 14} 178, ${x - 6} 194, ${x + 14} 210`}
                    className="hero-svg-air"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray="2,8"
                    opacity={0.8 - i * 0.12}
                  />
                ))}

                {/* Snowflakes */}
                <g className="hero-svg-air" strokeWidth="2" opacity="0.75">
                  <g transform="translate(150 196)">
                    <line x1="-7" y1="0" x2="7" y2="0" /><line x1="0" y1="-7" x2="0" y2="7" />
                    <line x1="-5" y1="-5" x2="5" y2="5" /><line x1="-5" y1="5" x2="5" y2="-5" />
                  </g>
                  <g transform="translate(214 220)">
                    <line x1="-6" y1="0" x2="6" y2="0" /><line x1="0" y1="-6" x2="0" y2="6" />
                    <line x1="-4" y1="-4" x2="4" y2="4" /><line x1="-4" y1="4" x2="4" y2="-4" />
                  </g>
                </g>

                {/* Technician badge: wrench on a coral square */}
                <rect x="250" y="170" width="72" height="72" className="hero-svg-coral" />
                <g transform="translate(286 206) rotate(45)">
                  <path d="M -3 -16 a 9 9 0 1 0 9 9 L 6 14 a 5 5 0 0 1 -10 0 L -4 -7 a 9 9 0 0 0 1 -9 Z" fill="#ffffff" />
                </g>
              </svg>
            </div>

            <div className="hero-float-fast">
              <Zap size={16} color="var(--orange)" aria-hidden="true" />
              <span>{L.badges[0]}</span>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="hero-stats" data-stagger>
          {stats.map((s) => (
            <div key={s.label} className="hero-stat" data-reveal>
              <div className="hero-stat__num">
                {s.num}<span>{s.suffix}</span>
              </div>
              <div className="hero-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

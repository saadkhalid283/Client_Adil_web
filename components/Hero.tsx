"use client";

import { MessageCircle, Phone, Zap } from "lucide-react";
import type { Translations } from "@/lib/types";
import { wa, PHONE_PRIMARY } from "@/lib/constants";

export function Hero({ L }: { L: Translations }) {
  const isAr = L.dir === "rtl";

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
          <div className="rise">
            <div className="hero-eyebrow-wrap">
              <span className="hero-eyebrow-dot" />
              <span className="hero-eyebrow-text">{L.heroEyebrow}</span>
            </div>

            <h1 className="hero-h1">
              {L.heroTitle1}
              <br />
              <span className="hero-h1-accent">{L.heroTitle2}</span>{" "}
              <span className="hero-h1-guarantee">{L.heroTitle3}</span>
            </h1>

            <p className="hero-sub">{L.heroSub}</p>

            <div className="hero-actions">
              <a href={`tel:${PHONE_PRIMARY}`} className="btn-call">
                <Phone size={18} />
                {L.heroCall}
              </a>
              <a href={wa(L.heroMsg)} className="btn-wa">
                <MessageCircle size={18} />
                {L.heroWa}
              </a>
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
              >
                {/* Soft backdrop circle */}
                <circle cx="180" cy="120" r="120" fill="#eef0ff" />

                {/* AC unit body */}
                <rect x="44" y="48" width="272" height="100" rx="18" fill="#ffffff" stroke="#4f46e5" strokeWidth="2.5" />
                <rect x="44" y="48" width="272" height="100" rx="18" fill="url(#acFade)" opacity="0.5" />

                {/* Display panel */}
                <rect x="62" y="66" width="88" height="50" rx="10" fill="#4f46e5" />
                <text x="106" y="98" fill="#ffffff" fontSize="20" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">22°C</text>

                {/* Power light */}
                <circle cx="170" cy="80" r="7" fill="#f5603d" />

                {/* Vent louvres */}
                {[104, 118, 132].map((y, i) => (
                  <line key={i} x1="170" y1={y} x2="300" y2={y} stroke="#c7c2f5" strokeWidth="3" strokeLinecap="round" />
                ))}

                {/* Cold air streams */}
                {[120, 160, 200, 240].map((x, i) => (
                  <path
                    key={i}
                    d={`M ${x} 162 C ${x + 14} 178, ${x - 6} 194, ${x + 14} 210`}
                    stroke="#6366f1"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="2,8"
                    opacity={0.8 - i * 0.12}
                  />
                ))}

                {/* Snowflakes */}
                <g stroke="#6366f1" strokeWidth="2" strokeLinecap="round" opacity="0.75">
                  <g transform="translate(150 196)">
                    <line x1="-7" y1="0" x2="7" y2="0" /><line x1="0" y1="-7" x2="0" y2="7" />
                    <line x1="-5" y1="-5" x2="5" y2="5" /><line x1="-5" y1="5" x2="5" y2="-5" />
                  </g>
                  <g transform="translate(214 220)">
                    <line x1="-6" y1="0" x2="6" y2="0" /><line x1="0" y1="-6" x2="0" y2="6" />
                    <line x1="-4" y1="-4" x2="4" y2="4" /><line x1="-4" y1="4" x2="4" y2="-4" />
                  </g>
                </g>

                {/* Technician badge — wrench in coral disc */}
                <circle cx="286" cy="206" r="40" fill="#f5603d" />
                <circle cx="286" cy="206" r="40" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.5" />
                <g transform="translate(286 206) rotate(45)" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" fill="none">
                  <path d="M -3 -16 a 9 9 0 1 0 9 9 L 6 14 a 5 5 0 0 1 -10 0 L -4 -7 a 9 9 0 0 0 1 -9 Z" fill="#ffffff" stroke="none" />
                </g>

                <defs>
                  <linearGradient id="acFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#eef0ff" />
                    <stop offset="1" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="hero-float-fast">
              <Zap size={16} color="#fb7a5a" />
              <span>{L.badges[0]}</span>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="hero-stats rise" data-reveal>
          {stats.map((s, i) => (
            <div key={i} className="hero-stat">
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

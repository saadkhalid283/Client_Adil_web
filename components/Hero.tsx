"use client";

import type { CSSProperties } from "react";
import { BadgeCheck, Zap } from "lucide-react";
import { RingingPhone } from "@/components/motion/RingingPhone";
import type { Translations } from "@/lib/types";
import { wa, PHONE_PRIMARY, RATING } from "@/lib/constants";
import { GoogleLogo } from "@/components/GoogleLogo";
import { RatingStars } from "@/components/RatingStars";
import { reviewsData } from "@/lib/data";
import { heroContent } from "@/lib/content/hero";
import { useOpenNow } from "@/lib/use-open-now";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { fxContent } from "@/lib/content/fx";
import { Words } from "@/components/motion/Words";
import { TemperatureDial } from "@/components/motion/TemperatureDial";
import { SnowDrift } from "@/components/motion/SnowDrift";
import { SkylineDraw } from "@/components/motion/SkylineDraw";
import { HeroArt } from "@/components/HeroArt";

const HERO_KEYWORDS = {
  ar: ["المكيفات", "الثلاجات", "الغسالات"],
  en: ["ACs", "fridges", "washing machines"],
};

/** Wraps the appliance words in <strong> so they stand out in the intro line. */
function emphasize(text: string, words: string[]) {
  const re = new RegExp(`(${words.join("|")})`, "g");
  return text.split(re).map((part, i) =>
    words.includes(part) ? <strong key={i} className="hero-sub__kw">{part}</strong> : part,
  );
}

export function Hero({ L }: { L: Translations }) {
  const isAr = L.dir === "rtl";
  const C = isAr ? heroContent.ar : heroContent.en;
  const open = useOpenNow();
  const FX = isAr ? fxContent.ar : fxContent.en;
  const review = reviewsData[0];
  const statusText = open === null ? L.heroEyebrow : open ? C.open : C.closed;
  const statusState = open === null ? "pending" : open ? "open" : "closed";

  const stats = [
    { num: isAr ? "بضمان" : "Guaranteed", suffix: "", label: isAr ? "على كل إصلاح" : "On every repair" },
    { num: "24/7", suffix: "", label: isAr ? "خدمة طوارئ على مدار الساعة" : "Emergency service, day and night" },
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
        style={{ bottom: "-60px", insetInlineStart: "-40px", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(214, 64, 28,0.14), transparent 70%)" }}
      />
      <div className="hero-grid-lines" />
      <SnowDrift />
      <SkylineDraw trigger="load" />

      <div className="hero-inner">
        <div className="hero-grid" style={{ display: "grid" }}>
          {/* Text content */}
          <div className="hero-copy">
            <div className="hero-eyebrow-row">
              <span className="verified-badge">
                <BadgeCheck size={14} />
                {L.verifiedBadge}
              </span>
              <div className="hero-eyebrow-wrap" data-state={statusState}>
                <span className="hero-eyebrow-dot" aria-hidden="true" />
                <span className="hero-eyebrow-text" role="status">{statusText}</span>
              </div>
            </div>

            <h1 className="hero-h1">
              <Words text={L.heroTitle1} trigger="load" />{" "}
              <br />
              <span className="hero-h1-accent"><Words text={L.heroTitle2} trigger="load" /></span>{" "}
              <span className="hero-h1-guarantee"><Words text={L.heroTitle3} trigger="load" /></span>
            </h1>

            <p className="hero-sub">{emphasize(L.heroSub, isAr ? HERO_KEYWORDS.ar : HERO_KEYWORDS.en)}</p>

            <div className="hero-actions">
              <a href={`tel:${PHONE_PRIMARY}`} data-call className="hero-call tap" onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}>
                <RingingPhone size={24} />
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
                <GoogleLogo size={20} />
                <strong dir="ltr">{RATING}</strong>
                <span className="hero-proof__stars" data-reveal>
                  <RatingStars value={Number(RATING)} size={16} pop />
                </span>
                <span>· 18 {C.ratingLine}</span>
              </div>
              <HeroArt variant="m" />
              <figure className="hero-quote">
                <blockquote>{isAr ? review.ar : review.en}</blockquote>
                <figcaption>{review.name}</figcaption>
              </figure>
              <TemperatureDial variant="compact" caption={FX.dialCaption} />
            </div>

            <div className="hero-badges">
              {L.badges.map((b, i) => (
                <span key={i} className="hero-badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Product art */}
          <div className="hero-illus hero-illus--art fade-in" data-desktop>
            <div className="hero-float-rating">
              <div className="hero-float-stars">★★★★★</div>
              <div className="hero-float-label">{L.heroRating}</div>
            </div>

            <HeroArt variant="d" />

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

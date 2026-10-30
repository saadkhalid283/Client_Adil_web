"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { SiteProps } from "@/lib/site-props";
import { reviewsData } from "@/lib/data";
import { RATING } from "@/lib/constants";

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #0ea5e9, #0284c7)",
  "linear-gradient(135deg, #6366f1, #4f46e5)",
  "linear-gradient(135deg, #14b8a6, #0d9488)",
  "linear-gradient(135deg, #f97316, #ea580c)",
  "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  "linear-gradient(135deg, #ef4444, #dc2626)",
];

const AR_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

function pad(n: number, isAr: boolean): string {
  const s = String(n).padStart(2, "0");
  return isAr ? s.replace(/\d/g, (d) => AR_DIGITS[Number(d)]) : s;
}

export function ReviewsSection({ L, isAr }: SiteProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const total = reviewsData.length;

  // Track which card is in view (works in LTR and RTL, no scrollLeft maths).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry;
          }
        }
        if (best) {
          const idx = cards.indexOf(best.target as HTMLElement);
          if (idx >= 0) setActive(idx);
        }
      },
      { root: track, threshold: [0.6, 0.9] }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", inline: "start", block: "nearest" });
    setActive(index);
  }, []);

  const PrevIcon = isAr ? ChevronRight : ChevronLeft;
  const NextIcon = isAr ? ChevronLeft : ChevronRight;
  const label = (i: number) =>
    isAr ? `التقييم ${i + 1} من ${total}` : `Review ${i + 1} of ${total}`;

  return (
    <section id="reviews" className="section-wrap section-wrap--tint reviews">
      <div className="section-inner">
        <div className="reviews__head" data-reveal>
          <span className="section-eyebrow">{L.reviewsTitle}</span>
          <h2 className="section-title">{L.reviewsSub}</h2>
          <div className="section-rule" />
        </div>

        {/* Rating banner */}
        <div className="rating-banner" data-reveal>
          <div className="rating-banner__score">{isAr ? "٤.٨" : RATING}</div>
          <div>
            <div className="rating-banner__stars">★★★★★</div>
            <div className="rating-banner__text">
              {isAr ? "تقييم عملائنا على جوجل" : "Customer rating on Google"}
            </div>
          </div>
          <div className="rating-banner__divider" aria-hidden="true" />
          <div>
            <div className="rating-banner__starrow">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} fill={s <= 4 ? "#fbbf24" : "none"} color="#fbbf24" strokeWidth={1.5} />
              ))}
            </div>
            <div className="rating-banner__text">
              {isAr ? "مبني على تقييمات حقيقية" : "Based on real reviews"}
            </div>
          </div>
        </div>

        {/* Carousel on phone, grid from 880px (same markup) */}
        <div className="rev-carousel" data-reveal>
          <ul
            ref={trackRef}
            className="rev-track"
            tabIndex={0}
            aria-label={L.reviewsTitle}
          >
            {reviewsData.map((rev, i) => {
              const text = isAr ? rev.ar : rev.en;
              return (
                <li key={rev.name} className="rev-card lift" aria-label={label(i)}>
                  <div className="rev-quote" aria-hidden="true">&quot;</div>
                  <div className="rev-stars" role="img" aria-label={isAr ? `${rev.stars} من 5 نجوم` : `${rev.stars} out of 5 stars`}>
                    {"★".repeat(rev.stars)}
                    {"☆".repeat(5 - rev.stars)}
                  </div>
                  <p className="rev-text">{text}</p>
                  <div className="rev-footer">
                    <div
                      className="rev-avatar"
                      style={{ background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length] }}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <div className="rev-name">{rev.name}</div>
                      {rev.guide && (
                        <div className="rev-guide">
                          <Star size={11} fill="var(--teal)" color="var(--teal)" />
                          {L.localGuide}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="rev-controls">
            <button
              type="button"
              className="rev-nav tap"
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label={isAr ? "التقييم السابق" : "Previous review"}
            >
              <PrevIcon size={20} aria-hidden="true" />
            </button>

            <div className="rev-meta">
              <span className="rev-counter" aria-live="polite">
                {pad(active + 1, isAr)} / {pad(total, isAr)}
              </span>
              <div className="rev-dots">
                {reviewsData.map((rev, i) => (
                  <button
                    key={rev.name}
                    type="button"
                    className="rev-dot"
                    onClick={() => goTo(i)}
                    aria-label={label(i)}
                    aria-current={i === active ? "true" : undefined}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              className="rev-nav tap"
              onClick={() => goTo(Math.min(total - 1, active + 1))}
              disabled={active === total - 1}
              aria-label={isAr ? "التقييم التالي" : "Next review"}
            >
              <NextIcon size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Star } from "lucide-react";
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

export function ReviewsSection({ L, isAr }: SiteProps) {
  return (
    <section id="reviews" className="section-wrap section-wrap--tint">
      <div className="section-inner">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }} data-reveal>
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
          <div
            style={{
              width: 1,
              height: 40,
              background: "var(--line)",
              margin: "0 8px",
            }}
          />
          <div>
            <div
              style={{
                display: "flex",
                gap: "4px",
                marginBottom: "4px",
              }}
            >
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={18} fill={s <= 4 ? "#fbbf24" : "none"} color="#fbbf24" strokeWidth={1.5} />
              ))}
            </div>
            <div className="rating-banner__text">
              {isAr ? "مبني على تقييمات حقيقية" : "Based on real reviews"}
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
          }}
          data-grid="rev"
        >
          {reviewsData.map((rev, i) => {
            const text = isAr ? rev.ar : rev.en;
            return (
              <div key={i} className="rev-card" data-reveal>
                {/* Quote mark */}
                <div className="rev-quote" aria-hidden="true">"</div>

                {/* Stars */}
                <div className="rev-stars">
                  {"★".repeat(rev.stars)}
                  {"☆".repeat(5 - rev.stars)}
                </div>

                {/* Text */}
                <p className="rev-text">{text}</p>

                {/* Footer */}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

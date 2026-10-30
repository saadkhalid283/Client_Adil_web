"use client";

import { Check, Info } from "lucide-react";
import { straightAnswers } from "@/lib/content/trust";

export function StraightAnswers({ isAr }: { isAr: boolean }) {
  const c = isAr ? straightAnswers.ar : straightAnswers.en;
  return (
    <section className="section-wrap straight-sec">
      <div className="section-inner">
        <div className="trust-head" data-reveal>
          <span className="section-eyebrow">{c.eyebrow}</span>
          <h2 className="section-title">{c.title}</h2>
          <div className="section-rule" />
        </div>

        <div className="straight-grid" data-stagger>
          <div className="straight-card straight-card--get" data-reveal>
            <h3 className="straight-title">{c.getTitle}</h3>
            <ul className="straight-list">
              {c.get.map((t) => (
                <li key={t}>
                  <span className="straight-icon straight-icon--ok" aria-hidden="true">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="straight-card straight-card--know" data-reveal>
            <h3 className="straight-title">{c.knowTitle}</h3>
            <ul className="straight-list">
              {c.know.map((t) => (
                <li key={t}>
                  <span className="straight-icon straight-icon--info" aria-hidden="true">
                    <Info size={16} strokeWidth={2.5} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

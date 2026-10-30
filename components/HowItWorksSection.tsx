"use client";

import type { Translations } from "@/lib/types";

export function HowItWorksSection({ L }: { L: Translations }) {
  return (
    <section className="section-wrap section-wrap--tint process-sec">
      <div className="section-inner">
        <div className="process-head" data-reveal>
          <span className="section-eyebrow section-eyebrow--orange">{L.howTitle}</span>
          <h2 className="section-title">{L.howSub}</h2>
          <div className="section-rule section-rule--orange" />
        </div>

        <ol className="process-list" data-reveal>
          <li className="process-line" aria-hidden="true" />
          {L.steps.map((step, i) => (
            <li key={i} className="process-step" style={{ ["--i" as string]: i }}>
              <span className="process-node" aria-hidden="true">{i + 1}</span>
              <div className="process-card">
                <h3 className="process-title">{step.t}</h3>
                <p className="process-desc">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

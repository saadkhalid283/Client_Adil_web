"use client";

import type { Translations } from "@/lib/types";

export function HowItWorksSection({ L }: { L: Translations }) {
  return (
    <section className="section-wrap section-wrap--tint">
      <div className="section-inner">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "52px" }} data-reveal>
          <span className="section-eyebrow section-eyebrow--orange">{L.howTitle}</span>
          <h2 className="section-title">{L.howSub}</h2>
          <div className="section-rule section-rule--orange" />
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
          data-grid="how"
        >
          {L.steps.map((step, i) => (
            <div key={i} className="how-step" data-reveal>
              {/* Connector line (desktop only) */}
              {i < L.steps.length - 1 && <div className="step-connector" />}

              <div className="how-num">{i + 1}</div>

              <div
                style={{
                  background: "#fff",
                  border: "1.5px solid var(--line)",
                  borderRadius: "16px",
                  padding: "24px 20px",
                  width: "100%",
                  transition: "box-shadow 0.22s ease, transform 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "var(--shadow-md)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "";
                  el.style.transform = "";
                }}
              >
                <h3 className="how-title">{step.t}</h3>
                <p className="how-desc" style={{ marginTop: "8px" }}>{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { MessageCircle } from "lucide-react";
import type { SiteProps } from "@/lib/site-props";
import { wa } from "@/lib/constants";
import { faqContent, buildFaqLd } from "@/lib/content/faq";

const faqLd = buildFaqLd(faqContent.ar.items);

export function FaqSection({ lang, isAr }: SiteProps) {
  const c = faqContent[lang];

  return (
    <section id="faq" className="section-wrap faq">
      <div className="section-inner faq__inner">
        <div className="faq__head" data-reveal>
          <span className="section-eyebrow">{c.eyebrow}</span>
          <h2 className="section-title">{c.title}</h2>
          <div className="section-rule" />
        </div>

        <div className="faq__list" data-reveal>
          {c.items.map((item) => (
            <details key={item.q} className="faq__item">
              <summary className="faq__summary">
                <span className="faq__q">{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <div className="faq__panel">
                <p className="faq__a">{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="faq__more" data-reveal>
          <p className="faq__more-title">{c.moreTitle}</p>
          <a
            href={wa(c.moreMsg)}
            className="faq__more-btn tap"
            data-call
            dir={isAr ? "rtl" : "ltr"}
            onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
          >
            <MessageCircle size={20} aria-hidden="true" />
            {c.moreCta}
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </section>
  );
}

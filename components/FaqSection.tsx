"use client";

import Link from "next/link";
import type { SiteProps } from "@/lib/site-props";
import { wa } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { faqContent, buildFaqLd } from "@/lib/content/faq";

const faqLd = buildFaqLd(faqContent.ar.items);

/**
 * `limit`: show only the first N questions plus a "See all questions" link to /faq.
 * FAQPage JSON-LD is emitted only when `limit` is undefined (the full list on /faq).
 */
export function FaqSection({ lang, isAr, limit }: SiteProps & { limit?: number }) {
  const c = faqContent[lang];
  const items = limit === undefined ? c.items : c.items.slice(0, limit);
  const truncated = items.length < c.items.length;
  const seeAll = isAr ? "عرض كل الأسئلة" : "See all questions";

  return (
    <section id="faq" className="section-wrap faq">
      <div className="section-inner faq__inner">
        <div className="faq__head" data-reveal>
          <span className="section-eyebrow">{c.eyebrow}</span>
          <h2 className="section-title">{c.title}</h2>
          <div className="section-rule" />
        </div>

        <div className="faq__list" data-reveal>
          {items.map((item) => (
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

        {truncated && (
          <div className="faq__all" data-reveal>
            <Link href="/faq" className="faq__all-link u-link">
              {seeAll}
              <span aria-hidden="true">{isAr ? "←" : "→"}</span>
            </Link>
          </div>
        )}

        <div className="faq__more" data-reveal>
          <p className="faq__more-title">{c.moreTitle}</p>
          <a
            href={wa(c.moreMsg)}
            className="faq__more-btn tap"
            data-call
            dir={isAr ? "rtl" : "ltr"}
            onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
          >
            <WhatsAppIcon size={20} />
            {c.moreCta}
          </a>
        </div>
      </div>

      {limit === undefined && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
    </section>
  );
}

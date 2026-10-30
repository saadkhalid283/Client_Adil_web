"use client";

import Link from "next/link";
import { Clock, MapPin, Phone, Snowflake } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { NAV_ITEMS } from "@/lib/nav";
import { SERVICES } from "@/lib/services-registry";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function SiteFooter() {
  const { L, isAr } = useSite();
  const [first, ...rest] = L.brand.split(" ");

  return (
    <footer className="sh-footer">
      <div className="sh-footer__inner">
        <div className="sh-footer__brand">
          <Link href="/" className="sh-footer__logo">
            <span className="sh-brand__logo" aria-hidden="true"><Snowflake size={20} color="#fff" /></span>
            <span className="sh-footer__name"><span>{first}</span> {rest.join(" ")}</span>
          </Link>
          <p>{L.footerTag}</p>
        </div>

        <div>
          <h2 className="sh-footer__h">{isAr ? "الصفحات" : "Pages"}</h2>
          <ul>
            {NAV_ITEMS.map((n) => (
              <li key={n.href}><Link href={n.href} className="sh-footer__link u-link">{isAr ? n.ar : n.en}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="sh-footer__h">{isAr ? "الخدمات" : "Services"}</h2>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="sh-footer__link u-link">{isAr ? s.ar : s.en}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="sh-footer__h">{L.footerContact}</h2>
          <ul>
            <li>
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="sh-footer__link"
                onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}
              >
                <Phone size={16} aria-hidden="true" />
                <span dir="ltr">{PHONE_PRIMARY}</span>
              </a>
            </li>
            <li>
              <a
                href={wa(L.floatMsg)}
                className="sh-footer__link"
                onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
              >
                <WhatsAppIcon size={16} />
                {L.waBtn}
              </a>
            </li>
            <li className="sh-footer__row"><Clock size={16} aria-hidden="true" />{L.hours}</li>
            <li className="sh-footer__row"><MapPin size={16} aria-hidden="true" />{L.address}</li>
          </ul>
        </div>
      </div>

      <div className="sh-footer__bottom">
        <span>© {new Date().getFullYear()} {L.brand}. {L.rights}.</span>
        <span className="sh-footer__credit">
          {isAr ? "مصنوع بعناية في جدة" : "Made with care in Jeddah"}
          <span aria-hidden="true"> · </span>
          <a className="sh-footer__mail" href="mailto:saadkhh212@gmail.com">saadkhh212@gmail.com</a>
        </span>
      </div>
    </footer>
  );
}

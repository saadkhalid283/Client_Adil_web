"use client";

import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import type { SiteProps } from "@/lib/site-props";
import { SendLocationButton } from "./SendLocationButton";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { wa, PHONE_PRIMARY, MAP_SRC, DIRECTIONS_LINK } from "@/lib/constants";
import { contactCopy } from "@/lib/content/pages";

export function ContactSection({ L, isAr, compact }: SiteProps & { compact?: boolean }) {
  const copy = isAr ? contactCopy.ar : contactCopy.en;
  return (
    <section id="contact" className="section-wrap pg-contact">
      <div className="section-inner">
        {compact ? null : (
          <div className="section-head" data-reveal>
            <span className="section-eyebrow section-eyebrow--orange">{L.contactTitle}</span>
            <h2 className="section-title">{L.contactSub}</h2>
            <div className="section-rule section-rule--orange section-rule--left" />
          </div>
        )}

        <div className="pg-contact__grid" data-grid="contact">
          <div className="pg-contact__col" data-reveal>
            <div className="contact-card">
              <div className="contact-icon-wrap pg-contact__icon pg-contact__icon--orange">
                <Phone size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="contact-label">{L.primaryLine}</div>
                <a
                  className="contact-value contact-value--link"
                  data-call
                  href={`tel:${PHONE_PRIMARY}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.trackPhoneConversion?.(e.currentTarget.href);
                  }}
                >
                  {PHONE_PRIMARY}
                </a>
                <div className="contact-sub">{L.callUs}</div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrap pg-contact__icon pg-contact__icon--teal">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="contact-label">{L.addressLabel}</div>
                <div className="contact-value">{L.address}</div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrap pg-contact__icon pg-contact__icon--teal">
                <Clock size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="contact-label">{L.hoursLabel}</div>
                <div className="contact-value">{L.hours}</div>
              </div>
            </div>

            <a
              className="wa-contact-btn tap"
              data-call
              href={wa(L.floatMsg)}
              onClick={(e) => {
                e.preventDefault();
                window.trackWhatsappConversion?.(e.currentTarget.href);
              }}
            >
              <span className="pg-contact__wa-icon">
                <WhatsAppIcon size={24} />
              </span>
              <span>
                <span className="wa-contact-text">{L.waCard}</span>
                <span className="wa-contact-sub">{L.waCardSub}</span>
              </span>
            </a>
            <SendLocationButton isAr={isAr} />
          </div>

          <div className="pg-contact__col" data-reveal>
            <div className="map-wrap">
              <iframe
                src={MAP_SRC}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={copy.mapTitle}
              />
            </div>
            <a
              href={DIRECTIONS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-call tap pg-contact__dir"
            >
              <Navigation size={18} aria-hidden="true" />
              {copy.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

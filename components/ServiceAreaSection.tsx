"use client";

import { MapPin, MessageCircle } from "lucide-react";
import { wa } from "@/lib/constants";
import { areaCopy } from "@/lib/content/trust";

export function ServiceAreaSection({ isAr }: { isAr: boolean }) {
  const c = isAr ? areaCopy.ar : areaCopy.en;
  return (
    <div className="area-card" data-reveal>
      <h3 className="trust-card-title">{c.title}</h3>
      <ul className="area-chips">
        {c.places.map((p) => (
          <li key={p} className="area-chip">
            <MapPin size={16} aria-hidden="true" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className="area-city">{c.city}</p>
      <p className="area-note">{c.question}</p>
      <a
        className="area-link tap"
        data-call
        href={wa(c.waMsg)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span>{c.cta}</span>
      </a>
    </div>
  );
}

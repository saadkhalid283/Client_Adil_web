"use client";

import { useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { wa } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { KIND_LABEL, KIND_ORDER, POPULAR, searchSite } from "@/lib/search-index";
import type { SearchHit, SearchKind } from "@/lib/search-index";
import { useDialog } from "./useDialog";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { L, lang, isAr } = useSite();
  const [query, setQuery] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  useDialog(open, onClose, panelRef, inputRef);

  const hits = useMemo(() => searchSite(query), [query]);
  const searching = query.trim().length > 0;

  const grouped = useMemo(() => {
    const map = new Map<SearchKind, SearchHit[]>();
    for (const h of hits) map.set(h.entry.kind, [...(map.get(h.entry.kind) ?? []), h]);
    return KIND_ORDER.filter((k) => map.has(k)).map((k) => ({ kind: k, hits: map.get(k) ?? [] }));
  }, [hits]);

  const finish = () => {
    setQuery("");
    onClose();
  };

  const onResultsKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const links = Array.from(resultsRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []);
    const idx = links.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") {
      (links[idx + 1] ?? links[0])?.focus();
    } else if (idx <= 0) {
      inputRef.current?.focus();
    } else {
      links[idx - 1]?.focus();
    }
  };

  const onInputKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      const first = resultsRef.current?.querySelector<HTMLElement>("a[href]");
      if (first) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  return (
    <div
      ref={panelRef}
      className="sh-overlay sh-search"
      data-open={open}
      role="dialog"
      aria-modal="true"
      aria-label={isAr ? "البحث في الموقع" : "Search the site"}
      aria-hidden={!open}
      inert={!open}
    >
      <div className="sh-overlay__bar">
        <span className="sh-overlay__title">{isAr ? "بحث" : "Search"}</span>
        <button type="button" className="sh-icon-btn tap" onClick={finish} aria-label={isAr ? "إغلاق" : "Close"}>
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="sh-search__body">
        <label className="sh-search__field">
          <Search size={22} aria-hidden="true" />
          <span className="sh-sr">{isAr ? "ابحث عن خدمة أو سؤال" : "Search for a service or question"}</span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            placeholder={isAr ? "ابحث: مكيف، ثلاجة، غسالة…" : "Search: AC, fridge, washer…"}
            autoComplete="off"
            enterKeyHint="search"
          />
        </label>

        <div ref={resultsRef} onKeyDown={onResultsKey}>
          {!searching && (
            <section className="sh-search__popular" aria-labelledby="sh-popular">
              <h2 id="sh-popular" className="sh-search__label">{isAr ? "عمليات بحث شائعة" : "Popular searches"}</h2>
              <ul className="sh-chips">
                {POPULAR.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="sh-chip tap" onClick={finish}>
                      {p.title[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {searching && hits.length > 0 && (
            <div className="sh-results" role="region" aria-live="polite" aria-label={isAr ? "النتائج" : "Results"}>
              {grouped.map((g) => (
                <section key={g.kind}>
                  <h2 className="sh-search__label">{KIND_LABEL[g.kind][lang]}</h2>
                  <ul>
                    {g.hits.map((h) => (
                      <li key={`${h.entry.kind}-${h.entry.title.en}`}>
                        <Link href={h.entry.href} className="sh-result" onClick={finish}>
                          <span className="sh-result__title">{h.entry.title[lang]}</span>
                          <span className="sh-result__hint">{h.entry.hint[lang]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}

          {searching && hits.length === 0 && (
            <div className="sh-empty" role="status">
              <p>{isAr ? "لم نجد نتيجة مطابقة. اكتب لنا مباشرة وسنرد عليك." : "No match found. Message us directly and we will reply."}</p>
              <a
                href={wa(L.floatMsg)}
                className="sh-btn sh-btn--wa tap"
                onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
              >
                <WhatsAppIcon size={20} />
                {L.waBtn}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SiteProps } from "@/lib/site-props";
import { galleryData } from "@/lib/data";

const AUTOPLAY_MS = 4500;

export function Gallery({ L, isAr }: SiteProps) {
  const slides = galleryData;
  const total = slides.length;
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef<{ x: number; y: number } | null>(null);

  const advance = useCallback(
    (dir: 1 | -1) => {
      setIdx((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!pausedRef.current) advance(1);
    }, AUTOPLAY_MS);
  }, [advance]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [idx, resetTimer]);

  const handlePrev = () => { advance(isAr ? 1 : -1); resetTimer(); };
  const handleNext = () => { advance(isAr ? -1 : 1); resetTimer(); };

  const onPointerDown = (e: ReactPointerEvent) => {
    pausedRef.current = true;
    dragRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerEnd = (e: ReactPointerEvent) => {
    const start = dragRef.current;
    dragRef.current = null;
    if (e.pointerType !== "mouse") pausedRef.current = false;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (e.type === "pointerup" && Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) {
      // Swiping toward the physical right reveals the slide on the left,
      // which is the next slide in RTL and the previous slide in LTR.
      const towardRight = dx > 0;
      advance(towardRight === isAr ? 1 : -1);
    }
    resetTimer();
  };

  return (
    <section className="section-wrap section-wrap--dark">
      <div className="section-inner">
        {/* Heading */}
        <div className="section-head" style={{ textAlign: "center" }} data-reveal>
          <span className="section-eyebrow">{L.galleryEyebrow}</span>
          <h2 className="section-title">{L.galleryTitle}</h2>
          <p
            style={{
              margin: "12px auto 0",
              fontSize: "15px",
              color: "var(--muted)",
              maxWidth: "480px",
              fontWeight: 500,
            }}
          >
            {L.gallerySub}
          </p>
          <div className="section-rule" style={{ margin: "14px auto 0" }} />
        </div>

        {/* Carousel */}
        <div
          className="gallery-viewport"
          data-reveal
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; resetTimer(); }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
        >
          <div className="gallery-track-wrap">
            <div
              className="gallery-track"
              style={{ transform: `translateX(${isAr ? idx * 100 : -idx * 100}%)` }}
            >
              {slides.map((slide, i) => {
                const title = isAr ? slide.ar : slide.en;
                const desc  = isAr ? slide.descAr : slide.descEn;
                return (
                  <div key={i} className="gallery-slide">
                    {/* Gradient fallback shown while the photo loads */}
                    <div
                      className="gallery-slide-bg"
                      style={{ background: slide.gradient }}
                    />

                    {/* Real work photo — slow Ken Burns zoom while active */}
                    <img
                      className={`gallery-photo${i === idx ? " gallery-photo--active" : ""}`}
                      src={slide.image}
                      alt={isAr ? slide.altAr : slide.altEn}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                    />

                    {/* Subtle brand-indigo tint for a cohesive look */}
                    <div className="gallery-tint" />

                    {/* Caption overlay */}
                    <div className="gallery-caption">
                      <div className="gallery-chip">
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            background: slide.accentColor,
                            display: "inline-block",
                          }}
                        />
                        {L.galleryEyebrow}
                      </div>
                      <h3 className="gallery-title">{title}</h3>
                      <p className="gallery-desc">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button className="gallery-arrow gallery-arrow--prev" onClick={handlePrev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button className="gallery-arrow gallery-arrow--next" onClick={handleNext} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="gallery-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot${i === idx ? " gallery-dot--active" : ""}`}
              onClick={() => { setIdx(i); resetTimer(); }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

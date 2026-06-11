"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, AirVent, Refrigerator, WashingMachine } from "lucide-react";
import type { SiteProps } from "@/lib/site-props";
import { galleryData } from "@/lib/data";

const AUTOPLAY_MS = 3500;

const SLIDE_ICONS = [AirVent, Refrigerator, WashingMachine];

/* Decorative SVG pattern rendered inside each slide */
function SlidePattern({ accentColor }: { accentColor: string }) {
  return (
    <svg
      style={{ position: "absolute", top: 0, insetInlineEnd: 0, opacity: 0.12, pointerEvents: "none" }}
      width="320"
      height="320"
      viewBox="0 0 320 320"
      fill="none"
    >
      <circle cx="280" cy="60" r="160" fill={accentColor} />
      <circle cx="300" cy="260" r="80" fill={accentColor} />
    </svg>
  );
}

/* AC unit SVG illustration for slide 1 */
function AcIllustration({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" width="240" height="160">
      <rect x="10" y="20" width="220" height="90" rx="14" fill="rgba(255,255,255,0.1)" stroke={color} strokeWidth="1.5" />
      <rect x="22" y="32" width="68" height="44" rx="8" fill="rgba(255,255,255,0.12)" stroke={color} strokeWidth="1.2" />
      <text x="56" y="60" fill="#fff" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="system-ui">22°</text>
      {[55, 67, 79, 91].map((y, i) => (
        <line key={i} x1="104" y1={y} x2="218" y2={y} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      ))}
      {[40, 70, 100, 130, 160].map((x, i) => (
        <path key={i} d={`M ${x} 128 C ${x+8} 117, ${x-2} 107, ${x+8} 98`}
          stroke={color} strokeWidth="1.8" fill="none" strokeDasharray="4,3" opacity={0.65 - i * 0.1} />
      ))}
      <circle cx="200" cy="42" r="10" fill="rgba(255,255,255,0.15)" stroke={color} strokeWidth="1.5" />
      <circle cx="200" cy="42" r="5" fill={color} opacity="0.9" />
    </svg>
  );
}

/* Fridge + gas stove illustration for slide 2 */
function FridgeIllustration({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" width="240" height="160">
      {/* Fridge */}
      <rect x="20" y="10" width="80" height="140" rx="12" fill="rgba(255,255,255,0.08)" stroke={color} strokeWidth="1.5" />
      <line x1="20" y1="60" x2="100" y2="60" stroke={color} strokeWidth="1.2" />
      <rect x="32" y="32" width="14" height="18" rx="4" fill={color} opacity="0.7" />
      <rect x="32" y="72" width="14" height="18" rx="4" fill={color} opacity="0.5" />
      {/* Frost lines */}
      {[80, 90, 100].map((y, i) => (
        <line key={i} x1="30" y1={y} x2="90" y2={y} stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      ))}
      {/* Gas stove */}
      <rect x="130" y="30" width="92" height="110" rx="12" fill="rgba(255,255,255,0.08)" stroke={color} strokeWidth="1.5" />
      {/* Burners */}
      {[[158, 65],[202, 65],[158, 108],[202, 108]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="16" fill="rgba(255,255,255,0.06)" stroke={color} strokeWidth="1.2" />
          <circle cx={cx} cy={cy} r="7" fill={color} opacity="0.45" />
          <circle cx={cx} cy={cy} r="3" fill={color} opacity="0.8" />
        </g>
      ))}
      {/* Knobs */}
      {[148, 166, 184, 202].map((x, i) => (
        <rect key={i} x={x} y="37" width="8" height="12" rx="4" fill={color} opacity="0.65" />
      ))}
    </svg>
  );
}

/* Washing machine illustration for slide 3 */
function WasherIllustration({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" width="240" height="160" suppressHydrationWarning>
      {/* Machine body */}
      <rect x="40" y="8" width="160" height="150" rx="14" fill="rgba(255,255,255,0.08)" stroke={color} strokeWidth="1.5" />
      {/* Door porthole */}
      <circle cx="120" cy="98" r="48" fill="rgba(255,255,255,0.06)" stroke={color} strokeWidth="1.5" />
      <circle cx="120" cy="98" r="36" fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1" strokeDasharray="4,4" />
      <circle cx="120" cy="98" r="12" fill={color} opacity="0.3" />
      {/* Drum rotation lines */}
      {/* Pre-computed drum spokes to avoid SSR/client float mismatch */}
      <line x1="144" y1="98" x2="154" y2="98" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="132" y1="119" x2="137" y2="128" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="108" y1="119" x2="103" y2="128" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="96" y1="98" x2="86" y2="98" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="108" y1="77" x2="103" y2="68" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="132" y1="77" x2="137" y2="68" stroke={color} strokeWidth="1.5" opacity="0.6" />
      {/* Control panel */}
      <rect x="48" y="16" width="144" height="36" rx="8" fill="rgba(255,255,255,0.06)" stroke={color} strokeWidth="1" />
      {/* Display */}
      <rect x="56" y="22" width="50" height="22" rx="5" fill={color} opacity="0.2" />
      <text x="81" y="38" fill="#fff" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">40°C</text>
      {/* Buttons */}
      {[120, 138, 156, 174].map((x, i) => (
        <circle key={i} cx={x} cy="33" r="6" fill={color} opacity={0.4 + i * 0.1} />
      ))}
      {/* Water droplets */}
      {[[65, 145], [90, 150], [115, 148]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="6" fill={color} opacity={0.4 - i * 0.08} />
      ))}
    </svg>
  );
}

const SLIDE_ILLUSTRATIONS = [AcIllustration, FridgeIllustration, WasherIllustration];

export function Gallery({ L, isAr }: SiteProps) {
  const slides = galleryData;
  const total = slides.length;
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);

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

  return (
    <section className="section-wrap section-wrap--dark">
      <div className="section-inner">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }} data-reveal>
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
        >
          <div className="gallery-track-wrap">
            <div
              className="gallery-track"
              style={{ transform: `translateX(${isAr ? idx * 100 : -idx * 100}%)` }}
            >
              {slides.map((slide, i) => {
                const IllusComp = SLIDE_ILLUSTRATIONS[i % SLIDE_ILLUSTRATIONS.length];
                const title = isAr ? slide.ar : slide.en;
                const desc  = isAr ? slide.descAr : slide.descEn;
                return (
                  <div key={i} className="gallery-slide">
                    {/* Gradient background */}
                    <div
                      className="gallery-slide-bg"
                      style={{ background: slide.gradient }}
                    />

                    {/* Decorative pattern */}
                    <SlidePattern accentColor={slide.accentColor} />

                    {/* SVG illustration */}
                    <div className="gallery-illus">
                      <IllusComp color={slide.accentColor} />
                    </div>

                    {/* Caption overlay */}
                    <div className="gallery-caption">
                      <div className="gallery-chip">
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
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

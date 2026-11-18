/** Product art for the hero and inner-page banners. Decorative: the headline carries the meaning. */
export type ArtKind = "ac" | "washer" | "fridge";

export const ART: Record<ArtKind, { src: string; width: number; height: number }> = {
  ac: { src: "/images/hero/ac.webp", width: 1200, height: 614 },
  washer: { src: "/images/hero/washer.webp", width: 900, height: 844 },
  fridge: { src: "/images/hero/fridge.webp", width: 900, height: 822 },
};

/** Desktop: three appliances layered like a small still life. Mobile: the AC alone (washer and fridge get their own section). */
export function HeroArt({ variant }: { variant: "d" | "m" }) {
  return (
    <div className={`hero-art hero-art--${variant}`} aria-hidden="true">
      <img className="hero-art__img hero-art__ac" src={ART.ac.src} width={ART.ac.width} height={ART.ac.height} alt="" fetchPriority="high" decoding="async" />
      {variant === "d" ? (
        <>
          <img className="hero-art__img hero-art__washer" src={ART.washer.src} width={ART.washer.width} height={ART.washer.height} alt="" decoding="async" />
          <img className="hero-art__img hero-art__fridge" src={ART.fridge.src} width={ART.fridge.width} height={ART.fridge.height} alt="" decoding="async" />
        </>
      ) : null}
    </div>
  );
}

/** Single appliance for service pages. */
export function PageArt({ kind }: { kind: ArtKind }) {
  const a = ART[kind];
  return (
    <div className={`page-art page-art--${kind}`} aria-hidden="true">
      <img src={a.src} width={a.width} height={a.height} alt="" decoding="async" />
    </div>
  );
}

/** Product art for the hero and inner-page banners. Decorative: the headline carries the meaning. */
export type ArtKind = "ac" | "washer" | "fridge";

export const ART: Record<ArtKind, { src: string; width: number; height: number }> = {
  ac: { src: "/images/hero/ac.webp", width: 1200, height: 614 },
  washer: { src: "/images/hero/washer.webp", width: 900, height: 844 },
  fridge: { src: "/images/hero/fridge.webp", width: 900, height: 822 },
};

/** Desktop: three appliances layered like a small still life, washer in front. Mobile: the washer alone (AC and fridge get their own section). */
export function HeroArt({ variant }: { variant: "d" | "m" }) {
  const img = (k: ArtKind) => (
    <img className={`hero-art__img hero-art__${k}`} src={ART[k].src} width={ART[k].width} height={ART[k].height} alt="" decoding="async" fetchPriority={k === "washer" ? "high" : undefined} />
  );
  return (
    <div className={`hero-art hero-art--${variant}`} aria-hidden="true">
      {variant === "d" ? (
        <>
          {img("ac")}
          {img("washer")}
          {img("fridge")}
        </>
      ) : (
        img("washer")
      )}
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

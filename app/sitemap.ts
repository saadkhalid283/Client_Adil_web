import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/og-image.jpg`,
        `${SITE_URL}/gallery/ac-outdoor-repair.webp`,
        `${SITE_URL}/gallery/split-ac-maintenance.webp`,
        `${SITE_URL}/gallery/fridge-repair.webp`,
        `${SITE_URL}/gallery/washing-machine-repair.webp`,
      ],
    },
  ];
}

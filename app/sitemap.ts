import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/lib/nav";
import { SERVICES } from "@/lib/services-registry";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = NAV_ITEMS.map((item) => ({
    url: item.href === "/" ? SITE_URL : `${SITE_URL}${item.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
  const services = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [
    { ...pages[0], images: [`${SITE_URL}/og-image.jpg`] },
    ...pages.slice(1),
    ...services,
  ];
}

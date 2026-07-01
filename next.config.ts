import type { NextConfig } from "next";

const STATIC_IMAGE_CACHE = {
  key: "Cache-Control",
  value: "public, max-age=86400, stale-while-revalidate=604800",
};

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/gallery/:path*", headers: [STATIC_IMAGE_CACHE] },
      { source: "/og-image.jpg", headers: [STATIC_IMAGE_CACHE] },
      { source: "/:icon(favicon\\.ico|icon-192\\.png|icon-512\\.png|apple-icon\\.png)", headers: [STATIC_IMAGE_CACHE] },
    ];
  },
};

export default nextConfig;

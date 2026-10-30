import type { Metadata } from "next";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { ReviewsView } from "@/components/views/ReviewsView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "اقرأ آراء العملاء عن عادل للتبريد والتكييف في جدة. تقييم 4.8 من 18 تقييماً لعملاء أصلحوا مكيفاتهم وثلاجاتهم وغسالاتهم عندنا بضمان.",
  alternates: { canonical: "/reviews" },
  openGraph: { url: "/reviews" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd(SITE_URL, [
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <ReviewsView />
    </>
  );
}

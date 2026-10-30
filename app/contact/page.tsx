import type { Metadata } from "next";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { ContactView } from "@/components/views/ContactView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const metadata: Metadata = {
  title: "Contact Adel Cooling in Jeddah",
  description:
    "اتصل بعادل أو راسله على واتساب لحجز إصلاح مكيف أو ثلاجة أو غسالة في جدة. نعمل يومياً من الثامنة صباحاً حتى منتصف الليل، طوال أيام الأسبوع.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd(SITE_URL, [
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactView />
    </>
  );
}

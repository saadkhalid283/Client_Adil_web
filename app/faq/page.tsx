import type { Metadata } from "next";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { FaqView } from "@/components/views/FaqView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const metadata: Metadata = {
  title: "AC and appliance repair FAQ",
  description:
    "إجابات عن أسئلة شائعة حول إصلاح المكيفات والثلاجات والغسالات في جدة: المواعيد والضمان والاتفاق على السعر قبل بدء العمل، مع إجابات واضحة من عادل.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd(SITE_URL, [
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <FaqView />
    </>
  );
}

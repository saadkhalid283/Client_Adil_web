import type { Metadata } from "next";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { ServicesIndexView } from "@/components/views/ServicesIndexView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const metadata: Metadata = {
  title: "AC and appliance repair services in Jeddah",
  description:
    "خدمات إصلاح المكيفات والثلاجات والغسالات في جدة: شباك وسبليت ومركزي وتمديد مواسير. نتفق على السعر قبل العمل، وعلى كل إصلاح ضمان.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd(SITE_URL, [
          { name: "الرئيسية", path: "/" },
          { name: "خدماتنا", path: "/services" },
        ])}
      />
      <ServicesIndexView />
    </>
  );
}

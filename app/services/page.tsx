import type { Metadata } from "next";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { ServicesIndexView } from "@/components/views/ServicesIndexView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const metadata: Metadata = {
  title: "Home Appliance & AC Repair Services in Jeddah",
  description:
    "خدمات إصلاح المكيفات والثلاجات والغسالات في جدة: شباك وسبليت ومركزي وتمديد مواسير. السعر قبل العمل وضمان على كل إصلاح. تواصل معنا واتساب أو اتصال.",
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

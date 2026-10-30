import type { Metadata } from "next";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { AboutView } from "@/components/views/AboutView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const metadata: Metadata = {
  title: "About Adel, appliance technician in Jeddah",
  description:
    "تعرّف على عادل، فني إصلاح المكيفات والثلاجات والغسالات في جدة: نتفق على السعر قبل البدء، ولا توجد رسوم مخفية، وعلى كل إصلاح ضمان.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd(SITE_URL, [
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutView />
    </>
  );
}

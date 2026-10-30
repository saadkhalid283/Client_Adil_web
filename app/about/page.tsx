import type { Metadata } from "next";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { AboutView } from "@/components/views/AboutView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const metadata: Metadata = {
  title: "About Adel Cooling in Jeddah",
  description:
    "تعرف على عادل، فني صيانة المكيفات والثلاجات والغسالات في جدة: يُتفق على السعر قبل البدء، لا رسوم مخفية، ويأتي مع كل إصلاح ضمان على العمل.",
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

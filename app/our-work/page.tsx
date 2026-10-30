import type { Metadata } from "next";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { OurWorkView } from "@/components/views/OurWorkView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const metadata: Metadata = {
  title: "Our Work in Jeddah",
  description:
    "شاهد صوراً من إصلاحات حقيقية لمكيفات وثلاجات وغسالات في منازل جدة، وتعرف على طريقة عمل عادل في الصيانة والتشخيص قبل أن تطلب الخدمة.",
  alternates: { canonical: "/our-work" },
  openGraph: { url: "/our-work" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd(SITE_URL, [
          { name: "Home", path: "/" },
          { name: "Our work", path: "/our-work" },
        ])}
      />
      <OurWorkView />
    </>
  );
}

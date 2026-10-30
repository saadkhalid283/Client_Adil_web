import type { Metadata } from "next";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { OurWorkView } from "@/components/views/OurWorkView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const metadata: Metadata = {
  title: "What we repair in Jeddah",
  description:
    "تعرّف على ما يصلحه عادل في جدة من مكيفات شباك وسبليت ومركزي وثلاجات وغسالات أتوماتيك، وكيف يتم الاتفاق على السعر قبل البدء.",
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

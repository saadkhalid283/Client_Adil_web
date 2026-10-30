import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { ServiceDetailView } from "@/components/views/ServiceDetailView";
import { SERVICE_SLUGS, getService } from "@/lib/services-registry";
import type { ServiceSlug } from "@/lib/services-registry";
import { serviceContent } from "@/lib/content/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://adelcooling.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

function isSlug(slug: string): slug is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(slug);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || !isSlug(slug)) return {};
  const path = `/services/${slug}`;
  return {
    title: `${service.en} in Jeddah`,
    description: serviceContent[slug].metaDescriptionAr,
    alternates: { canonical: path },
    openGraph: { url: path },
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || !isSlug(slug)) notFound();
  const content = serviceContent[slug];
  const path = `/services/${slug}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.ar,
    alternateName: service.en,
    description: content.metaDescriptionAr,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "Jeddah" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q.ar,
      acceptedAnswer: { "@type": "Answer", text: f.a.ar },
    })),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbLd(SITE_URL, [
          { name: "الرئيسية", path: "/" },
          { name: "خدماتنا", path: "/services" },
          { name: service.ar, path },
        ])}
      />
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <ServiceDetailView slug={slug} />
    </>
  );
}

"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { PHONE_PRIMARY } from "@/lib/constants";
import { PageHero } from "@/components/PageHero";

export function NotFoundView() {
  const { isAr } = useSite();
  return (
    <>
      <PageHero
        eyebrowAr="خطأ 404"
        eyebrowEn="Error 404"
        titleAr="لم نجد هذه الصفحة"
        titleEn="We could not find that page"
        subAr="ربما تغيّر الرابط أو كُتب بشكل غير صحيح. تفضّل بزيارة إحدى الصفحات التالية، أو اتصل بنا مباشرة."
        subEn="The link may have changed or been typed incorrectly. Try one of the pages below, or call us directly."
        crumbs={[{ ar: "الرئيسية", en: "Home", href: "/" }, { ar: "الصفحة غير موجودة", en: "Page not found" }]}
      />
      <section className="section-wrap">
        <div className="section-inner nf-links" data-reveal>
          <Link href="/" className="btn-call tap">{isAr ? "العودة إلى الرئيسية" : "Back to home"}</Link>
          <Link href="/services" className="btn-wa tap">{isAr ? "خدماتنا" : "Our services"}</Link>
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="btn-wa tap"
            onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}
          >
            <Phone size={18} aria-hidden="true" />
            <span dir="ltr">{PHONE_PRIMARY}</span>
          </a>
        </div>
      </section>
    </>
  );
}

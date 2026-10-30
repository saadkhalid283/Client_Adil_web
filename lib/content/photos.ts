import type { ServiceSlug } from "@/lib/services-registry";

interface Bi {
  ar: string;
  en: string;
}

export interface WhyPhoto {
  src: string;
  alt: Bi;
  label: Bi;
  href: `/services/${ServiceSlug}`;
  /** CSS object-position for the portrait crop, so the technician and the appliance both stay in frame. */
  pos: string;
}

export const whyPhotos: WhyPhoto[] = [
  {
    src: "/images/why/outdoor-unit.webp",
    alt: { ar: "فني يقرأ عدادات ضغط الفريون على وحدة مكيف خارجية", en: "Technician reading refrigerant gauges on an outdoor AC unit" },
    label: { ar: "الوحدة الخارجية", en: "Outdoor unit" },
    href: "/services/split-ac-repair",
    pos: "50% 50%",
  },
  {
    src: "/images/why/split-ac.webp",
    alt: { ar: "فني يجري صيانة لوحدة مكيف سبليت داخلية", en: "Technician servicing an indoor split AC unit" },
    label: { ar: "الوحدة الداخلية", en: "Indoor unit" },
    href: "/services/split-ac-repair",
    pos: "70% 50%",
  },
  {
    src: "/images/why/refrigerator.webp",
    alt: { ar: "فني يصلح ثلاجة في مطبخ منزل", en: "Technician repairing a refrigerator in a home kitchen" },
    label: { ar: "الثلاجات", en: "Refrigerators" },
    href: "/services/refrigerator-repair",
    pos: "60% 50%",
  },
  {
    src: "/images/why/washing-machine.webp",
    alt: { ar: "فني يصلح غسالة أمامية التحميل", en: "Technician repairing a front-load washing machine" },
    label: { ar: "الغسالات", en: "Washing machines" },
    href: "/services/washing-machine-repair",
    pos: "60% 50%",
  },
];

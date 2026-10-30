/** Data-only service registry (server + client safe, no icons/JSX). */
export const SERVICE_SLUGS = [
  "window-ac-repair",
  "split-ac-repair",
  "central-ac",
  "washing-machine-repair",
  "refrigerator-repair",
  "appliance-pipe-installation",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export interface ServiceMeta {
  slug: ServiceSlug;
  ar: string;
  en: string;
  dAr: string;
  dEn: string;
  color: string;
}

export const SERVICES: ServiceMeta[] = [
  {
    slug: "window-ac-repair",
    ar: "إصلاح مكيفات شباك",
    en: "Window AC Repair",
    dAr: "فحص وصيانة وإصلاح مكيفات الشباك",
    dEn: "Inspection, service and repair for window AC units",
    color: "#0ea5e9",
  },
  {
    slug: "split-ac-repair",
    ar: "إصلاح مكيفات سبليت",
    en: "Split AC Repair",
    dAr: "تشخيص وإصلاح أعطال السبليت وتعبئة الفريون",
    dEn: "Diagnosis, split AC repair and refrigerant refill",
    color: "#6366f1",
  },
  {
    slug: "central-ac",
    ar: "تكييف مركزي",
    en: "Central AC",
    dAr: "صيانة وإصلاح أنظمة التكييف المركزي",
    dEn: "Maintenance and repair of central AC systems",
    color: "#14b8a6",
  },
  {
    slug: "washing-machine-repair",
    ar: "غسالات أتوماتيك",
    en: "Automatic Washing Machines",
    dAr: "إصلاح الغسالات الأتوماتيك وأعطال اللوحات الإلكترونية",
    dEn: "Automatic washing machine repair and electronic control-board faults",
    color: "#f97316",
  },
  {
    slug: "refrigerator-repair",
    ar: "ثلاجات",
    en: "Refrigerators",
    dAr: "إصلاح الثلاجات: ضعف التبريد والتسرّب والكمبروسر",
    dEn: "Refrigerator repair for cooling faults, leaks and compressor issues",
    color: "#8b5cf6",
  },
  {
    slug: "appliance-pipe-installation",
    ar: "تمديد مواسير أجهزة كهربائية",
    en: "Electrical Appliance Pipe Installation",
    dAr: "تمديد مواسير الأجهزة الكهربائية بشكل مرتب",
    dEn: "Neat pipe installation for electrical appliances",
    color: "#ef4444",
  },
];

export const getService = (slug: string): ServiceMeta | undefined =>
  SERVICES.find((s) => s.slug === slug);

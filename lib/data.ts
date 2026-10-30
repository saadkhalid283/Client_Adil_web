import {
  AirVent,
  Snowflake,
  Fan,
  WashingMachine,
  Refrigerator,
  Wrench,
  ShieldCheck,
  Zap,
  CircleDollarSign,
  Clock,
} from "lucide-react";
import type { Lang } from "./types";

export const servicesData = (L: Lang) => [
  {
    icon: AirVent,
    ar: "إصلاح مكيفات شباك",
    en: "Window AC Repair",
    dAr: "فحص وصيانة وإصلاح مكيفات الشباك",
    dEn: "Inspection, service and repair for window AC units",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح مكيف شباك" : "Hello, I need a window AC repaired",
    color: "#0ea5e9",
  },
  {
    icon: Snowflake,
    ar: "إصلاح مكيفات سبليت",
    en: "Split AC Repair",
    dAr: "تشخيص وإصلاح أعطال السبليت وتعبئة الفريون",
    dEn: "Diagnosis, split AC repair and refrigerant refill",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح مكيف سبليت" : "Hello, I need a split AC repaired",
    color: "#6366f1",
  },
  {
    icon: Fan,
    ar: "تكييف مركزي",
    en: "Central AC",
    dAr: "صيانة وإصلاح أنظمة التكييف المركزي",
    dEn: "Maintenance and repair of central AC systems",
    msg: L === "ar" ? "السلام عليكم، أريد صيانة أو إصلاح تكييف مركزي" : "Hello, I need central AC maintenance or repair",
    color: "#14b8a6",
  },
  {
    icon: WashingMachine,
    ar: "غسالات أتوماتيك",
    en: "Automatic Washing Machines",
    dAr: "إصلاح الغسالات الأتوماتيك وأعطال اللوحات الإلكترونية",
    dEn: "Automatic washing machine repair and electronic control-board faults",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح غسالة أتوماتيك" : "Hello, I need an automatic washing machine repaired",
    color: "#f97316",
  },
  {
    icon: Refrigerator,
    ar: "ثلاجات",
    en: "Refrigerators",
    dAr: "إصلاح الثلاجات: ضعف التبريد والتسرّب والكمبروسر",
    dEn: "Refrigerator repair for cooling faults, leaks and compressor issues",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح ثلاجة" : "Hello, I need a refrigerator repaired",
    color: "#8b5cf6",
  },
];

export const moreServices = (L: Lang) => [
  {
    icon: Wrench,
    ar: "تمديد مواسير أجهزة كهربائية",
    en: "Electrical Appliance Pipe Installation",
  },
];

export const whyData = (L: Lang) => [
  {
    icon: ShieldCheck,
    stat: L === "ar" ? "ضمان" : "Guarantee",
    label: L === "ar" ? "ضمان على كل إصلاح" : "Guarantee on every repair",
    desc:
      L === "ar"
        ? "كل إصلاح مضمون. إذا عادت المشكلة نرجع ونصلحها بدون تكلفة إضافية."
        : "Every repair is guaranteed. If the issue returns, we come back at no extra cost.",
  },
  {
    icon: Zap,
    stat: L === "ar" ? "سريع" : "Fast",
    label: L === "ar" ? "استجابة سريعة" : "Quick response",
    desc:
      L === "ar"
        ? "نحرص على الوصول في أقرب وقت ممكن، ولا نؤجل الموعد دون سبب."
        : "We aim to arrive as soon as we can, and we do not postpone without a reason.",
  },
  {
    icon: CircleDollarSign,
    stat: L === "ar" ? "شفاف" : "Clear",
    label: L === "ar" ? "سعر واضح" : "Clear pricing",
    desc:
      L === "ar"
        ? "نتفق على السعر قبل العمل. لا رسوم مخفية ولا مفاجآت بعد الإصلاح."
        : "The price is agreed before work starts. No hidden fees and no surprises after the repair.",
  },
  {
    icon: Clock,
    stat: L === "ar" ? "7/7" : "7/7",
    label: L === "ar" ? "نعمل كل يوم" : "Open every day",
    desc:
      L === "ar"
        ? "نعمل طوال أيام الأسبوع دون إجازة، من 8 صباحاً حتى منتصف الليل."
        : "We work every day of the week with no days off, from 8 am to midnight.",
  },
];

export const reviewsData = [
  {
    name: "محمد العتيبي",
    initials: "مع",
    stars: 5,
    guide: false,
    ar: "عادل شخص أمين وشغله ممتاز. صلّح مكيفي في نفس اليوم وبسعر معقول. أنصح به بشدة لأهل المنطقة.",
    en: "Adel is trustworthy and does excellent work. He fixed my AC the same day at a very reasonable price. I strongly recommend him to everyone in the area.",
  },
  {
    name: "فهد الغامدي",
    initials: "فغ",
    stars: 5,
    guide: true,
    ar: "من أفضل الفنيين اللي تعاملت معهم. أصلح لي الثلاجة والغسالة وكل مرة شغل نظيف وسريع.",
    en: "One of the best technicians I've dealt with. He repaired my fridge and washing machine — clean, fast work every single time.",
  },
  {
    name: "أم عبدالله",
    initials: "أع",
    stars: 5,
    guide: false,
    ar: "اتصلت الساعة 9 الصبح وجاء قبل الظهر. حل مشكلة المكيف السبليت اللي ما كان يبرّد. شكراً جزيلاً.",
    en: "I called at 9 AM and he arrived before noon. Fixed my split AC that wasn't cooling at all. Thank you so much.",
  },
  {
    name: "خالد الحربي",
    initials: "خح",
    stars: 5,
    guide: false,
    ar: "تمديد مواسير التكييف المركزي في شقتي الجديدة. شغل محترم وما تركوا وراهم أي وساخة.",
    en: "Central AC pipe installation in my new apartment. Professional job, left the place spotless.",
  },
  {
    name: "سلطان الزهراني",
    initials: "سز",
    stars: 4,
    guide: true,
    ar: "صيانة ممتازة للتكييف المركزي. الفني واضح ومباشر، حدد السعر قبل الشغل وما زاد ريال.",
    en: "Excellent central AC service. The technician was clear and direct — quoted the price upfront and charged not a riyal more.",
  },
  {
    name: "ريم القحطاني",
    initials: "رق",
    stars: 5,
    guide: false,
    ar: "الغسالة الأتوماتيك كانت تعطي خطأ. صلّحها من غير ما يبدّل قطع غير ضرورية. أمانة وكفاءة.",
    en: "The automatic washing machine was showing an error code. He fixed it without replacing unnecessary parts — honest and highly efficient.",
  },
];

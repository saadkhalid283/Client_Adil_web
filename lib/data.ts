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
    dAr: "صيانة وإصلاح مكيفات الشباك بجميع أنواعها وموديلاتها",
    dEn: "Service and repair for all types and models of window AC units",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح مكيف شباك" : "Hello, I need a window AC repair",
    color: "#0ea5e9",
  },
  {
    icon: Snowflake,
    ar: "إصلاح مكيفات سبليت",
    en: "Split AC Repair",
    dAr: "تشخيص دقيق وإصلاح أعطال السبليت وتعبئة الفريون",
    dEn: "Accurate diagnosis, split-unit repair and refrigerant refill",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح مكيف سبليت" : "Hello, I need a split AC repair",
    color: "#6366f1",
  },
  {
    icon: Fan,
    ar: "تكييف مركزي",
    en: "Central AC",
    dAr: "صيانة وإصلاح أنظمة التكييف المركزي للمنازل والمنشآت",
    dEn: "Maintenance and repair of central AC systems for homes and buildings",
    msg: L === "ar" ? "السلام عليكم، أريد صيانة تكييف مركزي" : "Hello, I need central AC service",
    color: "#14b8a6",
  },
  {
    icon: WashingMachine,
    ar: "غسالات أتوماتيك",
    en: "Automatic Washing Machines",
    dAr: "إصلاح الغسالات الأتوماتيك وأعطال اللوحات الإلكترونية",
    dEn: "Automatic washing machine repair and electronic control-board faults",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح غسالة أتوماتيك" : "Hello, I need a washing machine repair",
    color: "#f97316",
  },
  {
    icon: Refrigerator,
    ar: "ثلاجات",
    en: "Refrigerators",
    dAr: "إصلاح الثلاجات ومشاكل التبريد والتسريب والكمبروسر",
    dEn: "Refrigerator repair — cooling faults, leaks and compressor issues",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح ثلاجة" : "Hello, I need a refrigerator repair",
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
    stat: L === "ar" ? "ضمان" : "Guaranteed",
    label: L === "ar" ? "ضمان على كل إصلاح" : "Guarantee on every repair",
    desc:
      L === "ar"
        ? "كل عمل ننجزه مضمون — إذا عادت المشكلة نرجع ونصلّح بدون تكلفة إضافية."
        : "Every repair is fully guaranteed — if the issue returns, we come back at no extra cost.",
  },
  {
    icon: Zap,
    stat: L === "ar" ? "سريع" : "Fast",
    label: L === "ar" ? "استجابة سريعة" : "Quick response",
    desc:
      L === "ar"
        ? "نحاول نصل في أسرع وقت ممكن، ما نضيّع وقتك ولا نأجّل بدون سبب."
        : "We aim to arrive as quickly as possible and never delay without good reason.",
  },
  {
    icon: CircleDollarSign,
    stat: L === "ar" ? "شفاف" : "Honest",
    label: L === "ar" ? "أسعار واضحة" : "Transparent pricing",
    desc:
      L === "ar"
        ? "السعر يتحدد قبل الشغل. ما في رسوم مخفية ولا مفاجآت بعد الإصلاح."
        : "Price is agreed before work starts. No hidden fees, no surprises after the repair.",
  },
  {
    icon: Clock,
    stat: L === "ar" ? "٧/٧" : "7/7",
    label: L === "ar" ? "متاح كل يوم" : "Available daily",
    desc:
      L === "ar"
        ? "نشتغل كل أيام الأسبوع بدون إجازة، من الصباح حتى منتصف الليل."
        : "We work every day of the week, no days off, from morning to midnight.",
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

export interface GallerySlide {
  gradient: string;
  accentColor: string;
  ar: string;
  en: string;
  descAr: string;
  descEn: string;
}

export const galleryData: GallerySlide[] = [
  {
    gradient: "linear-gradient(135deg, #4f46e5 0%, #1a1830 100%)",
    accentColor: "#a5b4fc",
    ar: "إصلاح وصيانة المكيفات",
    en: "AC Repair & Maintenance",
    descAr: "مكيفات شباك وسبليت وتكييف مركزي — تشخيص دقيق وإصلاح سريع مع ضمان",
    descEn: "Window, split & central AC — accurate diagnosis, fast repair with guarantee",
  },
  {
    gradient: "linear-gradient(135deg, #7c3aed 0%, #1a1830 100%)",
    accentColor: "#c4b5fd",
    ar: "ثلاجات وأجهزة منزلية",
    en: "Fridges & Home Appliances",
    descAr: "إصلاح مشاكل التبريد والكمبروسر والتسريب في الثلاجات بجميع أنواعها",
    descEn: "Cooling, compressor and leak faults for all types of refrigerators",
  },
  {
    gradient: "linear-gradient(135deg, #f5603d 0%, #1a1830 100%)",
    accentColor: "#fda99a",
    ar: "غسالات وتمديد مواسير",
    en: "Washing Machines & Pipes",
    descAr: "إصلاح الغسالات الأتوماتيك وتمديد مواسير الأجهزة الكهربائية باحتراف",
    descEn: "Automatic washing machine repair and professional electrical pipe installation",
  },
];

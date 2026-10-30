export interface NavItem {
  href: string;
  ar: string;
  en: string;
  subAr: string;
  subEn: string;
}

/** Primary pages, in menu order (numbered 01..07 in the full-screen menu). */
export const NAV_ITEMS: NavItem[] = [
  { href: "/", ar: "الرئيسية", en: "Home", subAr: "ابدأ من هنا", subEn: "Start here" },
  { href: "/services", ar: "خدماتنا", en: "Services", subAr: "مكيفات وثلاجات وغسالات", subEn: "AC, fridges and washers" },
  { href: "/our-work", ar: "أعمالنا", en: "Our work", subAr: "ما نصلحه وكيف نعمل", subEn: "What we repair and how we work" },
  { href: "/reviews", ar: "آراء العملاء", en: "Reviews", subAr: "ماذا يقول عملاؤنا", subEn: "What customers say" },
  { href: "/about", ar: "من نحن", en: "About us", subAr: "كيف نعمل ولماذا نحن", subEn: "How we work and why us" },
  { href: "/faq", ar: "أسئلة شائعة", en: "FAQ", subAr: "إجابات سريعة", subEn: "Quick answers" },
  { href: "/contact", ar: "تواصل معنا", en: "Contact", subAr: "اتصال أو واتساب", subEn: "Call or WhatsApp" },
];

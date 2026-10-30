export interface PageCopy {
  eyebrowAr: string;
  eyebrowEn: string;
  titleAr: string;
  titleEn: string;
  subAr: string;
  subEn: string;
}

export const pageCopy = {
  contact: {
    eyebrowAr: "تواصل معنا",
    eyebrowEn: "Contact",
    titleAr: "تواصل مع عادل في جدة",
    titleEn: "Contact Adel in Jeddah",
    subAr: "اتصل أو راسلنا على واتساب. نخدم جميع أنحاء جدة يومياً من 8 صباحاً حتى منتصف الليل.",
    subEn: "Call or message us on WhatsApp. We cover all of Jeddah, daily from 8 AM to midnight.",
  },
  about: {
    eyebrowAr: "من نحن",
    eyebrowEn: "About us",
    titleAr: "فني صيانة تعرفه بالاسم",
    titleEn: "A repair technician you can name",
    subAr: "عادل يصلح المكيفات والثلاجات والغسالات في جدة. السعر يُتفق عليه قبل البدء، والإصلاح بضمان.",
    subEn: "Adel repairs ACs, fridges and washing machines in Jeddah. The price is agreed before work starts, and every repair is guaranteed.",
  },
  work: {
    eyebrowAr: "أعمالنا",
    eyebrowEn: "Our work",
    titleAr: "صور من إصلاحات حقيقية",
    titleEn: "Photos from real repairs",
    subAr: "لقطات من العمل في منازل جدة: مكيفات وثلاجات وغسالات.",
    subEn: "Snapshots from jobs in Jeddah homes: ACs, fridges and washing machines.",
  },
  reviews: {
    eyebrowAr: "آراء العملاء",
    eyebrowEn: "Reviews",
    titleAr: "ماذا يقول عملاؤنا",
    titleEn: "What our customers say",
    subAr: "4.8 من 18 تقييم من العملاء",
    subEn: "4.8 from 18 customer ratings",
  },
  faq: {
    eyebrowAr: "أسئلة شائعة",
    eyebrowEn: "FAQ",
    titleAr: "إجابات سريعة قبل أن تتصل",
    titleEn: "Quick answers before you call",
    subAr: "الأسئلة التي يسألها العملاء أكثر عن الأعطال والمواعيد والضمان.",
    subEn: "What customers ask most about faults, timing and the guarantee.",
  },
} satisfies Record<string, PageCopy>;

export const contactCopy = {
  ar: {
    mapTitle: "موقع عادل للتبريد والتكييف على الخريطة",
    directions: "احصل على الاتجاهات",
  },
  en: {
    mapTitle: "Adel Cooling & AC location on the map",
    directions: "Get directions",
  },
};

export const aboutCopy = {
  ar: { whyEyebrow: "لماذا عادل", trustTitle: "تحقق منا قبل أن تتصل" },
  en: { whyEyebrow: "Why Adel", trustTitle: "Check us before you call" },
};

export interface WorkLink {
  href: string;
  ar: string;
  en: string;
}

/** Service page that matches each gallery photo, in galleryData order. */
export const workLinks: WorkLink[] = [
  { href: "/services/split-ac-repair", ar: "إصلاح مكيفات سبليت", en: "Split AC repair" },
  { href: "/services/split-ac-repair", ar: "إصلاح مكيفات سبليت", en: "Split AC repair" },
  { href: "/services/refrigerator-repair", ar: "إصلاح الثلاجات", en: "Refrigerator repair" },
  { href: "/services/washing-machine-repair", ar: "إصلاح الغسالات", en: "Washing machine repair" },
];

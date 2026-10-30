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
    subEn: "Call or message us on WhatsApp. We cover all of Jeddah, daily from 8 am to midnight.",
  },
  about: {
    eyebrowAr: "من نحن",
    eyebrowEn: "About us",
    titleAr: "عادل، فني تتعامل معه مباشرة",
    titleEn: "Adel, a technician you deal with directly",
    subAr: "عادل يصلح المكيفات والثلاجات والغسالات في جدة. السعر يُتفق عليه قبل البدء، والإصلاح بضمان.",
    subEn: "Adel repairs ACs, fridges and washing machines in Jeddah. The price is agreed before work starts, and every repair is guaranteed.",
  },
  work: {
    eyebrowAr: "أعمالنا",
    eyebrowEn: "Our work",
    titleAr: "ما نصلحه وكيف نعمل",
    titleEn: "What we repair and how we work",
    subAr: "ست خدمات وطريقة عمل واحدة واضحة: نفحص العطل، ونتفق على السعر، ثم نصلح بضمان.",
    subEn: "Six services and one clear way of working: we find the fault, agree the price, then repair with a guarantee.",
  },
  reviews: {
    eyebrowAr: "آراء العملاء",
    eyebrowEn: "Reviews",
    titleAr: "ماذا يقول عملاؤنا",
    titleEn: "What our customers say",
    subAr: "4.8 من 18 تقييماً على جوجل",
    subEn: "4.8 from 18 Google ratings",
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
  ar: { whyEyebrow: "لماذا عادل", trustTitle: "تعرّف علينا قبل أن تتصل" },
  en: { whyEyebrow: "Why Adel", trustTitle: "Get to know us before you call" },
};

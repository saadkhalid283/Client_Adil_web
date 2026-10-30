export interface Bilingual<T> {
  ar: T;
  en: T;
}

export interface StraightAnswersCopy {
  eyebrow: string;
  title: string;
  getTitle: string;
  get: string[];
  knowTitle: string;
  know: string[];
}

export interface TrustCopy {
  title: string;
  owner: string;
  ownerValue: string;
  hours: string;
  hoursValue: string;
  area: string;
  areaValue: string;
  rating: string;
  ratingValue: string;
  ratingNote: string;
}

export const straightAnswers: Bilingual<StraightAnswersCopy> = {
  ar: {
    eyebrow: "إجابات صريحة",
    title: "إجابات صريحة قبل أن تتصل",
    getTitle: "ما تحصل عليه",
    get: [
      "نتفق على السعر قبل بدء العمل",
      "لا توجد رسوم مخفية",
      "لا نغيّر أي قطعة دون حاجة",
      "ضمان على كل إصلاح",
      "أرسل صور المشكلة على واتساب لنفهمها قبل الحضور",
      "نعمل يومياً حتى منتصف الليل",
    ],
    knowTitle: "ما تحتاج إلى معرفته",
    know: [
      "نخبرك بالسعر قبل أن نبدأ، والقرار لك",
      "بعض الأعطال تحتاج إلى قطعة جديدة، ونخبرك بذلك أولاً",
      "نخدم جميع أنحاء جدة. أرسل موقعك على واتساب لنؤكد معك موعد الوصول",
    ],
  },
  en: {
    eyebrow: "Straight answers",
    title: "Straight answers before you call",
    getTitle: "What you get",
    get: [
      "Price agreed before work starts",
      "No hidden fees",
      "No parts replaced unless needed",
      "A guarantee on every repair",
      "Send photos of the problem on WhatsApp so we understand it before we arrive",
      "Open daily until midnight",
    ],
    knowTitle: "What to know",
    know: [
      "We tell you the price before we start, and the decision is yours",
      "Some faults need a new part, and we tell you first",
      "We cover all of Jeddah. Message us your location on WhatsApp so we can confirm timing",
    ],
  },
};

export const trustCopy: Bilingual<TrustCopy> = {
  ar: {
    title: "تعرّف علينا قبل أن تتصل",
    owner: "الفني",
    ownerValue: "عادل، فني مستقل",
    hours: "ساعات العمل",
    hoursValue: "يومياً من 8:00 صباحاً حتى منتصف الليل",
    area: "منطقة الخدمة",
    areaValue: "جميع أنحاء جدة",
    rating: "التقييم",
    ratingValue: "4.8 من 18 تقييماً على جوجل",
    ratingNote: "تقييم العملاء",
  },
  en: {
    title: "Get to know us before you call",
    owner: "Technician",
    ownerValue: "Adel, independent technician",
    hours: "Hours",
    hoursValue: "Daily, 8:00 am to midnight",
    area: "Area",
    areaValue: "All of Jeddah",
    rating: "Rating",
    ratingValue: "4.8 from 18 Google ratings",
    ratingNote: "Customer rating",
  },
};

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
  payment: string;
  cash: string;
  mada: string;
}

export interface AreaCopy {
  title: string;
  places: string[];
  city: string;
  question: string;
  cta: string;
  waMsg: string;
}

export const straightAnswers: Bilingual<StraightAnswersCopy> = {
  ar: {
    eyebrow: "إجابات صريحة",
    title: "إجابات صريحة قبل ما تتصل",
    getTitle: "ما تحصل عليه",
    get: [
      "نتفق على السعر قبل بدء العمل",
      "بدون رسوم مخفية",
      "لا نستبدل قطعة بدون حاجة",
      "ضمان على كل إصلاح",
      "يمكنك إرسال صور المشكلة على واتساب لنفهمها أولاً",
      "نعمل يومياً حتى منتصف الليل",
    ],
    knowTitle: "ما يجب أن تعرفه",
    know: [
      "نخبرك بالسعر قبل أن نبدأ، فالقرار لك قبل أي عمل",
      "بعض الأعطال تحتاج قطعة جديدة، ونخبرك بذلك أولاً",
      "نخدم أبحر الجنوبية والبساتين، وللمناطق الأخرى راسلنا أولاً",
    ],
  },
  en: {
    eyebrow: "Straight answers",
    title: "Straight answers before you call",
    getTitle: "What you get",
    get: [
      "Price agreed before work starts",
      "No hidden fees",
      "No unnecessary parts replaced",
      "A guarantee on every repair",
      "You can send photos on WhatsApp so we understand the problem first",
      "Open daily until midnight",
    ],
    knowTitle: "What to know",
    know: [
      "We tell you the price before we start, so you decide before any work happens",
      "Some faults need a new part, and we tell you first",
      "We serve Abhar Al-Janubiyah and Al-Basatin. For other areas, message us first",
    ],
  },
};

export const trustCopy: Bilingual<TrustCopy> = {
  ar: {
    title: "تحقق منا قبل الاتصال",
    owner: "من يعمل عندك",
    ownerValue: "عادل، فني مستقل",
    hours: "ساعات العمل",
    hoursValue: "يومياً من ٨:٠٠ صباحاً حتى منتصف الليل",
    area: "منطقة الخدمة",
    areaValue: "أبحر الجنوبية والبساتين، جدة",
    rating: "التقييم",
    ratingValue: "٤٫٨ من ١٨ تقييماً",
    ratingNote: "تقييم العملاء",
    payment: "الدفع",
    cash: "نقداً",
    mada: "مدى",
  },
  en: {
    title: "Check us before you call",
    owner: "Run by",
    ownerValue: "Adel, independent technician",
    hours: "Hours",
    hoursValue: "Daily, 8:00 am to midnight",
    area: "Area",
    areaValue: "Abhar Al-Janubiyah and Al-Basatin, Jeddah",
    rating: "Rating",
    ratingValue: "4.8 from 18 ratings",
    ratingNote: "Customer rating",
    payment: "Payment",
    cash: "Cash",
    mada: "Mada",
  },
};

export const areaCopy: Bilingual<AreaCopy> = {
  ar: {
    title: "أين نعمل",
    places: ["أبحر الجنوبية", "البساتين"],
    city: "جدة",
    question: "لست متأكداً أننا نغطي منطقتك؟ راسلنا بموقعك أولاً.",
    cta: "أرسل موقعك على واتساب",
    waMsg: "مرحباً عادل، هل تخدمون منطقتي؟ موقعي: ",
  },
  en: {
    title: "Where we work",
    places: ["Abhar Al-Janubiyah", "Al-Basatin"],
    city: "Jeddah",
    question: "Not sure we cover you? Message us your location first.",
    cta: "Send your location on WhatsApp",
    waMsg: "Hi Adel, do you cover my area? My location: ",
  },
};

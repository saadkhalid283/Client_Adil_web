import type { Lang } from "@/lib/types";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCopy {
  eyebrow: string;
  title: string;
  moreTitle: string;
  moreCta: string;
  moreMsg: string;
  items: FaqItem[];
}

export const faqContent: Record<Lang, FaqCopy> = {
  ar: {
    eyebrow: "إجابات سريعة",
    title: "أسئلة يطرحها عملاؤنا كثيراً",
    moreTitle: "ما زال عندك سؤال؟",
    moreCta: "اسأل عادل على واتساب",
    moreMsg: "السلام عليكم، عندي سؤال قبل الحجز",
    items: [
      {
        q: "كم تكلفة الإصلاح؟",
        a: "نتفق معك على السعر قبل بدء العمل، ولا توجد رسوم مخفية. تعرف التكلفة أولاً ثم تقرر.",
      },
      {
        q: "هل تعملون في المساء وفي عطلة نهاية الأسبوع؟",
        a: "نعم، نعمل كل يوم من 8 صباحاً حتى منتصف الليل، سبعة أيام في الأسبوع دون إجازات.",
      },
      {
        q: "ما المناطق التي تخدمونها؟",
        a: "نخدم جميع أنحاء جدة. أرسل لنا موقعك على واتساب لنؤكد معك موعد الوصول.",
      },
      {
        q: "ما الأجهزة التي تصلحونها؟",
        a: "مكيفات الشباك والسبليت والمركزي (مع تعبئة الفريون)، والغسالات الأوتوماتيك (مع أعطال اللوحة الإلكترونية)، والثلاجات (ضعف التبريد والتسرّب والكمبروسر)، وتمديد مواسير الأجهزة الكهربائية.",
      },
      {
        q: "هل يوجد ضمان على الإصلاح؟",
        a: "نعم، على كل إصلاح ضمان. وإذا عادت المشكلة نرجع إليك دون أي تكلفة إضافية.",
      },
      {
        q: "كيف أحجز موعداً؟",
        a: "اتصل بنا أو راسلنا على واتساب. أخبرنا بالمشكلة، ونرتب معك الموعد.",
      },
      {
        q: "هل تغيّرون قطعاً دون حاجة؟",
        a: "لا. نشرح لك العطل أولاً، ولا نغيّر أي قطعة إلا عند الحاجة.",
      },
    ],
  },
  en: {
    eyebrow: "Quick answers",
    title: "Questions customers often ask",
    moreTitle: "Still have a question?",
    moreCta: "Ask Adel on WhatsApp",
    moreMsg: "Hello, I have a question before booking",
    items: [
      {
        q: "How much does a repair cost?",
        a: "We agree the price with you before any work starts, and there are no hidden fees. You know the cost first, then you decide.",
      },
      {
        q: "Do you work evenings and weekends?",
        a: "Yes. We work every day from 8 am to midnight, seven days a week with no days off.",
      },
      {
        q: "Which areas do you cover?",
        a: "We cover all of Jeddah. Send us your location on WhatsApp and we will confirm the arrival time with you.",
      },
      {
        q: "Which appliances do you repair?",
        a: "Window, split and central AC (including refrigerant refill), automatic washing machines (including control-board faults), refrigerators (weak cooling, leaks, compressor) and electrical appliance pipe installation.",
      },
      {
        q: "Is the repair guaranteed?",
        a: "Yes, every repair comes with a guarantee. If the issue returns, we come back at no extra cost.",
      },
      {
        q: "How do I book?",
        a: "Call us or message us on WhatsApp. Tell us the problem and we will arrange a time with you.",
      },
      {
        q: "Do you replace parts that do not need replacing?",
        a: "No. We explain the fault to you first, and we only replace a part when it is needed.",
      },
    ],
  },
};

export function buildFaqLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "ar",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

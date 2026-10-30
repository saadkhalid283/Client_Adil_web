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
    title: "أسئلة يسألها عملاؤنا كثيراً",
    moreTitle: "ما زال عندك سؤال؟",
    moreCta: "اسأل عادل على واتساب",
    moreMsg: "السلام عليكم، عندي سؤال قبل الحجز",
    items: [
      {
        q: "كم تكلفة الإصلاح؟",
        a: "نتفق معك على السعر قبل بدء العمل، ولا توجد أي رسوم مخفية. تعرف التكلفة أولاً ثم تقرر.",
      },
      {
        q: "هل تعملون في الليل وفي عطلة نهاية الأسبوع؟",
        a: "نعم، نعمل يومياً من الساعة ٨ صباحاً حتى منتصف الليل، سبعة أيام في الأسبوع بدون إجازات.",
      },
      {
        q: "ما هي المناطق التي تخدمونها؟",
        a: "نخدم أبحر الجنوبية وحي البساتين في جدة.",
      },
      {
        q: "ما هي الأجهزة التي تصلحونها؟",
        a: "المكيفات الشباك والسبليت والمركزية (بما فيها تعبئة الفريون)، والغسالات الأوتوماتيك (بما فيها أعطال البوردة)، والثلاجات (ضعف التبريد والتسريب والكمبروسر)، وتركيب مواسير الأجهزة الكهربائية.",
      },
      {
        q: "هل يوجد ضمان على الإصلاح؟",
        a: "نعم، على كل إصلاح ضمان. وإذا رجعت المشكلة نعود إليك بدون أي تكلفة إضافية.",
      },
      {
        q: "كيف أحجز موعداً؟",
        a: "اتصل بنا أو راسلنا على واتساب، واضغط على أزرار الاتصال أو واتساب في الموقع. أخبرنا بالمشكلة ونرتب معك الموعد.",
      },
      {
        q: "ما هي طرق الدفع؟",
        a: "نقبل الدفع نقداً أو عبر مدى.",
      },
      {
        q: "هل تستبدلون قطعاً بدون حاجة؟",
        a: "لا. نشرح لك العطل أولاً، ولا نغيّر أي قطعة إلا إذا كانت ضرورية.",
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
        q: "Do you work at night and on weekends?",
        a: "Yes. We work every day from 8am to midnight, seven days a week with no days off.",
      },
      {
        q: "Which areas do you cover?",
        a: "We serve Abhar Al-Janubiyah and Al-Basatin in Jeddah.",
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
        a: "Call us or message us on WhatsApp using the call and WhatsApp buttons on this site. Tell us the problem and we will arrange a time with you.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Cash or Mada.",
      },
      {
        q: "Do you replace parts you do not need to?",
        a: "No. We explain the fault to you first, and we only replace a part when it is necessary.",
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

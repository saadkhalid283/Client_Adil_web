export interface HeroContent {
  open: string;
  closed: string;
  callLabel: string;
  waLabel: string;
  microcopy: string;
  ratingLine: string;
  reviewLabel: string;
  dockWa: string;
  dockCall: string;
}

export const heroContent: { ar: HeroContent; en: HeroContent } = {
  ar: {
    open: "متاح الآن · طوارئ 24/7",
    closed: "متاح الآن · طوارئ 24/7",
    callLabel: "اتصل الآن",
    waLabel: "راسلنا على واتساب",
    microcopy: "اضغط للاتصال، ونحن نعتني براحتك.",
    ratingLine: "تقييماً على جوجل",
    reviewLabel: "رأي عميل",
    dockWa: "واتساب",
    dockCall: "اتصل الآن",
  },
  en: {
    open: "Available now · 24/7 emergency",
    closed: "Available now · 24/7 emergency",
    callLabel: "Call now",
    waLabel: "Message on WhatsApp",
    microcopy: "Tap to call and we will take care of your comfort.",
    ratingLine: "Google ratings",
    reviewLabel: "Customer review",
    dockWa: "WhatsApp",
    dockCall: "Call now",
  },
};

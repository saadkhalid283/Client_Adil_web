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
    open: "مفتوح الآن",
    closed: "مغلق الآن · نفتح 8:00 صباحًا",
    callLabel: "اتصل الآن",
    waLabel: "راسلنا على واتساب",
    microcopy: "اضغط للاتصال. السعر يُتفق عليه قبل أن نبدأ.",
    ratingLine: "تقييمات العملاء",
    reviewLabel: "تقييم عميل",
    dockWa: "واتساب",
    dockCall: "اتصل الآن",
  },
  en: {
    open: "Open now",
    closed: "Closed now · opens at 8:00 am",
    callLabel: "Call now",
    waLabel: "Message on WhatsApp",
    microcopy: "Tap to call. Price agreed before we start.",
    ratingLine: "customer ratings",
    reviewLabel: "Customer review",
    dockWa: "WhatsApp",
    dockCall: "Call now",
  },
};

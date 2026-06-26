export type Lang = "ar" | "en";

declare global {
  interface Window {
    trackPhoneConversion?: (url: string) => void;
    trackWhatsappConversion?: (url: string) => void;
  }
}

export interface NavStrings {
  home: string;
  services: string;
  why: string;
  reviews: string;
  contact: string;
}

export interface StepStrings {
  t: string;
  d: string;
}

export interface Translations {
  dir: "rtl" | "ltr";
  brand: string;
  brandSub: string;
  nav: NavStrings;
  waBtn: string;
  callBtn: string;
  heroEyebrow: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSub: string;
  heroWa: string;
  heroCall: string;
  heroMsg: string;
  heroRating: string;
  badges: string[];
  servicesTitle: string;
  servicesSub: string;
  requestBtn: string;
  moreTitle: string;
  whyTitle: string;
  whySub: string;
  howTitle: string;
  howSub: string;
  steps: StepStrings[];
  reviewsTitle: string;
  reviewsSub: string;
  localGuide: string;
  galleryEyebrow: string;
  galleryTitle: string;
  gallerySub: string;
  ctaTitle: string;
  ctaSub: string;
  ctaWa: string;
  ctaCall: string;
  contactTitle: string;
  contactSub: string;
  callUs: string;
  primaryLine: string;
  addressLabel: string;
  address: string;
  hoursLabel: string;
  hours: string;
  waCard: string;
  waCardSub: string;
  floatMsg: string;
  footerTag: string;
  quickLinks: string;
  footerContact: string;
  rights: string;
  langBtn: string;
}

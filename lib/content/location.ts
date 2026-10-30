export interface LocationCopy {
  button: string;
  busy: string;
  privacy: string;
  messageWithLocation: string;
  messagePlain: string;
}

export const locationContent: { ar: LocationCopy; en: LocationCopy } = {
  ar: {
    button: "أرسل موقعي عبر واتساب",
    busy: "جارٍ تحديد موقعك…",
    privacy:
      "يُضاف موقعك فقط إلى رسالة واتساب على هاتفك. لا نستلمه إلا إذا أرسلتها أنت.",
    messageWithLocation: "السلام عليكم، أحتاج إلى إصلاح. موقعي:",
    messagePlain: "السلام عليكم، أحتاج إلى إصلاح.",
  },
  en: {
    button: "Send my location on WhatsApp",
    busy: "Getting your location…",
    privacy:
      "Your location is only added to a WhatsApp message on your own phone. We only receive it if you send it.",
    messageWithLocation: "Hello, I need a repair. My location:",
    messagePlain: "Hello, I need a repair.",
  },
};

import { NAV_ITEMS } from "./nav";
import { SERVICES } from "./services-registry";
import type { ServiceSlug } from "./services-registry";
import { faqContent } from "./content/faq";

export type SearchKind = "page" | "service" | "faq";

export interface Bilingual {
  ar: string;
  en: string;
}

export interface SearchEntry {
  title: Bilingual;
  hint: Bilingual;
  href: string;
  kind: SearchKind;
  /** Extra synonym words (both languages) that help matching but are never shown. */
  keywords: string;
}

export interface SearchHit {
  entry: SearchEntry;
  score: number;
}

export const KIND_LABEL: Record<SearchKind, Bilingual> = {
  page: { ar: "الصفحات", en: "Pages" },
  service: { ar: "الخدمات", en: "Services" },
  faq: { ar: "أسئلة شائعة", en: "Questions" },
};

export const KIND_ORDER: SearchKind[] = ["service", "page", "faq"];

const SERVICE_KEYWORDS: Record<ServiceSlug, string> = {
  "window-ac-repair": "مكيف تكييف شباك مكيف شباك تبريد ac air conditioner window unit cooling",
  "split-ac-repair": "مكيف تكييف سبليت فريون تعبئة غاز تسريب ac air conditioner split refrigerant gas leak",
  "central-ac": "مكيف تكييف مركزي مواسير دكت ac air conditioner central duct hvac",
  "washing-machine-repair": "غسالة غسالات اوتوماتيك بوردة لوحة washer washing machine laundry board",
  "refrigerator-repair": "ثلاجة ثلاجات فريزر كمبروسر تسريب تبريد fridge refrigerator freezer compressor leak cooling",
  "appliance-pipe-installation": "مواسير تمديد تركيب انابيب تسريب pipe pipes plumbing installation leak",
};

const PAGE_KEYWORDS: Record<string, string> = {
  "/": "رئيسية بداية home start",
  "/services": "خدمات اصلاح صيانة مكيف ثلاجة غسالة services repair ac fridge washer",
  "/our-work": "اعمال ما نصلحه طريقة العمل خدمات work what we repair how we work services process",
  "/reviews": "تقييم تقييمات اراء عملاء نجوم reviews rating ratings stars testimonials",
  "/about": "من نحن عادل about adel who",
  "/faq": "اسئلة اجوبة سعر ضمان faq questions answers price warranty",
  "/contact": "اتصال تواصل هاتف واتساب موقع رقم contact call phone whatsapp location number",
};

function shorten(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const n of NAV_ITEMS) {
    entries.push({
      title: { ar: n.ar, en: n.en },
      hint: { ar: n.subAr, en: n.subEn },
      href: n.href,
      kind: "page",
      keywords: PAGE_KEYWORDS[n.href] ?? "",
    });
  }

  for (const s of SERVICES) {
    entries.push({
      title: { ar: s.ar, en: s.en },
      hint: { ar: s.dAr, en: s.dEn },
      href: `/services/${s.slug}`,
      kind: "service",
      keywords: SERVICE_KEYWORDS[s.slug],
    });
  }

  const count = Math.min(faqContent.ar.items.length, faqContent.en.items.length);
  for (let i = 0; i < count; i += 1) {
    const ar = faqContent.ar.items[i];
    const en = faqContent.en.items[i];
    entries.push({
      title: { ar: ar.q, en: en.q },
      hint: { ar: shorten(ar.a, 90), en: shorten(en.a, 90) },
      href: "/faq",
      kind: "faq",
      keywords: `${ar.a} ${en.a}`,
    });
  }

  return entries;
}

export const SEARCH_INDEX: SearchEntry[] = buildIndex();

/** Lowercase, strip tashkeel/tatweel and unify Arabic letter variants. */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[ً-ٰٟـ]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/\s+/g, " ")
    .trim();
}

interface Prepared {
  entry: SearchEntry;
  title: string;
  hint: string;
  keywords: string;
}

const PREPARED: Prepared[] = SEARCH_INDEX.map((entry) => ({
  entry,
  title: normalize(`${entry.title.ar} ${entry.title.en}`),
  hint: normalize(`${entry.hint.ar} ${entry.hint.en}`),
  keywords: normalize(entry.keywords),
}));

function hasWordStart(haystack: string, token: string): boolean {
  return haystack.startsWith(token) || haystack.includes(` ${token}`);
}

function scoreToken(p: Prepared, token: string): number {
  if (hasWordStart(p.title, token)) return 5;
  if (p.title.includes(token)) return 3;
  if (hasWordStart(p.keywords, token)) return 2;
  if (hasWordStart(p.hint, token)) return 1.5;
  if (p.keywords.includes(token) || p.hint.includes(token)) return 1;
  return 0;
}

/** AND semantics over tokens; title outranks keywords outrank hint. Top `limit` hits. */
export function searchSite(query: string, limit = 8): SearchHit[] {
  const tokens = normalize(query).split(" ").filter(Boolean);
  if (tokens.length === 0) return [];
  const hits: SearchHit[] = [];
  for (const p of PREPARED) {
    let total = 0;
    let ok = true;
    for (const t of tokens) {
      const s = scoreToken(p, t);
      if (s === 0) {
        ok = false;
        break;
      }
      total += s;
    }
    if (ok) hits.push({ entry: p.entry, score: total });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/** Popular-search chips: the six services plus Contact and Reviews. */
export const POPULAR: SearchEntry[] = [
  ...SEARCH_INDEX.filter((e) => e.kind === "service"),
  ...SEARCH_INDEX.filter((e) => e.href === "/contact" || e.href === "/reviews"),
];

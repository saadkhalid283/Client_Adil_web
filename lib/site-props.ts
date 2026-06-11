import type { Lang, Translations } from "./types";

export interface SiteProps {
  lang: Lang;
  L: Translations;
  isAr: boolean;
  go: (id: string) => void;
}

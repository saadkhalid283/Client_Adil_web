"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./translations";
import type { Lang, Translations } from "./types";
import type { SiteProps } from "./site-props";

export type Theme = "light" | "dark";

interface SiteContextValue {
  lang: Lang;
  L: Translations;
  isAr: boolean;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

const LANG_KEY = "adel-lang";
const THEME_KEY = "adel-theme";

function readStored(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: preference simply isn't remembered */
  }
}

export function SiteProvider({ children }: { children: ReactNode }) {
  // Initial values match the server render (Arabic, light); stored prefs apply after mount.
  const [lang, setLangState] = useState<Lang>("ar");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedLang = readStored(LANG_KEY);
    if (storedLang === "ar" || storedLang === "en") setLangState(storedLang);
    const storedTheme = readStored(THEME_KEY);
    if (storedTheme === "light" || storedTheme === "dark") setTheme(storedTheme);
  }, []);

  const L = translations[lang];

  useEffect(() => {
    document.documentElement.dir = L.dir;
    document.documentElement.lang = lang;
  }, [lang, L.dir]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    writeStored(LANG_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "ar" ? "en" : "ar";
      writeStored(LANG_KEY, next);
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      writeStored(THEME_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({ lang, L, isAr: lang === "ar", setLang, toggleLang, theme, toggleTheme }),
    [lang, L, setLang, toggleLang, theme, toggleTheme]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}

/** Props shape the existing section components expect (`go` scrolls to an in-page id). */
export function useSiteProps(): SiteProps {
  const { lang, L, isAr } = useSite();
  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return { lang, L, isAr, go };
}

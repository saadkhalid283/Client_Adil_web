"use client";

import { Globe } from "lucide-react";
import { useSite } from "@/lib/site-context";

export function LangToggle({ className = "" }: { className?: string }) {
  const { L, toggleLang, isAr } = useSite();
  return (
    <button
      type="button"
      className={`sh-lang tap ${className}`.trim()}
      onClick={toggleLang}
      aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
    >
      <Globe size={16} aria-hidden="true" />
      <span className="sh-lang__full">{L.langBtn}</span>
      <span className="sh-lang__short" aria-hidden="true">{isAr ? "EN" : "AR"}</span>
    </button>
  );
}

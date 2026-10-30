"use client";

import { useSite } from "@/lib/site-context";

/** Square 44px theme switch with a half-filled square icon. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, isAr } = useSite();
  const dark = theme === "dark";
  const label = dark
    ? isAr ? "التبديل إلى المظهر الفاتح" : "Switch to light theme"
    : isAr ? "التبديل إلى المظهر الداكن" : "Switch to dark theme";
  return (
    <button
      type="button"
      className={`sh-icon-btn tap ${className}`.trim()}
      aria-pressed={dark}
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
        <rect x="3.5" y="3.5" width="17" height="17" />
        <path d="M12 3.5v17h-8.5v-17z" fill="currentColor" stroke="none" />
      </svg>
    </button>
  );
}

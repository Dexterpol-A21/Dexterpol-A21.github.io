"use client";

import { useEffect, useState } from "react";
import {
  getStoredLocale,
  setStoredLocale,
  LOCALE_EVENT,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({
  className,
  compact = false,
  embedded = false,
  /** One button that cycles ES ↔ EN (for mobile app folder) */
  cycle = false,
}: {
  className?: string;
  compact?: boolean;
  /** Sit inside the dock — no outer glass pill */
  embedded?: boolean;
  cycle?: boolean;
}) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    setLocale(getStoredLocale());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ locale: Locale }>).detail;
      if (detail?.locale) setLocale(detail.locale);
    };
    document.addEventListener(LOCALE_EVENT, onChange);
    return () => document.removeEventListener(LOCALE_EVENT, onChange);
  }, []);

  const set = (next: Locale) => {
    setLocale(next);
    setStoredLocale(next);
  };

  const toggle = () => set(locale === "es" ? "en" : "es");

  if (cycle) {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
        aria-label={locale === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
        title={locale === "es" ? "EN" : "ES"}
        className={cn(
          "flex w-full flex-col items-center gap-1.5 rounded-2xl px-1 py-1.5 transition-colors active:bg-white/10 cursor-pointer",
          className,
        )}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.1rem] border border-white/25 bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
          <span className="text-[13px] font-display font-semibold tracking-widest text-white">
            {locale.toUpperCase()}
          </span>
        </span>
        <span className="max-w-[4.75rem] truncate text-center text-[10px] font-display font-medium leading-tight tracking-wide text-white">
          {locale === "es" ? "Idioma" : "Language"}
        </span>
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label={locale === "es" ? "Idioma" : "Language"}
      className={cn(
        "inline-flex items-center",
        embedded
          ? "gap-1.5 h-10"
          : cn(
              "glow-border rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]",
              compact ? "h-10 px-1.5 gap-0.5" : "h-12 px-2 gap-1",
            ),
        className,
      )}
    >
      <LangBtn
        active={locale === "es"}
        onClick={() => set("es")}
        compact={compact || embedded}
        embedded={embedded}
      >
        ES
      </LangBtn>
      <LangBtn
        active={locale === "en"}
        onClick={() => set("en")}
        compact={compact || embedded}
        embedded={embedded}
      >
        EN
      </LangBtn>
    </div>
  );
}

function LangBtn({
  active,
  onClick,
  children,
  compact,
  embedded,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  compact?: boolean;
  embedded?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      aria-pressed={active}
      className={cn(
        "cursor-pointer font-display tracking-widest uppercase rounded-full transition-all duration-500",
        embedded
          ? "h-10 min-w-10 px-2.5 text-[12px] font-medium inline-flex items-center justify-center"
          : compact
            ? "px-3 py-1.5 text-[12px]"
            : "px-3.5 py-2 text-[13px]",
        active
          ? embedded
            ? "bg-white/15 text-white"
            : "bg-white text-black shadow-glow"
          : "text-zinc-500 hover:text-white",
      )}
    >
      {children}
    </button>
  );
}

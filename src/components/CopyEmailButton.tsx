"use client";

import { useEffect, useState } from "react";
import {
  getStoredLocale,
  LOCALE_EVENT,
  type Locale,
} from "@/lib/i18n";
import { copyEmailToClipboard } from "@/lib/email";

const labels = {
  es: { idle: "Copiar correo", done: "Correo copiado" },
  en: { idle: "Copy email", done: "Email copied" },
} as const;

export function CopyEmailButton({
  className = "",
}: {
  className?: string;
}) {
  const [locale, setLocale] = useState<Locale>("es");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setLocale(getStoredLocale());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ locale: Locale }>).detail;
      if (detail?.locale) setLocale(detail.locale);
    };
    document.addEventListener(LOCALE_EVENT, onChange);
    return () => document.removeEventListener(LOCALE_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    const ok = await copyEmailToClipboard();
    if (ok) setCopied(true);
  };

  const label = copied ? labels[locale].done : labels[locale].idle;

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      title={label}
      className={`glow-border bg-white/5 border border-white/10 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full backdrop-blur-md text-zinc-300 hover:text-white transition-all duration-500 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] relative cursor-pointer ${className}`}
    >
      {copied ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )}
      <span className="sr-only">{label}</span>
    </button>
  );
}

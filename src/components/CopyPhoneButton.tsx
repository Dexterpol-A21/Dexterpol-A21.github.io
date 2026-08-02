"use client";

import { useEffect, useState } from "react";
import {
  getStoredLocale,
  LOCALE_EVENT,
  type Locale,
} from "@/lib/i18n";
import { SITE_PHONE, copyPhoneToClipboard } from "@/lib/email";

const labels = {
  es: { idle: "Copiar telefono", done: "Telefono copiado" },
  en: { idle: "Copy phone", done: "Phone copied" },
} as const;

export function CopyPhoneButton({
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
    const ok = await copyPhoneToClipboard();
    if (ok) setCopied(true);
  };

  const label = copied ? labels[locale].done : labels[locale].idle;

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      title={label}
      className={`glow-border bg-white/5 border border-white/10 flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 backdrop-blur-md rounded-full text-zinc-300 hover:text-white transition-all duration-500 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] cursor-pointer ${className}`}
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )}
      <span>{copied ? label : SITE_PHONE}</span>
    </button>
  );
}

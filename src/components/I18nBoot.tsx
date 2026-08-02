"use client";

import { useEffect } from "react";
import {
  getStoredLocale,
  resolveKey,
  LOCALE_EVENT,
  t,
  type Locale,
} from "@/lib/i18n";

/**
 * Applies [data-i18n] / [data-i18n-html] translations and keeps
 * document title / lang in sync with the active locale.
 */
export function I18nBoot() {
  useEffect(() => {
    const apply = (locale: Locale) => {
      document.documentElement.lang = locale;

      document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (!key) return;
        const value = resolveKey(locale, key);
        if (value != null) el.textContent = value;
      });

      document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        if (!key) return;
        const value = resolveKey(locale, key);
        if (value != null) el.innerHTML = value;
      });

      document.querySelectorAll<HTMLElement>("[data-i18n-es][data-i18n-en]").forEach((el) => {
        const value = el.getAttribute(`data-i18n-${locale}`);
        if (value != null) el.textContent = value;
      });

      const title = t(locale).meta.title;
      if (title) document.title = title;

      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", t(locale).meta.description);
    };

    apply(getStoredLocale());

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ locale: Locale }>).detail;
      if (detail?.locale) apply(detail.locale);
    };

    document.addEventListener(LOCALE_EVENT, onChange);
    return () => document.removeEventListener(LOCALE_EVENT, onChange);
  }, []);

  return null;
}

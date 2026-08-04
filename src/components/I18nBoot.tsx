"use client";

import { useEffect } from "react";
import {
  getStoredLocale,
  applyLocaleToDom,
  LOCALE_EVENT,
  type Locale,
} from "@/lib/i18n";

/**
 * Applies [data-i18n] translations on mount and on localechange.
 */
export function I18nBoot() {
  useEffect(() => {
    applyLocaleToDom(getStoredLocale());

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ locale: Locale }>).detail;
      if (detail?.locale) applyLocaleToDom(detail.locale);
    };

    document.addEventListener(LOCALE_EVENT, onChange);
    return () => document.removeEventListener(LOCALE_EVENT, onChange);
  }, []);

  return null;
}

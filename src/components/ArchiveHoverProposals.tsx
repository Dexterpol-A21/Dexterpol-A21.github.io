"use client";

import { useEffect, useState } from "react";
import {
  getStoredLocale,
  LOCALE_EVENT,
  type Locale,
} from "@/lib/i18n";

export type ArchiveItem = {
  title: string;
  role: { es: string; en: string } | string;
  desc: { es: string; en: string } | string;
  link: string;
  linkLabel: string;
  imageDesktop: string | null;
  imageMobile: string | null;
  accent: string;
};

function localized(
  value: { es: string; en: string } | string,
  locale: Locale,
): string {
  if (typeof value === "string") return value;
  return value[locale];
}

function Preview({
  src,
  title,
  accent,
  className = "",
}: {
  src: string | null;
  title: string;
  accent: string;
  className?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={title}
        className={`w-full h-auto block border border-white/10 ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full aspect-[16/10] flex items-center justify-center border border-white/10 ${className}`}
      style={{
        background: `radial-gradient(ellipse at 50% 40%, ${accent}22, transparent 60%), #050505`,
      }}
    >
      <span className="text-5xl font-display font-semibold tracking-tighter text-white/10 select-none">
        {title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

/** Muro — títulos densos a un lado, imagen sticky desktop al otro */
export function ArchiveTitleWallSide({ projects }: { projects: ArchiveItem[] }) {
  const [active, setActive] = useState(0);
  const [locale, setLocale] = useState<Locale>("es");
  const current = projects[active] ?? projects[0];

  useEffect(() => {
    setLocale(getStoredLocale());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ locale: Locale }>).detail;
      if (detail?.locale) setLocale(detail.locale);
    };
    document.addEventListener(LOCALE_EVENT, onChange);
    return () => document.removeEventListener(LOCALE_EVENT, onChange);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-6 md:gap-3 lg:gap-4 items-start">
      <div className="flex flex-wrap content-start items-end gap-x-3 gap-y-1 md:gap-x-4 md:gap-y-1.5">
        {projects.map((p, i) => {
          const sizeTier = [2, 0, 1, 0, 2, 1, 2, 0, 0, 1, 2, 1, 0];
          const tier = sizeTier[i % sizeTier.length];
          return (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`font-serif-accent leading-[0.95] tracking-tight transition-colors duration-500 ${
                active === i ? "text-white" : "text-white/30 hover:text-white"
              }`}
              style={{
                fontSize: `clamp(1.9rem, ${2.05 + tier * 0.55}rem + 1.7vw, ${3.1 + tier * 0.85}rem)`,
              }}
            >
              {p.title}
              {i < projects.length - 1 ? (
                <span className="text-white/10">,</span>
              ) : (
                <span className="text-white/10">.</span>
              )}
            </a>
          );
        })}
      </div>

      <div className="md:sticky md:top-24">
        <a
          href={current.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <div className="flex items-center justify-between px-5 pt-4 pb-3 shrink-0">
            <p className="text-[10px] font-display tracking-widest uppercase text-zinc-500">
              {localized(current.role, locale)}
            </p>
            <p className="text-[10px] font-mono text-zinc-600">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>

          <Preview
            src={current.imageDesktop}
            title={current.title}
            accent={current.accent}
            className="border-x-0 transition-opacity duration-300 group-hover:opacity-90"
          />

          <div className="px-5 py-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-lg font-display font-semibold tracking-tight text-white">
                {current.title}
              </p>
              <span className="text-[11px] font-display tracking-widest uppercase text-zinc-500 shrink-0">
                {current.linkLabel} →
              </span>
            </div>
            <p className="mt-3 font-sans text-sm font-light text-zinc-500 leading-relaxed line-clamp-3">
              {localized(current.desc, locale)}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

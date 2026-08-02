"use client";
/**
 * Featured project layouts.
 * Active: ProposalEditorial (B)
 * Archived (kept for reuse): ProposalCinematic (A), ProposalSpotlight (D)
 */
import { useRef } from "react";
import type { CSSProperties } from "react";
import { motion, useInView } from "motion/react";
import { TECH_ICONS, IconFallback } from "./icons/tech";
import { ArrowRightIcon, type ArrowRightIconHandle } from "./icons/arrow-right";

function TechBento({
  tags,
  accent,
}: {
  tags: string[];
  accent: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((label) => {
        const Icon = TECH_ICONS[label] ?? IconFallback;
        return (
          <div
            key={label}
            title={label}
            className="glow-border glass inline-flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 px-3.5 py-2.5 shadow-glass backdrop-blur-md text-zinc-300 hover:text-white transition-all duration-500"
          >
            <span className="shrink-0 inline-flex items-center justify-center w-5 h-5" style={{ color: accent }}>
              <Icon size={20} stroke={1.6} className="w-5 h-5" />
            </span>
            <span className="text-[11px] font-display tracking-wider uppercase text-center leading-tight whitespace-nowrap">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export interface ProjectLayoutProps {
  title: string;
  accent: string;
  images: string[];
  tags: string[];
  link: string;
  linkLabel: string;
  /** Optional GitHub repo URL */
  github?: string;
  /** Context label, e.g. "Producto · IA" */
  eyebrow?: string;
  /** Short problem → outcome line (legacy / compact) */
  hook?: string;
  /** What the product/site is */
  intro?: string;
  /** Personal "why I built this" note */
  story?: string;
  /** Your role on the project */
  role?: string;
  /** Optional logo image path */
  logo?: string;
  /** Longer blurb (archived layouts A/D) */
  subtitle?: string;
  /** Dev-only label when comparing layout proposals */
  proposalLabel?: string;
  /** When false, section snaps but does not force-stop (used on last featured) */
  lockSnap?: boolean;
}

function ProposalBadge({ label }: { label: string }) {
  return (
    <span className="text-[9px] font-display tracking-[0.2em] uppercase text-zinc-500 border border-zinc-700 px-2.5 py-1 rounded-full">
      {label}
    </span>
  );
}

/** Inline hero-style highlight: wrap fragments in [[like this]] */
function HighlightText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(/(\[\[.+?\]\])/g);

  return (
    <p className={className}>
      {parts.map((part, i) => {
        const match = part.match(/^\[\[(.+?)\]\]$/);
        if (match) {
          return (
            <span
              key={i}
              className="text-white font-semibold"
            >
              {match[1]}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

/** A — Cinematic full-bleed (archived alternate — not mounted) */
export function ProposalCinematic({
  title,
  subtitle,
  accent,
  images,
  tags,
  link,
  linkLabel,
  proposalLabel,
}: ProjectLayoutProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const hero = images[0];

  return (
    <section
      ref={ref}
      className="snap-start snap-always h-[100dvh] w-full relative overflow-hidden bg-black"
    >
      {/* Full-bleed product shot */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt={title}
          className="w-full h-full object-cover object-top scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 lg:p-14"
      >
        <div className="flex items-start justify-between gap-4">
          {proposalLabel ? <ProposalBadge label={proposalLabel} /> : <span />}
          <div className="flex flex-wrap justify-end gap-1.5 max-w-xs">
            {tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[9px] font-display tracking-wider uppercase px-2 py-1 rounded-full border border-white/15 text-zinc-300 bg-black/40 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-2xl">
          <h3 className="font-serif-accent text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight text-white mb-5">
            {title}
          </h3>
          <p className="font-sans text-base md:text-lg lg:text-xl font-light text-zinc-300 leading-relaxed mb-7 max-w-lg">
            {subtitle}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 text-[12px] font-display tracking-widest uppercase rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-500"
          >
            {linkLabel}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-20"
        style={{ background: accent }}
      />
    </section>
  );
}

/** B — Editorial split, image-dominant (active layout) */
export function ProposalEditorial({
  title,
  eyebrow,
  hook,
  intro,
  story,
  role,
  subtitle,
  accent,
  images,
  tags,
  link,
  linkLabel,
  github,
  proposalLabel,
  lockSnap = true,
}: ProjectLayoutProps) {
  const ref = useRef(null);
  const arrowRef = useRef<ArrowRightIconHandle>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [primary, secondary, tertiary] = images;
  const what = intro ?? hook ?? subtitle;

  return (
    <section
      ref={ref}
      className={`h-[100dvh] w-full relative overflow-hidden bg-transparent snap-start${lockSnap ? " snap-always" : ""}`}
    >
      <div className="absolute inset-0 z-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-10 flex flex-col md:grid md:grid-cols-[minmax(300px,0.95fr)_1.25fr] h-full min-h-0"
      >
        {/* Left editorial — same readable scale on laptop; grows on big screens */}
        <div className="flex h-full min-h-0 flex-col justify-start gap-5 overflow-hidden overscroll-none px-4 pt-5 pb-4 sm:px-5 md:pl-5 md:pr-4 md:py-6 xl:pl-6 xl:pr-5 md:border-r border-white/10 max-h-[48%] md:max-h-none lg:gap-6 xl:gap-7 2xl:gap-8 2xl:py-8">
          <div className="shrink-0">
            {proposalLabel ? (
              <div className="mb-3">
                <ProposalBadge label={proposalLabel} />
              </div>
            ) : null}

            {eyebrow ? (
              <p className="text-xs font-display tracking-[0.2em] uppercase text-zinc-500 mb-3">
                {eyebrow}
              </p>
            ) : (
              <div className="w-8 h-px mb-3" style={{ background: accent }} />
            )}

            <h3 className="font-serif-accent text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[0.9] tracking-tight text-white">
              {title}
            </h3>
          </div>

          <div className="shrink-0 space-y-4 md:space-y-5 lg:space-y-6">
            {what ? (
              <div>
                <p className="text-xs font-display tracking-[0.18em] uppercase text-zinc-500 mb-2">
                  Qué es
                </p>
                <HighlightText
                  text={what}
                  className="font-sans text-base md:text-lg 2xl:text-xl font-light text-zinc-300 leading-relaxed"
                />
              </div>
            ) : null}

            {story ? (
              <div>
                <p className="text-xs font-display tracking-[0.18em] uppercase text-zinc-500 mb-2">
                  Por qué lo hice
                </p>
                <HighlightText
                  text={story}
                  className="font-sans text-base md:text-lg 2xl:text-xl font-light text-zinc-300 leading-relaxed"
                />
              </div>
            ) : null}

            {role ? (
              <div>
                <p className="text-xs font-display tracking-[0.18em] uppercase text-zinc-500 mb-2">
                  Qué hice
                </p>
                <HighlightText
                  text={role}
                  className="font-sans text-base md:text-lg 2xl:text-xl font-light text-zinc-300 leading-relaxed"
                />
              </div>
            ) : null}
          </div>

          <div className="shrink-0 mt-auto pt-2">
            <p className="text-xs font-display tracking-[0.18em] uppercase text-zinc-500 mb-3">
              Cómo
            </p>
            <TechBento tags={tags} accent={accent} />

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => arrowRef.current?.startAnimation()}
                onMouseLeave={() => arrowRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2 w-fit px-8 py-3 text-[13px] font-medium tracking-[0.08em] uppercase rounded-full text-white transition-all duration-500 hover:scale-[1.02] active:scale-[0.97] hover:brightness-110 border border-white/15 shadow-none hover:shadow-[0_4px_24px_-8px_var(--cta-glow),0_0_48px_-10px_var(--cta-glow)]"
                style={
                  {
                    background: accent,
                    ["--cta-glow"]: `${accent}aa`,
                  } as CSSProperties
                }
              >
                {linkLabel}
                <ArrowRightIcon
                  ref={arrowRef}
                  size={16}
                  className="shrink-0 text-white opacity-70 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                />
              </a>

              {github ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="glow-border glass inline-flex items-center justify-center gap-2 w-fit px-7 py-3 text-[13px] font-medium tracking-[0.08em] uppercase rounded-full text-zinc-300 hover:text-white transition-all duration-500 shadow-glass"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Images — fit column; bottom row capped so it never overflows */}
        <div className="relative flex flex-1 min-h-0 flex-col justify-center gap-1.5 p-1.5 md:p-2 md:pl-1.5 overflow-hidden">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-0 flex-1 w-full items-center justify-center overflow-hidden rounded-lg group"
          >
            <img
              src={primary}
              alt={title}
              className="max-h-full max-w-full h-auto w-auto object-contain rounded-lg transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </a>
          <div className="flex h-[34%] max-h-[34%] min-h-0 w-full shrink-0 items-center justify-center gap-1.5 overflow-hidden">
            {[secondary, tertiary].filter(Boolean).map((src) => (
              <a
                key={src}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full max-w-[calc(50%-0.2rem)] items-center justify-center overflow-hidden group"
              >
                <img
                  src={src}
                  alt={title}
                  className="max-h-full max-w-full h-auto w-auto object-contain rounded-lg transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/** D — Spotlight stage (archived alternate — not mounted) */
export function ProposalSpotlight({
  title,
  subtitle,
  accent,
  images,
  tags,
  link,
  linkLabel,
  proposalLabel,
}: ProjectLayoutProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [primary, secondary, tertiary] = images;

  return (
    <section
      ref={ref}
      className="snap-start snap-always h-[100dvh] w-full relative overflow-hidden bg-black"
    >
      {/* Stage vignette */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 50% 42%, ${accent}18 0%, transparent 55%),
            radial-gradient(ellipse 90% 70% at 50% 100%, rgb(255 255 255 / 0.04) 0%, transparent 50%),
            #000
          `,
        }}
      />

      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Top bar */}
        <div className="relative z-30 flex items-center justify-between px-5 md:px-8 lg:px-12 pt-6 md:pt-8">
          {proposalLabel ? <ProposalBadge label={proposalLabel} /> : <span />}
          <div className="hidden sm:flex flex-wrap justify-end gap-x-3 gap-y-1 max-w-md">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[9px] font-display tracking-[0.18em] uppercase text-zinc-500"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Layered stage */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-10 lg:px-16 pb-4">
          {/* Left depth card */}
          {secondary && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40, rotate: -6 }}
              animate={inView ? { opacity: 0.55, x: 0, rotate: -8 } : {}}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[2%] md:left-[6%] lg:left-[10%] top-[18%] w-[28%] md:w-[24%] max-w-[280px] aspect-[9/14] overflow-hidden rounded-xl border border-white/10 shadow-2xl -z-0 hidden md:block"
            >
              <img
                src={secondary}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </motion.a>
          )}

          {/* Right depth card */}
          {tertiary && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40, rotate: 6 }}
              animate={inView ? { opacity: 0.5, x: 0, rotate: 7 } : {}}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-[2%] md:right-[6%] lg:right-[10%] top-[22%] w-[26%] md:w-[22%] max-w-[260px] aspect-[9/14] overflow-hidden rounded-xl border border-white/10 shadow-2xl -z-0 hidden md:block"
            >
              <img
                src={tertiary}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </motion.a>
          )}

          {/* Hero frame — center stage */}
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-full max-w-3xl lg:max-w-4xl aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 group"
            style={{
              boxShadow: `0 40px 80px -20px rgba(0,0,0,0.85), 0 0 60px -20px ${accent}40`,
            }}
          >
            <img
              src={primary}
              alt={title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
          </motion.a>
        </div>

        {/* Bottom copy dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 px-5 md:px-8 lg:px-12 pb-7 md:pb-9 flex flex-col md:flex-row md:items-end md:justify-between gap-5"
        >
          <div className="max-w-xl">
            <div className="w-10 h-px mb-3" style={{ background: accent }} />
            <h3 className="font-serif-accent text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-3 font-sans text-sm md:text-base font-light text-zinc-400 leading-relaxed line-clamp-2 md:line-clamp-3">
              {subtitle}
            </p>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-fit shrink-0 px-7 py-3 text-[12px] font-display tracking-widest uppercase rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-500 shadow-glow"
          >
            {linkLabel}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

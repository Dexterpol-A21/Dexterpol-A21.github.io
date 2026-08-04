"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FloatingDock } from "@/components/ui/floating-dock";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  IconUser,
  IconBriefcase,
  IconMail,
  IconHome,
  IconTimeline,
  IconCertificate,
  IconPuzzle,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getStoredLocale,
  LOCALE_EVENT,
  t,
  type Locale,
} from "@/lib/i18n";
import { SITE_EMAIL } from "@/lib/email";

function HeroIcon({
  className,
  viewBox,
  path,
}: {
  className?: string;
  viewBox: string;
  path: string;
}) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export function DockNav() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMenuHint, setShowMenuHint] = useState(true);
  const [locale, setLocale] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setLocale(getStoredLocale());
    const onLocale = (e: Event) => {
      const detail = (e as CustomEvent<{ locale: Locale }>).detail;
      if (detail?.locale) setLocale(detail.locale);
    };
    document.addEventListener(LOCALE_EVENT, onLocale);
    return () => document.removeEventListener(LOCALE_EVENT, onLocale);
  }, []);

  useEffect(() => {
    const scroller = document.getElementById("page-scroll");
    if (!scroller) return;

    const handleScroll = () => {
      const top = scroller.scrollTop;
      setScrolled(top > 150);
      // Hint only in the hero zone on mobile
      setShowMenuHint(top < 100);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  const copy = t(locale);
  // Mobile: always visible. Desktop: after scroll.
  const isVisible = !isDesktop || scrolled;

  const links = [
    {
      title: copy.nav.home,
      icon: <IconHome className="h-full w-full text-zinc-300" />,
      href: "#top",
    },
    {
      title: copy.nav.work,
      icon: <IconBriefcase className="h-full w-full text-zinc-300" />,
      href: "#work",
    },
    {
      title: copy.nav.about,
      icon: <IconUser className="h-full w-full text-zinc-300" />,
      href: "#about",
    },
    {
      title: copy.nav.experience,
      icon: <IconTimeline className="h-full w-full text-zinc-300" />,
      href: "#experiencia",
    },
    {
      title: copy.nav.certifications,
      icon: <IconCertificate className="h-full w-full text-zinc-300" />,
      href: "#certificaciones",
    },
    {
      title: copy.nav.extensions,
      icon: <IconPuzzle className="h-full w-full text-zinc-300" />,
      href: "#extensions",
    },
    {
      title: copy.nav.contact,
      icon: <IconMail className="h-full w-full text-zinc-300" />,
      href: "#contact",
    },
  ];

  const socials = [
    {
      title: "GitHub",
      icon: (
        <HeroIcon
          className="h-full w-full text-zinc-300"
          viewBox="0 0 24 24"
          path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      ),
      href: "https://github.com/Dexterpol-A21",
      external: true,
    },
    {
      title: "LinkedIn",
      icon: (
        <HeroIcon
          className="h-full w-full text-zinc-300"
          viewBox="0 0 24 24"
          path="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
        />
      ),
      href: "https://www.linkedin.com/in/paul-contreras-lobato",
      external: true,
    },
    {
      title: "Fiverr",
      icon: (
        <HeroIcon
          className="h-full w-full text-zinc-300"
          viewBox="10 9 28 29"
          path="M34 36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z"
        />
      ),
      href: "https://www.fiverr.com/s/XLzgZ0G",
      external: true,
    },
    {
      title: "Email",
      icon: (
        <HeroIcon
          className="h-full w-full text-zinc-300"
          viewBox="0 0 24 24"
          path="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        />
      ),
      href: `mailto:${SITE_EMAIL}`,
    },
  ];

  const dock = (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 z-[110] w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2 overflow-visible pointer-events-none md:bottom-6">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="dock-nav"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-auto overflow-visible"
          >
            <FloatingDock
              desktopClassName="bg-white/5 backdrop-blur-xl border border-white/10"
              mobileClassName=""
              items={links}
              trailingItems={socials}
              menuHint={
                !isDesktop && showMenuHint ? copy.nav.menuHint : undefined
              }
              endSlot={<LanguageToggle embedded className="hidden md:inline-flex" />}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (!mounted) return null;
  return createPortal(dock, document.body);
}

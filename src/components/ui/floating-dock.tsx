"use client";
/**
 * Refined for "NoProb / Paul Eduardo" Premium Aesthetic
 **/

import { cn } from "@/lib/utils";
import { IconArrowDown, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LanguageToggle } from "@/components/LanguageToggle";

export type DockItem = {
  title: string;
  icon: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

export const FloatingDock = ({
  items,
  trailingItems = [],
  endSlot,
  menuHint,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  trailingItems?: DockItem[];
  endSlot?: React.ReactNode;
  menuHint?: string;
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        trailingItems={trailingItems}
        endSlot={endSlot}
        className={desktopClassName}
      />
      <FloatingDockMobile
        items={items}
        trailingItems={trailingItems}
        endSlot={endSlot}
        menuHint={menuHint}
        className={mobileClassName}
      />
    </>
  );
};

function DockAction({
  item,
  className,
  children,
  onNavigate,
}: {
  item: DockItem;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  if (item.onClick) {
    return (
      <button
        type="button"
        onClick={() => {
          onNavigate?.();
          item.onClick?.();
        }}
        aria-label={item.title}
        title={item.title}
        className={cn("cursor-pointer", className)}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={item.href ?? "#"}
      className={cn("cursor-pointer", className)}
      onClick={() => onNavigate?.()}
      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** iOS / Android style app-folder launcher — mobile only */
const FloatingDockMobile = ({
  items,
  trailingItems = [],
  endSlot,
  menuHint,
  className,
}: {
  items: DockItem[];
  trailingItems?: DockItem[];
  endSlot?: React.ReactNode;
  menuHint?: string;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);
  const allItems = [...items, ...trailingItems];
  const preview = allItems.slice(0, 4);
  const showHint = Boolean(menuHint) && !open && !hintDismissed;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  const backdrop =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <motion.button
            key="dock-folder-backdrop"
            type="button"
            aria-label="Cerrar menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[100] cursor-default border-0 bg-black/40 backdrop-blur-xl md:hidden"
          />
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      {backdrop}

      <div
        className={cn(
          "relative z-[110] flex items-center justify-center md:hidden",
          className,
        )}
      >
        <AnimatePresence>
          {showHint && (
            <motion.div
              key="menu-hint"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pointer-events-none absolute bottom-[calc(100%+0.65rem)] left-1/2 z-[90] flex -translate-x-1/2 flex-col items-center gap-1"
            >
              <span className="whitespace-nowrap text-[10px] font-display tracking-[0.22em] uppercase text-zinc-400">
                {menuHint}
              </span>
              <motion.span
                aria-hidden
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-zinc-500"
              >
                <IconArrowDown className="h-4 w-4" stroke={1.75} />
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && (
            <motion.div
              key="app-folder"
              role="dialog"
              aria-label="Menú"
              initial={{ opacity: 0, y: 10, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="absolute bottom-[calc(100%+0.75rem)] left-1/2 z-[100] w-[min(18.5rem,calc(100vw-2rem))] max-h-[min(65dvh,26rem)] -translate-x-1/2 overflow-y-auto rounded-[1.75rem] border border-white/25 bg-zinc-950/85 p-3.5 shadow-[0_20px_50px_-16px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.22)]"
            >
              <p className="mb-3 text-center text-[10px] font-display tracking-[0.2em] uppercase text-white/70">
                Menú
              </p>
              <div className="grid grid-cols-3 gap-x-2 gap-y-3">
                {allItems.map((item, idx) => (
                  <motion.div
                    key={`${item.title}-${idx}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.025, duration: 0.2 }}
                  >
                    <DockAction
                      item={item}
                      onNavigate={close}
                      className="flex w-full flex-col items-center gap-1.5 rounded-2xl px-1 py-1.5 transition-colors active:bg-white/10"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.1rem] border border-white/25 bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                        <span className="pointer-events-none flex h-6 w-6 shrink-0 items-center justify-center text-white [&_svg]:!h-6 [&_svg]:!w-6 [&_svg]:!text-white [&_svg]:!opacity-100 [&_svg]:[color:#fff]">
                          {item.icon}
                        </span>
                      </span>
                      <span className="max-w-[4.75rem] truncate text-center text-[10px] font-display font-medium leading-tight tracking-wide text-white">
                        {item.title}
                      </span>
                    </DockAction>
                  </motion.div>
                ))}
                <motion.div
                  key="lang-cycle"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: allItems.length * 0.025, duration: 0.2 }}
                >
                  <LanguageToggle cycle />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => {
            setHintDismissed(true);
            setOpen((v) => !v);
          }}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          whileTap={{ scale: 0.88 }}
          animate={{
            scale: open ? 1.06 : 1,
            borderColor: open
              ? "rgba(255,255,255,0.3)"
              : "rgba(255,255,255,0.12)",
            backgroundColor: open
              ? "rgba(255,255,255,0.18)"
              : "rgba(255,255,255,0.1)",
          }}
          transition={{ type: "spring", stiffness: 480, damping: 26 }}
          className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, scale: 0.35, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.35, rotate: 90 }}
                transition={{ type: "spring", stiffness: 520, damping: 28 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <IconX className="h-6 w-6 text-zinc-100" stroke={1.75} />
              </motion.span>
            ) : (
              <motion.span
                key="folder"
                initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                transition={{ type: "spring", stiffness: 520, damping: 28 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="grid grid-cols-2 gap-1 p-1.5">
                  {preview.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.03,
                        type: "spring",
                        stiffness: 500,
                        damping: 24,
                      }}
                      className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-white/15 text-zinc-300"
                    >
                      <span className="pointer-events-none flex h-3 w-3 items-center justify-center [&_svg]:h-3 [&_svg]:w-3">
                        {item.icon}
                      </span>
                    </motion.span>
                  ))}
                  {Array.from({ length: Math.max(0, 4 - preview.length) }).map(
                    (_, i) => (
                      <span
                        key={`empty-${i}`}
                        className="h-5 w-5 rounded-[5px] bg-white/5"
                      />
                    ),
                  )}
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  trailingItems = [],
  endSlot,
  className,
}: {
  items: DockItem[];
  trailingItems?: DockItem[];
  endSlot?: React.ReactNode;
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "glow-border mx-auto hidden h-16 items-end gap-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 pb-3 md:flex",
        className
      )}
    >
      {items.map((item, i) => (
        <IconContainer mouseX={mouseX} key={`${item.title}-${i}`} {...item} />
      ))}
      {trailingItems.length > 0 && (
        <>
          <div className="w-px h-6 bg-white/20 mb-2 mx-1 shrink-0" aria-hidden="true" />
          {trailingItems.map((item, i) => (
            <IconContainer mouseX={mouseX} key={`${item.title}-${i}`} {...item} />
          ))}
        </>
      )}
      {endSlot && (
        <>
          <div className="w-px h-6 bg-white/20 mb-2 mx-1 shrink-0" aria-hidden="true" />
          <div className="flex h-10 items-center self-end">{endSlot}</div>
        </>
      )}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  external,
  onClick,
}: DockItem & {
  mouseX: MotionValue;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <DockAction item={{ title, icon, href, external, onClick }}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-10 left-1/2 w-fit rounded-md border border-white/10 bg-zinc-900/90 backdrop-blur-md px-3 py-1 font-display tracking-widest uppercase text-[10px] whitespace-pre text-zinc-300 shadow-xl"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-zinc-400 group-hover:text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </DockAction>
  );
}

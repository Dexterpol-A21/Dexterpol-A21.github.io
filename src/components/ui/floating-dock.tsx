"use client";
/**
 * Refined for "NoProb / Paul Eduardo" Premium Aesthetic
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

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
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  trailingItems?: DockItem[];
  endSlot?: React.ReactNode;
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
        className={mobileClassName}
      />
    </>
  );
};

function DockAction({
  item,
  className,
  children,
}: {
  item: DockItem;
  className?: string;
  children: React.ReactNode;
}) {
  if (item.onClick) {
    return (
      <button
        type="button"
        onClick={item.onClick}
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
      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

const FloatingDockMobile = ({
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
  const [open, setOpen] = useState(false);
  const allItems = [...items, ...trailingItems];
  return (
    <div
      className={cn(
        "glow-border relative flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-1.5 py-1.5 md:hidden",
        className,
      )}
    >
      {endSlot}
      <div className="relative">
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
            >
              {allItems.map((item, idx) => (
                <motion.div
                  key={`${item.title}-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (allItems.length - 1 - idx) * 0.05 }}
                >
                  <DockAction
                    item={item}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer"
                  >
                    <div className="h-5 w-5 text-zinc-300">{item.icon}</div>
                  </DockAction>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md cursor-pointer"
        >
          <IconLayoutNavbarCollapse className="h-5 w-5 text-zinc-300" />
        </button>
      </div>
    </div>
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

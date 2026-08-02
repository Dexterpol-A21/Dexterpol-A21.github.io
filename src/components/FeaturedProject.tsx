"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Aurora from "./Aurora";

interface FeaturedProjectProps {
  title: string;
  subtitle: string;
  auroraColors: [string, string, string];
  images?: string[];
  tags?: string[];
  link?: string;
  linkLabel?: string;
}

/**
 * Semi-circle scatter:
 *   index 0 → left, lower
 *   index 1 → center, highest (peak of the arc)
 *   index 2 → right, lower
 */
const ARC = [
  {
    // left — lower arm
    className: "w-[30%] max-w-[380px] left-[12%] top-[56%]",
    rotate: -5,
    z: 10,
  },
  {
    // center — peak of the arc
    className: "w-[34%] max-w-[440px] left-[50%] top-[48%]",
    rotate: 0,
    z: 30,
    center: true,
  },
  {
    // right — lower arm
    className: "w-[30%] max-w-[380px] right-[12%] top-[56%]",
    rotate: 5,
    z: 20,
  },
];

export function FeaturedProject({
  title,
  subtitle,
  auroraColors,
  images = [],
  tags,
  link,
  linkLabel,
}: FeaturedProjectProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const color = auroraColors[1];

  return (
    <section
      ref={ref}
      className="snap-start snap-always h-[100dvh] w-full relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <Aurora colorStops={auroraColors} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, #000 0%, #000 22%, transparent 50%, rgba(0,0,0,0.55) 100%)`,
        }}
      />

      {/* Title band — text + tags + CTA up top */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="absolute top-0 left-0 right-0 z-40 pt-5 md:pt-6 lg:pt-7 px-4 md:px-8 lg:px-10 xl:px-14"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-8">
          <h3 className="font-serif-accent text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7.5rem] 2xl:text-[8.5rem] leading-[0.8] tracking-[-0.025em] text-white select-none">
            {title}
          </h3>

          <div className="lg:max-w-md xl:max-w-lg lg:pb-2 flex flex-col gap-3">
            <div>
              <div className="w-10 h-px mb-2 md:mb-3" style={{ background: color }} />
              <p className="font-sans text-sm md:text-base lg:text-lg font-light leading-relaxed tracking-wide">
                <span
                  className="px-2 py-0.5 rounded-sm"
                  style={{
                    background: color,
                    color: "#000",
                    boxDecorationBreak: "clone",
                    WebkitBoxDecorationBreak: "clone",
                  }}
                >
                  {subtitle}
                </span>
              </p>
            </div>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] md:text-[10px] font-display tracking-wider uppercase px-2.5 py-1 rounded-full border"
                    style={{
                      color,
                      borderColor: `${color}35`,
                      background: `${color}10`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {link && linkLabel && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit px-6 py-2.5 text-[11px] md:text-[12px] font-display tracking-widest uppercase rounded-full transition-all duration-500 hover:brightness-110"
                style={{
                  background: color,
                  color: "#000",
                  boxShadow: `0 4px 24px -8px ${color}40`,
                }}
              >
                {linkLabel}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Arc of images — low, tight, center peak */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
        className="absolute inset-0 z-10"
      >
        {images.slice(0, 3).map((src, i) => {
          const spot = ARC[i];
          const baseTx = "center" in spot && spot.center ? "translateX(-50%) " : "";
          const base = `${baseTx}rotate(${spot.rotate}deg)`;
          return (
            <a
              key={src}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute ${spot.className} overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-out hover:z-40`}
              style={{
                zIndex: spot.z,
                transform: base,
                boxShadow: `0 0 50px -10px ${color}45, 0 20px 40px -12px rgba(0,0,0,0.55)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `${baseTx}rotate(0deg) scale(1.05)`;
                e.currentTarget.style.boxShadow = `0 0 80px -8px ${color}70, 0 28px 56px -12px rgba(0,0,0,0.5)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = base;
                e.currentTarget.style.boxShadow = `0 0 50px -10px ${color}45, 0 20px 40px -12px rgba(0,0,0,0.55)`;
              }}
            >
              <img
                src={src}
                alt={`${title} — captura ${i + 1}`}
                className="w-full h-auto block"
              />
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}

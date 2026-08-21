"use client";

import Image from "next/image";
import { motion } from "motion/react";

const images = [
  "/foto1.jpg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
];

export function ImageMarquee() {
  const marqueeImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bdff00]/40 blur-3xl"
        style={{
          width: "260px",
          height: "180px",
        }}
      />
 
      {/* Desktop */}
      <div className="relative z-10 hidden items-center justify-center gap-3 pb-2 pt-6 sm:flex">
        {images.map((src) => (
          <div
            key={src}
            className="relative aspect-square w-36 shrink-0 overflow-hidden rounded-xl border border-[#f7f7f7] bg-white shadow-md"
          >
            <Image
              src={src}
              alt="Social media preview"
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
        ))}
      </div>

      {/* Mobile Marquee */}
      <div className="relative z-10 overflow-hidden py-6 sm:hidden">
        <motion.div
          className="flex w-max gap-3"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative aspect-square w-[115px] shrink-0 overflow-hidden rounded-xl border border-[#f7f7f7] bg-white shadow-md"
            >
              <Image
                src={src}
                alt={`Social media preview ${index + 1}`}
                fill
                className="object-cover"
                sizes="115px"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-white to-transparent sm:hidden" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-white to-transparent sm:hidden" />
    </div>
  );
}
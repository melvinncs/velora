"use client";

import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence, Variants } from "motion/react";

const testimonialsData = [
  {
    id: 1,
    quote:
      "This AI agent cut our content production time by 80%. We went from posting twice a week to maintaining 5 active channels effortlessly.",
    author: "Lisa Monica",
    role: "Head of Social Media",
    image: "/hand.png",
  },
  {
    id: 2,
    quote:
      "Velora completely changed our marketing workflow. Designing visuals and captions now takes minutes instead of entire days.",
    author: "Alex Rivera",
    role: "Content Creator Lead",
    image: "/foto1.jpg",
  },
  {
    id: 3,
    quote:
      "The scheduling and analytics feature gives us exact data on when to post. Our engagement rates grew by 140% in just two months.",
    author: "Sarah Jenkins",
    role: "Brand Strategist",
    image: "/foto2.jpg",
  },
];

export const Testimonial: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  // Variants animasi ReactBits tanpa error TypeScript
  const imageVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.05 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <section className="w-full bg-white px-6 py-16 sm:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        
        {/* Kolom Kiri: Judul & Foto Utama yang Tinggi */}
        <div className="flex flex-col justify-between gap-8 lg:col-span-7">
          {/* Judul Kiri */}
          <h2 className="font-sans text-3xl font-bold tracking-tight text-[#070707] sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
            Loved By Content <br className="hidden sm:inline" />
            Creators & Marketing Teams
          </h2>

          {/* Card Foto (Tinggi & Dominan) */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] bg-[#070707]/5 sm:h-[460px] lg:h-[520px]">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Kolom Kanan: Quote Atas & Card Tombol Navigasi Bawah */}
        <div className="flex flex-col justify-between gap-8 lg:col-span-5">
          {/* Blok Quote Atas */}
          <div className="flex flex-col gap-6 pt-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#97cc00] text-white shadow-sm">
              <Quote className="h-8 w-8 fill-current" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-4"
              >
                <p className="font-sans text-base leading-relaxed text-[#595959] sm:text-lg">
                  {currentTestimonial.quote}
                </p>

                <p className="font-sans text-lg font-bold text-[#060606]">
                  {currentTestimonial.author} - <span className="font-normal text-[#595959]">{currentTestimonial.role}</span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Hijau Muda Pendek (Kanan Bawah) */}
          <div className="flex h-[180px] w-full items-end justify-between rounded-[32px] bg-[#f3ffc9] p-8 sm:h-[220px] sm:p-10">
            <div className="text-sm font-semibold tracking-wide text-[#070707]/50">
              0{currentIndex + 1} / 0{testimonialsData.length}
            </div>

            <div className="flex items-center gap-4">
              {/* Tombol Kiri */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="flex h-14 w-14 items-center justify-center rounded-full text-[#070707] transition-transform hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="h-6 w-6 stroke-[2]" />
              </button>

              {/* Tombol Kanan */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#97cc00] text-white shadow-md transition-transform hover:scale-105 active:scale-95"
              >
                <ArrowRight className="h-6 w-6 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
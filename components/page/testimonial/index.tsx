"use client";

import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

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

// Sub-komponen Reusable 3D Tilt Card
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={`perspective-1000 group relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow Neon Effect saat hover */}
      <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-[#bdff00] to-[#8ebf00] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />

      {/* Tilt Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="relative h-full w-full overflow-hidden rounded-[32px] border border-[#f0f0f0] transition-all duration-300 group-hover:border-[#bdff00]/40 group-hover:shadow-2xl"
      >
        {children}
      </motion.div>
    </div>
  );
}

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
    <section className="w-full overflow-hidden bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Kolom Kiri: Judul & Foto Utama */}
        <div className="flex flex-col justify-between gap-8 lg:col-span-7">
          {/* Judul Kiri dengan Scroll Reveal */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans text-3xl font-bold tracking-tight text-[#070707] sm:text-4xl lg:text-[48px] lg:leading-[1.15]"
          >
            Loved By Content <br className="hidden sm:inline" />
            Creators &amp; Marketing Teams
          </motion.h2>

          {/* Card Foto dengan Scroll Reveal & 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <TiltCard className="h-[380px] w-full sm:h-[460px] lg:h-[520px]">
              <div className="relative h-full w-full bg-[#070707]/5">
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
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Kolom Kanan: Quote & Card Navigasi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col justify-between gap-8 lg:col-span-5"
        >
          {/* Blok Quote Atas */}
          <div className="flex flex-col gap-6 pt-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#97cc00] text-white shadow-sm transition-transform duration-300 hover:scale-110">
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
                  {currentTestimonial.author} -{" "}
                  <span className="font-normal text-[#595959]">
                    {currentTestimonial.role}
                  </span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Hijau Muda (Kanan Bawah) dengan 3D Tilt */}
          <TiltCard className="h-[180px] w-full sm:h-[220px]">
            <div className="flex h-full w-full items-end justify-between bg-[#f3ffc9] p-8 sm:p-10">
              <div className="text-sm font-semibold tracking-wide text-[#070707]/50">
                0{currentIndex + 1} / 0{testimonialsData.length}
              </div>

              <div className="flex items-center gap-4">
                {/* Tombol Kiri */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className="flex h-14 w-14 items-center justify-center rounded-full text-[#070707] transition-transform hover:scale-110 active:scale-95"
                >
                  <ArrowLeft className="h-6 w-6 stroke-[2]" />
                </button>

                {/* Tombol Kanan */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#97cc00] text-white shadow-md transition-transform hover:scale-110 active:scale-95"
                >
                  <ArrowRight className="h-6 w-6 stroke-[2]" />
                </button>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
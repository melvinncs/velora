"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const stats = [
  {
    value: "10x",
    label: "Content production",
    progressWidth: "50%",
  },
  {
    value: "#1",
    label: "AI Content Co-Pilot",
    progressWidth: "30%",
  },
  {
    value: "85%",
    label: "Hours saved per campaign",
    progressWidth: "80%",
  },
];

export const About: NextPage = () => {
  // Motion values untuk 3D Interactive Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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
    <section className="w-full overflow-hidden bg-white px-6 py-16 sm:px-12 lg:px-24">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        
        {/* Left Side: Mockup Image Container dengan 3D Interactive Tilt & Glow */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="perspective-1000 group relative flex w-full max-w-[460px] shrink-0 items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Neon Glow Efek saat Kena Cursor */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#bdff00] to-[#8ebf00] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />

          {/* Interactive Card */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.02 }}
            className="relative flex w-full flex-col items-center justify-center rounded-[28px] border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] sm:p-6"
          >
            <Image
              src="/images.png"
              alt="Content Ops Preview"
              width={397}
              height={466}
              className="h-auto w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              style={{ transform: "translateZ(30px)" }}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Side: Content & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-1 flex-col items-start gap-8 lg:gap-12"
        >
          {/* Header Block */}
          <div className="flex flex-col items-start gap-4">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5">
              <Image
                src="/mingcute.svg"
                alt="Mingcute Icon"
                width={24}
                height={24}
                className="size-6 object-contain"
              />
              <span className="font-sans text-lg font-semibold tracking-tight text-[#070707]">
                Content Ops
              </span>
            </div>

            {/* Title */}
            <h2 className="max-w-[720px] font-sans text-3xl font-bold leading-[1.18] tracking-tight text-[#172a41] sm:text-4xl md:text-[44px]">
              Empowering Brands With Smart Autonomous Content Ops
            </h2>

            {/* Supporting Text */}
            <p className="max-w-[640px] text-base leading-relaxed text-[#4e657f] sm:text-lg">
              Our AI agent studies your brand voice, researches viral trends, and
              drafts multi-channel campaigns on autopilot.
            </p>
          </div>

          {/* Stats Metrics Block (Responsive Grid Mobile 2-1) */}
          <div className="grid w-full grid-cols-2 gap-6 sm:flex sm:items-stretch sm:justify-between sm:gap-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-1 items-center gap-4 sm:gap-6 ${
                  index === 2 ? "col-span-2 sm:col-span-1" : "col-span-1"
                }`}
              >
                <div className="flex w-full flex-col items-start gap-2.5">
                  <span className="font-sans text-4xl font-semibold leading-none tracking-tight text-[#172a41] sm:text-[48px]">
                    {item.value}
                  </span>

                  {/* Progress Line Animasi */}
                  <div className="h-1 w-full max-w-[120px] overflow-hidden rounded-full bg-[#dbe2eb] sm:w-28">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.progressWidth }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.4 + index * 0.15,
                        ease: "easeOut",
                      }}
                      className="h-full bg-[#8ebf00]"
                    />
                  </div>

                  <span className="text-sm font-medium leading-tight text-[#4e657f] sm:text-base">
                    {item.label}
                  </span>
                </div>

                {/* Vertical Divider (Desktop Only) */}
                {index < stats.length - 1 && (
                  <div className="hidden h-full w-[1px] bg-gray-200 sm:block" />
                )}
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
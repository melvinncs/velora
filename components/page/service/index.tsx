"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

const serviceData: ServiceItem[] = [
  {
    id: 1,
    title: "AI Content\nStrategy & Planning",
    description:
      "Automate every stage of your social media lifecycle effortlessly.",
  },
  {
    id: 2,
    title: "Multimedia &\nCarousel Creation",
    description:
      "Generate high-converting carousels, infographics, and short video scripts.",
  },
  {
    id: 3,
    title: "Auto Engagement &\nCommunity Ops",
    description:
      "Smart AI to handle comments, DMs, and community interactions 24/7.",
  },
];

// Sub-komponen Reusable 3D Tilt Card
function ServiceCard({ item }: { item: ServiceItem }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
      className="perspective-1000 group relative flex h-full flex-col"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow Neon Effect saat hover */}
      <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-[#bdff00] to-[#8ebf00] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-35" />

      {/* Tilt Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative flex h-full flex-col justify-between rounded-[24px] border border-[#f0f0f0] bg-[#f7f7f7] p-8 shadow-sm transition-all duration-300 group-hover:border-[#bdff00]/40 group-hover:shadow-2xl"
      >
        <div className="flex flex-col gap-6">
          {/* Icon Wrapper dengan Efek Pop-up saat Hover */}
          <div className="flex h-[52.5px] w-[52.5px] items-center justify-center rounded-[12px] bg-[#97cc00] transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/service.svg"
              alt={`${item.title} Icon`}
              width={26.6}
              height={26.6}
              className="h-[26.6px] w-[26.6px] object-contain"
            />
          </div>

          {/* Card Title */}
          <h3 className="whitespace-pre-line font-sans text-2xl font-semibold leading-[130%] text-[#070707] sm:text-[28px]">
            {item.title}
          </h3>
        </div>

        {/* Card Description */}
        <p className="mt-8 font-sans text-base leading-[140%] text-[#060606] opacity-80 sm:text-[18px]">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export const Service: NextPage = () => {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        {/* Header Section dengan Animasi Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-4"
        >
          {/* Badge Capabilities */}
          <div className="flex items-center gap-2">
            <Image
              src="/mingcute.svg"
              alt="Capabilities Icon"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <span className="font-sans text-[18px] font-semibold tracking-tight text-[#070707]">
              Capabilities
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="max-w-4xl font-sans text-3xl font-bold tracking-tight text-[#070707] sm:text-4xl lg:text-[48px] lg:leading-[52.8px]">
            Scale Your Social Media <br className="hidden sm:inline" />
            Operations Without Scaling Headcount
          </h2>
        </motion.div>

        {/* Cards Grid Section dengan Animasi Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 gap-[38px] md:grid-cols-3">
          {serviceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.15 * index,
              }}
              className="h-full"
            >
              <ServiceCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
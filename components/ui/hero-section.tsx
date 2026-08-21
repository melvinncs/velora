"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { ReactNode } from "react";

// HERO REVEAL

interface HeroRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function HeroReveal({
  children,
  delay = 0,
  className,
}: HeroRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// HERO STAGGER

interface HeroStaggerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function HeroStagger({
  children,
  delay = 0,
  className,
}: HeroStaggerProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// HERO SCALE SECTION

interface HeroScaleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function HeroScale({
  children,
  delay = 0,
  className,
}: HeroScaleProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// FLOATING ELEMENT

interface FloatingProps {
  children: ReactNode;
  duration?: number;
  distance?: number;
  delay?: number;
  className?: string;
}

export function Floating({
  children,
  duration = 4,
  distance = 10,
  delay = 0,
  className,
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// FLOATING SPARKLE

interface FloatingSparkleProps {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
}

export function FloatingSparkle({
  children,
  direction = "left",
  className,
}: FloatingSparkleProps) {
  const isLeft = direction === "left";

  return (
    <motion.div
      animate={{
        y: isLeft ? [0, -10, 0] : [0, 10, 0],
        rotate: isLeft ? [0, 8, 0] : [0, -8, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: isLeft ? 4 : 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: isLeft ? 0 : 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// PARALLAX

interface HeroParallaxProps {
  children: ReactNode;
  distance?: number;
  scaleFrom?: number;
  className?: string;
}

export function HeroParallax({
  children,
  distance = 70,
  scaleFrom = 0.94,
  className,
}: HeroParallaxProps) {
  const { scrollYProgress } = useScroll();

  const rawY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, -distance]
  );

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, scaleFrom]
  );

  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 30,
  });

  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div
      style={{
        y,
        scale,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// HOVER SCALE

interface HeroHoverProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export function HeroHover({
  children,
  scale = 1.04,
  className,
}: HeroHoverProps) {
  return (
    <motion.div
      whileHover={{
        scale,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
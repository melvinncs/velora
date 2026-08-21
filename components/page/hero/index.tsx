"use client";

import Image from "next/image";
import { Bell } from "lucide-react";

import { ImageMarquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";

import {
  HeroReveal,
  HeroStagger,
  HeroScale,
  Floating,
  FloatingSparkle,
  HeroParallax,
  HeroHover,
} from "@/components/ui/hero-section";

// SIDEBAR ITEMS

const sidebarItems = [
  {
    icon: "/sparkle.svg",
    alt: "Sparkle",
    active: true,
  },
  {
    icon: "/command.svg",
    alt: "Command",
    active: false,
  },
  {
    icon: "/calendar.svg",
    alt: "Calendar",
    active: false,
  },
  {
    icon: "/analytics.svg",
    alt: "Analytics",
    active: false,
  },
  {
    icon: "/link.svg",
    alt: "Link",
    active: false,
  },
  {
    icon: "/profil.svg",
    alt: "Profile",
    active: false,
  },
];

// SIDEBAR

function Sidebar() {
  return (
    <aside className="flex w-[58px] shrink-0 flex-col items-center border-r border-white/[0.08] bg-[#060606] py-8">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Velora Logo"
            width={28}
            height={28}
            className="size-7 object-contain"
          />
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col items-center gap-2">
          {sidebarItems.map((item, index) => (
            <HeroHover key={index} scale={1.08}>
              <button
                type="button"
                className={`flex size-9 items-center justify-center rounded-full transition-colors ${
                  item.active
                    ? "bg-[#bdff00]"
                    : "hover:bg-white/[0.07]"
                }`}
                aria-label={item.alt}
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={18}
                  height={18}
                  className="size-4.5 object-contain"
                />
              </button>
            </HeroHover>
          ))}
        </nav>
      </div>
    </aside>
  );
}

// HERO CONTENT

function HeroContent() {
  return (
    <section className="relative z-10 flex max-w-[1100px] flex-col items-center gap-5 px-4 text-center">
      {/* CURVE + CENTER SPARKLE */}

      <HeroReveal
        delay={0}
        className="relative mb-2 flex h-[55px] w-full max-w-[1180px] items-center justify-center"
      >
        {/* SVG Curve */}
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          <svg
            viewBox="0 0 1180 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full overflow-visible"
          >
            <path
              d="M 0 0 Q 590 55 1180 0"
              stroke="url(#neon-arc-gradient)"
              strokeWidth="1.5"
            />

            <defs>
              <linearGradient
                id="neon-arc-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#bdff00" stopOpacity="0" />
                <stop offset="20%" stopColor="#bdff00" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c8f031" stopOpacity="1" />
                <stop offset="80%" stopColor="#bdff00" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#bdff00" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Center Sparkle */}
        <Floating
          duration={3}
          distance={5}
          className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 translate-y-0.150 items-center justify-center"
        >
          <Image
            src="/groups.png"
            alt="Group Sparkle Icon"
            width={38}
            height={38}
            priority
            className="size-9 rounded-full bg-white object-contain shadow-sm sm:size-10"
          />
        </Floating>
      </HeroReveal>

      {/* HERO TITLE */}

      <HeroReveal delay={0.2} className="mt-4">
        <h1 className="max-w-[1080px] font-heading text-[clamp(2.65rem,5.6vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.045em] text-[#172a41]">
          <span className="sm:block sm:whitespace-nowrap">
            Your Autonomous AI Agent for
          </span>

          <span className="sm:block sm:whitespace-nowrap">
            Social Media &amp; Content Ops
          </span>
        </h1>
      </HeroReveal>

      {/* HERO DESCRIPTION */}

      <HeroStagger delay={0.45}>
        <p className="max-w-[680px] text-base font-medium leading-7 text-[#172a41]">
          <span className="sm:block sm:whitespace-nowrap">
            Automate strategy, creation, scheduling, and analytics across all
            channels
          </span>

          <span className="sm:block sm:whitespace-nowrap">
            with a dedicated AI content team.
          </span>
        </p>
      </HeroStagger>

      {/* HERO BUTTONS */}

      <HeroStagger
        delay={0.65}
        className="mt-2 flex w-full flex-col items-center justify-center gap-2.5 sm:w-auto sm:flex-row"
      >
        {/* Start Free Trial */}
        <HeroHover>
          <Button className="h-12 w-full rounded-full bg-[#bdff00] px-6 text-sm font-semibold text-[#070707] shadow-[0_12px_30px_rgba(189,255,0,0.2)] hover:bg-[#aae600] sm:w-auto">
            Start Free Trial
          </Button>
        </HeroHover>

        {/* Book a Demo */}
        <HeroHover>
          <Button
            variant="outline"
            className="h-12 w-full rounded-full border-[#f7f7f7] bg-white px-6 text-sm font-medium text-[#172a41] hover:bg-[#f7f7f7] sm:w-auto"
          >
            Book a Demo
          </Button>
        </HeroHover>
      </HeroStagger>
    </section>
  );
}

// DASHBOARD PREVIEW
function DashboardPreview() {
  return (
    <section
      className="relative mx-auto w-full overflow-hidden bg-[#060606] text-white"
      style={{
        maxWidth: "1047px",
        borderRadius: "24px 24px 0 0", 
        padding: "15px 21px 0 16px",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
      }}
    >
      {/* Dashboard Inner */}
      <div
        className="relative flex overflow-hidden bg-white"
        style={{
          maxWidth: "1010px",
          borderRadius: "20.79px 20.79px 0 0",
          margin: "0 auto",
        }}
      >
        {/* SIDEBAR */}
        <Sidebar />

        {/* DASHBOARD MAIN */}
        <main className="min-w-0 flex-1 bg-white">
          {/* DASHBOARD HEADER */}
          <header className="flex items-center justify-between border-b border-[#f7f7f7] px-6 py-4 sm:px-7">
            {/* Greeting */}
            <div>
              <h2
                className="font-sans font-semibold text-[#060606]"
                style={{
                  fontSize: "22.72px",
                  fontWeight: 600,
                  letterSpacing: "-0.49px",
                  lineHeight: "27px",
                }}
              >
                Hi, Wilson
              </h2>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              {/* Posts Counter */}
              <div className="hidden items-center gap-1.5 rounded-full border border-[#f7f7f7] bg-white px-3 py-1.5 sm:flex">
                <Image
                  src="/PokerChip.svg"
                  alt="Poker Chip"
                  width={14}
                  height={14}
                  className="size-3.5"
                />

                <span
                  className="font-inter font-medium text-[#060606]/60"
                  style={{
                    fontSize: "9.82px",
                  }}
                >
                  0/50 Posts
                </span>
              </div>

              {/* Notification */}
              <HeroHover scale={1.08}>
                <button
                  type="button"
                  className="flex size-8 items-center justify-center rounded-full border border-[#f7f7f7] bg-white transition-colors hover:bg-[#f7f7f7]"
                  aria-label="Notifications"
                >
                  <Bell className="size-3.5 text-[#060606]" />
                </button>
              </HeroHover>
            </div>
          </header>

          {/* DASHBOARD BODY */}
          <div className="relative p-6 pb-20 sm:p-7 sm:pb-24">
            {/* Heading */}
            <HeroReveal delay={0.2}>
              <div className="text-center">
                <h3
                  className="mx-auto max-w-[720px] font-sans text-[#060606]"
                  style={{
                    fontSize: "clamp(22px, 3.8vw, 37.87px)",
                    fontWeight: 500,
                    lineHeight: "140%",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span className="sm:block sm:whitespace-nowrap">
                    Select your target channel.
                  </span>

                  <span className="sm:block sm:whitespace-nowrap">
                    We&apos;ll generate the strategy, copy &amp; visuals
                  </span>
                </h3>

                <p
                  className="mt-2 text-[#595959]"
                  style={{
                    fontSize: "12.62px",
                    lineHeight: "140%",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Generate captions, hashtags, and post ideas in seconds
                </p>
              </div>
            </HeroReveal>

            {/* IMAGE MARQUEE */}
            <HeroScale delay={0.35} className="mt-2">
              <ImageMarquee />
            </HeroScale>
          </div>
        </main>
      </div>

      {/* OVERLAY FADE UTAMA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[260px] bg-gradient-to-t from-white via-white/80 via-70% to-transparent"
      />
    </section>
  );
}

// HERO PAGE

export function HeroPage() {
  return (
    <div
      id="top"
      className="relative overflow-hidden pt-2 pb-6 sm:pt-4 sm:pb-8 lg:pt-6"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 sm:gap-16 lg:gap-[46px]">
        {/* LEFT FLOATING SPARKLE */}
        <FloatingSparkle
          direction="left"
          className="pointer-events-none absolute left-[6%] top-[420px] z-[1]"
        >
          <Image
            src="/group.png"
            alt="Sparkle"
            width={32}
            height={32}
            className="size-7 rounded-full bg-white object-contain shadow-sm"
          />
        </FloatingSparkle>

        {/* RIGHT FLOATING SPARKLE (UPPER) */}
        <FloatingSparkle
          direction="right"
          className="pointer-events-none absolute right-[5%] top-[400px] z-[1]"
        >
          <Image
            src="/group.png"
            alt="Sparkle"
            width={32}
            height={32}
            className="size-7 rounded-full bg-white object-contain shadow-sm"
          />
        </FloatingSparkle>

        {/* RIGHT FLOATING SPARKLE (LOWER SMALL) */}
        <FloatingSparkle
          direction="right"
          className="pointer-events-none absolute right-[8%] bottom-[20%] z-[40]"
        >
          <Image
            src="/group.png"
            alt="Sparkle"
            width={24}
            height={24}
            className="size-5 rounded-full bg-white object-contain shadow-sm"
          />
        </FloatingSparkle>

        {/* HERO CONTENT */}
        <HeroContent />

        {/* DASHBOARD PARALLAX */}
        <HeroParallax
          distance={70}
          scaleFrom={0.94}
          className="relative z-10 flex w-full justify-center px-4 sm:px-6"
        >
          <DashboardPreview />
        </HeroParallax>
      </div>

      {/* BOTTOM CURVED SECTION */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[60px] w-full sm:h-[90px] md:h-[120px]"
        >
          <path
            d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeroPage;
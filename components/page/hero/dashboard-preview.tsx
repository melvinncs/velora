import Image from "next/image";
import {
  Bell,
  Check,
  FileText,
  Grid2X2,
  Hash,
  Camera,
  BriefcaseBusiness,
  MessageSquareText,
  Sparkles,
  TrendingUp,
  AtSign,
  Upload,
  Video,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const channels = [
  { name: "Instagram", icon: Camera, color: "#f472b6" },
  { name: "LinkedIn", icon: BriefcaseBusiness, color: "#60a5fa" },
  { name: "TikTok", icon: Video, color: "#f9fafb" },
  { name: "X / Twitter", icon: AtSign, color: "#f9fafb" },
];

const contentCards = [
  {
    title: "Career Tips",
    description: "Instagram Carousel format for professional advice.",
    type: "Carousel",
    icon: TrendingUp,
    accent: "#bdff00",
  },
  {
    title: "Daily Vlog",
    description: "Engaging short-form Reel / TikTok script.",
    type: "Reel",
    icon: Video,
    accent: "#aae600",
  },
  {
    title: "Business Infographic",
    description: "Educational & informative Twitter / X thread.",
    type: "Thread",
    icon: Grid2X2,
    accent: "#bdff00",
  },
  {
    title: "Special Promo",
    description: "High-converting hard selling copywriting.",
    type: "Copywriting",
    icon: FileText,
    accent: "#aae600",
  },
];

const sidebarItems = [
  { icon: "/sparkle.svg", alt: "Sparkle", active: true },
  { icon: "/command.svg", alt: "Command", active: false },
  { icon: "/calendar.svg", alt: "Calendar", active: false },
  { icon: "/analytics.svg", alt: "Analytics", active: false },
  { icon: "/link.svg", alt: "Link", active: false },
  { icon: "/profil.svg", alt: "Profile", active: false },
];

function Sidebar() {
  return (
    <aside
      className="flex w-[58px] shrink-0 flex-col items-center border-r border-white/[0.08] bg-[#060606]"
      style={{ height: "718.2px", padding: "32.3px 12px 33px" }}
    >
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

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`flex size-9 items-center justify-center rounded-xl transition-colors ${
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
          ))}
        </nav>
      </div>
    </aside>
  );
}

export function DashboardPreview() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#060606] text-white shadow-[0_30px_100px_rgba(23,42,65,0.18)]"
      style={{
        maxWidth: "1047px",
        borderRadius: "24px",
        padding: "15px 21px 178px 16px",
      }}
    >
      {/* Inner content generator */}
      <div
        className="relative flex overflow-hidden bg-white"
        style={{
          maxWidth: "1010px",
          height: "718.2px",
          borderRadius: "20.79px",
          margin: "0 auto",
        }}
      >
        <Sidebar />

        <main className="min-w-0 flex-1 overflow-y-auto bg-white">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-[#f7f7f7] px-6 py-4 sm:px-7">
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
            <div className="flex items-center gap-3">
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
                  style={{ fontSize: "9.82px" }}
                >
                  0/50 Posts
                </span>
              </div>
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-full border border-[#f7f7f7] bg-white transition-colors hover:bg-[#f7f7f7]"
                aria-label="Notifications"
              >
                <Bell className="size-3.5 text-[#060606]" />
              </button>
            </div>
          </header>

          {/* Main content */}
          <div className="space-y-6 p-6 sm:p-7">
            {/* Title section */}
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
                <span className="sm:block sm:whitespace-nowrap">Select your target channel.</span>{" "}
                <span className="sm:block sm:whitespace-nowrap">We&apos;ll generate the strategy, copy &amp; visuals</span>
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

            <div className="relative flex items-center justify-center gap-3 py-4">
            {/* Glow memancar dari tengah ke bawah */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 rounded-full bg-[#bdff00]/40 blur-3xl"
                style={{ width: "260px", height: "200px" }}
            />

            {["/foto1.jpg", "/foto2.jpg", "/foto3.jpg", "/foto4.jpg"].map((src) => (
                <div
                key={src}
                className="relative z-10 overflow-hidden border border-[#f7f7f7] bg-white shadow-md"
                style={{
                    width: "150px",
                    height: "110px",
                    borderRadius: "12px",
                }}
                >
                <Image
                    src={src}
                    alt="Preview"
                    fill
                    className="object-cover"
                />
                </div>
            ))}
            </div>

            {/* Channel cards */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5">
              {channels.map((channel, index) => (
                <button
                  key={channel.name}
                  type="button"
                  className={`group text-left transition-all ${
                    index === 0
                      ? "border-[#aae600] bg-white"
                      : "border-[#f7f7f7] bg-white hover:border-[#aae600]/50"
                  }`}
                  style={{
                    borderRadius: "16.83px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    padding: "12px 14px",
                  }}
                >
                  <channel.icon
                    className="size-5"
                    style={{ color: channel.color }}
                  />
                  <div className="mt-4 flex items-center justify-between gap-1">
                    <span
                      className="font-semibold text-[#060606]"
                      style={{ fontSize: "12.62px" }}
                    >
                      {channel.name}
                    </span>
                    <span
                      className={`flex size-4 items-center justify-center rounded-full border ${
                        index === 0
                          ? "border-[#aae600] bg-[#aae600] text-[#060606]"
                          : "border-[#f7f7f7] text-transparent"
                      }`}
                    >
                      <Check className="size-2.5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Content cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              {contentCards.map((content) => (
                <Card
                  key={content.title}
                  className="overflow-hidden border-[#f7f7f7] bg-white p-0 shadow-none transition-all hover:border-[#aae600]/50"
                >
                  {/* Card image area */}
                  <div
                    className="relative w-full bg-gradient-to-br from-[#f7f7f7] to-[#e8e8e8]"
                    style={{ height: "106.6px" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <content.icon
                        className="size-10"
                        style={{ color: content.accent }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 p-4">
                    <div>
                      <h5
                        className="font-semibold text-[#060606]"
                        style={{
                          fontSize: "12.62px",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {content.title}
                      </h5>
                      <p
                        className="mt-1 text-[#737373]"
                        style={{
                          fontSize: "8.42px",
                          lineHeight: "140%",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {content.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        className="border-[#f7f7f7] bg-[#f7f7f7] font-inter text-[#878787] hover:bg-[#e8e8e8]"
                        style={{
                          fontSize: "8.42px",
                          borderRadius: "70.14px",
                        }}
                      >
                        {content.type}
                      </Badge>
                      <Button
                        className="h-7 bg-[#f7f7f7] px-4 font-semibold text-[#070707] hover:bg-[#e8e8e8]"
                        style={{
                          fontSize: "8.42px",
                          borderRadius: "70.14px",
                        }}
                      >
                        Generate
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Prompt field */}
            <div
              className="bg-white p-4"
              style={{
                borderRadius: "16.83px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center gap-2">
                <MessageSquareText className="size-4 shrink-0 text-[#bdff00]" />
                <span
                  className="font-medium text-[#060606]"
                  style={{ fontSize: "11.22px", lineHeight: "150%" }}
                >
                  Tell your AI content team what to create
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <Input
                  placeholder="Tell your AI content team what you want to create..."
                  className="h-10 border-[#f7f7f7] bg-[#f7f7f7] px-4 text-[#060606] placeholder:text-[#878787] focus-visible:border-[#bdff00] focus-visible:ring-[#bdff00]/30"
                  style={{ fontSize: "9.82px", borderRadius: "70.14px" }}
                />
                <Button
                  className="h-10 shrink-0 bg-[#bdff00] px-5 font-semibold text-[#070707] hover:bg-[#aae600]"
                  style={{ fontSize: "9.82px", borderRadius: "70.14px" }}
                >
                  <Sparkles className="size-3.5" />
                  Generate
                </Button>
              </div>

              <div
                className="mt-2 flex items-center gap-3 text-[#878787]"
                style={{ fontSize: "8.42px" }}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 transition-colors hover:text-[#595959]"
                >
                  <Upload className="size-3" />
                  Add reference
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1 transition-colors hover:text-[#595959]"
                >
                  <Hash className="size-3" />
                  Brand voice active
                </button>
              </div>
            </div>

            {/* Powered by */}
            <p
              className="text-center text-[#595959]"
              style={{ fontSize: "9.82px", lineHeight: "140%" }}
            >
              Powered by AI Content Velora
            </p>
          </div>
        </main>
      </div>

      {/* Fade the lower half of the dashboard into the following section. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-white"
        style={{ height: "178px" }}
      />
    </section>
  );
}

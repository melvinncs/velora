import {
  BarChart3,
  Bell,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  FileText,
  Grid2X2,
  Hash,
  Camera,
  LayoutDashboard,
  BriefcaseBusiness,
  MessageSquareText,
  MoreHorizontal,
  Search,
  Settings2,
  Sparkles,
  Target,
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
    description: "7 ways to build a career people remember.",
    type: "LinkedIn post",
    icon: TrendingUp,
    accent: "#bdff00",
  },
  {
    title: "Instagram Carousel Format",
    description: "Create a scroll-stopping visual story.",
    type: "Carousel",
    icon: Grid2X2,
    accent: "#aae600",
  },
];

function Sidebar() {
  const items = [
    { icon: LayoutDashboard, label: "Overview", active: true },
    { icon: Sparkles, label: "AI Studio", active: false },
    { icon: FileText, label: "Content", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: Settings2, label: "Settings", active: false },
  ];

  return (
    <aside className="flex w-[58px] shrink-0 flex-col justify-between border-r border-white/[0.08] bg-[#060606] p-3 sm:w-[190px] sm:p-4">
      <div>
        <div className="mb-8 flex items-center justify-center gap-2 sm:justify-start">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#bdff00] text-[#070707]">
            <Bot className="size-4" />
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.14em] text-white sm:inline">VELORA</span>
        </div>
        <div className="space-y-2">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`flex w-full items-center justify-center gap-3 rounded-xl px-2 py-2.5 text-left text-xs transition-colors sm:justify-start sm:px-3 ${
                item.active
                  ? "bg-[#bdff00] font-semibold text-[#070707]"
                  : "text-white/45 hover:bg-white/[0.07] hover:text-white"
              }`}
              aria-label={item.label}
            >
              <item.icon className="size-4 shrink-0" />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
      <button type="button" className="flex items-center justify-center gap-3 rounded-xl p-2.5 text-white/45 hover:bg-white/[0.07] hover:text-white sm:justify-start">
        <CircleHelp className="size-4" />
        <span className="hidden text-xs sm:inline">Help center</span>
      </button>
    </aside>
  );
}

export function DashboardPreview() {
  return (
    <section className="relative w-full max-w-[1047px] overflow-hidden rounded-[24px] bg-[#060606] p-2.5 text-white shadow-[0_30px_100px_rgba(23,42,65,0.18)] sm:p-4">
      <div className="relative flex min-h-[680px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0b0b0b] sm:min-h-[780px] lg:min-h-[900px]">
        <Sidebar />
        <main className="min-w-0 flex-1 overflow-hidden bg-[#0b0b0b]">
          <header className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4 sm:px-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">Tuesday, April 22, 2025</p>
              <h2 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">Hi, Wilson</h2>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="hidden size-9 items-center justify-center rounded-full border border-white/10 text-white/50 hover:bg-white/5 sm:flex" aria-label="Search">
                <Search className="size-4" />
              </button>
              <button type="button" className="hidden size-9 items-center justify-center rounded-full border border-white/10 text-white/50 hover:bg-white/5 sm:flex" aria-label="Notifications">
                <Bell className="size-4" />
              </button>
              <Avatar size="sm" className="border border-[#aae600]">
                <AvatarFallback className="bg-[#172a41] text-xs text-white">W</AvatarFallback>
              </Avatar>
              <ChevronDown className="hidden size-4 text-white/40 sm:block" />
            </div>
          </header>

          <div className="space-y-7 p-4 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#bdff00]">
                  <Sparkles className="size-3.5" /> AI Content Studio
                </div>
                <h3 className="max-w-[560px] text-xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                  Select your target channel. We&apos;ll generate the strategy, copy &amp; visuals
                </h3>
                <p className="mt-3 max-w-[520px] text-xs leading-5 text-white/40 sm:text-sm">
                  Pick where you want to show up and let your AI content team take it from there.
                </p>
              </div>
              <Button variant="outline" size="sm" className="hidden shrink-0 rounded-full border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/10 sm:flex">
                <FileText className="size-3.5" /> Templates
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {channels.map((channel, index) => (
                <button
                  key={channel.name}
                  type="button"
                  className={`group rounded-2xl border p-3 text-left transition-all sm:p-4 ${index === 0 ? "border-[#bdff00] bg-[#bdff00]/[0.08]" : "border-white/[0.09] bg-white/[0.025] hover:border-white/25"}`}
                >
                  <channel.icon className="size-5" style={{ color: channel.color }} />
                  <div className="mt-5 flex items-center justify-between gap-1">
                    <span className="text-xs font-medium text-white sm:text-sm">{channel.name}</span>
                    <span className={`flex size-4 items-center justify-center rounded-full border ${index === 0 ? "border-[#bdff00] bg-[#bdff00] text-[#070707]" : "border-white/20 text-transparent"}`}>
                      <Check className="size-2.5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <Target className="size-4 text-[#aae600]" />
                <h4 className="text-sm font-semibold text-white">Suggested content directions</h4>
              </div>
              <button type="button" className="text-xs text-white/35 hover:text-white">View all</button>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              {contentCards.map((content) => (
                <Card key={content.title} className="border-white/[0.09] bg-white/[0.025] p-0 text-white shadow-none transition-colors hover:border-[#aae600]/50">
                  <div className="flex h-28 items-center justify-center bg-gradient-to-br from-white/[0.08] to-transparent sm:h-36">
                    <div className="relative flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-[#172a41] shadow-2xl sm:size-20">
                      <content.icon className="size-7" style={{ color: content.accent }} />
                      <span className="absolute -right-2 -top-2 size-3 rounded-full bg-[#bdff00] shadow-[0_0_14px_#bdff00]" />
                    </div>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h5 className="text-sm font-semibold text-white">{content.title}</h5>
                        <p className="mt-1 text-xs leading-5 text-white/40">{content.description}</p>
                      </div>
                      <button type="button" className="text-white/35 hover:text-white" aria-label={`More options for ${content.title}`}>
                        <MoreHorizontal className="size-4" />
                      </button>
                    </div>
                    <Badge className="rounded-full border border-white/10 bg-white/[0.06] text-[10px] font-medium text-white/55 hover:bg-white/[0.1]">{content.type}</Badge>
                  </div>
                </Card>
              ))}
            </div>

            <div className="rounded-2xl border border-[#aae600]/40 bg-[#aae600]/[0.05] p-3 sm:p-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#bdff00]">
                <MessageSquareText className="size-4" /> Tell your AI content team what to create
              </div>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <Input
                  placeholder="Tell your AI content team what you want to create..."
                  className="h-11 rounded-full border-white/10 bg-[#060606] px-4 text-xs text-white placeholder:text-white/30 focus-visible:border-[#bdff00] focus-visible:ring-[#bdff00]/30"
                />
                <Button className="h-11 shrink-0 rounded-full bg-[#bdff00] px-5 text-xs font-semibold text-[#070707] hover:bg-[#aae600]">
                  <Sparkles className="size-3.5" /> Generate
                </Button>
              </div>
              <div className="mt-2 flex items-center gap-3 text-[10px] text-white/30">
                <span className="flex items-center gap-1"><Upload className="size-3" /> Add reference</span>
                <span className="flex items-center gap-1"><Hash className="size-3" /> Brand voice active</span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

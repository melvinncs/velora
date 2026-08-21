"use client";
 
import type { NextPage } from "next";
import Image from "next/image";
import { useRef } from "react"; 
import { motion, useInView, type Variants } from "framer-motion";
import { Zap, Target, Ticket, Calendar, Share2, ChevronDown } from "lucide-react";

const cardListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.55,
      staggerChildren: 0.18,
    },
  },
};
 
const cardItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const Features: NextPage = () => {
  const workflowRef = useRef(null);
  const workflowInView = useInView(workflowRef, { once: true, amount: 0.4 });
 
  const chartRef = useRef(null);
  const chartInView = useInView(chartRef, { once: true, amount: 0.4 });
 
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
 
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl font-sans text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            Supercharge Your Content with AI–Powered Features
          </h2>
          <p className="max-w-md text-base leading-relaxed text-[#878787] sm:text-lg">
            Automate your schedule content seamlessly, and let AI handle your workflow.
          </p>
        </div>
 
        {/* Bento Grid Top Row (unchanged) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-[24px] border border-[#f0f0f0] bg-[#f7f7f7] p-5 sm:p-6 lg:col-span-5">
            <div className="relative mb-6 h-60 w-full overflow-hidden rounded-[20px] sm:h-64">
              <Image src="/phone.png" alt="Brand Aware Content Engine" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-xl font-semibold text-[#101010]">Brand Aware Content Engine</h3>
              <p className="text-sm leading-relaxed text-[#878787]">Generates copy and graphics aligned perfectly with your brand tone, guidelines, and target audience.</p>
            </div>
          </div>
 
          <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-[24px] border border-[#f0f0f0] bg-[#f7f7f7] p-6 sm:flex-row sm:items-center sm:p-8 lg:col-span-7">
            <div className="flex flex-1 flex-col gap-2 sm:max-w-[280px]">
              <h3 className="font-sans text-xl font-semibold text-[#101010]">Omnichannel Auto-Publishing</h3>
              <p className="text-sm leading-relaxed text-[#878787]">Schedule and auto-post tailored formats across Instagram, LinkedIn, TikTok, and X seamlessly.</p>
            </div>
            <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-[20px] sm:h-80 sm:w-[300px]">
              <Image src="/content.png" alt="Omnichannel Content Grid" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
 
        {/* Bento Grid Bottom Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
 
          {/* Card 3: Performance & ROI Analytics — ANIMATED WORKFLOW */}
          <div
            ref={workflowRef}
            className="flex flex-col justify-between gap-8 rounded-[24px] border border-[#f0f0f0] bg-[#f7f7f7] p-6 sm:p-8 lg:col-span-7"
          >
            <div className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-6">
 
              {/* Incoming Message Box — pops in first */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={workflowInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex shrink-0 flex-col items-center gap-3 rounded-[20px] border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="flex -space-x-2">
                  <div className="size-9 rounded-full border-2 border-white bg-amber-200" />
                  <div className="size-9 rounded-full border-2 border-white bg-blue-300" />
                  <div className="size-9 rounded-full border-2 border-white bg-rose-300" />
                </div>
                <span className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700">
                  Incoming User Message
                </span>
              </motion.div>
 
              {/* Connecting bracket — line "draws" itself after the message box appears */}
              <div className="hidden text-gray-300 sm:block">
                <svg width="24" height="120" viewBox="0 0 24 120" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <motion.path
                    d="M2 10 C 12 10, 12 60, 22 60 C 12 60, 12 110, 2 110"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={workflowInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                  />
                </svg>
              </div>
 
              {/* Stacked AI Response Cards — stagger in one by one */}
              <motion.div
                variants={cardListVariants}
                initial="hidden"
                animate={workflowInView ? "visible" : "hidden"}
                className="flex w-full flex-col gap-2.5 sm:max-w-[320px]"
              >
                <motion.div
                  variants={cardItemVariants}
                  className="flex items-start gap-3 rounded-[16px] border border-gray-100 bg-white p-3 shadow-sm"
                >
                  <div className="mt-0.5 text-amber-500"><Zap className="size-4" /></div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-900">Auto-Reply FAQ</span>
                      <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-500">AI Routed</span>
                    </div>
                    <p className="text-[11px] leading-tight text-gray-500">Instant responses for common questions without manual input.</p>
                  </div>
                </motion.div>
 
                <motion.div
                  variants={cardItemVariants}
                  className="flex items-start gap-3 rounded-[16px] border border-gray-100 bg-white p-3 shadow-sm"
                >
                  <div className="mt-0.5 text-blue-500"><Target className="size-4" /></div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-900">Lead Qualification</span>
                      <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-500">AI Routed</span>
                    </div>
                    <p className="text-[11px] leading-tight text-gray-500">Identify intent and route high-quality leads to the right team.</p>
                  </div>
                </motion.div>
 
                <motion.div
                  variants={cardItemVariants}
                  className="flex items-start gap-3 rounded-[16px] border border-gray-100 bg-white p-3 shadow-sm"
                >
                  <div className="mt-0.5 text-purple-500"><Ticket className="size-4" /></div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-900">Create Support Ticket</span>
                      <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-500">Triggered</span>
                    </div>
                    <p className="text-[11px] leading-tight text-gray-500">Automatically generate assign them with full context.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
 
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex max-w-sm flex-col gap-1">
                <h3 className="font-sans text-xl font-semibold text-[#101010]">Performance & ROI Analytics</h3>
                <p className="text-sm text-[#878787]">Track engagement, audience growth, and top-performing posts with actionable AI recommendations.</p>
              </div>
              <button className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#bdff00] px-6 py-3 font-sans text-sm font-semibold text-[#060606] transition-opacity hover:opacity-90">
                Start Free Trial
              </button>
            </div>
          </div>
 
          {/* Card 4: Smart Content Workflows — ANIMATED CHART */}
          <div
            ref={chartRef}
            className="flex flex-col justify-between gap-6 rounded-[24px] border border-[#f0f0f0] bg-[#f7f7f7] p-6 sm:p-8 lg:col-span-5"
          >
            <div className="flex flex-col rounded-[20px] border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-xs font-semibold text-gray-900">AI-Powered Analytics</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-[10px] text-gray-600">
                    <Calendar className="size-3" />
                    <span>25 January - 12 February</span>
                    <ChevronDown className="size-3" />
                  </div>
                  <div className="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-[10px] text-gray-600">
                    <Share2 className="size-3" />
                    <span>Share</span>
                  </div>
                </div>
              </div>
 
              <div className="relative mt-4 h-40 w-full">
                {/* Grow badge — fades in only after the line finishes drawing */}
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={chartInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 1.1 }}
                  className="absolute right-12 top-4 z-10 flex items-center gap-1 rounded-full border border-gray-100 bg-white px-2.5 py-1 text-[10px] font-semibold text-[#8ebf00] shadow-md"
                >
                  <Zap className="size-3 fill-current" />
                  <span>Grow 82% in this month</span>
                </motion.div>
 
                <svg className="h-full w-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8ebf00" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8ebf00" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
 
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="2" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="2" />
                  <line x1="0" y1="80" x2="300" y2="80" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="2" />
 
                  {/* Area fill fades in after the stroke line has drawn */}
                  <motion.path
                    d="M 0,100 Q 50,90 80,70 T 160,50 T 230,20 T 300,90 L 300,120 L 0,120 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={chartInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.85 }}
                  />
 
                  {/* Stroke line — drawn left to right like a pen tracing the curve */}
                  <motion.path
                    d="M 0,100 Q 50,90 80,70 T 160,50 T 230,20 T 300,90"
                    fill="none"
                    stroke="#8ebf00"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    animate={chartInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                  />
                </svg>
 
                <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                  <span>May</span><span className="font-semibold text-gray-900">Jun</span>
                  <span>Jul</span><span>Aug</span>
                </div>
              </div>
            </div>
 
            <div className="mt-4 flex flex-col gap-2">
              <h3 className="font-sans text-xl font-semibold text-[#101010]">Smart Content Workflows</h3>
              <p className="text-sm leading-relaxed text-[#3b3b3b]">Turn a single blog post or video idea into 20+ social assets across all channels instantly.</p>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};
 
export default Features;
 
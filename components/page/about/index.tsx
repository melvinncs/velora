import type { NextPage } from "next";
import Image from "next/image";

const stats = [
  {
    value: "10x",
    label: "Content production",
    progressWidth: "w-12", // 50%
  },
  {
    value: "#1",
    label: "AI Content Co-Pilot",
    progressWidth: "w-8", // 30%
  },
  {
    value: "85%",
    label: "Hours saved per campaign",
    progressWidth: "w-20", // 80%
  },
];

export const About: NextPage = () => {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-12 lg:px-24">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        
        {/* Left Side: Mockup Image Container */}
        <div className="relative flex w-full max-w-[460px] shrink-0 items-center justify-center rounded-[28px] bg-[#1a1a1a] p-4 sm:p-6 shadow-xl">
          <Image
            src="/images.png"
            alt="Content Ops Preview"
            width={397}
            height={466}
            className="h-auto w-full rounded-[20px] object-cover"
            priority
          />
        </div>

        {/* Right Side: Content & Stats */}
        <div className="flex flex-1 flex-col items-start gap-8 lg:gap-12">
          
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

          {/* Stats Metrics Block */}
          <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-stretch sm:justify-between sm:gap-4">
            {stats.map((item, index) => (
              <div key={item.label} className="flex flex-1 items-center gap-4 sm:gap-6">
                
                <div className="flex flex-col items-start gap-2.5">
                  <span className="font-sans text-4xl font-semibold leading-none tracking-tight text-[#172a41] sm:text-[48px]">
                    {item.value}
                  </span>

                  {/* Progress Line */}
                  <div className="h-1 w-28 overflow-hidden rounded-full bg-[#dbe2eb]">
                    <div className={`h-full bg-[#8ebf00] ${item.progressWidth}`} />
                  </div>

                  <span className="text-sm font-medium leading-tight text-[#4e657f] sm:text-base">
                    {item.label}
                  </span>
                </div>

                {/* Vertical Divider (Kecuali item terakhir) */}
                {index < stats.length - 1 && (
                  <div className="hidden h-full w-[1px] bg-gray-200 sm:block" />
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
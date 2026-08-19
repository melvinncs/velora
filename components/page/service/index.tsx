import type { NextPage } from "next";
import Image from "next/image";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

const serviceData: ServiceItem[] = [
  {
    id: 1,
    title: "AI Content\nStrategy & Planning",
    description: "Automate every stage of your social media lifecycle effortlessly.",
  },
  {
    id: 2,
    title: "Multimedia &\nCarousel Creation",
    description: "Generate high-converting carousels, infographics, and short video scripts.",
  },
  {
    id: 3,
    title: "Auto Engagement &\nCommunity Ops",
    description: "Smart AI to handle comments, DMs, and community interactions 24/7.",
  },
];

export const Service: NextPage = () => {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-start gap-4">
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
        </div>

        {/* Cards Grid Section */}
        <div className="grid grid-cols-1 gap-[38px] md:grid-cols-3">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-[24px] bg-[#f7f7f7] p-8 transition-shadow hover:shadow-sm"
            >
              <div className="flex flex-col gap-6">
                {/* Icon Wrapper */}
                <div className="flex h-[52.5px] w-[52.5px] items-center justify-center rounded-[12px] bg-[#97cc00]">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;
import type { NextPage } from "next";
import {
  Box,
  Sparkles,
  Feather,
  Aperture,
  Grid2x2,
  Moon,
  Globe,
  Link,
  Layers,
  Package,
  Waves,
} from "lucide-react";

const row1Companies = [
  { name: "Cubekit", Icon: Box },
  { name: "Euphoria", Icon: Sparkles },
  { name: "FeatherDev", Icon: Feather },
  { name: "FocalPoint", Icon: Aperture },
  { name: "Fourpoints", Icon: Grid2x2 },
];

const row2Companies = [
  { name: "Galileo", Icon: Moon },
  { name: "Goodwell", Icon: Globe },
  { name: "Interlock", Icon: Link },
  { name: "Layers", Icon: Layers },
  { name: "Lightbox", Icon: Package },
  { name: "Luminous", Icon: Waves },
]; 

export const CompanyTrust: NextPage = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16">
      {/* CSS Keyframes Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Fade Gradients di Sisi Kiri & Kanan */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="flex flex-col gap-8">
        {/* Row 1 */}
        <div className="overflow-hidden">
          <div className="animate-marquee items-center gap-10">
            {[...row1Companies, ...row1Companies, ...row1Companies].map(
              (item, idx) => (
                <div key={idx} className="flex items-center gap-10 shrink-0">
                  <div className="flex items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100">
                    <item.Icon className="size-7 text-[#4a4a4a]" />
                    <span className="font-sans text-xl font-bold tracking-tight text-[#333333]">
                      {item.name}
                    </span>
                  </div>
                  {/* Divider Line */}
                  <div className="h-5 w-[1px] bg-gray-200" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div className="animate-marquee items-center gap-10">
            {[...row2Companies, ...row2Companies, ...row2Companies].map(
              (item, idx) => (
                <div key={idx} className="flex items-center gap-10 shrink-0">
                  <div className="flex items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100">
                    <item.Icon className="size-7 text-[#4a4a4a]" />
                    <span className="font-sans text-xl font-bold tracking-tight text-[#333333]">
                      {item.name}
                    </span>
                  </div>
                  {/* Divider Line */}
                  <div className="h-5 w-[1px] bg-gray-200" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTrust;
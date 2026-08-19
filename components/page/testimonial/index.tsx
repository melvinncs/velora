import type { NextPage } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export const Testimonial: NextPage = () => {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:gap-16">
        
        {/* Top Content: Heading & Testimonial Text */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-7">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-[#070707] sm:text-4xl lg:text-[52px] lg:leading-[1.15]">
              Loved By Content <br className="hidden sm:inline" />
              Creators & Marketing Teams
            </h2>
          </div>

          {/* Right Quote Block */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Quote Icon Badge */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#97cc00] text-white">
              <Quote className="h-8 w-8 fill-current" />
            </div>

            {/* Testimonial Quote */}
            <p className="font-sans text-base leading-relaxed text-[#595959] sm:text-lg">
              This AI agent cut our content production time by 80%. We went from posting twice a week to maintaining 5 active channels effortlessly.
            </p>

            {/* Author */}
            <p className="font-sans text-lg font-semibold text-[#060606]">
              Lisa Monica - Head of Social Media
            </p>
          </div>

        </div>

        {/* Bottom Section: Image & Navigation Banner */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          
          {/* Left Image Card */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] sm:h-[460px] lg:col-span-6 lg:h-[500px]">
            <Image
              src="/hand.png"
              alt="Content Creator Framing Face"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Light-Green Card with Carousel Controls */}
          <div className="flex min-h-[200px] flex-col justify-end rounded-[32px] bg-[#f5ffd9] p-8 sm:p-12 lg:col-span-6 lg:h-[500px]">
            <div className="flex items-center justify-end gap-4">
              
              {/* Previous Button */}
              <button
                type="button"
                aria-label="Previous Testimonial"
                className="flex h-14 w-14 items-center justify-center rounded-full text-[#070707] transition-colors hover:bg-black/5 active:scale-95"
              >
                <ArrowLeft className="h-6 w-6 stroke-[2]" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                aria-label="Next Testimonial"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#97cc00] text-white transition-transform hover:opacity-95 active:scale-95"
              >
                <ArrowRight className="h-6 w-6 stroke-[2]" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;
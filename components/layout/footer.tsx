'use client';

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export const Footer: NextPage = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-white pt-16 text-[#172a41] lg:pt-24">
      {/* Background Arc / Soft Green Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#f5ffd9] via-[#f5ffd9]/30 to-transparent opacity-70" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-12 lg:px-20">
        
        {/* Top Call To Action (CTA) Section */}
        <div className="flex flex-col items-center text-center">
          {/* Logo / Badge Icon */}
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="/mingcute.svg"
              alt="Velora Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="max-w-4xl font-serif text-3xl font-normal leading-[1.15] text-[#172a41] sm:text-5xl lg:text-[60px]">
            Ready to Put Your Content Operations on Autopilot?
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-base font-medium text-[#4e657f] sm:text-lg">
            Start your journey with AI-powered job matching today
          </p>

          {/* Email Subscription Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="What's your email?"
              className="w-full rounded-full border border-[#d6d6d6] bg-white px-5 py-3 text-sm text-[#172a41] outline-none placeholder:text-[#394e66]/60 focus:border-[#aae600] focus:ring-1 focus:ring-[#aae600]"
              required
            />
            <button
              type="submit"
              className="w-full whitespace-nowrap rounded-full bg-[#aae600] px-7 py-3 text-sm font-semibold text-[#060606] transition-transform hover:opacity-95 active:scale-95 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Navigation & Links Section */}
        <div className="mt-20 grid grid-cols-1 gap-12 text-left md:grid-cols-12 lg:mt-32 lg:gap-16">
          
          {/* Address Information */}
          <div className="flex flex-col gap-3 md:col-span-5 lg:col-span-6">
            <h3 className="text-base font-medium text-[#060606]">Address</h3>
            <div className="text-sm leading-relaxed text-[#070707]">
              <p>123 Course Road, Springfield, IL, USA.</p>
              <p>Email: Clearmind@gmail.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-3 gap-6 md:col-span-7 lg:col-span-6">
            
            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium text-[#060606]">Company</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-[#070707]">
                <li><Link href="#" className="hover:underline">Home</Link></li>
                <li><Link href="#" className="hover:underline">About</Link></li>
                <li><Link href="#" className="hover:underline">Service</Link></li>
              </ul>
            </div>

            {/* Product Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium text-[#060606]">Product</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-[#070707]">
                <li><Link href="#" className="hover:underline">Accessories</Link></li>
                <li><Link href="#" className="hover:underline">Term &amp; Conditions</Link></li>
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium text-[#060606]">Support</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-[#070707]">
                <li><Link href="#" className="hover:underline">FAQ</Link></li>
                <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                <li><Link href="#" className="hover:underline">Help Center</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="mt-16 border-t border-[#dbe2eb] py-8 text-center text-sm text-[#172a41]">
          Velora 2025. All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
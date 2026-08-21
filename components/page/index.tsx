"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { SplashScreen } from "@/components/layout/splash-screen";
import { NavigationBar } from "@/components/layout/navbar";
import { HeroPage } from "@/components/page/hero";
import { CompanyTrust } from "@/components/page/company-trust";
import { About } from "@/components/page/about";
import { Features } from "@/components/page/feature";
import { Service } from "@/components/page/service";
import { Testimonial } from "@/components/page/testimonial";
import { Footer } from "@/components/layout/footer";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Konten utama hanya akan muncul setelah isLoading bernilai false */}
      {!isLoading && (
        <main className="min-h-screen bg-background relative">
          <NavigationBar />

          <div className="relative isolate overflow-hidden">
            <div className="gradient-ellipse-glow-bg" />
            <div className="gradient-ellipse-white-top" />
            <div className="h-[100px] sm:h-[108px] lg:h-[116px]" />
            <HeroPage />
          </div>

          <CompanyTrust />
          <About />
          <Features />
          <Service />
          <Testimonial />
          <Footer />
        </main>
      )}
    </>
  );
};
import { DashboardPreview } from "./DashboardPreview";
import { HeroContent } from "./HeroContent";
import { NavigationBar } from "./NavigationBar";

export function Hero() {
  return (
    <main id="top" className="relative isolate min-h-screen overflow-hidden bg-white px-4 pb-0 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 sm:gap-16 lg:gap-[46px]">
        <NavigationBar />
        <HeroContent />
        <DashboardPreview />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[30%] bg-gradient-to-b from-transparent to-white" />
    </main>
  );
}

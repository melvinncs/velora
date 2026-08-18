import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <section className="flex max-w-[1100px] flex-col items-center gap-5 px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#595959]">
        Your always-on content team
      </p>
      <h1 className="max-w-[1080px] font-heading text-[clamp(2.65rem,5.6vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.045em] text-[#172a41]">
        <span className="sm:whitespace-nowrap sm:block">Your Autonomous AI Agent for</span>{" "}
        <span className="sm:whitespace-nowrap sm:block">Social Media &amp; Content Ops</span>
      </h1>
      <p className="max-w-[680px] text-base font-medium leading-7 text-[#172a41]">
        <span className="sm:block sm:whitespace-nowrap">Automate strategy, creation, scheduling, and analytics across all channels</span>{" "}
        <span className="sm:block sm:whitespace-nowrap">with a dedicated AI content team.</span>
      </p>
      <div className="mt-2 flex w-full flex-col items-center justify-center gap-2.5 sm:w-auto sm:flex-row">
        <Button className="h-12 w-full rounded-full bg-[#bdff00] px-6 text-sm font-semibold text-[#070707] shadow-[0_12px_30px_rgba(189,255,0,0.2)] hover:bg-[#aae600] sm:w-auto">
          Start Free Trial
        </Button>
        <Button
          variant="outline"
          className="h-12 w-full rounded-full border-[#f7f7f7] bg-white px-6 text-sm font-medium text-[#172a41] hover:bg-[#f7f7f7] sm:w-auto"
        >
          Book a Demo
        </Button>
      </div>
    </section>
  );
}

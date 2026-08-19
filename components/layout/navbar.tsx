import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Hexagon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NavigationBar() {
  return (
    <nav className="mx-auto flex w-full max-w-[1185px] items-center justify-between gap-5 rounded-[90px] bg-[#070707] px-4 py-4.5 mt-0 sm:px-7 lg:px-9">
      <Link href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Velora home">
        <div className="relative size-10 overflow-hidden">
          <Image
            src="/logo.png"
            alt="Velora Logo"
            width={200}
            height={200}
            className="object-cover"
            priority
          />
        </div>
        <span className="text-[18px] font-semibold tracking-[0em] text-white italic font-plus-jakarta-sans sm:text-[22px]">
          VELORA
        </span>
      </Link>

      <div className="hidden items-center gap-8 text-sm font-medium md:flex">
        <Link href="#top" className="text-[#bdff00] transition-opacity hover:opacity-75">
          Home
        </Link>
        <Link href="#portfolio" className="text-white transition-colors hover:text-[#bdff00]">
          Creator Portfolio
        </Link>
        <Link href="#resources" className="text-white transition-colors hover:text-[#bdff00]">
          Resources
        </Link>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <Button variant="outline" className="h-10 rounded-full border-[#aae600] bg-transparent px-4 text-xs text-[#aae600] hover:bg-[#aae600] hover:text-[#070707] sm:px-10 sm:text-sm">
          Login
        </Button>
        <Button className="h-10 rounded-full bg-[#bdff00] px-4 text-xs font-semibold text-[#070707] hover:bg-[#aae600] sm:px-8 sm:text-sm">
          <span className="hidden sm:inline">Sign Up</span>
          <span className="sm:hidden">Start</span>
          <ArrowUpRight className="size-3.5 sm:hidden" />
        </Button>
      </div>
    </nav>
  );
}
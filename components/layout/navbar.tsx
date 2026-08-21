"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#top", label: "Home", active: true },
  { href: "#portfolio", label: "Creator Portfolio" },
  { href: "#resources", label: "Resources" },
];

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center px-4 pt-6 sm:px-8 lg:px-10">
      <nav className="relative z-20 mx-auto flex w-full max-w-[1185px] items-center justify-between gap-5 rounded-[90px] bg-[#070707] px-4 py-[18px] sm:px-7 lg:px-9 shadow-lg border border-white/10">
        <Link href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Velora home" onClick={closeMenu}>
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
          <span className="font-plus-jakarta-sans text-[18px] font-semibold italic text-white sm:text-[22px]">
            VELORA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "text-[#bdff00] transition-opacity hover:opacity-75"
                  : "text-white transition-colors hover:text-[#bdff00]"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex h-10 rounded-full border-[#aae600] bg-transparent px-4 text-xs text-[#aae600] hover:bg-[#aae600] hover:text-[#070707] sm:px-10 sm:text-sm transition-colors"
          >
            Login
          </Button>
          <Button className="hidden sm:inline-flex h-10 rounded-full bg-[#bdff00] px-4 text-xs font-semibold text-[#070707] hover:bg-[#aae600] sm:px-8 sm:text-sm">
            <span>Sign Up</span>
          </Button>

          {/* Button Toggle Menu Mobile */}
          <button
            type="button"
            onClick={toggleMenu}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5 text-[#bdff00]" /> : <Menu className="size-5 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mt-3 w-full max-w-[1185px] overflow-hidden rounded-3xl border border-white/10 bg-[#070707]/95 p-6 backdrop-blur-xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className={`text-base font-medium transition-colors ${
                      link.active
                        ? "text-[#bdff00]"
                        : "text-white/90 hover:text-[#bdff00]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="my-1 h-[1px] w-full bg-white/10" />

              <div className="flex flex-col gap-2.5">
                <Button
                  variant="outline"
                  className="h-11 w-full rounded-full border-[#aae600] bg-transparent text-sm text-[#aae600] hover:bg-[#aae600] hover:text-[#070707]"
                  onClick={closeMenu}
                >
                  Login
                </Button>
                <Button
                  className="h-11 w-full rounded-full bg-[#bdff00] text-sm font-semibold text-[#070707] hover:bg-[#aae600]"
                  onClick={closeMenu}
                >
                  <span>Sign Up</span>
                  <ArrowUpRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  ); 
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#top", label: "Home", active: true },
  { href: "#portfolio", label: "Creator Portfolio" },
  { href: "#resources", label: "Resources" },
];

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Deteksi ketika halaman di-scroll untuk memberikan efek floating & background shadow
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="fixed left-0 right-0 top-0 z-[100] flex flex-col items-center px-4 pt-6 sm:px-8 lg:px-10"
    >
      <nav
        className={`relative z-20 mx-auto flex w-full max-w-[1185px] items-center justify-between gap-5 rounded-[90px] border bg-[#070707] px-4 py-[18px] transition-all duration-300 sm:px-7 lg:px-9 ${
          isScrolled
            ? "border-[#bdff00]/30 bg-[#070707]/80 shadow-2xl shadow-[#bdff00]/5 backdrop-blur-xl"
            : "border-white/10 shadow-lg"
        }`}
      >
        {/* Logo & Brand Name */}
        <Link
          href="#top"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="Velora home"
          onClick={closeMenu}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative size-10 overflow-hidden"
          >
            <Image
              src="/logo.png"
              alt="Velora Logo"
              width={200}
              height={200}
              className="object-cover"
              priority
            />
          </motion.div>
          <span className="font-plus-jakarta-sans text-[18px] font-semibold italic text-white transition-colors duration-300 group-hover:text-[#bdff00] sm:text-[22px]">
            VELORA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-1"
            >
              <span
                className={`transition-colors duration-200 ${
                  link.active
                    ? "text-[#bdff00]"
                    : "text-white/80 hover:text-[#bdff00]"
                }`}
              >
                {link.label}
              </span>

              {/* Glowing Indicator Line untuk link aktif */}
              {link.active && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#bdff00] shadow-[0_0_8px_#bdff00]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="hidden h-10 rounded-full border-[#aae600] bg-transparent px-4 text-xs text-[#aae600] transition-colors hover:bg-[#aae600] hover:text-[#070707] sm:inline-flex sm:px-8 sm:text-sm"
            >
              Login
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="hidden h-10 rounded-full bg-[#bdff00] px-4 text-xs font-semibold text-[#070707] transition-all hover:bg-[#aae600] hover:shadow-[0_0_15px_rgba(189,255,0,0.4)] sm:inline-flex sm:px-8 sm:text-sm">
              <span>Sign Up</span>
            </Button>
          </motion.div>

          {/* Button Toggle Menu Mobile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={toggleMenu}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="size-5 text-[#bdff00]" />
            ) : (
              <Menu className="size-5 text-white" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="mt-3 w-full max-w-[1185px] overflow-hidden rounded-3xl border border-white/10 bg-[#070707]/95 p-6 backdrop-blur-xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
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
                  </motion.div>
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
    </motion.header>
  );
}
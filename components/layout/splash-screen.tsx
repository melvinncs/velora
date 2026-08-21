"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    // Konfigurasi Partikel
    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      color: string;
      size: number;
      vx: number;
      vy: number;
      ease: number;
      friction: number;

      constructor(x: number, y: number, color: string) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = Math.random() * 1.8 + 0.8;
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.08;
        this.friction = 0.88;
      }

      update(isExploding: boolean) {
        if (isExploding) {
          // Efek meledak / dispersi saat selesai
          const angle = Math.random() * Math.PI * 2;
          const force = Math.random() * 25 + 10;
          this.vx += Math.cos(angle) * force;
          this.vy += Math.sin(angle) * force;
          this.x += this.vx;
          this.y += this.vy;
        } else {
          // Efek pembentukan teks
          const dx = this.originX - this.x;
          const dy = this.originY - this.y;
          this.vx = dx * this.ease;
          this.vy = dy * this.ease;
          this.x += this.vx;
          this.y += this.vy;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    let particles: Particle[] = [];
    let isExploding = false;

    function init() {
      if (!ctx) return;
      particles = [];

      // Render teks ke offscreen canvas untuk mengambil data piksel
      ctx.fillStyle = "#ffffff";
      const fontSize = Math.min(width * 0.15, 120);
      ctx.font = `italic bold ${fontSize}px "Plus Jakarta Sans", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("VELORA", width / 2, height / 2);

      const pixels = ctx.getImageData(0, 0, width, height).data;
      ctx.clearRect(0, 0, width, height);

      // Ambil piksel dengan step gap
      const gap = Math.max(3, Math.floor(fontSize / 25));
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4;
          const alpha = pixels[index + 3];

          if (alpha > 128) {
            // Tentukan warna neon (#bdff00) atau putih
            const color = Math.random() > 0.3 ? "#bdff00" : "#ffffff";
            particles.push(new Particle(x, y, color));
          }
        }
      }
    }

    init();

    function render() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(7, 7, 7, 0.25)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(isExploding);
        particles[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    // Timer untuk animasi dispersi partikel dan memicu callback penutupan
    const explodeTimer = setTimeout(() => {
      isExploding = true;
    }, 2200);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(explodeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070707] overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-[#bdff00]/10 blur-[140px]" />

      {/* Logo di atas Particle Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[28%] z-10 flex items-center justify-center"
      >
        <Image
          src="/logo.png"
          alt="Velora Logo"
          width={48}
          height={48}
          className="size-12 object-contain drop-shadow-[0_0_15px_rgba(189,255,0,0.5)]"
          priority
        />
      </motion.div>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="block size-full" />
    </motion.div>
  );
}
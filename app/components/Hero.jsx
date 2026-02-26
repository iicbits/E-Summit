"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { Download } from "lucide-react";
import Image from "next/image";

export default function hero() {
  const BROCHURE_LINK = "/DOCS/E-Summit Brochure.pdf";

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0"
        style={{ filter: "blur(10px)", opacity: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          transition={{
            scale: { duration: 1.5, ease: "easeOut" },
            opacity: { duration: 0.8 },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          }}
          className="relative w-101.5 h-101.5 rounded-[363px]"
          style={{
            background:
              "linear-gradient(229deg, #df7afe 13%, rgba(201, 110, 240, 0) 35.0236%, rgba(164, 92, 219, 0) 64.1724%, #814ac8 88%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: -360 }}
          transition={{
            opacity: { duration: 1, delay: 0.5 },
            scale: { duration: 1, delay: 0.5 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
          className="absolute w-75 h-75 rounded-[363px]"
          style={{
            background:
              "linear-gradient(141deg, #df7afe 13%, rgba(201, 110, 240, 0) 35.0236%, rgba(164, 92, 219, 0) 64.1724%, #814ac8 88%)",
            top: "50%",
            left: "50%",
            marginTop: "-150px",
            marginLeft: "-150px",
          }}
        />
      </div>
      <div className="absolute inset-0 z-10">
        <ParticleBackground />
      </div>
      <motion.div
        initial={{ opacity: 0.001, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, x: "-50%", y: "-50%" }}
        transition={{
          delay: 0.6,
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          type: "tween",
        }}
        className="absolute z-20 w-212.5 max-w-full px-4 flex flex-col items-center"
        style={{ top: "47%", left: "49%" }}
      >
        <Image
          src="/images/E-SUMMIT-06.webp"
          alt="E-SUMMIT 2026"
          width={850}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />

        <motion.a
          href={BROCHURE_LINK || undefined}
          download={!!BROCHURE_LINK ? "E-Summit Brochure.pdf" : undefined}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className={`mt-10 px-5 py-2 md:px-8 md:py-3 rounded-full font-normal md:font-medium text-base md:text-lg transition-all flex items-center gap-3 border ${
            BROCHURE_LINK
              ? "backdrop-blur-2xl text-purple-200/80 border-accent-400 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
              : "bg-white/5 text-white/40 border-white/10 cursor-not-allowed"
          }`}
          onClick={(e) => !BROCHURE_LINK && e.preventDefault()}
        >
          <Download size={20} />
          Download Brochure
        </motion.a>
      </motion.div>
    </section>
  );
}

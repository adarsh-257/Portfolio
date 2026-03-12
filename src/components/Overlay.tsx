"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0-20% scroll — Name & Title
  const s1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.22], [0, 1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.2], [0, -120]);

  // Section 2: 25-45% scroll — Tagline
  const s2Opacity = useTransform(scrollYProgress, [0.22, 0.28, 0.38, 0.46], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.22, 0.46], [80, -80]);

  // Section 3: 55-75% scroll — Engineering
  const s3Opacity = useTransform(scrollYProgress, [0.48, 0.55, 0.65, 0.72], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.48, 0.72], [80, -80]);

  // Section 4: 78-95% scroll — CTA
  const s4Opacity = useTransform(scrollYProgress, [0.75, 0.82, 0.92, 1], [0, 1, 1, 0.6]);
  const s4Y = useTransform(scrollYProgress, [0.75, 1], [80, -40]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-[500vh] z-10 pointer-events-none"
    >
      {/* Section 1: Hero */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <Image
            src="/main-logo.png"
            alt="Straw Hat Pirates Logo"
            width={140}
            height={140}
            className="mb-6 drop-shadow-[0_0_30px_rgba(212,168,67,0.4)]"
          />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center">
            <span className="text-gradient-gold">Adarsh Doli</span>
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4a843]" />
            <p className="text-lg md:text-xl tracking-[0.25em] uppercase font-light text-[#d4a843]/80">
              Software Engineer &bull; Full-Stack Developer
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4a843]" />
          </div>
          <p className="mt-6 text-sm text-[#f5e6c8]/40 tracking-[0.3em] uppercase">
            Scroll to explore
          </p>
        </motion.div>
      </motion.div>

      {/* Section 2: Build Statement */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="sticky top-0 h-screen w-full flex items-center px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-2xl">
          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            {"// MISSION"}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            I craft{" "}
            <span className="text-gradient-gold">scalable systems</span>
            <br />
            & seamless experiences.
          </h2>
          <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-[#d4a843] to-transparent" />
        </div>
      </motion.div>

      {/* Section 3: Bridge Statement */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="sticky top-0 h-screen w-full flex items-center justify-end px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-2xl text-right">
          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            {"// PHILOSOPHY"}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            Bridging{" "}
            <span className="text-gradient-gold">design</span>
            <br />& engineering.
          </h2>
          <div className="mt-6 h-[2px] w-24 bg-gradient-to-l from-[#d4a843] to-transparent ml-auto" />
        </div>
      </motion.div>

      {/* Section 4: Tech Stack hint */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
      >
        <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          {"// THE GRAND LINE AWAITS"}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-[1.2]">
          Full-Stack.{" "}
          <span className="text-gradient-gold">Cloud-Native.</span>
          <br />
          AI-Integrated.
        </h2>
      </motion.div>
    </div>
  );
}

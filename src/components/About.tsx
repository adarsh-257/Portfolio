"use client";

import { motion } from "framer-motion";
import CharacterLogo from "./CharacterLogo";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4a843]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase font-medium">
              {"// About Me"}
            </p>
            <CharacterLogo
              src="/logos/Chopper_Logo.png"
              alt="Chopper"
              size={45}
            />
          </div>

          <div className="grid md:grid-cols-[3fr_1fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Java Full Stack Developer with{" "}
                <span className="text-gradient-gold">3+ years</span> of
                experience
              </h2>
              <p className="text-[#f5e6c8]/80 text-lg leading-relaxed mb-6">
                Designing and delivering scalable backend systems, RESTful
                APIs, and cloud-native applications across fintech, edtech,
                and nonprofit domains. Proficient in Java, Spring Boot,
                React, and AWS.
              </p>
              <p className="text-[#f5e6c8]/70 text-base leading-relaxed">
                Proven ability to drive measurable impact — cutting query
                latency by 67%, scaling payment systems to 10K+ monthly
                transactions, and maintaining 99.9% uptime across production
                environments.
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-gradient-gold mb-1">
                3+
              </div>
              <div className="text-xs text-[#f5e6c8]/70 tracking-wider uppercase">
                Years Exp
              </div>
              <div className="h-[1px] bg-white/5 my-4" />
              <div className="text-3xl font-bold text-gradient-gold mb-1">
                MS
              </div>
              <div className="text-xs text-[#f5e6c8]/40 tracking-wider uppercase">
                CS @ UB-SUNY
              </div>
              <div className="h-[1px] bg-white/5 my-4" />
              <div className="text-3xl font-bold text-gradient-gold mb-1">
                10K+
              </div>
              <div className="text-xs text-[#f5e6c8]/70 tracking-wider uppercase">
                Monthly Txns
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

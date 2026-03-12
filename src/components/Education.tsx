"use client";

import { motion } from "framer-motion";
import CharacterLogo from "./CharacterLogo";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            {"// Training Arc"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient-gold">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-card-strong p-8 md:p-10 max-w-2xl"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#f5e6c8]">
                University at Buffalo — SUNY
              </h3>
              <p className="text-[#d4a843] font-medium mt-2">
                Master of Science, Computer Science
              </p>
              <p className="text-sm text-[#f5e6c8]/70 mt-2">
                Jan 2024 – June 2025
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="glass-card px-4 py-2">
                  <span className="text-sm text-[#d4a843] font-semibold">
                    GPA: 3.3 / 4.0
                  </span>
                </div>
              </div>
            </div>
            <CharacterLogo
              src="/logos/Chopper_Logo.png"
              alt="Chopper"
              size={55}
              className="hidden sm:block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

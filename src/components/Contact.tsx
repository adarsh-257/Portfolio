"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const contactLinks = [
  {
    label: "adarshdoli257@gmail.com",
    href: "mailto:adarshdoli257@gmail.com",
    icon: "✉",
  },
  {
    label: "716-708-8999",
    href: "tel:+17167088999",
    icon: "☎",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adarsh-doli/",
    icon: "⚓",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d4a843]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/main-logo.png"
            alt="Straw Hat Logo"
            width={120}
            height={120}
            className="mx-auto mb-8 drop-shadow-[0_0_20px_rgba(212,168,67,0.3)]"
          />

          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            {"// Get In Touch"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Something{" "}
            <span className="text-gradient-gold">Exceptional</span>
          </h2>
          <p className="text-[#f5e6c8]/75 text-lg max-w-xl mx-auto mb-10">
            Open to new opportunities and collaborations. Whether you need
            a full-stack engineer or a technical partner, let&apos;s connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 0 25px rgba(212, 168, 67, 0.2)",
                }}
                className="glass-card px-6 py-3 flex items-center gap-3 hover:border-[#d4a843]/30 transition-colors duration-300"
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-sm text-[#f5e6c8]/70 hover:text-[#d4a843] transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:adarshdoli257@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#d4a843] to-[#b8922e] text-[#0a0e1a] font-bold tracking-wider text-sm uppercase gold-glow-strong hover:shadow-[0_0_50px_rgba(212,168,67,0.3)] transition-shadow duration-500"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-[#f5e6c8]/20 tracking-wider">
            © 2025 Adarsh Doli
          </p>
        </div>
      </div>
    </section>
  );
}

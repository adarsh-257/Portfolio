"use client";

import { motion } from "framer-motion";
import CharacterLogo from "./CharacterLogo";

const projects = [
  {
    title: "Client Onboarding & Billing System",
    subtitle: "Full-Stack Automation Platform",
    logo: { src: "/logos/Ussop_Logo.png", alt: "Ussop" },
    description:
      "Built a full-stack Flask and GraphQL platform to automate client onboarding, provisioning 500+ subscription accounts and generating invoice templates across multiple business functions.",
    highlights: [
      "Integrated Apache Kafka for real-time microservice messaging, cutting handoff failures by 35 events/day",
      "Configured AWS S3 encrypted document storage with lifecycle policies across 2,000+ client files",
      "Deployed AWS Lambda functions for proactive error monitoring, reducing downtime by 12+ hours/month",
    ],
    tags: ["Flask", "GraphQL", "Apache Kafka", "AWS Lambda", "S3"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4a843]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            {"// Treasure Map"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 40px rgba(212, 168, 67, 0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="glass-card-strong h-full p-8 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#f5e6c8] group-hover:text-[#d4a843] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#d4a843]/70 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <CharacterLogo
                    src={project.logo.src}
                    alt={project.logo.alt}
                    size={45}
                  />
                </div>

                <p className="text-sm text-[#f5e6c8]/75 leading-relaxed mb-5">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-[#f5e6c8]/80"
                    >
                      <span className="text-[#d4a843] mt-0.5">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow line */}
                <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-[#d4a843]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

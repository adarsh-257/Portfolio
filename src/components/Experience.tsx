"use client";

import { motion } from "framer-motion";
import CharacterLogo from "./CharacterLogo";

const experiences = [
  {
    role: "Software Engineer",
    company: "Community Dreams Foundation",
    location: "Remote",
    period: "July 2025 – Present",
    logo: { src: "/logos/Robin_Logo.png", alt: "Robin" },
    bullets: [
      "Built Spring Boot RESTful APIs to manage 10,000+ device allocations across 20 departments with role-based access controls",
      "Refactored MySQL queries and added compound indexes, dropping average asset lookup time from 3s to under 1s",
      "Wrote frontend forms in HTML5, CSS3, and JavaScript (ES6+) with client-side validation, stopping 45+ repeated errors weekly",
      "Tuned Jenkins and Maven CI/CD pipelines, cutting execution time from 18 to 7 minutes",
      "Covered 120+ integration flows with JUnit tests, cutting production incidents by 9 per quarter",
    ],
  },
  {
    role: "Software Engineer – Payments & Backend",
    company: "Alorasoft Inc",
    location: "Dallas, TX",
    period: "Jan 2024 – Mar 2025",
    logo: { src: "/logos/Franky_Logo.png", alt: "Franky" },
    bullets: [
      "Scaled a payment system to 10K+ monthly transactions with Stripe and Adyen — 18% better checkout success, 25% fewer failures",
      "Enforced PCI-DSS compliance through tokenization, TLS, and fraud detection, cutting fraudulent transactions by 15%",
      "Built a meal recommendation engine in Python (Pandas, Scikit-learn) lifting user retention by 12% and AOV by 22%",
      "Replaced manual data work with Airflow/Docker ETL pipelines, reducing manual effort by 70%",
      "Managed AWS backend (EC2, S3, RDS, Lambda) with CI/CD and async processing, holding 99.9% uptime",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Hakri Software Services",
    location: "Hyderabad, India",
    period: "Aug 2022 – Jan 2024",
    logo: { src: "/logos/Brook_Logo.png", alt: "Brook" },
    bullets: [
      "Built backend services in Java and Spring Boot for a cloud-based student learning platform with 99.9% uptime",
      "Connected RESTful APIs across student dashboards, teacher portals, and assessments — 20% faster user workflows",
      "Added real-time progress tracking using Kafka and WebSockets, climbing course completion rates by 15%",
      "Reworked PostgreSQL queries with better indexes and schema changes, cutting response times by 40%",
      "Set up Docker and Kubernetes deployments, trimming release cycles by 35% with zero-downtime updates",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1a3a5c]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            {"// Voyage Log"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-gradient-gold">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#d4a843]/40 via-[#d4a843]/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-[#d4a843] shadow-[0_0_12px_rgba(212,168,67,0.5)]" />

                <div className="glass-card p-6 md:p-8 hover:gold-glow transition-shadow duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#f5e6c8]">
                        {exp.role}
                      </h3>
                      <p className="text-[#d4a843] font-medium mt-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-[#f5e6c8]/70 mt-1">
                        {exp.location} • {exp.period}
                      </p>
                    </div>
                    <CharacterLogo
                      src={exp.logo.src}
                      alt={exp.logo.alt}
                      size={50}
                      className="hidden sm:block"
                    />
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-[#f5e6c8]/80 leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#d4a843] flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

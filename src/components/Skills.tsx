"use client";

import { motion } from "framer-motion";
import CharacterLogo from "./CharacterLogo";

const skillCategories = [
  {
    title: "Languages",
    logo: { src: "/logos/Zoro_Logo.png", alt: "Zoro" },
    skills: ["Java", "JavaScript", "Go", "Python", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    logo: { src: "/logos/Sanji_Logo.png", alt: "Sanji" },
    skills: ["React", "Node.js", "GraphQL", "Flask", "Spring Boot", "FastAPI"],
  },
  {
    title: "Backend & APIs",
    logo: { src: "/logos/Franky_Logo.png", alt: "Franky" },
    skills: ["RESTful APIs", "Apache Kafka", "Microservices Architecture"],
  },
  {
    title: "Databases",
    logo: { src: "/logos/Robin_Logo.png", alt: "Robin" },
    skills: ["PostgreSQL", "MySQL", "Oracle"],
  },
  {
    title: "Cloud & DevOps",
    logo: { src: "/logos/Nami_logo.png", alt: "Nami" },
    skills: ["AWS (EC2, S3, RDS, Lambda, Glue)", "Docker", "Jenkins", "GitLab CI/CD", "n8n"],
  },
  {
    title: "Testing & QA",
    logo: { src: "/logos/Chopper_Logo.png", alt: "Chopper" },
    skills: ["JUnit", "Mockito", "Integration Testing", "Log4j"],
  },
  {
    title: "Tools & Platforms",
    logo: { src: "/logos/Ussop_Logo.png", alt: "Ussop" },
    skills: ["Git", "Maven", "Postman", "SonarQube", "JIRA", "Confluence"],
  },
  {
    title: "Methodologies",
    logo: { src: "/logos/Brook_Logo.png", alt: "Brook" },
    skills: ["Agile (Scrum)", "CI/CD Automation", "MVC", "Design Patterns"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#c0392b]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase font-medium mb-4">
            {"// Arsenal"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="text-gradient-gold">Technologies</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="glass-card p-6 hover:gold-glow transition-shadow duration-500 group"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-[#f5e6c8]/90">
                  {cat.title}
                </h3>
                <CharacterLogo
                  src={cat.logo.src}
                  alt={cat.logo.alt}
                  size={40}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

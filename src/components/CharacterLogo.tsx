"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CharacterLogoProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function CharacterLogo({
  src,
  alt,
  size = 60,
  className = "",
}: CharacterLogoProps) {
  return (
    <motion.div
      className={`relative inline-block cursor-pointer ${className}`}
      whileHover={{
        rotate: [0, -12, 12, -8, 8, -4, 4, 0],
        scale: [1, 1.15, 1.15, 1.1, 1.1, 1.05, 1.05, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      whileTap={{ scale: 0.9 }}
      style={{
        filter: "drop-shadow(0 0 8px rgba(212, 168, 67, 0.3))",
      }}
    >
      <motion.div
        whileHover={{
          filter: "drop-shadow(0 0 16px rgba(212, 168, 67, 0.6))",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain pointer-events-none"
          style={{ width: size, height: size }}
        />
      </motion.div>
    </motion.div>
  );
}

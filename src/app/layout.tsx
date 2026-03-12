import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Adarsh Doli | Software Engineer Portfolio",
  description:
    "One Piece themed portfolio of Adarsh Doli — Software Engineer with 3+ years of experience in full-stack development, cloud-native deployments, and AI/ML integration.",
  keywords: [
    "Adarsh Doli",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "AWS",
    "Java",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="grain-overlay antialiased">{children}</body>
    </html>
  );
}

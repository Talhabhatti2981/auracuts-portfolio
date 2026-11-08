import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AuraCuts | Cinematic Video Editor Portfolio",
  description:
    "Senior video editor and motion graphics designer specializing in commercials, music videos, narrative VFX, and AI-augmented post-production.",
  keywords: [
    "video editor",
    "motion graphics",
    "color grading",
    "VFX",
    "portfolio",
    "AuraCuts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="grain-overlay min-h-full bg-[#0b0c10] text-gray-100">
        {children}
      </body>
    </html>
  );
}

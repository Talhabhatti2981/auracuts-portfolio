"use client";

import dynamic from "next/dynamic";
import { Briefcase, Play } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleNav = (id: string) => {
    onNavigate(id);
    scrollToSection(id);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,242,254,0.08)_0%,transparent_55%)]" />
      <HeroCanvas />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex animate-pulse items-center space-x-2 rounded-full border border-[#00f2fe]/40 bg-gray-900/80 px-3 py-1.5 font-mono text-xs tracking-wider text-[#00f2fe] uppercase shadow-lg shadow-[#00f2fe]/10 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#00f2fe]" />
          <span>Available for High-Impact Projects & Commercials</span>
        </div>

        <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Crafting Cinematic <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#ffb703] bg-clip-text text-transparent">
            Visual Masterpieces
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed font-light text-gray-300 sm:text-lg">
          Senior Video Editor & Motion Graphics Designer. Specializing in
          commercial ads, music videos, narrative VFX, and AI-augmented
          post-production.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => handleNav("portfolio")}
            className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] px-8 py-4 font-extrabold tracking-wider text-black shadow-lg shadow-[#00f2fe]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#00f2fe]/50 sm:w-auto"
          >
            <Play className="h-5 w-5 fill-current" />
            <span>EXPLORE WORK</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav("workflow")}
            className="flex w-full items-center justify-center space-x-2 rounded-xl border border-gray-700 bg-gray-900/80 px-8 py-4 font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-[#ffb703] hover:text-white sm:w-auto"
          >
            <Briefcase className="h-5 w-5 text-[#ffb703]" />
            <span>VIEW WORKFLOW</span>
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-gray-800/80 pt-8 text-left md:grid-cols-4">
          {[
            { value: "8+", label: "Years Experience", color: "text-[#00f2fe]" },
            {
              value: "350+",
              label: "Projects Delivered",
              color: "text-[#4facfe]",
            },
            {
              value: "4K / 8K",
              label: "Pipeline Ready",
              color: "text-[#ffb703]",
            },
            {
              value: "100%",
              label: "Client Satisfaction",
              color: "text-emerald-400",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-gray-800/60 bg-gray-900/40 p-3 backdrop-blur-sm transition hover:border-[#00f2fe]/30"
            >
              <div className={`font-mono text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

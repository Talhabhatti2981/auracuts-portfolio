"use client";

import { Play } from "lucide-react";
import { showreelSample } from "@/data/projects";
import type { VideoItem } from "@/types";

interface ShowreelBannerProps {
  onPlayReel: (video: VideoItem) => void;
}

export default function ShowreelBanner({ onPlayReel }: ShowreelBannerProps) {
  return (
    <section className="bg-gradient-to-b from-[#0b0c10] via-gray-950 to-[#0b0c10] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/50 shadow-2xl shadow-black/50">
          <button
            type="button"
            className="group relative flex aspect-video w-full cursor-pointer items-center justify-center bg-gray-950"
            onClick={() => onPlayReel(showreelSample)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/40 to-transparent" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00f2fe] text-black shadow-2xl shadow-[#00f2fe]/50 transition-all duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                <Play className="ml-1 h-10 w-10 fill-current" />
              </div>
              <span className="mt-4 rounded-full border border-[#00f2fe]/30 bg-black/70 px-4 py-1.5 font-mono text-sm tracking-widest text-[#00f2fe] uppercase backdrop-blur-md">
                WATCH MASTER SHOWREEL (2026)
              </span>
            </div>

            <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between">
              <div className="text-left">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#ffb703]">
                  FEATURED REEL
                </span>
                <h3 className="text-xl font-bold text-white sm:text-3xl">
                  Cinematic Motion & Post-Production Reel
                </h3>
              </div>
              <div className="hidden text-right font-mono text-xs text-gray-400 sm:block">
                <div>FORMAT: RED RAW / ProRes 4444 XQ</div>
                <div>AUDIO: Dolby Atmos Stereo Mix</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

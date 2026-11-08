"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { VideoItem } from "@/types";

interface VideoModalProps {
  video: VideoItem;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex animate-[fadeIn_0.25s_ease] items-center justify-center bg-black/90 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900/80 p-4">
          <h3 className="font-mono text-lg font-bold text-white">
            {video.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 transition hover:bg-gray-800 hover:text-white"
            aria-label="Close video"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="aspect-video w-full bg-black">
          <iframe
            src={video.videoUrl}
            title={video.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-4 bg-gray-900/60 p-6 sm:flex-row sm:items-center">
          <div>
            {video.client && (
              <span className="font-mono text-xs text-[#ffb703]">
                {video.client}
              </span>
            )}
            {video.description && (
              <p className="mt-1 text-sm text-gray-300">{video.description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gray-800 px-4 py-2 font-mono text-xs text-gray-200 hover:bg-gray-700"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}

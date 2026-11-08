"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface DeployModalProps {
  onClose: () => void;
}

export default function DeployModal({ onClose }: DeployModalProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Deploy guide"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between border-b border-gray-800 pb-4">
          <div className="flex items-center space-x-2 text-[#00f2fe]">
            <GithubIcon className="h-6 w-6" />
            <h3 className="font-mono text-xl font-bold text-white">
              Deploy Portfolio with Next.js
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            aria-label="Close deploy guide"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6 text-sm text-gray-300">
          <div>
            <h4 className="mb-2 flex items-center font-mono text-base font-bold text-white">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#00f2fe] text-xs text-black">
                1
              </span>
              Create Repository on GitHub
            </h4>
            <p className="pl-8 text-xs text-gray-400">
              Go to github.com and create a new repository named{" "}
              <code className="rounded bg-gray-900 px-1 py-0.5 text-[#00f2fe]">
                video-editor-portfolio
              </code>
              .
            </p>
          </div>

          <div>
            <h4 className="mb-2 flex items-center font-mono text-base font-bold text-white">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#00f2fe] text-xs text-black">
                2
              </span>
              Install & Run Locally with Yarn
            </h4>
            <div className="space-y-1 rounded-lg border border-gray-800 bg-gray-900 p-3 pl-4 font-mono text-xs text-gray-200">
              <div>yarn install</div>
              <div>yarn dev</div>
            </div>
          </div>

          <div>
            <h4 className="mb-2 flex items-center font-mono text-base font-bold text-white">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#00f2fe] text-xs text-black">
                3
              </span>
              Push Code & Deploy via Vercel
            </h4>
            <div className="space-y-1 rounded-lg border border-gray-800 bg-gray-900 p-3 pl-4 font-mono text-xs text-gray-200">
              <div>git init</div>
              <div>git add .</div>
              <div>git commit -m &quot;Initial portfolio release&quot;</div>
              <div>git branch -M main</div>
              <div>
                git remote add origin
                https://github.com/USERNAME/video-editor-portfolio.git
              </div>
              <div>git push -u origin main</div>
            </div>
          </div>

          <div className="rounded-xl border border-[#00f2fe]/30 bg-[#00f2fe]/10 p-4 text-xs text-gray-200">
            <strong>Pro Tip:</strong> Connect your GitHub repository to Vercel
            for automatic one-click Next.js deployments with WebGL support.
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-4 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gradient-to-r from-[#00f2fe] to-[#4facfe] px-6 py-2.5 text-xs font-bold text-black"
          >
            Got It, Thanks!
          </button>
        </div>
      </div>
    </div>
  );
}

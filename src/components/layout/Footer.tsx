import { Film } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-[#0b0c10] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center space-x-2">
          <Film className="h-5 w-5 text-[#00f2fe]" />
          <span className="font-mono text-lg font-bold tracking-wider text-white">
            Aura<span className="text-[#00f2fe]">Cuts</span> Studio
          </span>
        </div>

        <p className="text-center font-mono text-xs text-gray-500">
          © 2026 AuraCuts. All rights reserved. Built with Next.js & Three.js.
        </p>

        <div className="flex items-center space-x-4 text-gray-400">
          <a
            href="#hero"
            className="transition hover:text-[#00f2fe]"
            aria-label="Twitter"
          >
            <TwitterIcon className="h-5 w-5" />
          </a>
          <a
            href="#hero"
            className="transition hover:text-[#00f2fe]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="#hero"
            className="transition hover:text-[#00f2fe]"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

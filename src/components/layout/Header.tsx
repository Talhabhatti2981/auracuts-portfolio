"use client";

import { useEffect, useState } from "react";
import { Film, X } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { navLinks } from "@/data/navigation";
import { scrollToSection } from "@/lib/scroll";

interface HeaderProps {
  activeSection: string;
  onDeployClick: () => void;
  onNavigate: (id: string) => void;
}

export default function Header({
  activeSection,
  onDeployClick,
  onNavigate,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c10]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex cursor-pointer items-center space-x-2"
          onClick={() => handleNav("hero")}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-[#00f2fe] via-[#4facfe] to-[#ffb703] p-[2px] shadow-lg shadow-[#00f2fe]/20">
            <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#0b0c10]">
              <Film className="h-5 w-5 text-[#00f2fe]" />
            </div>
          </div>
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text font-mono text-xl font-bold tracking-wider text-transparent uppercase">
            Aura<span className="text-[#00f2fe]">Cuts</span>
          </span>
        </button>

        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNav(link.id)}
              className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-[#00f2fe]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe]" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <button
            type="button"
            onClick={onDeployClick}
            className="flex items-center space-x-2 rounded-lg border border-gray-700 bg-gray-900/60 px-3.5 py-1.5 text-xs text-gray-300 transition-all hover:border-[#00f2fe]/50 hover:text-white"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>Deploy to GitHub</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav("contact")}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#00f2fe] to-[#4facfe] p-0.5 text-xs font-semibold text-black shadow-lg shadow-[#00f2fe]/20 transition-all duration-300 hover:shadow-[#00f2fe]/40 active:scale-95"
          >
            <span className="rounded-md px-4 py-2 font-bold tracking-wider transition-all duration-75 ease-in">
              HIRE ME
            </span>
          </button>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <div className="w-6 space-y-1.5">
                <div className="h-0.5 rounded bg-white" />
                <div className="h-0.5 rounded bg-white" />
                <div className="h-0.5 rounded bg-[#00f2fe]" />
              </div>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="space-y-3 border-b border-gray-800 bg-[#0b0c10]/95 px-4 pt-4 pb-6 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNav(link.id)}
              className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-[#00f2fe]"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col space-y-2 pt-2">
            <button
              type="button"
              onClick={() => {
                onDeployClick();
                setMobileMenuOpen(false);
              }}
              className="flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-200"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Deploy Guide</span>
            </button>
            <button
              type="button"
              onClick={() => handleNav("contact")}
              className="w-full rounded-lg bg-gradient-to-r from-[#00f2fe] to-[#4facfe] py-2.5 text-center text-sm font-bold text-black"
            >
              HIRE ME NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

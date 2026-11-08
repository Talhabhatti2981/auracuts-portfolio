"use client";

import { FormEvent, useState } from "react";
import { CheckCircle, Mail, Send, Video } from "lucide-react";

interface ContactSectionProps {
  onDeployClick: () => void;
}

export default function ContactSection({ onDeployClick }: ContactSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="border-t border-gray-900 bg-gradient-to-b from-[#0b0c10] via-gray-950 to-[#0b0c10] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-3 inline-flex items-center space-x-2 font-mono text-sm tracking-wider text-[#00f2fe] uppercase">
              <Send className="h-4 w-4" />
              <span>Start A Project</span>
            </div>
            <h2 className="mb-6 text-3xl leading-tight font-extrabold text-white sm:text-5xl">
              Let&apos;s Bring Your Vision To Life
            </h2>
            <p className="mb-8 text-base leading-relaxed font-light text-gray-400">
              Have a music video, commercial, social media campaign, or feature
              film in need of expert post-production? Reach out and let&apos;s
              discuss your timeline and creative budget.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-[#00f2fe]" />
                <span>contact@auracuts.editor</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Video className="h-5 w-5 text-[#ffb703]" />
                <span>Available for Remote Worldwide & On-Set Edits</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/80 p-4">
              <div>
                <div className="text-xs font-bold text-white">
                  Want to deploy this portfolio code?
                </div>
                <div className="text-xs text-gray-400">
                  Step-by-step GitHub deployment guide.
                </div>
              </div>
              <button
                type="button"
                onClick={onDeployClick}
                className="rounded bg-[#00f2fe] px-3 py-1.5 font-mono text-xs font-bold text-black transition hover:bg-[#4facfe]"
              >
                View Guide
              </button>
            </div>
          </div>

          <div className="relative rounded-3xl border border-gray-800 bg-gray-900/60 p-8 shadow-2xl sm:p-10 lg:col-span-7">
            {formSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="mx-auto mb-4 h-16 w-16 animate-bounce text-[#00f2fe]" />
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-gray-400">
                  Thank you for reaching out. I will review your project details
                  and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs tracking-wider text-gray-400 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Turner"
                      className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white transition focus:border-[#00f2fe] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs tracking-wider text-gray-400 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@studio.com"
                      className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white transition focus:border-[#00f2fe] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs tracking-wider text-gray-400 uppercase">
                      Project Type
                    </label>
                    <select className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white transition focus:border-[#00f2fe] focus:outline-none">
                      <option>Commercial Advert</option>
                      <option>Music Video</option>
                      <option>YouTube / Social Content</option>
                      <option>VFX & Color Grading Pass</option>
                      <option>Other / Custom</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs tracking-wider text-gray-400 uppercase">
                      Estimated Budget
                    </label>
                    <select className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white transition focus:border-[#00f2fe] focus:outline-none">
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $8,000</option>
                      <option>$8,000 - $15,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs tracking-wider text-gray-400 uppercase">
                    Project Brief & Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, target deadline, footage format, and creative vision..."
                    className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white transition focus:border-[#00f2fe] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] py-4 text-sm font-extrabold tracking-wider text-black shadow-lg shadow-[#00f2fe]/20 transition duration-200 hover:scale-[1.01] hover:shadow-[#00f2fe]/40"
                >
                  <Send className="h-4 w-4 fill-current" />
                  <span>SEND PROJECT INQUIRY</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

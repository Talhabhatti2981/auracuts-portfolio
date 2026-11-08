"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setDirection("next");
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (index: number, dir: "next" | "prev") => {
    setDirection(dir);
    setActive(index);
  };

  const prev = () =>
    goTo((active - 1 + testimonials.length) % testimonials.length, "prev");
  const next = () => goTo((active + 1) % testimonials.length, "next");

  const current = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0b0c10] py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,242,254,0.08),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,183,3,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-2 inline-flex items-center space-x-2 font-mono text-sm tracking-wider text-[#ffb703] uppercase">
            <Star className="h-4 w-4 fill-current animate-[spinSlow_8s_linear_infinite]" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Trusted by Directors & Creators
          </h2>
          <p className="mt-4 text-sm text-gray-400 sm:text-base">
            Real feedback from campaigns, creators, and production teams.
          </p>
        </div>

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="cursor-hover relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/50 p-8 shadow-[0_0_60px_rgba(0,242,254,0.08)] backdrop-blur-sm sm:p-12">
            <div className="absolute -top-10 -right-6 text-[#00f2fe]/15">
              <Quote className="h-28 w-28" />
            </div>

            <div
              key={current.name}
              className={`relative z-10 ${
                direction === "next"
                  ? "animate-[slideInRight_0.45s_ease]"
                  : "animate-[slideInLeft_0.45s_ease]"
              }`}
            >
              <div className="mb-5 flex space-x-1 text-[#ffb703]">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current"
                    style={{
                      animation: `starPop 0.4s ease ${i * 0.08}s both`,
                    }}
                  />
                ))}
              </div>

              <p className="mb-8 text-lg leading-relaxed font-light text-gray-200 italic sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 animate-[pulseGlow_2.4s_ease-in-out_infinite] rounded-full bg-gradient-to-tr from-[#00f2fe] to-[#ffb703] p-[2px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-950 text-lg font-bold text-white">
                    {current.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white sm:text-lg">
                    {current.name}
                  </h4>
                  <span className="font-mono text-xs text-gray-500 sm:text-sm">
                    {current.title}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show testimonial from ${item.name}`}
                    onClick={() =>
                      goTo(index, index > active ? "next" : "prev")
                    }
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === active
                        ? "w-8 bg-[#00f2fe] shadow-[0_0_12px_#00f2fe]"
                        : "w-2.5 bg-gray-700 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="cursor-hover rounded-xl border border-gray-700 bg-gray-950/80 p-2 text-gray-300 transition hover:border-[#00f2fe]/50 hover:text-[#00f2fe]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="cursor-hover rounded-xl border border-gray-700 bg-gray-950/80 p-2 text-gray-300 transition hover:border-[#00f2fe]/50 hover:text-[#00f2fe]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0b0c10] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0b0c10] to-transparent" />
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="cursor-hover w-[280px] shrink-0 rounded-2xl border border-gray-800 bg-gray-900/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ffb703]/40 hover:shadow-[0_10px_40px_rgba(255,183,3,0.12)]"
              >
                <div className="mb-3 flex text-[#ffb703]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-gray-300 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="border-t border-gray-800 pt-3">
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <span className="font-mono text-[10px] text-gray-500">
                    {item.title}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

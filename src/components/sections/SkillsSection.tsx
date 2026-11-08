import {
  Cpu,
  Layers,
  Monitor,
  Scissors,
  Sparkles,
  Video,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/skills";
import type { Skill } from "@/types";

const iconMap: Record<Skill["icon"], LucideIcon> = {
  scissors: Scissors,
  sparkles: Sparkles,
  layers: Layers,
  cpu: Cpu,
  monitor: Monitor,
  video: Video,
  volume: Volume2,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#0b0c10] via-gray-950 to-[#0b0c10] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-2 inline-flex items-center space-x-2 font-mono text-sm tracking-wider text-[#ffb703] uppercase">
            <Cpu className="h-4 w-4" />
            <span>Tech Stack & Modern Toolkit</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-5xl">
            Industry Standard Tools & AI Workflows
          </h2>
          <p className="text-gray-400">
            Combining classic narrative cinema techniques with cutting-edge
            artificial intelligence video tools for ultra-fast, high-fidelity
            post-production.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((tool) => {
            const ToolIcon = iconMap[tool.icon];
            return (
              <div
                key={tool.name}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition-all duration-300 hover:border-[#00f2fe]/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 bg-gray-800/80 text-[#00f2fe] transition-transform group-hover:scale-110">
                    <ToolIcon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-[#ffb703]/20 bg-[#ffb703]/10 px-2.5 py-1 font-mono text-xs font-bold text-[#ffb703]">
                    {tool.level}% Proficiency
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-bold text-white transition-colors group-hover:text-[#00f2fe]">
                  {tool.name}
                </h3>
                <span className="mb-3 block font-mono text-xs text-gray-500">
                  {tool.category}
                </span>
                <p className="mb-4 text-xs leading-relaxed font-light text-gray-400">
                  {tool.desc}
                </p>

                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] transition-all duration-1000"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

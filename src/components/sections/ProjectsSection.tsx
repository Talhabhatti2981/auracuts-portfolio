"use client";

import Image from "next/image";
import { Film, Play } from "lucide-react";
import { projectFilters, projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";

interface ProjectsSectionProps {
  filter: ProjectCategory;
  setFilter: (filter: ProjectCategory) => void;
  onSelectVideo: (video: Project) => void;
}

export default function ProjectsSection({
  filter,
  setFilter,
  onSelectVideo,
}: ProjectsSectionProps) {
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="border-t border-gray-900 bg-[#0b0c10] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center space-x-2 font-mono text-sm tracking-wider text-[#00f2fe] uppercase">
              <Film className="h-4 w-4" />
              <span>Selected Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
              Featured Editing Projects
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 md:mt-0">
            {projectFilters.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-[#00f2fe] text-black shadow-lg shadow-[#00f2fe]/20"
                    : "border border-gray-800 bg-gray-900 text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#00f2fe]/50"
            >
              <button
                type="button"
                className="relative aspect-video cursor-pointer overflow-hidden"
                onClick={() => onSelectVideo(project)}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-70 transition-opacity group-hover:opacity-40" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00f2fe] text-black shadow-lg shadow-[#00f2fe]/50">
                    <Play className="ml-0.5 h-6 w-6 fill-current" />
                  </div>
                </div>

                <span className="absolute right-3 bottom-3 rounded border border-gray-700 bg-black/80 px-2 py-1 font-mono text-xs text-gray-300">
                  {project.duration}
                </span>
              </button>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="mb-1 font-mono text-xs tracking-wider text-[#ffb703] uppercase">
                    {project.client}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-[#00f2fe]">
                    {project.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm font-light text-gray-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-gray-800/80 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-gray-800 bg-gray-950 px-2.5 py-1 font-mono text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

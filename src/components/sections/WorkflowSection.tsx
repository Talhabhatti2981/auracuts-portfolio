import { ChevronRight, Layers } from "lucide-react";
import { workflowSteps } from "@/data/workflow";

export default function WorkflowSection() {
  return (
    <section id="workflow" className="border-t border-gray-900 bg-[#0b0c10] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-2 inline-flex items-center space-x-2 font-mono text-sm tracking-wider text-[#00f2fe] uppercase">
            <Layers className="h-4 w-4" />
            <span>Briefcase Pipeline</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-5xl">
            The 5-Step Post-Production Workflow
          </h2>
          <p className="text-gray-400">
            A structured, deadline-oriented editing pipeline ensuring seamless
            communication and broadcast-ready deliverables.
          </p>
        </div>

        <div className="relative ml-4 border-l border-gray-800 md:ml-0 md:grid md:grid-cols-5 md:gap-4 md:border-l-0">
          {workflowSteps.map((step, index) => (
            <div
              key={step.num}
              className="group relative mb-10 pl-8 md:mb-0 md:pl-0"
            >
              <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full border-2 border-[#00f2fe] bg-[#0b0c10] md:hidden" />

              <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-[#00f2fe]">
                <div>
                  <div className="mb-2 font-mono text-3xl font-extrabold text-[#00f2fe]">
                    {step.num}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed font-light text-gray-400">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center border-t border-gray-800/60 pt-3 font-mono text-xs text-[#ffb703]">
                  <span>
                    Step {index + 1} of {workflowSteps.length}
                  </span>
                  <ChevronRight className="ml-auto h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { WorkflowStep } from "@/types";

export const workflowSteps: WorkflowStep[] = [
  {
    num: "01",
    title: "Concept & Assembly",
    desc: "Sorting raw footage, building select reels, establishing narrative rhythm, script syncing, and basic rough assembly.",
  },
  {
    num: "02",
    title: "Dynamic Cut & Pacing",
    desc: "Fine-tuning cut points, sound beat alignment, multi-cam trimming, retainment-focused video structure.",
  },
  {
    num: "03",
    title: "Motion VFX & AI Pass",
    desc: "3D camera projection, green screen keying, AI video upscaling, lower thirds, and optical effect layering.",
  },
  {
    num: "04",
    title: "Color Grading & Sound",
    desc: "Shot matching, HDR LUT application, skin tone restoration, noise reduction, sound FX layering & loudness mastering.",
  },
  {
    num: "05",
    title: "Master Render & Delivery",
    desc: "Exporting customized platform presets (ProRes 422, H.264/H.265, vertical 9:16 social specs) with full revision support.",
  },
];

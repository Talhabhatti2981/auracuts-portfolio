export type ProjectCategory = "all" | "commercials" | "vfx" | "youtube" | "showreels";

export interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  duration: string;
  client: string;
  thumbnail: string;
  description: string;
  tags: string[];
  videoUrl: string;
}

export interface VideoItem {
  title: string;
  category?: string;
  duration?: string;
  client?: string;
  description?: string;
  videoUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: "scissors" | "sparkles" | "layers" | "cpu" | "monitor" | "video" | "volume";
  desc: string;
}

export interface WorkflowStep {
  num: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

export interface NavLink {
  id: string;
  label: string;
}

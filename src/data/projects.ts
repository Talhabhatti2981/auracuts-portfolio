import type { Project, VideoItem } from "@/types";

export const showreelSample: VideoItem = {
  title: "2026 Master Showreel",
  category: "Showreel",
  duration: "02:15",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  description:
    "A curated showcase of dynamic commercial edits, VFX breakdown, color grading transformations, and high-energy sequence cuts.",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Neon Cyberpunk Commercial",
    category: "commercials",
    duration: "00:45",
    client: "Apex Energy",
    thumbnail:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    description:
      "High-octane commercial edit featuring fast-paced visual pacing, dynamic speed ramps, dynamic 3D camera tracking, and neon color palette.",
    tags: ["Premiere Pro", "After Effects", "Color Grading"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 2,
    title: "Cinematic Travel Documentary",
    category: "showreels",
    duration: "03:20",
    client: "National Discovery Channel",
    thumbnail:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    description:
      "Immersive soundscape storytelling paired with organic film stock grain emulation and smooth narrative transitions.",
    tags: ["DaVinci Resolve", "Sound Design", "4K Drone"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 3,
    title: "Tech Review - NextGen Gaming",
    category: "youtube",
    duration: "12:40",
    client: "TechSphere (1.2M Subs)",
    thumbnail:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    description:
      "Engaging YouTube edit with custom 2D animated overlays, B-roll timing, lower thirds, and jump-cut retention optimization.",
    tags: ["YouTube Edit", "Lower Thirds", "Retention Focus"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 4,
    title: "Futuristic AI Music Video Visuals",
    category: "vfx",
    duration: "03:50",
    client: "Synthetix Records",
    thumbnail:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    description:
      "AI-assisted video synthesis blended with Cinema 4D camera projection, optical flares, and beat-synced color pulsing.",
    tags: ["Runway AI", "Cinema 4D", "VFX Composition"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 5,
    title: "Luxury Watch Brand Spot",
    category: "commercials",
    duration: "00:30",
    client: "Chrono Elite",
    thumbnail:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant micro-contrast color grading, macro video stabilization, clean typography, and subtle metallic sound effects.",
    tags: ["DaVinci Resolve", "Macro Edit", "ProRes"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 6,
    title: "Action Film Sci-Fi Sequence",
    category: "vfx",
    duration: "01:15",
    client: "Indie Studio Feature",
    thumbnail:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    description:
      "3D muzzle flashes, sky replacement, green screen compositing, and cinematic film print emulation.",
    tags: ["After Effects", "Blender", "Chroma Key"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
];

export const projectFilters = [
  { id: "all" as const, label: "All Projects" },
  { id: "commercials" as const, label: "Commercials" },
  { id: "vfx" as const, label: "VFX & AI" },
  { id: "youtube" as const, label: "Social & YouTube" },
  { id: "showreels" as const, label: "Documentary" },
];

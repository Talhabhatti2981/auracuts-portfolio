"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ShowreelBanner from "@/components/sections/ShowreelBanner";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import VideoModal from "@/components/modals/VideoModal";
import DeployModal from "@/components/modals/DeployModal";
import CustomCursor from "@/components/ui/CustomCursor";
import type { ProjectCategory, VideoItem } from "@/types";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [showDeployModal, setShowDeployModal] = useState(false);
  const [filter, setFilter] = useState<ProjectCategory>("all");

  return (
    <div className="min-h-screen bg-[#0b0c10] font-sans text-gray-100 selection:bg-[#00f2fe] selection:text-black">
      <CustomCursor />
      <Header
        activeSection={activeSection}
        onDeployClick={() => setShowDeployModal(true)}
        onNavigate={setActiveSection}
      />

      <main>
        <HeroSection onNavigate={setActiveSection} />
        <ShowreelBanner onPlayReel={setSelectedVideo} />
        <ProjectsSection
          filter={filter}
          setFilter={setFilter}
          onSelectVideo={setSelectedVideo}
        />
        <SkillsSection />
        <WorkflowSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection onDeployClick={() => setShowDeployModal(true)} />
      </main>

      <Footer />

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {showDeployModal && (
        <DeployModal onClose={() => setShowDeployModal(false)} />
      )}
    </div>
  );
}

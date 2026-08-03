'use client';

import React, { useState } from 'react';
import ParticleBackground from '@/components/animations/ParticleBackground';
import CursorGlow from '@/components/animations/CursorGlow';
import ScrollProgressBar from '@/components/animations/ScrollProgressBar';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Timeline from '@/components/sections/Timeline';
import CurrentLearning from '@/components/sections/CurrentLearning';
import Extras from '@/components/sections/Extras';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import CommandPalette from '@/components/modals/CommandPalette';
import ResumeModal from '@/components/modals/ResumeModal';

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#050816] text-slate-100 overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgressBar />

      {/* Particle Network Background */}
      <ParticleBackground />

      {/* Interactive Cursor Spotlight Glow */}
      <CursorGlow />

      {/* Navigation Bar */}
      <Navbar
        onOpenCommand={() => setCommandOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Core Sections */}
      <div className="relative z-20 space-y-12">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Timeline />
        <CurrentLearning />
        <Extras onOpenCommand={() => setCommandOpen(true)} />
        <Contact />
      </div>

      {/* Minimal Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </main>
  );
}

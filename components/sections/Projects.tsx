'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { PROJECTS_DATA } from '@/constants/portfolioData';
import { Project } from '@/types';
import ProjectDetailModal from '@/components/modals/ProjectDetailModal';
import { Code2, Github, ExternalLink, ArrowRight, Sparkles, Layers, Cpu } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono mb-4">
          <Code2 className="w-3.5 h-3.5" /> Featured Engineering Work
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          AI & Backend Systems Showcase
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Production-oriented deep learning architectures, cloud microservices, and high-performance algorithms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <SpotlightCard className="h-full flex flex-col justify-between group cursor-pointer p-6 hover:border-blue-500/40">
              <div>
                {/* Project Image Banner */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full h-48 rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-blue-500/30 transition-colors"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-950/80 backdrop-blur-md text-blue-400 border border-blue-500/30">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold rounded-full bg-purple-500/80 backdrop-blur-md text-white flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-1"
                >
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-1 text-[10px] font-mono rounded-md bg-slate-800 text-slate-400">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Action Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Architecture Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
                    aria-label="GitHub Repo"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Deep-Dive Interactive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

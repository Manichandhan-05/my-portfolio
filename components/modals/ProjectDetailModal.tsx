'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, Cpu, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-slate-950/95 p-6 sm:p-8 md:p-10 text-slate-100 shadow-2xl shadow-blue-500/10 z-10 scrollbar-thin scrollbar-thumb-slate-700"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 transition-colors text-slate-400 hover:text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Featured Project
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            {project.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-6 leading-relaxed">
            {project.subtitle}
          </p>

          {/* Image Banner */}
          <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden mb-8 border border-white/10 group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

            {/* Metrics overlay if present */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                    <div className="text-xs text-slate-400">{metric.label}</div>
                    <div className="text-lg font-bold text-blue-400">{metric.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium transition-colors"
            >
              <Github className="w-4 h-4" /> View GitHub Repository
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-500/25"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo / Docs
              </a>
            )}
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-900 text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Grid Breakdown: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5" /> The Problem
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5" /> Engineering Solution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Section */}
          <div className="mb-8 p-6 rounded-2xl bg-slate-900/50 border border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-purple-400" /> System Architecture & Pipeline
            </h3>
            <ul className="space-y-3">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold border border-purple-500/30 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features List */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-blue-400" /> Key Features & Innovations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex items-start gap-3 text-slate-300 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/20">
              <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5" /> Overcome Challenges & Trade-offs
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
                {project.challenges.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

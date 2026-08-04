'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HERO_DATA } from '@/constants/portfolioData';
import { siteConfig } from '@/constants/siteConfig';
import TypingAnimation from '@/components/animations/TypingAnimation';
import MagnetButton from '@/components/animations/MagnetButton';
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles, Brain, Cpu, Terminal, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow background ambient gradient blobs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-blue-500/30 text-xs font-mono text-slate-300 backdrop-blur-md shadow-lg shadow-blue-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>VIT-AP CSE (AI & ML) • CGPA 8.82</span>
          </div>

          {/* Main Name & Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building Next-Gen <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligent AI Systems
              </span>
            </h1>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-300">
              {HERO_DATA.name}
            </p>
          </div>

          {/* Typing Role Selector */}
          <div className="flex items-center gap-3 pt-1">
            <span className="text-slate-400 text-sm font-mono uppercase tracking-wider">Specializing as:</span>
            <TypingAnimation roles={siteConfig.roles} />
          </div>

          {/* Professional Narrative */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            {HERO_DATA.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <MagnetButton>
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-blue-500/25 transition-all"
              >
                <Download className="w-4 h-4" /> Download Resume
              </button>
            </MagnetButton>

            <MagnetButton>
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-white/15 text-white font-semibold text-sm flex items-center gap-2 backdrop-blur-md transition-all group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </MagnetButton>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-900/80 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-900/80 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </a>
              <a
                href="#contact"
                className="p-3 rounded-2xl bg-slate-900/80 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Contact Me"
              >
                <Mail className="w-5 h-5 text-purple-400" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            {HERO_DATA.stats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                <p className="text-xs text-slate-400 font-mono">{stat.label}</p>
                <p className="text-base font-bold text-blue-400 mt-0.5">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Interactive Visual Avatar & AI Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 animate-pulse blur-xl opacity-40" />

            {/* Avatar Frame */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 bg-slate-900/90 shadow-2xl p-2 backdrop-blur-xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/hero_avatar.jpg"
                  alt="Malyala Mani Chandhan"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs">
                  <div className="flex items-center justify-between text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5"><Brain className="w-3.5 h-3.5 text-blue-400" /> Neural Pipeline</span>
                    <span className="text-emerald-400">94.2% Acc</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI Shapes */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/15 shadow-xl text-xs font-mono flex items-center gap-3 text-slate-200"
            >
              <Cpu className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-[10px] text-slate-400">Model Engine</p>
                <p className="font-bold text-purple-300">TensorFlow + PyTorch</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/15 shadow-xl text-xs font-mono flex items-center gap-3 text-slate-200"
            >
              <Terminal className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-[10px] text-slate-400">API Latency</p>
                <p className="font-bold text-cyan-300">&lt; 30ms REST Endpoint</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { ABOUT_DATA } from '@/constants/portfolioData';
import { Brain, Cpu, Layers, Sparkles, ShieldCheck, GraduationCap, Code2, Database } from 'lucide-react';

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6 text-blue-400" />,
    Layers: <Layers className="w-6 h-6 text-purple-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono mb-4">
          <Brain className="w-3.5 h-3.5" /> Engineering Philosophy
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Engineering Intelligent Systems with <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Rigorous Theoretical Foundations
          </span>
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          {ABOUT_DATA.summary}
        </p>
      </div>

      {/* Core Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {ABOUT_DATA.coreValues.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Deep-Dive Highlight Banner */}
      <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 md:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              Academic & Technical Background
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              VIT-AP University • B.Tech Computer Science (AI & ML)
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Maintained an exceptional <strong>8.7 CGPA</strong> across rigorous coursework encompassing Deep Learning architectures, Neural Network Optimization, Computer Vision, Operating Systems, and Distributed Backends.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <GraduationCap className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-black text-white">8.7</p>
              <p className="text-xs text-slate-400">Cumulative CGPA</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <Code2 className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-2xl font-black text-white">5+</p>
              <p className="text-xs text-slate-400">AI/ML Architectures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

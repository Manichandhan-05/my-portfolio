'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { TIMELINE_DATA } from '@/constants/portfolioData';
import { Clock, GraduationCap, Code2, Award, Sparkles } from 'lucide-react';

export default function Timeline() {
  const iconMap: Record<string, React.ReactNode> = {
    Education: <GraduationCap className="w-4 h-4 text-emerald-400" />,
    Project: <Code2 className="w-4 h-4 text-blue-400" />,
    Certification: <Award className="w-4 h-4 text-purple-400" />,
    Learning: <Sparkles className="w-4 h-4 text-cyan-400" />,
  };

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-4">
          <Clock className="w-3.5 h-3.5" /> Growth & Milestones
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering Evolution Timeline
        </h2>
        <p className="mt-4 text-slate-400 text-base">
          From university foundations to deep learning research and high-performance microservices.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
        {TIMELINE_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 sm:pl-10"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              {iconMap[item.category]}
            </div>

            {/* Left Year Badge for Desktop */}
            <div className="hidden sm:block absolute -left-32 top-2 text-right w-24">
              <span className="text-sm font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
                {item.year}
              </span>
            </div>

            <SpotlightCard className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="sm:hidden text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  {item.year}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {item.organization}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 border border-white/10 text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

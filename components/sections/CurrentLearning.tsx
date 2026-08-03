'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { CURRENT_LEARNING_DATA } from '@/constants/portfolioData';
import { Bot, SearchCode, Zap, Box, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CurrentLearning() {
  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-6 h-6 text-purple-400" />,
    SearchCode: <SearchCode className="w-6 h-6 text-blue-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
    Box: <Box className="w-6 h-6 text-cyan-400" />,
  };

  return (
    <section id="current-learning" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Active Frontier Engineering
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Current Learning & Technical Roadmap
        </h2>
        <p className="mt-4 text-slate-400 text-base">
          Actively expanding mastery across Agentic AI multi-agent workflows, vector search pipelines, and containerization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CURRENT_LEARNING_DATA.map((item, idx) => (
          <motion.div
            key={item.topic}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between border-purple-500/20">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      {iconMap[item.icon]}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">{item.topic}</h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs font-mono font-semibold animate-pulse">
                    {item.status}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.focusAreas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-900 border border-white/10 text-slate-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

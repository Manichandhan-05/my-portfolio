'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { SKILLS_DATA } from '@/constants/portfolioData';
import { BrainCircuit, Code2, Server, Layout, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const iconMap: Record<string, React.ReactNode> = {
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-purple-400" />,
    Code2: <Code2 className="w-5 h-5 text-blue-400" />,
    Server: <Server className="w-5 h-5 text-cyan-400" />,
    Layout: <Layout className="w-5 h-5 text-emerald-400" />,
    Wrench: <Wrench className="w-5 h-5 text-amber-400" />,
  };

  const categoryNames = ['All', ...SKILLS_DATA.map((cat) => cat.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((cat) => cat.title === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Technical Capabilities Matrix
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Tools, Frameworks & Neural Architectures
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Comprehensive stack spanning AI research frameworks down to cloud backends and modern web interfaces.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categoryNames.map((catName) => (
          <button
            key={catName}
            onClick={() => setSelectedCategory(catName)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === catName
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            {catName}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
          >
            <SpotlightCard className="h-full flex flex-col justify-between p-6">
              <div>
                {/* Category Title Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {iconMap[cat.iconName]}
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-xl flex items-center justify-between transition-all ${
                        skill.highlight
                          ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent border border-blue-500/20'
                          : 'bg-slate-900/40 border border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            skill.highlight ? 'text-blue-400' : 'text-slate-500'
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            skill.highlight ? 'text-white font-semibold' : 'text-slate-300'
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>

                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                          skill.level === 'Advanced'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : skill.level === 'Learning'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold animate-pulse'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

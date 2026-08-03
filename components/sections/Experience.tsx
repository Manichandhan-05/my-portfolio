'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { EXPERIENCE_DATA } from '@/constants/portfolioData';
import { Briefcase, Info, BarChart3, CheckCircle2, Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono mb-4">
          <Briefcase className="w-3.5 h-3.5" /> Industry Experience Simulation
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Enterprise Analytics & Problem Solving
        </h2>
        <p className="mt-4 text-slate-400 text-base">
          Practical application of data science, predictive modelling, and business analytics.
        </p>
      </div>

      <div className="space-y-8">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <SpotlightCard className="p-8 border-amber-500/20">
              {/* Disclaimer Ribbon */}
              {exp.disclaimer && (
                <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-medium">
                  <Info className="w-4 h-4 flex-shrink-0" />
                  <span>{exp.disclaimer}</span>
                </div>
              )}

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-amber-400" /> {exp.role}
                  </h3>
                  <p className="text-slate-300 font-medium text-base mt-0.5">{exp.company}</p>
                </div>

                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-400 text-xs font-mono">
                    {exp.type} • {exp.duration}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Bullet points */}
              <div className="mb-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-400" /> Key Contributions & Outcomes
                </h4>
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {skill}
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

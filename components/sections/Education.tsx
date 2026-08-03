'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { EDUCATION_DATA } from '@/constants/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-mono mb-4">
          <GraduationCap className="w-3.5 h-3.5" /> Academic Qualifications
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education & Academic Distinction
        </h2>
        <p className="mt-4 text-slate-400 text-base">
          Formal university training in Computer Science, specialized in Neural Networks and Machine Learning.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SpotlightCard className="p-8 sm:p-10 border-purple-500/20">
          <div className="flex flex-wrap items-start justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{EDUCATION_DATA.institution}</h3>
                <p className="text-purple-400 font-semibold text-lg">{EDUCATION_DATA.degree}</p>
                <p className="text-slate-300 text-sm">{EDUCATION_DATA.major}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 text-right">
              <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-black text-xl">
                CGPA {EDUCATION_DATA.gpa}
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-500" /> {EDUCATION_DATA.duration}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {EDUCATION_DATA.location}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Key Coursework */}
            <div className="md:col-span-7 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" /> Key Specialized Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-medium text-slate-300 hover:border-purple-500/40 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="md:col-span-5 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" /> Honors & Highlights
              </h4>
              <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                {EDUCATION_DATA.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
}

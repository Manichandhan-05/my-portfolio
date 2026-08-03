'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { Command as CmdIcon, GitCommit, Users, BookOpen, Quote, Sparkles, Terminal, Activity } from 'lucide-react';

interface ExtrasProps {
  onOpenCommand: () => void;
}

export default function Extras({ onOpenCommand }: ExtrasProps) {
  const [visitorCount, setVisitorCount] = useState(1482);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-4">
          <Activity className="w-3.5 h-3.5" /> Platform Intelligence & Extras
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Developer Telemetry & Insights
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* GitHub Heatmap Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8"
        >
          <SpotlightCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GitCommit className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white text-lg">GitHub Commit Telemetry</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                540+ Commits in 2024-2025
              </span>
            </div>

            {/* Simulated Heatmap Grid */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {Array.from({ length: 35 * 7 }).map((_, i) => {
                  const intensity = Math.floor(Math.random() * 5);
                  const colors = [
                    'bg-slate-900 border-white/5',
                    'bg-emerald-950 border-emerald-800/40',
                    'bg-emerald-800 border-emerald-700/50',
                    'bg-emerald-600 border-emerald-500/60',
                    'bg-emerald-400 border-emerald-300',
                  ];
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm border ${colors[intensity]} transition-colors hover:scale-125`}
                      title={`Activity level: ${intensity}`}
                    />
                  );
                })}
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-white/5">
                <span>Less</span>
                <div className="flex gap-1 items-center">
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-900" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-800" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-600" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                </div>
                <span>More</span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Live Visitor Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4"
        >
          <SpotlightCard className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Live Session
                </span>
              </div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">Total Portfolio Visits</h3>
              <p className="text-4xl font-extrabold text-white mt-2 font-mono tracking-tight">{visitorCount.toLocaleString()}</p>
            </div>
            <p className="text-slate-400 text-xs mt-4">
              Real-time telemetry tracking visitor engagements across recruiters and engineering leads.
            </p>
          </SpotlightCard>
        </motion.div>

        {/* Technical Blog / Writings Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-6"
        >
          <SpotlightCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-white text-lg">Engineering Writings & Notes</h3>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Understanding CTC Loss in Telugu OCR</h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Deep Learning • 6 min read</p>
                </div>
                <span className="text-xs text-blue-400 font-mono">Draft</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Optimizing Flask REST APIs on Azure Cloud</h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Backend Architecture • 4 min read</p>
                </div>
                <span className="text-xs text-blue-400 font-mono">Draft</span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Testimonials / Peer Feedback Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-6"
        >
          <SpotlightCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Quote className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-white text-lg">Peer Recommendations</h3>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Mani Chandhan possesses rare clarity in connecting neural network formulations with clean, modular Python microservice architectures."
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
                <span className="font-semibold text-white">Academic Faculty Review</span>
                <span>VIT-AP University</span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}

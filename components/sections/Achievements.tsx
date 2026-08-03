'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { CERTIFICATIONS_DATA } from '@/constants/portfolioData';
import { Award, ShieldCheck, Cpu, BarChart3, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    Award: <Award className="w-6 h-6 text-purple-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs font-mono mb-4">
          <Award className="w-3.5 h-3.5" /> Verified Credentials
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Certifications & Recognized Achievements
        </h2>
        <p className="mt-4 text-slate-400 text-base">
          Industry-validated credentials in Cloud AI Infrastructure, Generative AI fine-tuning, and Neural Network development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS_DATA.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      {iconMap[cert.icon]}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase">{cert.issuer}</span>
                      <h3 className="text-lg font-bold text-white leading-snug">{cert.title}</h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-400">
                    {cert.date}
                  </span>
                </div>

                {cert.credentialId && (
                  <p className="text-xs font-mono text-slate-400 mb-4 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                    Credential ID: <span className="text-slate-200">{cert.credentialId}</span>
                  </p>
                )}

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Validated Competencies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-900 border border-white/10 text-slate-300 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 pt-4 border-t border-white/10 transition-colors"
                >
                  <span>Verify Credential Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Code, Briefcase } from 'lucide-react';
import { siteConfig } from '@/constants/siteConfig';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/pdf simulated download or trigger direct download
    const element = document.createElement('a');
    const file = new Blob([
      `MALYALA MANI CHANDHAN\nAI/ML Engineer • Python Backend Developer\nEmail: ${siteConfig.email}\nEducation: B.Tech CSE (AI & ML), VIT-AP (CGPA 8.7)\n\nSKILLS:\n- Python, PyTorch, TensorFlow, OpenCV, Flask, REST APIs, SQL, Next.js\n\nPROJECTS:\n- AI Powered Telugu Manuscript OCR (CRNN, CTC Loss)\n- E-commerce Shipping Prediction API (Flask, Azure)\n- LocalLens Hyper-Local AI Search\n- Autonomous Projectile Interception System\n- Finance Management System`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Malyala_Mani_Chandhan_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/15 bg-slate-950 p-6 sm:p-8 text-slate-100 shadow-2xl z-10 scrollbar-thin scrollbar-thumb-slate-700"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Curriculum Vitae</h2>
              <p className="text-slate-400 text-sm">Malyala Mani Chandhan — Verified Resume Summary</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-300">
            {/* Contact Header */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex flex-wrap justify-between gap-4">
              <div>
                <p className="font-bold text-white text-base">Malyala Mani Chandhan</p>
                <p className="text-blue-400">AI/ML Engineer & Python Backend Developer</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400">{siteConfig.email}</p>
                <p className="text-slate-400">{siteConfig.location}</p>
              </div>
            </div>

            {/* Education */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-purple-400" /> Education
              </h3>
              <p className="font-semibold text-slate-200">VIT-AP University</p>
              <p className="text-slate-400 text-xs mb-1">Bachelor of Technology (B.Tech) — Computer Science Engineering (AI & ML)</p>
              <p className="text-emerald-400 font-bold text-xs">CGPA: 8.7 / 10.0</p>
            </div>

            {/* Experience */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-blue-400" /> Experience Simulation
              </h3>
              <p className="font-semibold text-slate-200">Tata Group Data Analytics Simulation (via Forage)</p>
              <p className="text-slate-400 text-xs">Enterprise Data Insights, Business Analytics & Visual Dashboards</p>
            </div>

            {/* Key Projects */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-cyan-400" /> Key Engineering Projects
              </h3>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>• <strong>Telugu Manuscript OCR:</strong> CRNN + Bi-GRU + CTC Loss architecture (TensorFlow)</li>
                <li>• <strong>Shipping Prediction API:</strong> Azure-hosted Flask microservice for ML shipping estimates</li>
                <li>• <strong>LocalLens:</strong> Spatial AI vector search platform for real-time inventory lookup</li>
                <li>• <strong>Projectile Interception:</strong> OpenCV camera tracking & Kalman trajectory prediction</li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-amber-400" /> Industry Certifications
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Azure AI Fundamentals</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Oracle Cloud Generative AI</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> TensorFlow Specialization</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Tata Data Analytics</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <Download className="w-4 h-4" /> Download Resume Document
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

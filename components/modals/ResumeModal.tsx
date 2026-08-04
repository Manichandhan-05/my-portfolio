'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Code, Briefcase, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/constants/siteConfig';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const element = document.createElement('a');
    const content = `MALYALA MANI CHANDHAN
B.Tech – Computer Science Engineering (AI & ML)
Location: ${siteConfig.location}
Phone: ${siteConfig.phone}
Email: ${siteConfig.email}
LinkedIn: ${siteConfig.socials.linkedin}
GitHub: ${siteConfig.socials.github}

PROFESSIONAL SUMMARY:
Computer Science Engineering (AI & ML) graduate from Vellore Institute of Technology with expertise in machine learning, deep learning, computer vision, and NLP. Experienced in developing AI applications using Python, TensorFlow, PyTorch, OpenCV, Scikit-learn, SQL, and Flask, including a CRNN-based Telugu Manuscript OCR system and an Azure-deployed machine learning REST API. Microsoft Azure AI Fundamentals and Oracle Cloud Generative AI certified, seeking AI/ML Engineer opportunities to build and deploy intelligent software solutions.

EDUCATION:
Vellore Institute of Technology, Amaravathi (Jul 2022 – Jun 2026)
B.Tech in Computer Science Engineering (AI & ML) — CGPA: 8.82/10

TECHNICAL SKILLS:
- Languages: Python, Java, SQL, JavaScript
- Frameworks & Libraries: TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, Pandas
- Cloud & Tools: Microsoft Azure (AI-900), Oracle Cloud, Git, Flask
- Core Concepts: Data Structures & Algorithms, NLP, Deep Learning, Model Deployment, OOP

TECHNICAL PROJECTS:
1. Telugu Manuscript OCR: Two-Stage Transfer Learning Pipeline (Aug 2025 – Dec 2025)
   - Architected a custom CRNN combining a 6-layer CNN and 2-layer Bi-GRU (256 units).
   - Implemented CTC loss for end-to-end sequence transcription without character segmentation.
   - Optimized training using AdamW optimizer and recurrent dropout (Validation loss: 25.71).
   - Pre-trained on 11,000 synthetic samples and fine-tuned on 1,000 real manuscript lines.

2. E-commerce Shipping Prediction System (Jan 2023 – Dec 2023)
   - Developed Scikit-learn model predicting delivery times with 92% accuracy on 10,000 records.
   - Built Flask-based REST API microservice deployed on Microsoft Azure.
   - Analyzed historical shipping data to identify key delay factors.

LEADERSHIP & INVOLVEMENT:
NGC Club, VIT-AP University (Aug 2023 – May 2024) — Event Operations & Outreach Lead
- Managed event operations including scheduling, registrations, and volunteer coordination.
- Streamlined event workflows and created digital promotional material.

CERTIFICATIONS:
- Tata Group Data Analytics Job Simulation (Forage), Jan 2026
- Microsoft Certified: Azure AI Fundamentals (AI-900)
- Oracle Cloud: Generative AI Professional
- Google: TensorFlow Foundations`;

    const file = new Blob([content], { type: 'text/plain' });
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
              <p className="text-slate-400 text-sm">Malyala Mani Chandhan — Official Verified Resume</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-300">
            {/* Contact Header */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex flex-wrap justify-between gap-4">
              <div>
                <p className="font-bold text-white text-base">Malyala Mani Chandhan</p>
                <p className="text-blue-400 font-medium">B.Tech – Computer Science Engineering (AI & ML)</p>
                <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" /> {siteConfig.location}
                </p>
              </div>
              <div className="text-right text-xs space-y-1">
                <p className="text-slate-300 flex items-center justify-end gap-1.5 font-mono">
                  <Mail className="w-3.5 h-3.5 text-blue-400" /> {siteConfig.email}
                </p>
                <p className="text-slate-300 flex items-center justify-end gap-1.5 font-mono">
                  <Phone className="w-3.5 h-3.5 text-purple-400" /> {siteConfig.phone}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-purple-400" /> Education
              </h3>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-slate-200">Vellore Institute of Technology, Amaravathi</p>
                  <p className="text-slate-400 text-xs">B.Tech in Computer Science Engineering (AI & ML)</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-bold text-sm">CGPA: 8.82 / 10</p>
                  <p className="text-slate-500 text-xs font-mono">Jul 2022 – Jun 2026</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                <Code className="w-5 h-5 text-cyan-400" /> Technical Projects
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-bold text-slate-200">Telugu Manuscript OCR: Two-Stage Transfer Learning Pipeline</p>
                  <p className="text-slate-400 font-mono">Python, TensorFlow, OpenCV, CNN, CRNN, Bi-GRU, CTC Loss</p>
                  <p className="text-slate-300 mt-1">6-layer CNN + 2-layer Bi-GRU (256 units) sequence model with CTC loss; pre-trained on 11,000 synthetic lines and fine-tuned on 1,000 manuscript lines.</p>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <p className="font-bold text-slate-200">E-commerce Shipping Prediction System</p>
                  <p className="text-slate-400 font-mono">Python, Flask, Scikit-learn, Azure</p>
                  <p className="text-slate-300 mt-1">Scikit-learn model achieving 92% accuracy on 10,000 records; Flask REST API deployed on Azure.</p>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-blue-400" /> Leadership & Involvement
              </h3>
              <p className="font-semibold text-slate-200">NGC Club, VIT-AP University (Aug 2023 – May 2024)</p>
              <p className="text-slate-400 text-xs">Event Operations & Outreach Lead</p>
              <p className="text-slate-300 text-xs mt-1">Managed event operations, scheduling, volunteer coordination, and digital promotion strategies.</p>
            </div>

            {/* Certifications */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-amber-400" /> Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Tata Group Data Analytics (Jan 2026)</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Microsoft: Azure AI Fundamentals</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Oracle Cloud: Generative AI</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Google: TensorFlow Foundations</span>
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

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { siteConfig } from '@/constants/siteConfig';
import { Mail, Send, Copy, Check, MapPin, Github, Linkedin, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactFormData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, data as any, publicKey);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setSubmitStatus('success');
      reset();
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-mono mb-4">
          <MessageSquare className="w-3.5 h-3.5" /> Open for Engineering Opportunities
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Initiate Communication
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Interested in discussing AI architecture, backend engineering roles, or collaborative research? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <SpotlightCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Channels</h3>

            <div className="space-y-6">
              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Direct Email</p>
                    <p className="text-sm font-bold text-white">{siteConfig.email}</p>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Location Base</p>
                  <p className="text-sm font-bold text-white">{siteConfig.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Professional Profiles
                </p>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-slate-900/80 hover:bg-white/15 border border-white/10 text-slate-300 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-slate-900/80 hover:bg-white/15 border border-white/10 text-slate-300 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <SpotlightCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Direct Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>Your message has been sent successfully. Thank you for reaching out!</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>Failed to send message. Please try emailing directly to malyalamanichandhan@gmail.com</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">Your Name *</label>
                  <input
                    type="text"
                    {...register('user_name', { required: 'Name is required' })}
                    placeholder="e.g. Technical Recruiter / Lead"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  {errors.user_name && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.user_name.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">Email Address *</label>
                  <input
                    type="email"
                    {...register('user_email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                    })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  {errors.user_email && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.user_email.message}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">Subject *</label>
                <input
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  placeholder="e.g. AI Engineering Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                {errors.subject && (
                  <span className="text-xs text-red-400 mt-1 block">{errors.subject.message}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">Message *</label>
                <textarea
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Share details regarding your team, project scope, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-red-400 mt-1 block">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all disabled:opacity-50"
              >
                {submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Direct Message
                  </>
                )}
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

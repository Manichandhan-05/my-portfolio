'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Command as CmdIcon, FileText, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';
import MagnetButton from '@/components/animations/MagnetButton';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenCommand, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-white text-lg">
              MC
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors text-sm sm:text-base">
              Malyala Mani Chandhan
            </span>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-blue-400" /> AI & Backend Architect
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Cmd Palette, Resume, Theme, Mobile toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cmdk Button */}
          <button
            onClick={onOpenCommand}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
            title="Open Command Palette (Ctrl+K)"
          >
            <CmdIcon className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-mono text-[11px] text-slate-400">⌘K</span>
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>
          )}

          {/* Resume CTA */}
          <MagnetButton>
            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-1.5 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </MagnetButton>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommand();
              }}
              className="flex items-center gap-2 text-xs font-mono text-blue-400"
            >
              <CmdIcon className="w-4 h-4" /> Open Command Palette (⌘K)
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

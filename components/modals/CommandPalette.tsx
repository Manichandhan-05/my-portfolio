'use client';

import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, User, Briefcase, GraduationCap, Code2, Award, Mail, FileText, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenResume }: CommandPaletteProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent hook or button
        }
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const scrollTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('malyalamanichandhan@gmail.com');
    alert('Email copied to clipboard: malyalamanichandhan@gmail.com');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />

      {/* Palette Container */}
      <div className="relative w-full max-w-xl rounded-2xl border border-white/15 bg-slate-950/95 p-3 shadow-2xl z-10 overflow-hidden">
        <Command className="w-full bg-transparent text-slate-200">
          <div className="flex items-center border-b border-white/10 px-3 pb-2 pt-1 gap-2">
            <Search className="w-5 h-5 text-slate-400" />
            <Command.Input
              placeholder="Type a command or search section (e.g. Projects, Skills, Contact)..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 outline-none text-sm py-1"
            />
          </div>

          <Command.List className="max-h-80 overflow-y-auto py-2 space-y-1 text-sm scrollbar-thin scrollbar-thumb-slate-800">
            <Command.Empty className="p-4 text-center text-slate-400 text-xs">
              No matching commands found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-xs font-semibold text-slate-500 uppercase px-3 py-1">
              <Command.Item
                onSelect={() => scrollTo('about')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-500/20 hover:text-blue-400 cursor-pointer transition-colors"
              >
                <User className="w-4 h-4 text-blue-400" />
                <span>About Malyala Mani Chandhan</span>
              </Command.Item>

              <Command.Item
                onSelect={() => scrollTo('projects')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-purple-500/20 hover:text-purple-400 cursor-pointer transition-colors"
              >
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>Featured AI & Full Stack Projects</span>
              </Command.Item>

              <Command.Item
                onSelect={() => scrollTo('skills')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer transition-colors"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Technical Skills Matrix</span>
              </Command.Item>

              <Command.Item
                onSelect={() => scrollTo('education')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-emerald-500/20 hover:text-emerald-400 cursor-pointer transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>VIT-AP Education & Academic Record</span>
              </Command.Item>

              <Command.Item
                onSelect={() => scrollTo('experience')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-amber-500/20 hover:text-amber-400 cursor-pointer transition-colors"
              >
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Tata Group Analytics Simulation</span>
              </Command.Item>

              <Command.Item
                onSelect={() => scrollTo('achievements')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-yellow-500/20 hover:text-yellow-400 cursor-pointer transition-colors"
              >
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Certifications & Achievements</span>
              </Command.Item>

              <Command.Item
                onSelect={() => scrollTo('contact')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-pink-500/20 hover:text-pink-400 cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                <span>Contact & Communication</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Actions" className="text-xs font-semibold text-slate-500 uppercase px-3 py-1">
              <Command.Item
                onSelect={() => {
                  onClose();
                  onOpenResume();
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white cursor-pointer transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View & Download Curriculum Vitae</span>
              </Command.Item>

              <Command.Item
                onSelect={copyEmail}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Copy Direct Email Address</span>
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  onClose();
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white cursor-pointer transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
                <span>Toggle Color Theme ({theme === 'dark' ? 'Light' : 'Dark'})</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="border-t border-white/10 p-2 text-right text-[11px] text-slate-500">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">ESC</kbd> to exit
          </div>
        </Command>
      </div>
    </div>
  );
}

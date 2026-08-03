'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypingAnimationProps {
  roles: string[];
}

export default function TypingAnimation({ roles }: TypingAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <div className="relative inline-block h-10 overflow-hidden font-mono font-bold">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[currentIndex]}
          initial={{ y: 24, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -24, opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl"
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

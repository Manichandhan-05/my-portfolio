'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const completion = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-all duration-150 ease-out"
      style={{ width: `${completion}%` }}
    />
  );
}

'use client';

import { useMousePosition } from '@/hooks/useMousePosition';

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  if (x === null || y === null) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.07), rgba(139, 92, 246, 0.03) 40%, transparent 80%)`,
      }}
    />
  );
}

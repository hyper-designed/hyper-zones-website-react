import { motion, MotionValue, useTransform } from 'framer-motion';

interface CelestialGlowProps {
  celestialColor: MotionValue<string>;
  glowOpacity: MotionValue<number>;
  glowSize: MotionValue<number>;
}

export function CelestialGlow({ celestialColor, glowOpacity, glowSize }: CelestialGlowProps) {
  return (
    <>
      {/* Outer Glow */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{
          scale: glowSize,
          background: `radial-gradient(circle at center, ${celestialColor.get()}80 0%, transparent 70%)`,
          filter: 'blur(60px)',
          opacity: glowOpacity,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Middle Glow */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{
          scale: useTransform(glowSize, s => s * 0.75),
          background: `radial-gradient(circle at center, ${celestialColor.get()}99 0%, transparent 70%)`,
          filter: 'blur(40px)',
          opacity: useTransform(glowOpacity, o => o * 1.2),
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Inner Glow */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{
          scale: useTransform(glowSize, s => s * 0.5),
          background: `radial-gradient(circle at center, ${celestialColor.get()}cc 0%, transparent 70%)`,
          filter: 'blur(20px)',
          opacity: useTransform(glowOpacity, o => o * 1.4),
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </>
  );
}
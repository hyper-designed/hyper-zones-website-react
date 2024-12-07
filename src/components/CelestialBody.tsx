import { motion, useTransform, MotionValue } from 'framer-motion';

interface CelestialBodyProps {
  y: MotionValue<string>;
  scale: MotionValue<number>;
  progress: MotionValue<number>;
}

export function CelestialBody({ y, scale, progress }: CelestialBodyProps) {
  const celestialColor = useTransform(
    progress,
    [0, 0.5, 1],
    ['#fffeb0', '#FF9544', '#FFFFFF']
  );

  const glowOpacity = useTransform(
    progress,
    [0, 0.5, 1],
    [0.6, 0.4, 0.3]  // Stronger glow for sun, softer for moon
  );

  const glowSize = useTransform(
    progress,
    [0, 0.5, 1],
    [3, 2.5, 2]  // Larger glow for sun, smaller for moon
  );

  return (
    <motion.div
      className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none"
      style={{ y, scale }}
    >
      <div className="relative w-[40vw] aspect-square">
        {/* Outer Glow */}
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{
            scale: glowSize,
            background: `radial-gradient(circle at center, ${celestialColor.get()}80 0%, transparent 70%)`,
            filter: 'blur(60px)',
            opacity: glowOpacity,
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
          }}
        />

        {/* Core */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: celestialColor,
            boxShadow: `0 0 100px ${celestialColor.get()}66`,
          }}
        />
      </div>
    </motion.div>
  );
}
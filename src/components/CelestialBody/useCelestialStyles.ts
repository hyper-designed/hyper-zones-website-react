import { useTransform, MotionValue } from 'framer-motion';

export function useCelestialStyles(progress: MotionValue<number>) {
  const celestialColor = useTransform(
    progress,
    [0, 0.5, 1],
    ['#fffeb0', '#FF9544', '#FFFFFF']
  );

  const glowOpacity = useTransform(
    progress,
    [0, 0.5, 1],
    [0.8, 0.6, 0.4]  // Increased base opacity values
  );

  const glowSize = useTransform(
    progress,
    [0, 0.5, 1],
    [2.5, 2, 1.75]  // Adjusted glow sizes
  );

  return {
    celestialColor,
    glowOpacity,
    glowSize,
  };
}
import { motion, MotionValue } from 'framer-motion';

interface CelestialCoreProps {
  celestialColor: MotionValue<string>;
}

export function CelestialCore({ celestialColor }: CelestialCoreProps) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{
        backgroundColor: celestialColor,
        boxShadow: `0 0 60px ${celestialColor.get()}66`,
      }}
    />
  );
}
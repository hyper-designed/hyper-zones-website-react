import { motion, MotionValue, useTransform } from "framer-motion";

interface CelestialBodyProps {
  progress: MotionValue<number>;
}

export function CelestialBody({ progress }: CelestialBodyProps) {
  const y = useTransform(
    progress,
    [0, 0.5, 1],
    ["calc(100vh - 75vw)", "50vh", "100vh"],
  );

  const width = useTransform(progress, [0, 0.5, 1], ["75vw", "20vw", "30vw"]);

  const celestialColor = useTransform(
    progress,
    [0, 0.5, 1],
    ["#fffeb0", "#FF9544", "#FFFFFF"],
  );

  const boxShadowColor = useTransform(
    progress,
    [0, 0.5, 1],
    ["#fffeb0", "#FF9544", "#FFFFFF"],
  );

  const boxShadow = useTransform(boxShadowColor, (color) => {
    return `${color} 0 0 60px 20px`;
  });

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ y }}
    >
      <motion.div
        className="relative aspect-square rounded-full"
        style={{
          width: width,
          backgroundColor: celestialColor,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}

import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { getClosestGradient } from "../utils/gradientUtils";
import { rgbToString } from "../utils/colorUtils";
import { CelestialBody } from "./CelestialBody";
import { Color } from "../utils/types";

interface SkyProps {
  children: React.ReactNode;
}

export function Sky({ children }: SkyProps) {
  const { scrollYProgress } = useScroll();
  const [currentGradient, setCurrentGradient] = useState<Color[]>(
    getClosestGradient(12),
  );

  useEffect(() => {
    return scrollYProgress.onChange((value) => {
      const hour = 12 + value * 12;
      setCurrentGradient(getClosestGradient(hour));
    });
  }, [scrollYProgress]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className="fixed inset-0 transition-colors duration-1000"
        style={{
          background: `linear-gradient(180deg, ${currentGradient.map((color) => rgbToString(color.r, color.g, color.b)).join(", ")})`,
        }}
      />

      <CelestialBody progress={scrollYProgress} />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

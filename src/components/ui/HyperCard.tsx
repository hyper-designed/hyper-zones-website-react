import { motion } from "framer-motion";
import React from "react";
import { margin, padding } from "../../utils/spacing";

interface HyperCardProps {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  alignment?: "start" | "center" | "end";
  className?: string;
  noPadding?: boolean;
  noMargin?: boolean;
}

export function HyperCard({
  children,
  width = "auto",
  height = "auto",
  alignment = "start",
  className = "",
  noPadding = false,
  noMargin = false,
}: HyperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        bg-[#121212] 
        rounded-3xl 
        ${!noPadding ? padding.card.outer : ""} 
        ${!noMargin ? margin.component.bottom : ""} 
        ${className}
      `}
      style={{
        width,
        height,
        alignItems: alignment,
      }}
    >
      {children}
    </motion.div>
  );
}

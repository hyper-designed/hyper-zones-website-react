import { motion } from 'framer-motion';
import React from 'react';
import { padding, margin } from '../../utils/spacing';

interface HyperSurfaceCardProps {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  alignment?: 'start' | 'center' | 'end';
  className?: string;
  onClick?: () => void;
  noPadding?: boolean;
  noMargin?: boolean;
}

export function HyperSurfaceCard({
  children,
  width = '100%',
  height = 'auto',
  alignment = 'start',
  className = '',
  onClick,
  noPadding = false,
  noMargin = false,
}: HyperSurfaceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className={`
        bg-[#1a1a1a] 
        rounded-2xl 
        ${!noPadding ? padding.card.inner : ''} 
        ${!noMargin ? margin.component.bottom : ''} 
        ${className}
      `}
      style={{
        width,
        height,
        alignItems: alignment,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </motion.div>
  );
}
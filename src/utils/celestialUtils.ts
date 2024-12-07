import { CELESTIAL_COLORS } from './constants';

export function calculateGlowStyles(color: string) {
  return {
    outerGlow: `radial-gradient(circle at center, ${color}cc 0%, ${color}00 100%)`,
    middleGlow: `radial-gradient(circle at center, ${color}dd 0%, ${color}00 100%)`,
    innerGlow: `radial-gradient(circle at center, ${color}ee 0%, ${color}00 100%)`,
  };
}

export function interpolateColor(color1: string, color2: string, factor: number): string {
  const hex1 = color1.replace('#', '');
  const hex2 = color2.replace('#', '');
  
  const r1 = parseInt(hex1.substring(0, 2), 16);
  const g1 = parseInt(hex1.substring(2, 4), 16);
  const b1 = parseInt(hex1.substring(4, 6), 16);
  
  const r2 = parseInt(hex2.substring(0, 2), 16);
  const g2 = parseInt(hex2.substring(2, 4), 16);
  const b2 = parseInt(hex2.substring(4, 6), 16);
  
  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);
  
  return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}
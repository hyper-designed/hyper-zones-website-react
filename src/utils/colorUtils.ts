export function rgbToString(r: number, g: number, b: number, a: number = 1): string {
  return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function hexToRgba(hex: string, alpha: number = 1): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function createGlowGradient(color: string | { r: number; g: number; b: number }, stopPercentage: number = 100): string {
  let colorStart: string;
  let colorEnd: string;

  if (typeof color === 'object') {
    const { r, g, b } = color;
    colorStart = `rgba(${r}, ${g}, ${b}, 0.8)`;
    colorEnd = `rgba(${r}, ${g}, ${b}, 0)`;
  } else {
    // Handle hex colors
    if (color.startsWith('#')) {
      colorStart = hexToRgba(color, 0.8);
      colorEnd = hexToRgba(color, 0);
    } else {
      // Default to yellow-white for the sun
      colorStart = 'rgba(255, 255, 0, 0.8)';
      colorEnd = 'rgba(255, 255, 255, 0)';
    }
  }

  return `radial-gradient(circle at center, ${colorStart} 0%, ${colorEnd} ${stopPercentage}%)`;
}
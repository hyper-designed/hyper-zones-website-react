import { Color } from './types';

export const nightColors: Color[] = [
  { r: 5, g: 6, b: 29 },    // #05061D
  { r: 20, g: 25, b: 56 },  // #141938
  { r: 33, g: 37, b: 63 },  // #21253F
  { r: 49, g: 68, b: 96 }   // #314460
];

export const sunsetColors: Color[] = [
  { r: 28, g: 33, b: 51 },   // #1C2133
  { r: 67, g: 77, b: 112 },  // #434D70
  { r: 175, g: 94, b: 91 },  // #AF5E5B
  { r: 86, g: 27, b: 67 }    // #561B43
];

export const sunriseColors: Color[] = [
  { r: 47, g: 103, b: 178 }, // #2F67B2
  { r: 109, g: 140, b: 180 }, // #6D8CB4
  { r: 190, g: 141, b: 114 }, // #BE8D72
  { r: 201, g: 100, b: 100 }  // #C96464
];

export const dayColors: Color[] = [
  { r: 18, g: 53, b: 96 },   // #123560
  { r: 73, g: 112, b: 152 }, // #497098
  { r: 108, g: 145, b: 182 }, // #6C91B6
  { r: 106, g: 138, b: 178 }  // #6A8AB2
];

export const timeConstants = {
  nightTimeStart: 0,
  nightTimeEnd: 4,
  morningTime: 7,
  dayTimeStart: 10,
  dayTimeEnd: 14,
  eveningTime: 18,
  midnightTimeStart: 20,
  midnightTimeEnd: 24,
} as const;
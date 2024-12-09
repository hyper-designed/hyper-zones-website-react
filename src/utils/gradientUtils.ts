import { Color } from "./types";
import {
  dayColors,
  nightColors,
  sunriseColors,
  sunsetColors,
  timeConstants,
} from "./skyColors";

export function lerpColor(start: Color, end: Color, t: number): Color {
  return {
    r: Math.round(start.r + (end.r - start.r) * t),
    g: Math.round(start.g + (end.g - start.g) * t),
    b: Math.round(start.b + (end.b - start.b) * t),
  };
}

export function lerpGradient(start: Color[], end: Color[], t: number): Color[] {
  return start.map((color, i) => lerpColor(color, end[i], t));
}

export function getClosestGradient(hour: number): Color[] {
  const {
    nightTimeEnd,
    morningTime,
    dayTimeStart,
    dayTimeEnd,
    eveningTime,
    midnightTimeStart,
  } = timeConstants;

  if (hour >= nightTimeEnd && hour < morningTime) {
    const t = (hour - nightTimeEnd) / (morningTime - nightTimeEnd);
    return lerpGradient(nightColors, sunriseColors, t);
  } else if (hour >= morningTime && hour < dayTimeStart) {
    const t = (hour - morningTime) / (dayTimeStart - morningTime);
    return lerpGradient(sunriseColors, dayColors, t);
  } else if (hour >= dayTimeStart && hour < dayTimeEnd) {
    return dayColors;
  } else if (hour >= dayTimeEnd && hour < eveningTime) {
    const t = (hour - dayTimeEnd) / (eveningTime - dayTimeEnd);
    return lerpGradient(dayColors, sunsetColors, t);
  } else if (hour >= eveningTime && hour < midnightTimeStart) {
    const t = (hour - eveningTime) / (midnightTimeStart - eveningTime);
    return lerpGradient(sunsetColors, nightColors, t);
  } else {
    return nightColors;
  }
}

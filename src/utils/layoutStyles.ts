import { gap, margin, padding } from "./spacing";

export const sectionSpacing = {
  desktop: {
    py: padding.section.desktop,
    gap: gap.md,
  },
  mobile: {
    py: padding.section.mobile,
    gap: gap.sm,
  },
};

export const containerStyles = {
  maxWidth: "max-w-7xl",
  center: "mx-auto",
  padding: padding.card.outer,
};

export const cardStyles = {
  padding: padding.card.inner,
  gap: gap.sm,
  margin: margin.component,
};

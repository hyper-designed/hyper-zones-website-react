export const spacing = {
  xs: "space-y-2", // 8px
  sm: "space-y-4", // 16px
  md: "space-y-6", // 24px
  lg: "space-y-8", // 32px
  xl: "space-y-12", // 48px
} as const;

export const padding = {
  card: {
    outer: "p-4 sm:p-6 md:p-8",
    inner: "p-4",
    compact: "p-3",
  },
  section: {
    mobile: "py-16",
    desktop: "py-24",
  },
} as const;

export const margin = {
  section: {
    top: "mt-16 sm:mt-24",
    bottom: "mb-16 sm:mb-24",
  },
  component: {
    top: "mt-6 sm:mt-8",
    bottom: "mb-6 sm:mb-8",
  },
} as const;

export const gap = {
  xs: "gap-2", // 8px
  sm: "gap-4", // 16px
  md: "gap-6", // 24px
  lg: "gap-8", // 32px
  xl: "gap-12", // 48px
} as const;

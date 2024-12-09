import { Platform } from "../types/download";

export function usePlatformDetection(platforms: Platform[]): Platform {
  const platform = navigator.platform.toLowerCase();

  if (platform.includes("mac")) {
    return platforms.find((p) => p.label === "Mac") || platforms[0];
  }

  if (platform.includes("win")) {
    return platforms.find((p) => p.label === "Windows") || platforms[0];
  }

  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent,
    )
  ) {
    return platforms.find((p) => p.label === "Android") || platforms[0];
  }

  return platforms.find((p) => p.label === "Web") || platforms[0];
}

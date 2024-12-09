import { Platform } from "../types/download";

export const platforms: Platform[] = [
  {
    label: "Android",
    executionTarget: "for your Android device.",
    deviceTypes: "Android Phone/Tablet",
    requirements: "Android 6.0+ (Marshmallow).",
    targets: [
      {
        url: "https://play.google.com/store/apps/details?id=dev.hyperdesigned.hyperzones",
        asset: "assets/download_badges/google_play.png",
        stat: "play_store",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/hyper-zones.appspot.com/o/artifacts%2Fandroid%2FHyperZones-latest.apk?alt=media",
        asset: "assets/download_badges/apk.png",
        stat: "apk",
      },
    ],
  },
  {
    label: "Apple",
    executionTarget: "for your iPhone or iPad.",
    deviceTypes: "iPhone/iPad",
    requirements: "iOS 12.0+ or iPadOS 12.0+.",
    targets: [
      {
        asset: "assets/download_badges/app_store.png",
        url: "https://apps.apple.com/us/app/hyper-zones/id6478041584",
        stat: "app_store",
      },
    ],
  },
  {
    label: "Mac",
    executionTarget: "for your Mac.",
    deviceTypes: "Mac PC/Laptop",
    requirements:
      "macOS 12.0+ (Monterey).\nIntel & Apple Silicon M1+ (Universal).",
    targets: [
      {
        asset: "assets/download_badges/mac_app_store.png",
        url: "https://apps.apple.com/us/app/hyper-zones/id6478041584",
        stat: "mac_app_store",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/hyper-zones.appspot.com/o/artifacts%2Fmacos%2FHyperZones-latest.dmg?alt=media",
        asset: "assets/download_badges/dmg.png",
        stat: "dmg",
      },
    ],
  },
  {
    label: "Windows",
    executionTarget: "for your Windows device.",
    deviceTypes: "Windows PC/Tablet/Phone",
    requirements: "Windows 10+.",
    targets: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/hyper-zones.appspot.com/o/artifacts%2Fwindows%2FHyperZones-latest.exe?alt=media",
        asset: "assets/download_badges/exe.png",
        stat: "exe",
      },
    ],
    prerequisite: {
      label: "Microsoft Visual C++ 2015 - 2022 Redistributable",
      description:
        "Required to run the app on Windows.\nSelect the appropriate architecture for your system and install it.",
      items: [
        {
          url: "https://aka.ms/vs/17/release/vc_redist.x86.exe",
          label: "vc_redist.x86.exe (32-bit)",
        },
        {
          url: "https://aka.ms/vs/17/release/vc_redist.x64.exe",
          label: "vc_redist.x64.exe (64-bit)",
        },
        {
          url: "https://aka.ms/vs/17/release/vc_redist.arm64.exe",
          label: "vc_redist.arm64.exe (ARM64)",
        },
      ],
      source: {
        url: "https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version",
        label:
          "https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist",
      },
    },
  },
  {
    label: "Web",
    executionTarget: "in your browser.",
    deviceTypes: "Desktop/Mobile",
    requirements: "Any modern web browser.",
    targets: [
      {
        url: "https://my.hyperzones.app/",
        asset: "assets/download_badges/web_app.png",
        stat: "web_app",
      },
    ],
  },
];

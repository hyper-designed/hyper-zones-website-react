import { useState } from "react";
import { Platform } from "../../types/download";
import { Apple, Globe, Launch, Smartphone, Windows } from "../icons";
import { PrerequisiteDialog } from "./PrerequisiteDialog";

const platformIcons = {
  Android: Smartphone,
  Apple: Apple,
  Mac: Apple,
  Windows: Windows,
  Web: Globe,
} as const;

interface PlatformCardProps {
  platform: Platform;
  featured?: boolean;
}

export function PlatformCard({
  platform,
  featured = false,
}: PlatformCardProps) {
  const [showPrerequisites, setShowPrerequisites] = useState(false);
  const Icon = platformIcons[platform.label as keyof typeof platformIcons];

  return (
    <>
      <div className={`${featured ? "max-w-[400px] mx-auto" : "w-full"}`}>
        <div
          className={`
          bg-[#292B2F] rounded-xl relative overflow-hidden min-h-[250px]
          ${featured ? "p-8" : "p-8"}
          transition-colors duration-200
        `}
        >
          {/* Background Icon */}
          <div className="absolute top-6 right-6 text-[#FF9544] opacity-[0.05]">
            <Icon className={featured ? "w-24 h-24" : "w-20 h-20"} />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-6">
              <p className="text-sm text-white/80 mb-1">
                {platform.deviceTypes}
              </p>
              <h3
                className={`
                text-[#FF9544] font-semibold tracking-tight
                ${featured ? "text-2xl" : "text-xl"}
              `}
              >
                {platform.label}
              </h3>
            </div>

            {/* Requirements */}
            <div className="h-[110px]">
              <p className="text-[13px] leading-[1.5] text-white/50 whitespace-pre-line">
                {platform.requirements}
              </p>

              {platform.prerequisite && (
                <button
                  onClick={() => setShowPrerequisites(true)}
                  className="mt-4 px-3 py-2 bg-[#1A1A1A] rounded-lg flex items-center gap-2 
                    text-sm text-[#FF9544]/80 hover:text-[#FF9544] transition-colors group"
                >
                  <Launch className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  <span>Requires {platform.prerequisite.label}</span>
                </button>
              )}
            </div>

            {/* Download Badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              {platform.targets.map((target, index) => (
                <a
                  key={index}
                  href={target.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-80"
                  onClick={() => console.log(`download_${target.stat}`)}
                >
                  <img
                    src={`/src/${target.asset}`}
                    alt={`Download for ${platform.label}`}
                    className="h-[40px] w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {platform.prerequisite && (
        <PrerequisiteDialog
          prerequisite={platform.prerequisite}
          isOpen={showPrerequisites}
          onClose={() => setShowPrerequisites(false)}
        />
      )}
    </>
  );
}

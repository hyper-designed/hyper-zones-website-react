import { motion } from "framer-motion";
import { Platform } from "./types";
import { HyperCard } from "../../components/ui/HyperCard";
import { HyperSurfaceCard } from "../../components/ui/HyperSurfaceCard";

interface PlatformCardProps {
  platform: Platform;
}

export function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <HyperCard className="h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <platform.icon className="w-12 h-12 text-[#FF9544]" />
            <div>
              <h2 className="text-2xl font-bold text-white">{platform.name}</h2>
              <p className="text-white/60">{platform.description}</p>
            </div>
          </div>

          <div className="flex-grow">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-white/80 mb-2">
                Requirements
              </h3>
              <p className="text-white/60">{platform.requirements}</p>
            </div>

            {platform.prerequisites && (
              <div className="mb-6">
                {platform.prerequisites.map((prereq, index) => (
                  <HyperSurfaceCard key={index} className="p-4">
                    <h3 className="text-sm font-medium text-white mb-2">
                      {prereq.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      {prereq.description}
                    </p>
                    <div className="space-y-2">
                      {prereq.options.map((option, optIndex) => (
                        <a
                          key={optIndex}
                          href={option.url}
                          className="block text-[#FF9544] hover:text-[#FF9544]/80 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  </HyperSurfaceCard>
                ))}
              </div>
            )}
          </div>

          <div className="mt-auto">
            <p className="text-sm text-white/40 mb-4">
              Version {platform.version}
            </p>
            <a
              href={platform.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-6 rounded-lg font-medium bg-[#FF9544] text-white hover:bg-[#FF9544]/90 transition-colors text-center"
            >
              Download {platform.name}
            </a>
          </div>
        </div>
      </HyperCard>
    </motion.div>
  );
}

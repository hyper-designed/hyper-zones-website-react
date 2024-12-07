import { motion } from 'framer-motion';
import { Platform } from '../../types/download';
import { HyperCard } from '../ui/HyperCard';
import { PlatformCard } from './PlatformCard';

interface OtherPlatformsProps {
  platforms: Platform[];
  currentPlatform: Platform;
}

export function OtherPlatforms({ platforms, currentPlatform }: OtherPlatformsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
      className="max-w-7xl mx-auto px-8 mb-16"
    >
      <HyperCard>
        <div className="px-8 pt-8 pb-4">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Download for other platforms
          </h2>
          <p className="text-white/70 text-sm">
            HyperZones is available for a variety of platforms. Choose the one that suits you best.
          </p>
        </div>
        
        <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms
            .filter(p => p.label !== currentPlatform.label)
            .map((platform, index) => (
              <motion.div
                key={platform.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.35, 
                  delay: 0.8 + index * 0.05, 
                  ease: [0.165, 0.84, 0.44, 1] 
                }}
              >
                <PlatformCard platform={platform} />
              </motion.div>
            ))}
        </div>
      </HyperCard>
    </motion.div>
  );
}
import { platforms } from '../data/platforms';
import { DownloadHeader } from '../components/download/DownloadHeader';
import { PlatformCard } from '../components/download/PlatformCard';
import { OtherPlatforms } from '../components/download/OtherPlatforms';
import { motion } from 'framer-motion';
import { usePlatformDetection } from '../hooks/usePlatformDetection';

export default function DownloadPage() {
  const currentPlatform = usePlatformDetection(platforms);

  return (
    <div className="min-h-screen">
      <div className="w-full">
        <DownloadHeader />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="px-8"
        >
          <PlatformCard platform={currentPlatform} featured />
        </motion.div>

        <OtherPlatforms 
          platforms={platforms}
          currentPlatform={currentPlatform}
        />
      </div>
    </div>
  );
}
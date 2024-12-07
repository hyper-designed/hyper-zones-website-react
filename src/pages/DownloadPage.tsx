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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          className="px-8 mt-8"
        >
          <h2 className="text-center text-2xl font-bold">Download for other platforms</h2>
          <p className="text-center text-gray-600">Hyper Zones is available for a variety of platforms. Choose the one that suits you best.</p>
          <OtherPlatforms platforms={platforms} currentPlatform={currentPlatform} />
        </motion.div>
      </div>
    </div>
  );
}
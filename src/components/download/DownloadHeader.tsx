import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

export function DownloadHeader() {
  const { width } = useWindowSize();
  const tight = width < 800;

  return (
    <div className="pt-32 pb-16 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
        className={`font-bold text-white mb-2 font-yellix ${tight ? 'text-5xl' : 'text-6xl'}`}
      >
        Get HyperZones
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
        className="text-sm text-white/50 max-w-md mx-auto px-12 mb-8"
      >
        By installing HyperZones, you agree to our{' '}
        <Link to="/terms-and-conditions" className="text-[#FF9544] underline hover:text-[#FF9544]/80">
          Terms
        </Link>
        {' '}and{' '}
        <Link to="/privacy-policy" className="text-[#FF9544] underline hover:text-[#FF9544]/80">
          Privacy
        </Link>
        .
      </motion.p>
    </div>
  );
}
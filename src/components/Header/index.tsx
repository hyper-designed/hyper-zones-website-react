import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock } from '../icons';
import { useHeaderAnimation } from './useHeaderAnimation';
import { NavigationLinks } from './NavigationLinks';

export function Header() {
  const { isVisible, headerStyles } = useHeaderAnimation();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg transform-gpu"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      style={headerStyles}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Clock className="w-8 h-8 text-[#FF9544]" />
            <span className="text-xl font-bold text-white">HyperZones</span>
          </Link>
          <NavigationLinks />
        </div>
      </div>
    </motion.header>
  );
}
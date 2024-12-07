import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock } from './icons';

export function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <Clock className="w-16 h-16 mb-6 mx-auto text-white" />
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          Hyper Zones
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/80">
          Know when, wherever.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/download">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors w-full sm:w-auto"
            >
              Download Now
            </motion.button>
          </Link>
          <Link to="/pricing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              View Pricing
            </motion.button>
          </Link>
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
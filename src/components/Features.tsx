import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, Shield, Cloud, Palette, Users, Wifi, 
  SunMoon, MousePointer, Eye 
} from './icons';
import { HyperCard } from './ui/HyperCard';
import { HyperSurfaceCard } from './ui/HyperSurfaceCard';
import { sectionSpacing, containerStyles } from '../utils/layoutStyles';

const features = [
  { icon: Zap, title: 'Devilishly Simple', description: 'Intuitive sunlight slider for quick time visualization' },
  { icon: SunMoon, title: 'Interactive Time Preview', description: 'Instantly see corresponding times across locations' },
  { icon: Eye, title: 'Quick-Preview', description: 'Check any location\'s time zone instantly' },
  { icon: Cloud, title: 'Cross-Platform Syncing', description: 'Access your data seamlessly across all devices' },
  { icon: MousePointer, title: 'Blazingly Fast', description: 'Lightning-quick performance meets accessibility' },
  { icon: Shield, title: 'Privacy Focused', description: 'Only essential data collection, nothing more' },
  { icon: Palette, title: 'Functionally Customizable', description: 'Personalize with custom colors and icons' },
  { icon: Users, title: 'Effective Collaboration', description: 'Coordinate easily across time zones' },
  { icon: Wifi, title: 'Offline First', description: 'Full functionality without internet connection' }
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-4 px-4" ref={ref}>
      <HyperCard className={`${containerStyles.maxWidth} ${containerStyles.center}`}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-white"
        >
          Features that set us apart
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <HyperSurfaceCard
              key={index}
              className="group hover:bg-[#222222] transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-[#FF9544] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </HyperSurfaceCard>
          ))}
        </div>
      </HyperCard>
    </section>
  );
}
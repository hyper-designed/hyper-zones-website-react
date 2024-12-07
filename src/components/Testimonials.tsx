import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HyperCard } from './ui/HyperCard';
import { HyperSurfaceCard } from './ui/HyperSurfaceCard';
import { sectionSpacing, containerStyles } from '../utils/layoutStyles';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Remote Team Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    quote: "HyperZones has transformed how our global team coordinates. It's become an essential tool for our daily operations."
  },
  {
    name: "James Wilson",
    role: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    quote: "The intuitive interface and offline functionality make it perfect for my traveling lifestyle."
  },
  {
    name: "Maria Rodriguez",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    quote: "Finally, a time zone app that's both beautiful and functional. The sunlight slider is genius!"
  }
];

export function Testimonials() {
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
          What our users say
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <HyperSurfaceCard
              key={index}
              className="group hover:bg-[#222222] transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">"{testimonial.quote}"</p>
            </HyperSurfaceCard>
          ))}
        </div>
      </HyperCard>
    </section>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HyperCard } from './ui/HyperCard';
import { HyperSurfaceCard } from './ui/HyperSurfaceCard';
import { sectionSpacing, containerStyles } from '../utils/layoutStyles';

const faqs = [
  {
    question: "How does the sunlight slider work?",
    answer: "The sunlight slider provides a visual representation of daylight hours across different time zones. Simply slide to see how time changes across your saved locations."
  },
  {
    question: "Can I use HyperZones offline?",
    answer: "Yes! HyperZones is designed to work offline. Your data is stored locally and syncs when you're back online."
  },
  {
    question: "Is my data secure?",
    answer: "We take privacy seriously. We only collect essential data needed for the app to function and sync across devices. Your data is encrypted and never shared with third parties."
  },
  {
    question: "How do I share time zones with my team?",
    answer: "You can easily share time zone information through the app's built-in sharing feature. Select the locations you want to share and generate a link or QR code."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      className={`${sectionSpacing.mobile.py} sm:${sectionSpacing.desktop.py} ${containerStyles.padding}`} 
      ref={ref}
    >
      <HyperCard className={`${containerStyles.maxWidth} ${containerStyles.center}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <HyperSurfaceCard
              key={index}
              className={`transition-colors duration-300 mb-2 ${
                openIndex === index ? 'bg-[#222222]' : 'hover:bg-[#1d1d1d]'
              }`}
            >
              <div className="py-2">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </HyperSurfaceCard>
          ))}
        </div>
      </HyperCard>
    </section>
  );
}
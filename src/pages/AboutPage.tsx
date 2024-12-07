import { motion } from 'framer-motion';
import { Clock, Users, Globe, Shield } from 'lucide-react';
import { HyperCard } from '../components/ui/HyperCard';

const values = [
  {
    icon: Clock,
    title: 'Time-Focused',
    description: 'We believe in making time management effortless and intuitive.',
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Every feature is designed with our users in mind.',
  },
  {
    icon: Globe,
    title: 'Global First',
    description: 'Built for a world where work knows no boundaries.',
  },
  {
    icon: Shield,
    title: 'Privacy-Focused',
    description: 'Your data is yours. We take privacy seriously.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About HyperZones
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We're on a mission to make global time management seamless and
            intuitive for everyone, everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {values.map((value) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <HyperCard>
                <value.icon className="w-12 h-12 text-[#FF9544] mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">
                  {value.title}
                </h2>
                <p className="text-white/80">{value.description}</p>
              </HyperCard>
            </motion.div>
          ))}
        </div>

        <HyperCard className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-white/80">
            <p>
              HyperZones was born from a simple observation: as the world becomes
              more connected, managing time across different zones becomes
              increasingly complex.
            </p>
            <p>
              We set out to create a tool that would make this challenge
              disappear, allowing teams and individuals to focus on what matters
              most - their work and relationships, not calculating time
              differences.
            </p>
            <p>
              Today, HyperZones helps thousands of users across the globe stay
              synchronized, making global collaboration easier than ever before.
            </p>
          </div>
        </HyperCard>
      </div>
    </div>
  );
}
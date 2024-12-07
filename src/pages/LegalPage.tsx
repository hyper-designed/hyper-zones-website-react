import { motion } from 'framer-motion';
import { HyperCard } from '../components/ui/HyperCard';
import { useLocation } from 'react-router-dom';

const privacyContent = {
  title: 'Privacy Policy',
  lastUpdated: 'March 15, 2024',
  sections: [
    {
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including when you create an account, use our services, or contact us for support. This may include your name, email address, and time zone preferences.`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to provide and improve our services, communicate with you, and ensure a personalized experience.`,
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure.`,
    },
  ],
};

const termsContent = {
  title: 'Terms and Conditions',
  lastUpdated: 'March 15, 2024',
  sections: [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using HyperZones, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy.`,
    },
    {
      title: 'User Responsibilities',
      content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`,
    },
    {
      title: 'Service Modifications',
      content: `We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.`,
    },
  ],
};

export default function LegalPage() {
  const location = useLocation();
  const content = location.pathname === '/privacy-policy' ? privacyContent : termsContent;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <HyperCard>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">{content.title}</h1>
            <p className="text-white/60 mb-8">Last updated: {content.lastUpdated}</p>

            <div className="space-y-8">
              {content.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    {section.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </HyperCard>
      </div>
    </div>
  );
}
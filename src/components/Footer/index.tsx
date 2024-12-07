import { Clock } from '../icons';
import { HyperCard } from '../ui/HyperCard';
import { FooterNav } from './FooterNav';
import { SocialLinks } from './SocialLinks';
import { ContactInfo } from './ContactInfo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4">
      <HyperCard className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Clock className="w-8 h-8 text-[#FF9544]" />
              <span className="text-2xl font-bold text-white">HyperZones</span>
            </div>
            <p className="text-sm text-white/80">
              Know when, wherever. The ultimate time zone management tool for global teams.
            </p>
            <SocialLinks />
          </div>

          {/* Navigation */}
          <FooterNav />

          {/* Contact */}
          <ContactInfo />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} HyperZones. All rights reserved.
            </p>
            <p className="text-sm text-white/40">
              Made with ❤️ for the global community
            </p>
          </div>
        </div>
      </HyperCard>
    </footer>
  );
}
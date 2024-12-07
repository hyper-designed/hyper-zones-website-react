import { Clock } from './icons';
import { HyperCard } from './ui/HyperCard';
import { useLocation } from 'react-router-dom';
import { sectionSpacing, containerStyles } from '../utils/layoutStyles';

const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/download', label: 'Downloads' },
  { path: '/about', label: 'About' },
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-and-conditions', label: 'Terms & Conditions' }
];

export function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${sectionSpacing.mobile.py} sm:${sectionSpacing.desktop.py} ${containerStyles.padding}`}>
      <HyperCard className={`${containerStyles.maxWidth} ${containerStyles.center}`}>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-[0.75] text-white">
              Hyper<br />Zones
            </h2>
            <p className="text-sm font-medium text-white/80">
              Know when, wherever.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[11px] uppercase text-white/60">
                  A project by
                </p>
                <p className="text-sm text-[#FF9544]">
                  Hyperdesigned
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <nav className="grid gap-2">
              {navigationLinks.map((link) => (
                location.pathname !== link.path && (
                  <a
                    key={link.path}
                    href={link.path}
                    className="px-4 py-2 text-[#FF9544] hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>
            <p className="text-sm text-white/60 font-extralight">
              © Hyperdesigned {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </HyperCard>
    </footer>
  );
}
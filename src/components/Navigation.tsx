import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from './icons';

export function Navigation() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/download', label: 'Download' },
    { to: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Clock className="w-8 h-8 text-[#FF9544]" />
            <span className="text-xl font-bold text-white">HyperZones</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            {links.map(({ to, label }) => (
              location.pathname !== to && (
                <Link
                  key={to}
                  to={to}
                  className="px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
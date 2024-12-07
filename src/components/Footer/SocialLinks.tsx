import { Github, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/hyperzones', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/hyperzones', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/hyperzones', label: 'LinkedIn' },
] as const;

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#FF9544] transition-colors"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
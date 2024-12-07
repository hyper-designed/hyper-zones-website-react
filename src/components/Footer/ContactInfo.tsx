import { Mail, Phone } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-white mb-3">Contact Us</h3>
      <a
        href="mailto:hello@hyperzones.dev"
        className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
      >
        <Mail className="w-4 h-4" />
        hello@hyperzones.dev
      </a>
      <a
        href="tel:+1234567890"
        className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
      >
        <Phone className="w-4 h-4" />
        +1 (234) 567-890
      </a>
    </div>
  );
}
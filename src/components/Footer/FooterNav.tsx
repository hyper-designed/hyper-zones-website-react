import { Link, useLocation } from "react-router-dom";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/download", label: "Download" },
  { to: "/about", label: "About" },
] as const;

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
] as const;

export function FooterNav() {
  const location = useLocation();

  return (
    <nav className="grid gap-6 md:gap-8">
      <div>
        <h3 className="font-semibold text-white mb-3">Navigation</h3>
        <ul className="grid gap-2">
          {navigationLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-sm transition-colors ${
                  location.pathname === to
                    ? "text-[#FF9544]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-white mb-3">Legal</h3>
        <ul className="grid gap-2">
          {legalLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-sm transition-colors ${
                  location.pathname === to
                    ? "text-[#FF9544]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

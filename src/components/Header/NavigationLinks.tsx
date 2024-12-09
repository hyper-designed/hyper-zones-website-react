import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/download", label: "Download" },
  { to: "/about", label: "About" },
] as const;

export function NavigationLinks() {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center space-x-4">
      {links.map(
        ({ to, label }) =>
          location.pathname !== to && (
            <Link
              key={to}
              to={to}
              className="px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {label}
            </Link>
          ),
      )}
    </nav>
  );
}

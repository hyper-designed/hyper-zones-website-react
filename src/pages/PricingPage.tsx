import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { HyperCard } from "../components/ui/HyperCard";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individual users",
    features: [
      "Up to 3 time zones",
      "Basic time conversion",
      "Offline access",
      "Dark mode",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$5/mo",
    description: "For power users and teams",
    features: [
      "Unlimited time zones",
      "Team sharing & collaboration",
      "Custom labels & groups",
      "Priority support",
      "Advanced analytics",
      "API access",
      "Custom themes",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-white/80">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <HyperCard
                className={`h-full ${
                  tier.highlighted ? "border-2 border-[#FF9544]" : ""
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h2>
                    <div className="flex items-baseline text-white">
                      <span className="text-4xl font-bold tracking-tight">
                        {tier.price}
                      </span>
                      {tier.price !== "$0" && (
                        <span className="text-white/60 ml-1">/month</span>
                      )}
                    </div>
                    <p className="mt-2 text-white/60">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 flex-grow mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-6 w-6 text-[#FF9544] flex-shrink-0" />
                        <span className="ml-3 text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      tier.highlighted
                        ? "bg-[#FF9544] text-white hover:bg-[#FF9544]/90"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </HyperCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

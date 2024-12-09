import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  );
}

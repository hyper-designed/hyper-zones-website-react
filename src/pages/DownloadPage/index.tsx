import { platforms } from "./platformData";
import { PlatformCard } from "./PlatformCard";

export default function DownloadPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download HyperZones
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Available on all major platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </div>
      </div>
    </div>
  );
}

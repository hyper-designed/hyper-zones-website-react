import { SoftwarePrerequisite } from '../../types/download';
import { HyperSurfaceCard } from '../ui/HyperSurfaceCard';

interface PrerequisiteCardProps {
  prerequisite: SoftwarePrerequisite;
}

export function PrerequisiteCard({ prerequisite }: PrerequisiteCardProps) {
  return (
    <HyperSurfaceCard className="p-4">
      <h3 className="text-sm font-medium text-white mb-2">{prerequisite.label}</h3>
      <p className="text-white/60 text-sm mb-4 whitespace-pre-line">{prerequisite.description}</p>
      <div className="space-y-2">
        {prerequisite.items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="block text-[#FF9544] hover:text-[#FF9544]/80 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10">
        <a
          href={prerequisite.source.url}
          className="text-xs text-white/40 hover:text-white/60 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source: {prerequisite.source.label}
        </a>
      </div>
    </HyperSurfaceCard>
  );
}
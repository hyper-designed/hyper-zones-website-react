import { ChevronDown } from "../icons";
import { HyperSurfaceCard } from "../ui/HyperSurfaceCard";
import { padding } from "../../utils/spacing";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <HyperSurfaceCard
      className={`transition-colors duration-300 cursor-pointer min-h-[44px] ${
        isOpen ? "bg-[#222222]" : "hover:bg-[#1d1d1d]"
      }`}
      onClick={onClick}
      noPadding
    >
      <div className={padding.card.inner}>
        <div className="flex justify-between items-center min-h-[44px]">
          <span className="font-medium text-white">{question}</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
            <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </HyperSurfaceCard>
  );
}

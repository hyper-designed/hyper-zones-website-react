import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { SoftwarePrerequisite } from "../../types/download";
import { Launch, X } from "../icons";

interface PrerequisiteDialogProps {
  prerequisite: SoftwarePrerequisite;
  isOpen: boolean;
  onClose: () => void;
}

export function PrerequisiteDialog({
  prerequisite,
  isOpen,
  onClose,
}: PrerequisiteDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <Dialog.Overlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-[#121212] rounded-xl max-w-md w-full mx-auto p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <Dialog.Title className="text-xl font-semibold text-white mb-4">
              {prerequisite.label}
            </Dialog.Title>

            <div className="space-y-6">
              <p className="text-sm text-white/70 whitespace-pre-line leading-relaxed">
                {prerequisite.description}
              </p>

              <div className="space-y-2">
                {prerequisite.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#FF9544] hover:text-[#FF9544]/80 
                      transition-colors group py-1"
                  >
                    <Launch className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={prerequisite.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white/60 transition-colors flex items-center gap-1"
                >
                  <Launch className="w-3 h-3" />
                  <span>Learn more at Microsoft Docs</span>
                </a>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

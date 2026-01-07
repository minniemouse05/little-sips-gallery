"use client";

import { useEffect, useCallback } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
}: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 max-w-md text-center">
        <h2 className="text-xl font-light tracking-tight text-neutral-900 sm:text-2xl">
          {title}
        </h2>
        <p className="mt-4 text-base font-light leading-relaxed text-neutral-600">
          {description}
        </p>
        <button
          onClick={onClose}
          className="mt-8 text-sm font-light tracking-wide text-neutral-400 transition-colors hover:text-neutral-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

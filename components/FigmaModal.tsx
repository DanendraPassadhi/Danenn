import React from "react";

type Props = {
  open: boolean;
  url: string | null;
  onClose: () => void;
};

export function FigmaModal({ open, url, onClose }: Props) {
  if (!open || !url) return null;

  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-[90%] max-w-4xl h-[80%] bg-card rounded-lg overflow-hidden shadow-lg">
        <div className="p-3 flex items-center justify-between border-b border-border">
          <div className="font-medium">Preview</div>
          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/80 hover:text-primary"
            >
              Open in Figma
            </a>
            <button
              onClick={onClose}
              className="px-2 py-1 rounded hover:bg-muted"
              aria-label="Close preview"
            >
              Close
            </button>
          </div>
        </div>
        <iframe
          src={embedUrl}
          title="Figma Preview"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}

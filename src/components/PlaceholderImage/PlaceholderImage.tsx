import React from "react";

export interface PlaceholderImageProps {
  icon?: React.ReactNode;
  className?: string;
}

const DEFAULT_ICON = (
  // Simple image SVG icon, styled with Tailwind
  <svg
    className="w-12 h-12 text-on-surface-variant"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" className="fill-surface-variant" />
    <circle cx="8" cy="8" r="2" className="fill-on-surface-variant" />
    <path
      d="M21 15l-5-5-4 4-7-7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  icon = DEFAULT_ICON,
  className = "",
}) => {
  return (
    <div
      className={`bg-surface-variant w-full h-full flex items-center justify-center ${className}`}
      data-testid="placeholder-image"
    >
      <span className="text-on-surface-variant text-4xl flex items-center justify-center">
        {icon}
      </span>
    </div>
  );
};
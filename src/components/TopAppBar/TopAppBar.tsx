import React from "react";
import clsx from "clsx";

export type TopAppBarVariant = "small" | "center" | "medium" | "large";

export interface TopAppBarProps {
  variant?: TopAppBarVariant;
  title: string;
  navigationIcon?: React.ReactNode;
  actions?: React.ReactNode[];
  scrolled?: boolean;
  pinned?: boolean; // reserved for future use
  className?: string;
}

const HEIGHTS: Record<TopAppBarVariant, string> = {
  small: "h-16", // 64px
  center: "h-16", // 64px
  medium: "h-[112px]",
  large: "h-[152px]",
};

const TITLE_SIZES: Record<TopAppBarVariant, string> = {
  small: "text-title-large",
  center: "text-title-large",
  medium: "text-headline-small",
  large: "text-headline-medium",
};

const TITLE_SIZES_SCROLLED: Record<TopAppBarVariant, string> = {
  small: "text-title-large",
  center: "text-title-large",
  medium: "text-title-large",
  large: "text-title-large",
};

const TITLE_ALIGN: Record<TopAppBarVariant, string> = {
  small: "justify-start",
  center: "justify-center",
  medium: "justify-start",
  large: "justify-start",
};

const TITLE_ALIGN_SCROLLED: Record<TopAppBarVariant, string> = {
  small: "justify-start",
  center: "justify-center",
  medium: "justify-start",
  large: "justify-start",
};

const TITLE_MARGIN_TOP: Record<TopAppBarVariant, string> = {
  small: "mt-0",
  center: "mt-0",
  medium: "mt-4",
  large: "mt-8",
};

const TITLE_MARGIN_TOP_SCROLLED: Record<TopAppBarVariant, string> = {
  small: "mt-0",
  center: "mt-0",
  medium: "mt-0",
  large: "mt-0",
};

export const TopAppBar: React.FC<TopAppBarProps> = ({
  variant = "small",
  title,
  navigationIcon,
  actions,
  scrolled = false,
  className = "",
}) => {
  // Container classes
  const baseBg = scrolled && (variant === "medium" || variant === "large")
    ? "bg-surface-container dark:bg-surface-container-dark"
    : "bg-surface dark:bg-surface-dark";
  const height = HEIGHTS[variant];
  const padding = "px-4";
  const flex = "flex items-center";
  const transition = "transition-all duration-200";
  const shadow = scrolled ? "shadow-md" : "";

  // Title classes
  const titleSize = scrolled
    ? TITLE_SIZES_SCROLLED[variant]
    : TITLE_SIZES[variant];
  const titleAlign = scrolled
    ? TITLE_ALIGN_SCROLLED[variant]
    : TITLE_ALIGN[variant];
  const titleMarginTop = scrolled
    ? TITLE_MARGIN_TOP_SCROLLED[variant]
    : TITLE_MARGIN_TOP[variant];
  const titleColor = "text-on-surface dark:text-on-surface-dark";
  const titleWeight = "font-medium";
  const titleTransition = "transition-all duration-200";

  // Layout for medium/large: title is lower when not scrolled, moves up when scrolled
  // For center: title is centered, nav icon and actions are at ends

  return (
    <header
      className={clsx(
        "w-full",
        baseBg,
        height,
        padding,
        flex,
        transition,
        shadow,
        className,
      )}
      role="banner"
      aria-label={title}
      data-variant={variant}
      data-scrolled={scrolled}
    >
      {/* Navigation Icon */}
      {navigationIcon ? (
        <div className="flex-shrink-0 mr-2" aria-label="Navigation">
          {navigationIcon}
        </div>
      ) : (
        // For center-aligned, keep space for nav icon even if not present
        variant === "center" && (
          <div className="w-10 mr-2" aria-hidden="true" />
        )
      )}

      {/* Title */}
      <div
        className={clsx(
          "flex-1 flex",
          titleAlign,
          titleMarginTop,
          titleTransition,
        )}
      >
        <span
          className={clsx(
            titleSize,
            titleColor,
            titleWeight,
            titleTransition,
            "truncate",
          )}
          id="top-app-bar-title"
        >
          {title}
        </span>
      </div>

      {/* Actions */}
      {actions && actions.length > 0 ? (
        <nav className="flex gap-2 ml-2" aria-label="App bar actions">
          {actions.map((action, i) => (
            <div key={i} className="flex-shrink-0">
              {action}
            </div>
          ))}
        </nav>
      ) : (
        // For center-aligned, keep space for actions even if not present
        variant === "center" && <div className="w-10 ml-2" aria-hidden="true" />
      )}
    </header>
  );
};
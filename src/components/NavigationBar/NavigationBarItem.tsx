import React from "react";
import clsx from "clsx";

export interface NavigationBarItemProps {
  icon: React.ReactNode;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  indicatorColor?: string; // Tailwind class, e.g. 'bg-secondary-container'
  "aria-label"?: string;
}

const INDICATOR_DEFAULT = "bg-secondary-container";
const ICON_COLOR_UNSELECTED = "text-on-surface-variant";
const ICON_COLOR_SELECTED = "text-on-secondary-container";
const LABEL_COLOR_UNSELECTED = "text-on-surface-variant";
const LABEL_COLOR_SELECTED = "text-on-surface";
const STATE_LAYER_UNSELECTED = "bg-on-surface-variant/8";
const STATE_LAYER_SELECTED = "bg-primary/8";
const DISABLED_OPACITY = "opacity-40 pointer-events-none";

export const NavigationBarItem: React.FC<NavigationBarItemProps> = ({
  icon,
  label,
  selected = false,
  onClick,
  disabled = false,
  indicatorColor,
  "aria-label": ariaLabel,
}) => {
  // For state layers (hover, focus, active)
  const [isHovered, setHovered] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);
  const [isActive, setActive] = React.useState(false);

  // Indicator color
  const indicatorClass = indicatorColor
    ? indicatorColor
    : INDICATOR_DEFAULT;

  // State layer logic
  const showStateLayer = isHovered || isFocused || isActive;
  const stateLayerClass = selected
    ? STATE_LAYER_SELECTED
    : STATE_LAYER_UNSELECTED;

  return (
    <button
      type="button"
      className={clsx(
        "relative flex flex-col items-center justify-center px-3 py-1 h-full min-w-[64px] transition-colors duration-150 outline-none",
        disabled && DISABLED_OPACITY
      )}
      aria-label={ariaLabel || label}
      aria-selected={selected}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onKeyDown={e => {
        if (e.key === " " || e.key === "Enter") setActive(true);
      }}
      onKeyUp={e => {
        if (e.key === " " || e.key === "Enter") setActive(false);
      }}
      role="tab"
    >
      {/* Indicator */}
      {selected && (
        <span
          className={clsx(
            "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-8 rounded-full z-0",
            indicatorClass
          )}
          aria-hidden="true"
        />
      )}

      {/* State Layer */}
      {showStateLayer && (
        <span
          className={clsx(
            "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-8 rounded-full z-10 pointer-events-none",
            stateLayerClass
          )}
          aria-hidden="true"
        />
      )}

      {/* Icon */}
      <span
        className={clsx(
          "z-20 flex items-center justify-center text-2xl transition-colors duration-150",
          selected ? ICON_COLOR_SELECTED : ICON_COLOR_UNSELECTED
        )}
      >
        {icon}
      </span>

      {/* Label */}
      {label && (
        <span
          className={clsx(
            "z-20 mt-1 text-label-medium transition-colors duration-150",
            selected ? LABEL_COLOR_SELECTED : LABEL_COLOR_UNSELECTED
          )}
        >
          {label}
        </span>
      )}
    </button>
  );
};
import React from "react";
import clsx from "clsx";

export interface NavigationBarProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * M3 Navigation Bar container.
 * Applies Material 3 surface color, elevation, and horizontal layout.
 */
export const NavigationBar: React.FC<NavigationBarProps> = ({
  children,
  className,
}) => {
  return (
    <nav
      className={clsx(
        "w-full h-20 flex flex-row items-center justify-between bg-surface-container shadow-elevation-2 border-t border-outline-variant",
        className
      )}
      role="navigation"
      aria-label="Bottom Navigation"
    >
      <div className="flex flex-1 flex-row items-center justify-evenly h-full" role="tablist">
        {children}
      </div>
    </nav>
  );
};
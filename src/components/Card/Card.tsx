import React from 'react';
import clsx from 'clsx';

export type CardVariant = 'elevated' | 'filled' | 'outlined';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

/**
 * M3 Card component supporting 'elevated', 'filled', and 'outlined' variants.
 * Applies M3 surface, outline, shape, and elevation tokens via Tailwind.
 * Handles hover/focus state layers and adapts to light/dark mode.
 */
export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  children,
  className,
  interactive = false,
  ...rest
}) => {
  // Base styles for all cards
  const base =
    'relative rounded-lg transition-shadow transition-colors duration-150 overflow-hidden';

  // Variant styles
  const variantStyles = {
    elevated:
      'bg-surface-container-lowest dark:bg-surface-container-lowest-dark shadow-elevation-1 hover:shadow-elevation-2 focus:shadow-elevation-2',
    filled:
      'bg-surface dark:bg-surface-dark shadow-elevation-0',
    outlined:
      'bg-surface-container-lowest dark:bg-surface-container-lowest-dark border border-outline-variant dark:border-outline-variant-dark shadow-elevation-0',
  };

  // State layer for hover/focus (M3 spec: on-surface with opacity)
  // Only show if interactive
  const stateLayer =
    interactive
      ? 'after:absolute after:inset-0 after:pointer-events-none after:transition-colors after:duration-150 after:rounded-lg after:content-[""] hover:after:bg-on-surface/8 focus:after:bg-on-surface/12'
      : '';

  // Accessibility: if interactive, set role and tabIndex
  const accessibilityProps = interactive
    ? { role: 'button', tabIndex: 0 }
    : { role: 'group' };

  return (
    <div
      className={clsx(
        base,
        variantStyles[variant],
        stateLayer,
        className
      )}
      {...accessibilityProps}
      {...rest}
    >
      {children}
    </div>
  );
};
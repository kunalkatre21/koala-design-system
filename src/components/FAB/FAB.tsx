import React from 'react';

export type FABVariant = 'surface' | 'primary' | 'secondary' | 'tertiary';
export type FABSize = 'small' | 'medium' | 'large';

export interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: FABVariant;
  size?: FABSize;
  icon: React.ReactNode;
  label?: string;
  'aria-label'?: string;
}

const variantClasses: Record<FABVariant, string> = {
  surface:
    'bg-surface-container-high text-primary hover:bg-primary/8 focus:bg-primary/12',
  primary:
    'bg-primary-container text-on-primary-container hover:bg-primary/8 focus:bg-primary/12',
  secondary:
    'bg-secondary-container text-on-secondary-container hover:bg-secondary/8 focus:bg-secondary/12',
  tertiary:
    'bg-tertiary-container text-on-tertiary-container hover:bg-tertiary/8 focus:bg-tertiary/12',
};

const sizeClasses: Record<FABSize, { root: string; icon: string; labelPad: string }> = {
  small: {
    root: 'w-10 h-10 rounded-lg text-base',
    icon: 'w-5 h-5',
    labelPad: 'px-3 gap-2',
  },
  medium: {
    root: 'w-14 h-14 rounded-xl text-lg',
    icon: 'w-6 h-6',
    labelPad: 'px-4 gap-2',
  },
  large: {
    root: 'w-24 h-24 rounded-2xl text-2xl',
    icon: 'w-8 h-8',
    labelPad: 'px-6 gap-3',
  },
};

const elevationBase = 'shadow-elevation-3';
const elevationHover = 'hover:shadow-elevation-4';
const elevationFocus = 'focus:shadow-elevation-5';
const elevationActive = 'active:shadow-elevation-1';

const disabledClasses =
  'disabled:opacity-40 disabled:bg-on-surface/12 disabled:text-on-surface/38 disabled:shadow-elevation-0';

export const FAB: React.FC<FABProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  label,
  className = '',
  'aria-label': ariaLabel,
  disabled,
  ...rest
}) => {
  const isExtended = !!label;
  const baseClasses = [
    'relative inline-flex items-center justify-center select-none transition-all font-medium outline-none',
    variantClasses[variant],
    sizeClasses[size].root,
    elevationBase,
    elevationHover,
    elevationFocus,
    elevationActive,
    disabledClasses,
    className,
  ];

  if (isExtended) {
    // Extended FAB: not fully circular, more padding, horizontal layout
    baseClasses.push(
      'flex-row',
      sizeClasses[size].labelPad,
      'min-w-fit',
      'rounded-full'
    );
  } else {
    // Standard FAB: fully circular
    baseClasses.push('aspect-square');
  }

  // Accessibility: aria-label required for icon-only FABs
  const computedAriaLabel =
    ariaLabel || (isExtended ? label : undefined) || 'FAB';

  return (
    <button
      type="button"
      className={baseClasses.join(' ')}
      aria-label={computedAriaLabel}
      disabled={disabled}
      {...rest}
    >
      <span
        className={`flex items-center justify-center ${sizeClasses[size].icon}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      {isExtended && (
        <span className="whitespace-nowrap">{label}</span>
      )}
    </button>
  );
};
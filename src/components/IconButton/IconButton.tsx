import React from 'react';

export type IconButtonVariant = 'standard' | 'filled' | 'tonal' | 'outlined';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The icon to display inside the button (required).
   */
  icon: React.ReactNode;
  /**
   * The accessible label for the button (required).
   */
  'aria-label': string;
  /**
   * The variant of the icon button.
   */
  variant?: IconButtonVariant;
  /**
   * If true, the button acts as a toggle button.
   */
  toggle?: boolean;
  /**
   * If true and toggle is set, the button is in the selected state.
   */
  selected?: boolean;
}

const VARIANT_STYLES = {
  standard: {
    base: 'bg-transparent text-on-surface-variant',
    selected: 'text-primary',
    stateLayer: 'hover:bg-on-surface-variant/8 active:bg-on-surface-variant/12',
    selectedStateLayer: 'hover:bg-primary/8 active:bg-primary/12',
    disabled: 'text-on-surface/38',
    disabledBg: '',
  },
  filled: {
    base: 'bg-surface-container-highest text-primary',
    selected: 'bg-primary text-on-primary',
    stateLayer: 'hover:bg-on-surface-variant/8 active:bg-on-surface-variant/12',
    selectedStateLayer: 'hover:bg-on-primary/8 active:bg-on-primary/12',
    disabled: 'text-on-surface/38',
    disabledBg: 'bg-on-surface/12',
  },
  tonal: {
    base: 'bg-secondary-container text-on-secondary-container',
    selected: 'bg-primary-container text-on-primary-container',
    stateLayer: 'hover:bg-on-secondary-container/8 active:bg-on-secondary-container/12',
    selectedStateLayer: 'hover:bg-on-primary-container/8 active:bg-on-primary-container/12',
    disabled: 'text-on-surface/38',
    disabledBg: 'bg-on-surface/12',
  },
  outlined: {
    base: 'bg-transparent text-on-surface-variant border border-outline',
    selected: 'bg-inverse-surface text-inverse-on-surface border border-outline',
    stateLayer: 'hover:bg-on-surface-variant/8 active:bg-on-surface-variant/12',
    selectedStateLayer: 'hover:bg-inverse-on-surface/8 active:bg-inverse-on-surface/12',
    disabled: 'text-on-surface/38 border-on-surface/12',
    disabledBg: '',
  },
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  'aria-label': ariaLabel,
  variant = 'standard',
  toggle = false,
  selected = false,
  disabled = false,
  className = '',
  ...rest
}) => {
  // Determine styles based on variant, toggle, selected, and disabled
  const v = VARIANT_STYLES[variant];

  let containerClasses =
    'relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:z-10';
  let iconClasses = 'w-6 h-6 pointer-events-none transition-colors duration-150';

  // Variant and selected state
  if (toggle && selected) {
    containerClasses += ` ${v.selected}`;
    containerClasses += ` ${v.selectedStateLayer}`;
  } else {
    containerClasses += ` ${v.base}`;
    containerClasses += ` ${v.stateLayer}`;
  }

  // Outlined border for outlined variant
  if (variant === 'outlined' && !(toggle && selected)) {
    // Already included in base
  }

  // Disabled state
  if (disabled) {
    containerClasses += ` opacity-38 pointer-events-none`;
    if (v.disabledBg) {
      containerClasses += ` ${v.disabledBg}`;
    }
    containerClasses = containerClasses.replace(/text-[^\s]+/, v.disabled);
    if (variant === 'outlined') {
      containerClasses = containerClasses.replace(/border-[^\s]+/, v.disabled);
    }
  }

  // State layer: handled by Tailwind hover/active classes above

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={toggle ? selected : undefined}
      disabled={disabled}
      className={`${containerClasses} ${className}`}
      {...rest}
    >
      <span className={iconClasses}>{icon}</span>
      {/* State layer is handled by Tailwind hover/active classes */}
    </button>
  );
};
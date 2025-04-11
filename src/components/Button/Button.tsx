import React from 'react';

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const baseClasses =
  'relative inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full text-label-large font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none select-none';

const variantClasses: Record<ButtonVariant, string> = {
  filled:
    'bg-primary text-on-primary shadow-md hover:bg-primary/90 active:bg-primary/80 disabled:bg-on-surface/12 disabled:text-on-surface/38 dark:bg-primary-dark dark:text-on-primary-dark dark:hover:bg-primary-dark/90 dark:active:bg-primary-dark/80',
  outlined:
    'border border-outline bg-transparent text-primary hover:bg-primary/8 active:bg-primary/12 disabled:border-on-surface/12 disabled:text-on-surface/38 dark:border-outline-dark dark:text-primary-dark dark:hover:bg-primary-dark/8 dark:active:bg-primary-dark/12',
  text:
    'bg-transparent text-primary hover:bg-primary/8 active:bg-primary/12 disabled:text-on-surface/38 dark:text-primary-dark dark:hover:bg-primary-dark/8 dark:active:bg-primary-dark/12',
  elevated:
    'bg-surface-container-low text-primary shadow-elevated hover:bg-primary/8 active:bg-primary/12 disabled:bg-on-surface/12 disabled:text-on-surface/38 dark:bg-surface-container-low-dark dark:text-primary-dark dark:hover:bg-primary-dark/8 dark:active:bg-primary-dark/12',
  tonal:
    'bg-secondary-container text-on-secondary-container shadow-md hover:bg-secondary-container/90 active:bg-secondary-container/80 disabled:bg-on-surface/12 disabled:text-on-surface/38 dark:bg-secondary-container-dark dark:text-on-secondary-container-dark dark:hover:bg-secondary-container-dark/90 dark:active:bg-secondary-container-dark/80',
};

const stateLayerClasses: Record<ButtonVariant, string> = {
  filled: 'hover:bg-primary/8 active:bg-primary/12',
  outlined: 'hover:bg-primary/8 active:bg-primary/12',
  text: 'hover:bg-primary/8 active:bg-primary/12',
  elevated: 'hover:bg-primary/8 active:bg-primary/12',
  tonal: 'hover:bg-secondary-container/8 active:bg-secondary-container/12',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'filled',
      icon,
      trailingIcon,
      children,
      className = '',
      type = 'button',
      disabled,
      ...rest
    },
    ref
  ) => {
    // Compose classes
    const classes = [
      baseClasses,
      variantClasses[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled}
        aria-disabled={disabled}
        {...rest}
      >
        {icon && (
          <span className="flex items-center justify-center text-xl leading-none">
            {icon}
          </span>
        )}
        {children && <span>{children}</span>}
        {trailingIcon && (
          <span className="flex items-center justify-center text-xl leading-none">
            {trailingIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
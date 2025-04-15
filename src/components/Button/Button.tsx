import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconAriaLabel?: string;
  trailingIcon?: React.ReactNode;
  trailingIconAriaLabel?: string;
  children?: React.ReactNode;
}

const baseClasses =
  'relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors transition-all duration-150 ease-out motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:opacity-40 disabled:pointer-events-none select-none';

const variantClasses: Record<ButtonVariant, string> = {
  filled:
    'bg-primary text-on-primary shadow-md disabled:bg-on-surface/12 disabled:text-on-surface/38', // Removed dark: variants for primary
  outlined:
    'border border-outline bg-transparent text-primary disabled:border-on-surface/12 disabled:text-on-surface/38 dark:border-outline-dark', // Removed dark:text-primary-dark
  text:
    'bg-transparent text-primary disabled:text-on-surface/38', // Removed dark:text-primary-dark
  elevated:
    'bg-surface-container-low text-primary shadow-elevated disabled:bg-on-surface/12 disabled:text-on-surface/38 dark:bg-surface-container-low-dark', // Removed dark:text-primary-dark
  tonal:
    'bg-secondary-container text-on-secondary-container shadow-md disabled:bg-on-surface/12 disabled:text-on-surface/38 dark:bg-secondary-container-dark dark:text-on-secondary-container-dark',
};

const sizeClasses: Record<ButtonSize, string> = {
  small: 'h-8 px-3 text-label-small',
  medium: 'h-10 px-6 text-label-large',
  large: 'h-12 px-8 text-label-large text-base',
};

const iconSizeClasses: Record<ButtonSize, string> = {
  small: 'text-base',   // 16px
  medium: 'text-xl',    // 20px
  large: 'text-2xl',    // 24px
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'filled',
      size = 'medium',
      icon,
      iconAriaLabel,
      trailingIcon,
      trailingIconAriaLabel,
      children,
      className = '',
      type = 'button',
      disabled,
      ...rest
    },
    ref
  ) => {
    // Prevent rendering a button with neither text nor icon
    if (!children && !icon && !trailingIcon) {
      throw new Error(
        "Button: Must provide at least one of 'children', 'icon', or 'trailingIcon'. Rendering a button with neither text nor icon is not allowed."
      );
    }

    // Compose classes
    // Interaction classes per variant
    const interactionClasses: Record<ButtonVariant, string> = {
      filled: clsx(
        // Hover
        'hover:bg-primary/90 motion-safe:hover:shadow-lg',
        // Pressed
        'active:bg-primary/80 active:shadow-md motion-safe:active:scale-[0.98]',
        // Dark mode
        // Removed dark: variants for primary interaction
      ),
      tonal: clsx(
        'hover:bg-secondary-container/90 motion-safe:hover:shadow-lg',
        'active:bg-secondary-container/80 active:shadow-md motion-safe:active:scale-[0.98]',
        'dark:hover:bg-secondary-container-dark/90 dark:active:bg-secondary-container-dark/80'
      ),
      outlined: clsx(
        'hover:bg-primary/8 hover:border-outline/80',
        'active:bg-primary/12 motion-safe:active:scale-[0.98]',
        // Removed dark: variants for primary interaction
      ),
      text: clsx(
        'hover:bg-primary/8',
        'active:bg-primary/12 motion-safe:active:scale-[0.98]',
        // Removed dark: variants for primary interaction
      ),
      elevated: clsx(
        // No background overlay on hover, only shadow/scale
        'motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02]',
        'active:bg-primary/12 active:shadow-md motion-safe:active:scale-[0.97]',
        // Removed dark: variants for primary interaction
      ),
    };

    const classes = clsx(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      interactionClasses[variant],
      className
    );

    // Focus indicator: always visible and clear
    // Color contrast: use accessible color tokens from Tailwind config

    // Icon accessibility: aria-hidden if decorative, aria-label if provided
    const renderIcon = (iconNode: React.ReactNode, ariaLabel?: string) =>
      iconNode ? (
        <span
          className={clsx("flex items-center justify-center leading-none", iconSizeClasses[size])}
          aria-hidden={ariaLabel ? undefined : 'true'}
          aria-label={ariaLabel}
        >
          {iconNode}
        </span>
      ) : null;

    // Icon-only button: if no children, set aria-label from iconAriaLabel or trailingIconAriaLabel
    const isIconOnly = !children && (icon || trailingIcon);
    const buttonAriaLabel =
      isIconOnly && (iconAriaLabel || trailingIconAriaLabel)
        ? iconAriaLabel || trailingIconAriaLabel
        : rest['aria-label'];

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={buttonAriaLabel}
        tabIndex={0}
        {...rest}
      >
        {renderIcon(icon, iconAriaLabel)}
        {children && <span>{children}</span>}
        {renderIcon(trailingIcon, trailingIconAriaLabel)}
      </button>
    );
  }
);

Button.displayName = 'Button';
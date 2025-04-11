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
  'relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:opacity-40 disabled:pointer-events-none select-none';

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
    // Compose classes
    const classes = clsx(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
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
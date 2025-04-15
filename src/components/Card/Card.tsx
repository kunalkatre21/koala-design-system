import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { PlaceholderImage } from '../PlaceholderImage';
export type CardVariant = 'elevated' | 'filled' | 'outlined';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  isSelected?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

/**
 * Card component with Material 3-inspired variants and interaction enhancements.
 * - Keyboard activation (Enter/Space) for interactive cards (M3, HIG, Atlassian, Airbnb: all recommend keyboard accessibility for interactive elements).
 * - CSS-based ripple effect for click/tap feedback (M3: ripple, Atlassian: highlight, HIG: scale/highlight, Airbnb: highlight).
 * - High-contrast focus ring (focus:ring-2 etc.) for accessibility (M3, HIG, Atlassian, Nutanix: all require strong visible focus).
 * - Minimum tap target size via padding (M3, HIG, Nutanix: 44x44px min recommended).
 * - Enhanced hover state for clarity (M3, Atlassian, Airbnb: clear hover feedback).
 *
 * Rationale for each enhancement is documented inline.
 */
type CardMediaProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  position?: 'top' | 'start' | 'end' | 'bottom';
  as?: React.ElementType;
  children?: React.ReactNode;
};
const CardMedia: React.FC<CardMediaProps> = ({
  position = 'top',
  as: Component = 'img',
  className,
  children,
  ...props
}) => {
  // Only check for src if rendering an img
  const isImg = (typeof Component === 'string' && Component === 'img');
  const src = (props as React.ImgHTMLAttributes<HTMLImageElement>).src;

  return (
    <div
      className={clsx(
        'card-media',
        {
          'rounded-t-lg': position === 'top',
          'rounded-b-lg': position === 'bottom',
          'rounded-l-lg': position === 'start',
          'rounded-r-lg': position === 'end',
        },
        'overflow-hidden'
      )}
    >
      {isImg && (!src || src === "") ? (
        <PlaceholderImage className={clsx('w-full h-full', className)} />
      ) : (
        <Component
          className={clsx('w-full object-cover', className)}
          {...props}
        >
          {children}
        </Component>
      )}
    </div>
  );
};

type CardHeaderProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};
const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  avatar,
  action,
  className,
  children,
}) => (
  <div className={clsx('flex items-center gap-4 px-4 pt-4', className)}>
    {avatar && <div className="flex-shrink-0">{avatar}</div>}
    <div className="flex-1 min-w-0">
      {title && <div className="text-lg font-medium truncate">{title}</div>}
      {subtitle && (
        <div className="text-sm text-on-surface-variant truncate">{subtitle}</div>
      )}
      {children}
    </div>
    {action && <div className="ml-2">{action}</div>}
  </div>
);

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => (
  <div className={clsx('px-4 py-2', className)} {...props} />
);

type CardActionsProps = {
  alignment?: 'start' | 'center' | 'end';
  children?: React.ReactNode;
  className?: string;
};
const CardActions: React.FC<CardActionsProps> = ({
  alignment = 'end',
  children,
  className,
}) => (
  <div
    className={clsx(
      'flex gap-2 px-4 pb-4',
      {
        'justify-start': alignment === 'start',
        'justify-center': alignment === 'center',
        'justify-end': alignment === 'end',
      },
      className
    )}
  >
    {children}
  </div>
);

type CardMetadataProps = React.HTMLAttributes<HTMLDivElement>;
const CardMetadata: React.FC<CardMetadataProps> = ({ className, ...props }) => (
  <div className={clsx('px-4 py-2 text-xs text-on-surface-variant', className)} {...props} />
);

type CardComponent = React.FC<CardProps> & {
  Media: typeof CardMedia;
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Actions: typeof CardActions;
  Metadata: typeof CardMetadata;
};

export const Card: CardComponent = ({
  variant = 'elevated',
  children,
  className,
  interactive = false,
  isSelected = false,
  isLoading = false,
  disabled = false,
  onClick,
  ...rest
}) => {
  // --- Rationale: Minimum tap target size (M3, HIG, Nutanix) ---
  // p-4 ensures at least 32px padding, helping reach 44x44px min size.
  const base =
    'relative rounded-lg transition-shadow transition-colors duration-150 overflow-hidden p-4';

  // --- Rationale: Variant styles per M3 spec ---
  const variantStyles = {
    elevated:
      'bg-surface-container-lowest dark:bg-surface-container-lowest-dark shadow-elevation-1 hover:shadow-elevation-2 focus:shadow-elevation-2',
    filled:
      'bg-surface dark:bg-surface-dark shadow-elevation-0',
    outlined:
      'bg-surface-container-lowest dark:bg-surface-container-lowest-dark border border-outline-variant dark:border-outline-variant-dark shadow-elevation-0',
  };

  // --- Rationale: Enhanced hover state (M3, Atlassian, Airbnb) ---
  // Increased hover opacity for better clarity.
  const stateLayer =
    interactive && !disabled
      ? 'after:absolute after:inset-0 after:pointer-events-none after:transition-colors after:duration-150 after:rounded-lg after:content-[""] hover:after:bg-on-surface/12 focus:after:bg-on-surface/16'
      : '';

  // --- Rationale: Focus ring (M3, HIG, Atlassian, Nutanix) ---
  // focus:ring-2 focus:ring-offset-2 focus:ring-primary for strong, visible focus.
  const focusRing =
    interactive && !disabled
      ? 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
      : '';

  // --- Rationale: Keyboard activation (M3, HIG, Atlassian, Airbnb) ---
  // Enter/Space triggers onClick for interactive cards.
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!interactive || !onClick || disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.key === ' ') e.preventDefault(); // Prevent scroll
      onClick(e as any);
    }
  };

  // --- Rationale: Ripple effect (M3, Atlassian, Airbnb) ---
  // CSS-based ripple for click/tap feedback.
  const [ripples, setRipples] = useState<
    { x: number; y: number; key: number }[]
  >([]);
  const rippleContainer = useRef<HTMLDivElement>(null);
  const rippleKey = useRef(0);

  const createRipple = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!interactive || disabled) return;
    const rect = rippleContainer.current?.getBoundingClientRect();
    let x = 0, y = 0;
    if ('touches' in e && e.touches.length > 0) {
      x = e.touches[0].clientX - (rect?.left ?? 0);
      y = e.touches[0].clientY - (rect?.top ?? 0);
    } else if ('clientX' in e) {
      x = e.clientX - (rect?.left ?? 0);
      y = e.clientY - (rect?.top ?? 0);
    }
    setRipples((prev) => [
      ...prev,
      { x, y, key: rippleKey.current++ }
    ]);
    // Call onClick if pointer event (not keyboard)
    if (onClick && 'type' in e && (e.type === 'mousedown' || e.type === 'touchstart')) {
      onClick(e as any);
    }
  };

  // Remove ripple after animation
  React.useEffect(() => {
    if (ripples.length === 0) return;
    const timeout = setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 500);
    return () => clearTimeout(timeout);
  }, [ripples]);

  // --- Accessibility: role, tabIndex, aria-pressed, aria-disabled, aria-busy, aria-selected ---
  const accessibilityProps = interactive
    ? {
        role: 'button',
        tabIndex: disabled ? -1 : 0,
        'aria-pressed': false,
        'aria-disabled': disabled,
        'aria-busy': isLoading,
        'aria-selected': isSelected,
      }
    : { role: 'group' };

  // --- Visual state for selected, loading, disabled ---
  const stateClasses = [
    isSelected ? 'ring-2 ring-primary ring-offset-2' : '',
    isLoading ? 'opacity-60 pointer-events-none' : '',
    disabled ? 'opacity-40 pointer-events-none grayscale' : '',
  ].join(' ');

  return (
    <div
      ref={rippleContainer}
      className={clsx(
        base,
        variantStyles[variant],
        stateLayer,
        focusRing,
        interactive && !disabled && 'cursor-pointer select-none',
        stateClasses,
        className
      )}
      {...accessibilityProps}
      {...rest}
      onKeyDown={handleKeyDown}
      onMouseDown={createRipple}
      onTouchStart={createRipple}
      // Only pass onClick if interactive, to avoid accidental clickability
      {...(interactive && onClick && !disabled ? { onClick } : {})}
      data-testid="card-root"
    >
      {/* Render ripples */}
      {interactive && !disabled && (
        <span className="pointer-events-none absolute inset-0 z-10">
          {ripples.map(({ x, y, key }) => (
            <span
              key={key}
              className="absolute bg-on-surface/20 rounded-full animate-card-ripple"
              style={{
                left: x - 120,
                top: y - 120,
                width: 240,
                height: 240,
                pointerEvents: 'none',
              }}
            />
          ))}
        </span>
      )}
      {/* Loading indicator */}
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center z-20 bg-surface/60 dark:bg-surface-dark/60">
          <span className="loader border-primary border-t-transparent border-2 rounded-full w-6 h-6 animate-spin" />
        </span>
      )}
      {children}
    </div>
  );
};

  // Attach sub-components to Card
Card.Media = CardMedia;
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Actions = CardActions;
Card.Metadata = CardMetadata;


// --- Ripple animation (Tailwind plugin not used, so add global style here) ---
// Airbnb, Atlassian, and M3 all use some form of highlight/ripple for feedback.
// This CSS is injected once for the ripple effect.
if (typeof window !== 'undefined' && !document.getElementById('card-ripple-style')) {
  const style = document.createElement('style');
  style.id = 'card-ripple-style';
  style.innerHTML = `
  @keyframes card-ripple {
    0% { transform: scale(0.2); opacity: 0.5; }
    80% { transform: scale(1); opacity: 0.2; }
    100% { transform: scale(1.2); opacity: 0; }
  }
  .animate-card-ripple {
    animation: card-ripple 0.5s cubic-bezier(0.4,0,0.2,1);
  }
  `;
  document.head.appendChild(style);
}
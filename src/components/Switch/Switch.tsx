import React from 'react';
import clsx from 'clsx';

export interface SwitchProps {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  value?: string;
  id?: string;
  name?: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  value,
  id,
  name,
  label,
  icon,
  className = '',
  ...rest
}) => {
  // Generate a unique id if not provided for accessibility
  const inputId = id || React.useId();

  // State layer for hover/focus
  const [isHovered, setHovered] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);

  // Track classes
  const trackBase =
    'w-14 h-8 rounded-full flex items-center transition-colors duration-200 box-border border-2';
  const trackChecked =
    'bg-primary border-primary dark:bg-primary-dark dark:border-primary-dark';
  const trackUnchecked =
    'bg-surface-container-highest border-outline dark:bg-surface-container-highest-dark dark:border-outline-dark';
  const trackDisabledChecked =
    'bg-on-surface/12 border-on-surface/12 dark:bg-on-surface-dark/12 dark:border-on-surface-dark/12';
  const trackDisabledUnchecked =
    'bg-on-surface/12 border-on-surface/12 dark:bg-on-surface-dark/12 dark:border-on-surface-dark/12';

  // Thumb classes
  const thumbBase =
    'absolute top-1 left-1 w-6 h-6 rounded-full shadow transition-all duration-200 flex items-center justify-center';
  const thumbChecked =
    'bg-on-primary dark:bg-on-primary-dark translate-x-6';
  const thumbUnchecked =
    'bg-outline dark:bg-outline-dark translate-x-0';
  const thumbDisabledChecked =
    'bg-on-surface/38 dark:bg-on-surface-dark/38';
  const thumbDisabledUnchecked =
    'bg-on-surface/38 dark:bg-on-surface-dark/38';

  // Icon color
  const iconChecked = 'text-primary dark:text-primary-dark';
  const iconUnchecked = 'text-on-surface-variant dark:text-on-surface-variant-dark';
  const iconDisabled = 'text-on-surface/38 dark:text-on-surface-dark/38';

  // State layer (hover/focus) around thumb
  const stateLayerBase =
    'absolute w-10 h-10 -left-2 -top-2 rounded-full pointer-events-none transition-colors duration-200';
  const stateLayerVisible =
    (isHovered || isFocused) && !disabled
      ? (checked
          ? 'bg-primary/12'
          : 'bg-on-surface-variant/8')
      : 'bg-transparent';

  // Disabled opacity
  const disabledOpacity = disabled ? 'opacity-40' : '';

  return (
    <label
      htmlFor={inputId}
      className={`inline-flex items-center cursor-pointer select-none gap-3 ${disabled ? 'cursor-not-allowed' : ''} ${className}`}
    >
      <span className="relative inline-block">
        <input
          type="checkbox"
          role="switch"
          aria-checked={checked}
          id={inputId}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
          tabIndex={0}
          {...rest}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        {/* Track */}
        <span
          className={
            clsx(
              trackBase,
              disabled
                ? checked
                  ? trackDisabledChecked
                  : trackDisabledUnchecked
                : checked
                ? trackChecked
                : trackUnchecked,
              disabledOpacity,
            )
          }
        />
        {/* State layer */}
        <span
          className={`${stateLayerBase} ${stateLayerVisible}`}
          aria-hidden="true"
        />
        {/* Thumb */}
        <span
          className={
            clsx(
              thumbBase,
              disabled
                ? thumbDisabledUnchecked
                : checked
                ? thumbChecked
                : thumbUnchecked,
              disabled && checked ? thumbDisabledChecked : '',
              disabledOpacity,
            )
          }
          style={{
            left: checked ? '2.5rem' : '0.25rem',
            transition: 'left 0.2s, background 0.2s',
          }}
        >
          {icon && (
            <span
              className={
                clsx(
                  'flex items-center justify-center text-lg',
                  disabled
                    ? iconDisabled
                    : checked
                    ? iconChecked
                    : iconUnchecked,
                )
              }
            >
              {icon}
            </span>
          )}
        </span>
      </span>
      {label && (
        <span
          className={`text-on-surface-variant dark:text-on-surface-variant-dark text-base ${disabled ? 'opacity-40' : ''}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
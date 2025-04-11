import React from 'react';

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
    'bg-primary border-primary';
  const trackUnchecked =
    'bg-surface-container-highest border-outline';
  const trackDisabledChecked =
    'bg-on-surface/12 border-on-surface/12';
  const trackDisabledUnchecked =
    'bg-on-surface/12 border-on-surface/12';

  // Thumb classes
  const thumbBase =
    'absolute top-1 left-1 w-6 h-6 rounded-full shadow transition-all duration-200 flex items-center justify-center';
  const thumbChecked =
    'bg-on-primary translate-x-6';
  const thumbUnchecked =
    'bg-outline translate-x-0';
  const thumbDisabledChecked =
    'bg-on-surface/38';
  const thumbDisabledUnchecked =
    'bg-on-surface/38';

  // Icon color
  const iconChecked = 'text-primary';
  const iconUnchecked = 'text-on-surface-variant';
  const iconDisabled = 'text-on-surface/38';

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
  const disabledOpacity = disabled ? 'opacity-38' : '';

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
            [
              trackBase,
              disabled
                ? checked
                  ? trackDisabledChecked
                  : trackDisabledUnchecked
                : checked
                ? trackChecked
                : trackUnchecked,
              disabledOpacity,
            ].join(' ')
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
            [
              thumbBase,
              disabled
                ? thumbDisabledUnchecked
                : checked
                ? thumbChecked
                : thumbUnchecked,
              disabled && checked ? thumbDisabledChecked : '',
              disabledOpacity,
            ].join(' ')
          }
          style={{
            left: checked ? '2.5rem' : '0.25rem',
            transition: 'left 0.2s, background 0.2s',
          }}
        >
          {icon && (
            <span
              className={
                [
                  'flex items-center justify-center text-lg',
                  disabled
                    ? iconDisabled
                    : checked
                    ? iconChecked
                    : iconUnchecked,
                ].join(' ')
              }
            >
              {icon}
            </span>
          )}
        </span>
      </span>
      {label && (
        <span
          className={`text-on-surface-variant text-base ${disabled ? 'opacity-38' : ''}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
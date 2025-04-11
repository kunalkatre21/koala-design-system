import React from 'react';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
  id?: string;
  name?: string;
  label?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  disabled = false,
  value,
  id,
  name,
  label,
  ...rest
}) => {
  // Generate a unique id if not provided for accessibility
  const inputId = id || React.useId();

  return (
    <label
      htmlFor={inputId}
      className={`inline-flex items-center cursor-pointer select-none group ${
        disabled ? 'opacity-40 cursor-not-allowed' : ''
      }`}
    >
      <span className="relative flex items-center justify-center">
        {/* State layer for hover/focus */}
        <span
          className={`
            absolute inset-0 rounded-full pointer-events-none
            transition-colors
            ${disabled ? '' : 'group-hover:bg-primary/8 group-focus-within:bg-primary/12'}
          `}
        />
        {/* Visually hidden input */}
        <input
          id={inputId}
          name={name}
          type="radio"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={value}
          aria-checked={checked}
          className="sr-only peer"
          {...rest}
        />
        {/* Custom radio visual */}
        <span
          className={`
            w-6 h-6 rounded-full flex items-center justify-center
            border-2
            transition-colors
            ${checked ? (disabled
              ? 'border-on-surface/38'
              : 'border-primary')
              : (disabled
                ? 'border-on-surface/38'
                : 'border-on-surface-variant')}
            bg-surface
          `}
        >
          {/* Inner circle for checked state */}
          {checked && (
            <span
              className={`
                w-3 h-3 rounded-full
                ${disabled
                  ? 'bg-on-surface/38'
                  : 'bg-primary'}
                transition-colors
              `}
            />
          )}
        </span>
      </span>
      {label && (
        <span
          className={`
            ml-3 text-base
            ${disabled ? 'text-on-surface/38' : 'text-on-surface'}
          `}
        >
          {label}
        </span>
      )}
    </label>
  );
};
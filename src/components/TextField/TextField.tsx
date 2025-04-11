import React, { useState, useRef, InputHTMLAttributes, ChangeEvent, FocusEvent } from 'react';
import clsx from 'clsx';

export type TextFieldVariant = 'filled' | 'outlined';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type' | 'size'> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  variant?: TextFieldVariant;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  helperText?: string;
  errorText?: string;
  maxLength?: number;
  showCharCounter?: boolean;
  type?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  variant = 'filled',
  leadingIcon,
  trailingIcon,
  helperText,
  errorText,
  maxLength,
  showCharCounter,
  type = 'text',
  id,
  name,
  disabled = false,
  placeholder = ' ',
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const inputId = id || `textfield-${label.replace(/\s+/g, '-').toLowerCase()}`;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const errorId = errorText ? `${inputId}-error` : undefined;
  const describedBy = errorText ? errorId : helperText ? helperId : undefined;

  // Floating label logic: label floats if focused or has value
  const isLabelFloated = focused || !!value;

  // Color tokens (Tailwind M3 tokens)
  const base = {
    filled: {
      container: 'bg-surface-container-highest dark:bg-surface-container-highest-dark',
      border: 'border-b-2',
      borderColor: errorText
        ? 'border-error'
        : focused
        ? 'border-primary'
        : 'border-on-surface-variant dark:border-on-surface-variant-dark',
      label: errorText
        ? 'text-error'
        : focused
        ? 'text-primary'
        : 'text-on-surface-variant dark:text-on-surface-variant-dark',
      input: 'text-on-surface dark:text-on-surface-dark',
      icon: 'text-on-surface-variant dark:text-on-surface-variant-dark',
      disabled: 'bg-on-surface/4 dark:bg-on-surface-dark/4 border-on-surface/12 dark:border-on-surface-dark/12 text-on-surface/38 dark:text-on-surface-dark/38',
    },
    outlined: {
      container: 'bg-transparent border-2 rounded-lg',
      borderColor: errorText
        ? 'border-error'
        : focused
        ? 'border-primary'
        : 'border-outline dark:border-outline-dark',
      label: errorText
        ? 'text-error'
        : focused
        ? 'text-primary'
        : 'text-on-surface-variant dark:text-on-surface-variant-dark',
      input: 'text-on-surface dark:text-on-surface-dark',
      icon: 'text-on-surface-variant dark:text-on-surface-variant-dark',
      disabled: 'bg-on-surface/4 dark:bg-on-surface-dark/4 border-on-surface/12 dark:border-on-surface-dark/12 text-on-surface/38 dark:text-on-surface-dark/38',
    },
  };

  // Helper/error/counter text color
  const helperTextColor = errorText ? 'text-error' : 'text-on-surface-variant dark:text-on-surface-variant-dark';

  // Disabled state
  const isDisabled = disabled;

  // Icon padding
  const inputPaddingLeft = leadingIcon ? 'pl-12' : 'pl-4';
  const inputPaddingRight = trailingIcon ? 'pr-12' : 'pr-4';

  // Outlined label floating: needs background and px when floated
  const outlinedLabelFloated =
    variant === 'outlined' && isLabelFloated
      ? 'bg-surface-container-highest px-1 -translate-y-4 scale-90 left-3'
      : variant === 'outlined'
      ? 'left-4'
      : '';

  // Filled label floating: translate and scale
  const filledLabelFloated =
    variant === 'filled' && isLabelFloated
      ? '-translate-y-4 scale-90 left-0'
      : variant === 'filled'
      ? 'left-0'
      : '';

  // Label base classes
  const labelBase =
    'absolute top-1 transition-all duration-200 origin-left pointer-events-none select-none';

  // Input base classes
  const inputBase =
    'block w-full bg-transparent outline-none text-base peer placeholder-transparent disabled:cursor-not-allowed';

  // Container classes
  const containerBase =
    'relative flex flex-col w-full';

  // Border/underline classes
  const borderBase =
    variant === 'filled'
      ? `${base.filled.border} ${base.filled.borderColor} transition-colors`
      : `border ${base.outlined.borderColor} transition-colors`;

  // Disabled classes
  const disabledClasses =
    isDisabled
      ? variant === 'filled'
        ? base.filled.disabled
        : base.outlined.disabled
      : '';

  // Label classes
  const labelClasses = clsx(
    labelBase,
    variant === 'filled' ? filledLabelFloated : outlinedLabelFloated,
    variant === 'filled' ? base.filled.label : base.outlined.label,
    isDisabled ? 'text-on-surface/38' : '',
    'pointer-events-none',
  );

  // Input classes
  const inputClasses = clsx(
    inputBase,
    variant === 'filled' ? base.filled.input : base.outlined.input,
    inputPaddingLeft,
    inputPaddingRight,
    isDisabled ? 'text-on-surface/38' : '',
    maxLength ? 'pr-16' : '',
  );

  // Container style
  const containerStyle =
    variant === 'filled'
      ? `${containerBase} ${base.filled.container} rounded-t-lg px-4 pt-5 pb-2 ${borderBase} ${disabledClasses}`
      : `${containerBase} ${base.outlined.container} px-4 pt-5 pb-2 ${borderBase} ${disabledClasses}`;

  return (
    <div className={containerStyle}>
      {/* Leading Icon */}
      {leadingIcon && (
        <span className={`absolute left-4 top-1/2 -translate-y-1/2 ${variant === 'filled' ? base.filled.icon : base.outlined.icon}`}>
          {leadingIcon}
        </span>
      )}

      {/* Input */}
      <input
        id={inputId}
        name={name}
        type={type}
        className={inputClasses}
        value={value}
        onChange={onChange}
        onFocus={(e: FocusEvent<HTMLInputElement>) => setFocused(true)}
        onBlur={(e: FocusEvent<HTMLInputElement>) => setFocused(false)}
        placeholder={placeholder}
        disabled={isDisabled}
        maxLength={maxLength}
        aria-label={label}
        aria-describedby={describedBy}
        aria-invalid={!!errorText}
        {...rest}
      />

      {/* Floating Label */}
      <label
        htmlFor={inputId}
        className={labelClasses}
        style={{
          // For outlined, background for floating label
          background:
            variant === 'outlined' && isLabelFloated
              ? 'var(--tw-bg-opacity,1) var(--tw-bg-surface-container-highest)'
              : undefined,
        }}
      >
        {label}
      </label>

      {/* Trailing Icon */}
      {trailingIcon && (
        <span className={`absolute right-4 top-1/2 -translate-y-1/2 ${variant === 'filled' ? base.filled.icon : base.outlined.icon}`}>
          {trailingIcon}
        </span>
      )}

      {/* Helper/Error/Counter Row */}
      {(helperText || errorText || showCharCounter) && (
        <div className="flex justify-between items-center mt-1 min-h-[20px]">
          <span
            id={errorText ? errorId : helperId}
            className={`text-body-small ${helperTextColor}`}
          >
            {errorText || helperText}
          </span>
          {showCharCounter && maxLength !== undefined && (
            <span className="text-body-small text-on-surface-variant ml-auto">
              {value.length} / {maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
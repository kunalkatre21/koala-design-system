import React, { useEffect, useRef } from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  indeterminate?: boolean;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  value,
  id,
  name,
  label,
  className = '',
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Set indeterminate state on the native input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // M3 color tokens (assumes Tailwind config has these)
  // border-on-surface-variant, bg-primary, border-primary, opacity-40, etc.

  // State classes
  const baseContainer =
    'relative flex items-center select-none group';
  const stateLayer =
    'absolute -inset-1 rounded-full pointer-events-none transition-colors duration-150';
  const inputClass =
    'peer absolute w-6 h-6 opacity-0 cursor-pointer z-10 m-0 p-0'; // visually hidden but accessible
  const boxBase =
    'flex items-center justify-center w-6 h-6 rounded border-2 transition-colors duration-150 bg-surface border-on-surface-variant';
  const boxChecked =
    'bg-primary border-primary';
  const boxIndeterminate =
    'bg-primary border-primary';
  const boxDisabled =
    'opacity-40 border-on-surface/38 bg-on-surface/0';
  const boxCheckedDisabled =
    'bg-on-surface/38 border-on-surface/38';
  const boxUncheckedDisabled =
    'bg-surface border-on-surface/38';
  const boxFocus =
    'ring-2 ring-primary/40';
  const boxHover =
    'hover:bg-primary/8';

  // Determine box classes
  let boxClasses = boxBase;
  if (disabled) {
    boxClasses += ' ' + (checked || indeterminate ? boxCheckedDisabled : boxUncheckedDisabled);
  } else if (checked || indeterminate) {
    boxClasses += ' ' + boxChecked;
  }
  if (className) boxClasses += ' ' + className;

  // State layer for hover/focus
  // Use peer-focus and peer-hover for state layer
  const stateLayerClasses =
    'peer-hover:bg-primary/8 peer-focus:bg-primary/12';

  // Icon SVGs
  const checkIcon = (
    <svg
      className="w-4 h-4 text-on-primary pointer-events-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 12 10 16 18 8" />
    </svg>
  );

  const indeterminateIcon = (
    <svg
      className="w-4 h-4 text-on-primary pointer-events-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="6" y1="12" x2="18" y2="12" />
    </svg>
  );

  // Accessibility: aria-checked 'mixed' for indeterminate
  const ariaChecked = indeterminate ? 'mixed' : checked;

  return (
    <label className={baseContainer}>
      <span
        className={`${stateLayer} ${stateLayerClasses}`}
        aria-hidden="true"
      />
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        value={value}
        id={id}
        name={name}
        aria-checked={ariaChecked}
        onChange={onChange}
        className={inputClass}
        {...rest}
      />
      <span
        className={boxClasses}
        aria-hidden="true"
      >
        {indeterminate
          ? indeterminateIcon
          : checked
          ? checkIcon
          : null}
      </span>
      {label && (
        <span
          className={`ml-3 text-on-surface text-base select-none ${
            disabled ? 'opacity-40' : ''
          }`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
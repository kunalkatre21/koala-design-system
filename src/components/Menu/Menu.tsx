import React from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';

export type MenuItem = {
  id: string | number;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isDivider?: boolean;
};

export interface MenuProps {
  trigger: React.ReactElement;
  items: MenuItem[];
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ trigger, items, className }) => {
  // Wrap trigger in a div to avoid nested button issues
  return (
    <HeadlessMenu as="div" className={`relative inline-block text-left ${className ?? ''}`}>
      <HeadlessMenu.Button as="div" className="focus:outline-none">
        {trigger}
      </HeadlessMenu.Button>
      <HeadlessMenu.Items
        className="absolute z-20 mt-2 min-w-[180px] rounded-md bg-surface-container shadow-elevation-2 py-2 focus:outline-none ring-1 ring-outline-variant"
      >
        {items.map((item, idx) =>
          item.isDivider ? (
            <div
              key={item.id ?? `divider-${idx}`}
              className="my-1 border-t border-outline-variant"
              aria-hidden="true"
            />
          ) : (
            <HeadlessMenu.Item
              key={item.id}
              as="div"
              disabled={item.disabled}
            >
              {({ active, disabled }) => (
                <button
                  type="button"
                  className={`
                    group flex w-full items-center gap-3 px-3 py-2 rounded-md text-body-large text-on-surface
                    ${active ? 'bg-on-surface/8' : ''}
                    ${disabled ? 'opacity-38 pointer-events-none' : ''}
                    transition-colors
                  `}
                  onClick={item.onClick}
                  tabIndex={disabled ? -1 : 0}
                  disabled={disabled}
                >
                  {item.icon && (
                    <span className="flex-shrink-0 w-5 h-5 text-on-surface">{item.icon}</span>
                  )}
                  <span className="flex-1 text-left">{item.label}</span>
                </button>
              )}
            </HeadlessMenu.Item>
          )
        )}
      </HeadlessMenu.Items>
    </HeadlessMenu>
  );
};
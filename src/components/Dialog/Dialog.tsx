import React from 'react';
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
  icon,
}) => {
  return (
    <Transition show={isOpen} as={React.Fragment}>
      <HeadlessDialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-scrim/30 dark:bg-scrim-dark/50 transition-opacity"
            aria-hidden="true"
          />
        </Transition.Child>

        {/* Dialog Panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <HeadlessDialog.Panel
              className="
                w-full max-w-md bg-surface-container-high dark:bg-surface-container-high-dark
                rounded-2xl shadow-elevation-3 dark:shadow-elevation-3-dark
                p-6 flex flex-col gap-4 outline-none
              "
            >
              {/* Icon */}
              {icon && (
                <div className="flex justify-center mb-2">
                  <span className="text-secondary dark:text-secondary-dark text-3xl">
                    {icon}
                  </span>
                </div>
              )}

              {/* Title */}
              {title && (
                <HeadlessDialog.Title
                  as="h2"
                  className="text-headline-small text-on-surface dark:text-on-surface-dark mb-2 text-center"
                >
                  {title}
                </HeadlessDialog.Title>
              )}

              {/* Content */}
              <HeadlessDialog.Description
                as="div"
                className="text-body-medium text-on-surface-variant dark:text-on-surface-variant-dark mb-2 max-h-72 overflow-y-auto"
              >
                {children}
              </HeadlessDialog.Description>

              {/* Actions */}
              {actions && (
                <div className="pt-6 flex justify-end gap-2">
                  {actions}
                </div>
              )}
            </HeadlessDialog.Panel>
          </Transition.Child>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};
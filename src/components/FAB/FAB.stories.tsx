import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FAB, FABProps } from './FAB';

// Example icon: Material Design "add" SVG
const AddIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta: Meta<typeof FAB> = {
  title: 'Components/FAB',
  component: FAB,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    icon: { control: false },
  },
  parameters: {
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#f5f5f5' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof FAB>;

export const Surface: Story = {
  args: {
    variant: 'surface',
    size: 'medium',
    icon: AddIcon,
    'aria-label': 'Add',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    icon: AddIcon,
    'aria-label': 'Add',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    icon: AddIcon,
    'aria-label': 'Add',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    icon: AddIcon,
    'aria-label': 'Add',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    icon: AddIcon,
    'aria-label': 'Add',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    icon: AddIcon,
    'aria-label': 'Add',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    icon: AddIcon,
    'aria-label': 'Add',
  },
};

export const Extended: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    icon: AddIcon,
    label: 'Create',
    'aria-label': 'Create',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    icon: AddIcon,
    disabled: true,
    'aria-label': 'Add',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-row gap-4 items-end">
      <FAB variant="surface" size="medium" icon={AddIcon} aria-label="Add" />
      <FAB variant="primary" size="medium" icon={AddIcon} aria-label="Add" />
      <FAB variant="secondary" size="medium" icon={AddIcon} aria-label="Add" />
      <FAB variant="tertiary" size="medium" icon={AddIcon} aria-label="Add" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-row gap-4 items-end">
      <FAB variant="primary" size="small" icon={AddIcon} aria-label="Add" />
      <FAB variant="primary" size="medium" icon={AddIcon} aria-label="Add" />
      <FAB variant="primary" size="large" icon={AddIcon} aria-label="Add" />
    </div>
  ),
};

export const ExtendedVariants: Story = {
  render: (args) => (
    <div className="flex flex-row gap-4 items-end">
      <FAB variant="surface" size="medium" icon={AddIcon} label="Surface" aria-label="Surface" />
      <FAB variant="primary" size="medium" icon={AddIcon} label="Primary" aria-label="Primary" />
      <FAB variant="secondary" size="medium" icon={AddIcon} label="Secondary" aria-label="Secondary" />
      <FAB variant="tertiary" size="medium" icon={AddIcon} label="Tertiary" aria-label="Tertiary" />
    </div>
  ),
};

export const DisabledStates: Story = {
  render: (args) => (
    <div className="flex flex-row gap-4 items-end">
      <FAB variant="primary" size="medium" icon={AddIcon} disabled aria-label="Add" />
      <FAB variant="secondary" size="medium" icon={AddIcon} disabled aria-label="Add" />
      <FAB variant="tertiary" size="medium" icon={AddIcon} disabled aria-label="Add" />
      <FAB variant="primary" size="large" icon={AddIcon} disabled aria-label="Add" />
      <FAB variant="primary" size="small" icon={AddIcon} disabled aria-label="Add" />
      <FAB variant="primary" size="medium" icon={AddIcon} label="Disabled" disabled aria-label="Disabled" />
    </div>
  ),
};
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { IconButton, IconButtonProps } from './IconButton';

// Simple placeholder SVG icon
const StarIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const HeartIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} aria-hidden="true">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    icon: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

// --- Standard Variant ---
export const Standard: Story = {
  args: {
    icon: StarIcon,
    'aria-label': 'Favorite',
    variant: 'standard',
  },
};

export const StandardToggle: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return (
      <IconButton
        {...args}
        toggle
        selected={selected}
        onClick={() => setSelected((s) => !s)}
      />
    );
  },
  args: {
    icon: StarIcon,
    'aria-label': 'Favorite',
    variant: 'standard',
  },
};

export const StandardDisabled: Story = {
  args: {
    icon: StarIcon,
    'aria-label': 'Favorite',
    variant: 'standard',
    disabled: true,
  },
};

// --- Filled Variant ---
export const Filled: Story = {
  args: {
    icon: HeartIcon,
    'aria-label': 'Like',
    variant: 'filled',
  },
};

export const FilledToggle: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return (
      <IconButton
        {...args}
        toggle
        selected={selected}
        onClick={() => setSelected((s) => !s)}
      />
    );
  },
  args: {
    icon: HeartIcon,
    'aria-label': 'Like',
    variant: 'filled',
  },
};

export const FilledDisabled: Story = {
  args: {
    icon: HeartIcon,
    'aria-label': 'Like',
    variant: 'filled',
    disabled: true,
  },
};

// --- Tonal Variant ---
export const Tonal: Story = {
  args: {
    icon: StarIcon,
    'aria-label': 'Tonal',
    variant: 'tonal',
  },
};

export const TonalToggle: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return (
      <IconButton
        {...args}
        toggle
        selected={selected}
        onClick={() => setSelected((s) => !s)}
      />
    );
  },
  args: {
    icon: StarIcon,
    'aria-label': 'Tonal',
    variant: 'tonal',
  },
};

export const TonalDisabled: Story = {
  args: {
    icon: StarIcon,
    'aria-label': 'Tonal',
    variant: 'tonal',
    disabled: true,
  },
};

// --- Outlined Variant ---
export const Outlined: Story = {
  args: {
    icon: HeartIcon,
    'aria-label': 'Outlined',
    variant: 'outlined',
  },
};

export const OutlinedToggle: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return (
      <IconButton
        {...args}
        toggle
        selected={selected}
        onClick={() => setSelected((s) => !s)}
      />
    );
  },
  args: {
    icon: HeartIcon,
    'aria-label': 'Outlined',
    variant: 'outlined',
  },
};

export const OutlinedDisabled: Story = {
  args: {
    icon: HeartIcon,
    'aria-label': 'Outlined',
    variant: 'outlined',
    disabled: true,
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { MdFavorite, MdSend } from 'react-icons/md';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'text', 'elevated', 'tonal'],
    },
    disabled: { control: 'boolean' },
    icon: { control: false },
    trailingIcon: { control: false },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'filled',
    disabled: false,
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#121212' },
      ],
    },
  },
};
export default meta;

type Story = StoryObj<ButtonProps>;

// --- Variant Stories ---

export const Filled: Story = {
  args: { variant: 'filled', children: 'Filled' },
};

export const Outlined: Story = {
  args: { variant: 'outlined', children: 'Outlined' },
};

export const Text: Story = {
  args: { variant: 'text', children: 'Text' },
};

export const Elevated: Story = {
  args: { variant: 'elevated', children: 'Elevated' },
};

export const Tonal: Story = {
  args: { variant: 'tonal', children: 'Tonal' },
};

// --- State Stories ---

export const FilledDisabled: Story = {
  args: { variant: 'filled', children: 'Disabled', disabled: true },
};

export const OutlinedHover: Story = {
  args: { variant: 'outlined', children: 'Hover (see controls)' },
  parameters: {
    pseudo: { hover: true },
  },
};

export const TextActive: Story = {
  args: { variant: 'text', children: 'Active (see controls)' },
  parameters: {
    pseudo: { active: true },
  },
};

// --- Icon Stories ---

export const WithLeadingIcon: Story = {
  args: {
    variant: 'filled',
    children: 'Favorite',
    icon: <MdFavorite aria-label="Favorite" />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    variant: 'outlined',
    children: 'Send',
    trailingIcon: <MdSend aria-label="Send" />,
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'filled',
    icon: <MdFavorite aria-label="Favorite" />,
    'aria-label': 'Favorite',
    children: undefined,
  },
};

// --- Dark Mode Stories ---

export const FilledDark: Story = {
  args: { variant: 'filled', children: 'Filled (Dark)' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const OutlinedDark: Story = {
  args: { variant: 'outlined', children: 'Outlined (Dark)' },
  parameters: { backgrounds: { default: 'dark' } },
};
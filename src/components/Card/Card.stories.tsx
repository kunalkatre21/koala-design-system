import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['elevated', 'filled', 'outlined'],
    },
    interactive: {
      control: { type: 'boolean' },
    },
  },
  args: {
    children: (
      <div className="flex flex-col gap-4 p-6">
        <div className="text-lg font-medium">Card Title</div>
        <div className="text-sm text-on-surface-variant">
          This is a Material 3 Card. You can put any content here.
        </div>
        <Button variant="filled">Action</Button>
      </div>
    ),
    interactive: false,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

/**
 * To test hover/focus states, use the "Interactions" panel in Storybook or hover/focus the card in the preview.
 * Stories are compatible with both light and dark modes via Tailwind M3 tokens.
 */
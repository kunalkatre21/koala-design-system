import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { MdFavorite, MdSend, MdCheck, MdClose } from 'react-icons/md';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'text', 'elevated', 'tonal'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    icon: { control: false },
    trailingIcon: { control: false },
    iconAriaLabel: { control: 'text' },
    trailingIconAriaLabel: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'filled',
    size: 'medium',
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

// --- Sizing Stories ---
export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} size="small">Small</Button>
      <Button {...args} size="medium">Medium</Button>
      <Button {...args} size="large">Large</Button>
    </div>
  ),
  args: { variant: 'filled' },
};

// --- Variant + State Stories ---
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {['filled', 'outlined', 'text', 'elevated', 'tonal'].map((variant) => (
        <div key={variant} className="flex gap-4 items-center">
          <Button {...args} variant={variant as ButtonProps['variant']}>Default</Button>
          <Button {...args} variant={variant as ButtonProps['variant']} disabled>Disabled</Button>
        </div>
      ))}
    </div>
  ),
  args: { size: 'medium' },
};

export const InteractiveStates: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {['filled', 'outlined', 'text', 'elevated', 'tonal'].map((variant) => (
        <div key={variant} className="flex gap-4 items-center">
          <Button {...args} variant={variant as ButtonProps['variant']} className="storybook-pseudo-hover">Hover</Button>
          <Button {...args} variant={variant as ButtonProps['variant']} className="storybook-pseudo-active">Active</Button>
          <Button {...args} variant={variant as ButtonProps['variant']} className="storybook-pseudo-focus">Focus</Button>
        </div>
      ))}
    </div>
  ),
  parameters: {
    pseudo: { hover: true, active: true, focus: true },
  },
  args: { size: 'medium', children: 'State' },
};

// --- Icon Stories ---
export const LeadingIcon: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} icon={<MdFavorite />} iconAriaLabel="Favorite">Favorite</Button>
      <Button {...args} icon={<MdCheck />} iconAriaLabel="Check">Check</Button>
    </div>
  ),
  args: { variant: 'filled', size: 'medium' },
};

export const TrailingIcon: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} trailingIcon={<MdSend />} trailingIconAriaLabel="Send">Send</Button>
      <Button {...args} trailingIcon={<MdClose />} trailingIconAriaLabel="Close">Close</Button>
    </div>
  ),
  args: { variant: 'outlined', size: 'medium' },
};

export const BothIcons: Story = {
  render: (args) => (
    <Button
      {...args}
      icon={<MdFavorite />}
      iconAriaLabel="Favorite"
      trailingIcon={<MdSend />}
      trailingIconAriaLabel="Send"
    >
      Favorite & Send
    </Button>
  ),
  args: { variant: 'tonal', size: 'large' },
};

export const IconOnly: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} icon={<MdFavorite />} iconAriaLabel="Favorite" />
      <Button {...args} icon={<MdSend />} iconAriaLabel="Send" />
      <Button {...args} icon={<MdCheck />} iconAriaLabel="Check" size="small" />
      <Button {...args} icon={<MdClose />} iconAriaLabel="Close" size="large" />
    </div>
  ),
  args: { variant: 'filled', size: 'medium', children: undefined },
};

// --- Edge Cases ---
export const LongText: Story = {
  args: {
    variant: 'outlined',
    size: 'large',
    children: 'This is a very long button label to test overflow and padding',
  },
};

export const NoText: Story = {
  args: {
    variant: 'text',
    size: 'medium',
    children: '',
  },
};

export const DisabledStates: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} disabled>Disabled</Button>
      <Button {...args} icon={<MdFavorite />} iconAriaLabel="Favorite" disabled />
      <Button {...args} trailingIcon={<MdSend />} trailingIconAriaLabel="Send" disabled />
      <Button {...args} icon={<MdCheck />} iconAriaLabel="Check" size="small" disabled />
    </div>
  ),
  args: { variant: 'filled', size: 'medium' },
};

// --- Dark Mode Stories ---
export const AllVariantsDark: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {['filled', 'outlined', 'text', 'elevated', 'tonal'].map((variant) => (
        <div key={variant} className="flex gap-4 items-center">
          <Button {...args} variant={variant as ButtonProps['variant']}>Default</Button>
          <Button {...args} variant={variant as ButtonProps['variant']} disabled>Disabled</Button>
        </div>
      ))}
    </div>
  ),
  parameters: { backgrounds: { default: 'dark' } },
  args: { size: 'medium' },
};
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
  parameters: {
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#fff' },
        { name: 'dark', value: '#121212' },
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

// Controlled wrapper for interactive stories
const ControlledCheckbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(props.checked ?? false);
  return (
    <Checkbox
      {...props}
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  );
};

export const Unchecked: Story = {
  render: () => <ControlledCheckbox label="Unchecked" checked={false} />,
};

export const Checked: Story = {
  render: () => <ControlledCheckbox label="Checked" checked={true} />,
};

export const Indeterminate: Story = {
  render: () => <Checkbox label="Indeterminate" indeterminate checked={false} />,
};

export const DisabledUnchecked: Story = {
  render: () => <Checkbox label="Disabled Unchecked" disabled checked={false} />,
};

export const DisabledChecked: Story = {
  render: () => <Checkbox label="Disabled Checked" disabled checked />,
};

export const DisabledIndeterminate: Story = {
  render: () => <Checkbox label="Disabled Indeterminate" disabled indeterminate checked={false} />,
};

export const WithoutLabel: Story = {
  render: () => <ControlledCheckbox checked={false} />,
};

export const WithLabel: Story = {
  render: () => <ControlledCheckbox label="With label" checked={false} />,
};

// Story to demonstrate hover/focus using Storybook's play function
export const Focused: Story = {
  render: () => <ControlledCheckbox label="Focus me" checked={false} />,
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input[type="checkbox"]') as HTMLElement;
    if (input) input.focus();
  },
};

export const DarkMode: Story = {
  parameters: { backgrounds: { default: 'dark' } },
  render: () => <ControlledCheckbox label="Dark mode" checked={false} />,
};
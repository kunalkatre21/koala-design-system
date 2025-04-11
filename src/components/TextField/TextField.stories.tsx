import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField, TextFieldProps } from './TextField';
import { MdEmail, MdVisibility, MdSearch } from 'react-icons/md';

const meta: Meta<TextFieldProps> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#181a20' },
      ],
    },
  },
  argTypes: {
    value: { control: false },
    onChange: { control: false },
  },
};
export default meta;

type Story = StoryObj<TextFieldProps>;

const Template = (args: TextFieldProps) => {
  const [value, setValue] = useState(args.value ?? '');
  return (
    <TextField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const Filled: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Email',
    variant: 'filled',
    placeholder: 'Enter your email',
  },
};

export const Outlined: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Search',
    variant: 'outlined',
    placeholder: 'Search...',
  },
};

export const Default: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Name',
    variant: 'filled',
    placeholder: 'Enter your name',
  },
};

export const Focused: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Focused',
    variant: 'outlined',
    placeholder: 'Focus me',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input');
    if (input) input.focus();
  },
};

export const Disabled: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Disabled',
    variant: 'filled',
    disabled: true,
    value: 'Disabled value',
    placeholder: 'Disabled',
  },
};

export const Error: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Username',
    variant: 'outlined',
    errorText: 'Username is required',
    value: '',
    placeholder: 'Enter username',
  },
};

export const WithLeadingIcon: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Email',
    variant: 'filled',
    leadingIcon: <MdEmail size={20} />,
    placeholder: 'Enter your email',
  },
};

export const WithTrailingIcon: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Password',
    variant: 'outlined',
    trailingIcon: <MdVisibility size={20} />,
    placeholder: 'Enter your password',
    type: 'password',
  },
};

export const WithBothIcons: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Search',
    variant: 'filled',
    leadingIcon: <MdSearch size={20} />,
    trailingIcon: <MdVisibility size={20} />,
    placeholder: 'Search...',
  },
};

export const WithHelperText: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Email',
    variant: 'outlined',
    helperText: 'We\'ll never share your email.',
    placeholder: 'Enter your email',
  },
};

export const WithErrorText: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Password',
    variant: 'filled',
    errorText: 'Password is too short',
    placeholder: 'Enter your password',
    value: '',
  },
};

export const WithCharCounter: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Bio',
    variant: 'outlined',
    maxLength: 40,
    showCharCounter: true,
    placeholder: 'Tell us about yourself',
  },
};
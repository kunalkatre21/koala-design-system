import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton, RadioButtonProps } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Unchecked',
    name: 'example1',
    onChange: () => {},
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked',
    name: 'example1',
    onChange: () => {},
  },
};

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    label: 'Disabled Unchecked',
    name: 'example2',
    disabled: true,
    onChange: () => {},
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    label: 'Disabled Checked',
    name: 'example2',
    disabled: true,
    onChange: () => {},
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
    name: 'example3',
    onChange: () => {},
  },
};

export const Group: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('option1');
    return (
      <div className="flex flex-col gap-4">
        <RadioButton
          {...args}
          label="Option 1"
          value="option1"
          name="group1"
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
        />
        <RadioButton
          {...args}
          label="Option 2"
          value="option2"
          name="group1"
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
        />
        <RadioButton
          {...args}
          label="Option 3 (Disabled)"
          value="option3"
          name="group1"
          checked={selected === 'option3'}
          disabled
          onChange={() => setSelected('option3')}
        />
      </div>
    );
  },
  args: {},
};
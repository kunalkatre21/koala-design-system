import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchProps } from './Switch';
import { MdCheck } from 'react-icons/md';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
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

type Story = StoryObj<typeof Switch>;

const ControlledSwitch = (props: SwitchProps) => {
  const [checked, setChecked] = useState(props.checked ?? false);
  return (
    <Switch
      {...props}
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  );
};

export const Unchecked: Story = {
  render: () => <ControlledSwitch label="Switch label" checked={false} />,
  name: 'Unchecked',
};

export const Checked: Story = {
  render: () => <ControlledSwitch label="Switch label" checked={true} />,
  name: 'Checked',
};

export const DisabledUnchecked: Story = {
  render: () => (
    <Switch label="Switch label" checked={false} disabled />
  ),
  name: 'Disabled Unchecked',
};

export const DisabledChecked: Story = {
  render: () => (
    <Switch label="Switch label" checked={true} disabled />
  ),
  name: 'Disabled Checked',
};

export const WithIcon: Story = {
  render: () => (
    <ControlledSwitch
      label="With Icon"
      icon={<MdCheck />}
      checked={false}
    />
  ),
  name: 'With Icon (Unchecked)',
};

export const WithIconChecked: Story = {
  render: () => (
    <ControlledSwitch
      label="With Icon"
      icon={<MdCheck />}
      checked={true}
    />
  ),
  name: 'With Icon (Checked)',
};

export const NoLabel: Story = {
  render: () => <ControlledSwitch checked={false} />,
  name: 'No Label',
};

export const NoLabelChecked: Story = {
  render: () => <ControlledSwitch checked={true} />,
  name: 'No Label (Checked)',
};
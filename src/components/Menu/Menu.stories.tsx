import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem } from './Menu';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import MoreVertIcon from '../../assets/react.svg'; // Replace with actual icon in your project

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
};
export default meta;

const basicItems: MenuItem[] = [
  { id: 1, label: 'Profile', onClick: () => alert('Profile clicked') },
  { id: 2, label: 'Settings', onClick: () => alert('Settings clicked') },
  { id: 3, label: 'Logout', onClick: () => alert('Logout clicked') },
];

const iconItems: MenuItem[] = [
  { id: 1, label: 'Edit', icon: <span role="img" aria-label="edit">✏️</span>, onClick: () => alert('Edit clicked') },
  { id: 2, label: 'Duplicate', icon: <span role="img" aria-label="duplicate">📄</span>, onClick: () => alert('Duplicate clicked') },
  { id: 3, label: 'Delete', icon: <span role="img" aria-label="delete">🗑️</span>, onClick: () => alert('Delete clicked') },
];

const dividerItems: MenuItem[] = [
  { id: 1, label: 'Open', onClick: () => alert('Open clicked') },
  { id: 'divider-1', isDivider: true },
  { id: 2, label: 'Save', onClick: () => alert('Save clicked') },
  { id: 'divider-2', isDivider: true },
  { id: 3, label: 'Close', onClick: () => alert('Close clicked') },
];

const disabledItems: MenuItem[] = [
  { id: 1, label: 'Active Item', onClick: () => alert('Active clicked') },
  { id: 2, label: 'Disabled Item', disabled: true, onClick: () => alert('Should not fire') },
  { id: 3, label: 'Another Active', onClick: () => alert('Another active clicked') },
];

type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  args: {
    trigger: <Button>Open Menu</Button>,
    items: basicItems,
  },
};

export const WithIconButton: Story = {
  args: {
    trigger: (
      <IconButton aria-label="Open menu" icon={<MoreVertIcon />} />
    ),
    items: basicItems,
  },
};

export const WithIcons: Story = {
  args: {
    trigger: <Button>Menu with Icons</Button>,
    items: iconItems,
  },
};

export const WithDividers: Story = {
  args: {
    trigger: <Button>Menu with Dividers</Button>,
    items: dividerItems,
  },
};

export const WithDisabledItems: Story = {
  args: {
    trigger: <Button>Menu with Disabled</Button>,
    items: disabledItems,
  },
};
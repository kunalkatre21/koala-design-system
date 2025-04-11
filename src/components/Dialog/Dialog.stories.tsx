import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import { Button } from '../Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Basic Dialog"
        >
          This is a simple dialog with a title and content.
        </Dialog>
      </>
    );
  },
};

export const WithIcon: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog with Icon</Button>
        <Dialog
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Dialog with Icon"
          icon={<span role="img" aria-label="info">ℹ️</span>}
        >
          This dialog includes an icon above the title.
        </Dialog>
      </>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog with Actions</Button>
        <Dialog
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Dialog with Actions"
          actions={
            <>
              <Button variant="text" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          This dialog has action buttons in the footer.
        </Dialog>
      </>
    );
  },
};

export const ScrollableContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Scrollable Dialog</Button>
        <Dialog
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Scrollable Dialog"
        >
          <div style={{ minHeight: 300 }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>
                This is line {i + 1} of scrollable content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            ))}
          </div>
        </Dialog>
      </>
    );
  },
};
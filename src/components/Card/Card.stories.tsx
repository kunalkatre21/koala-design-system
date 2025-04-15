import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';

// --- Storybook Meta ---
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
    isSelected: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'elevated',
    interactive: false,
    isSelected: false,
    isLoading: false,
    disabled: false,
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

// --- 1. Basic Content Card ---
export const BasicContent: Story = {
  args: {
    children: (
      <>
        <Card.Header title="Basic Card" />
        <Card.Content>
          This is a simple card with a title and content. Use for general information.
        </Card.Content>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic card with header and content. No actions or media.',
      },
    },
  },
};

// --- 2. Article Preview Card ---
export const ArticlePreview: Story = {
  args: {
    children: (
      <>
        <Card.Media
          src="https://source.unsplash.com/400x200/?nature,water"
          alt="Nature"
          position="top"
        />
        <Card.Header
          title="Exploring the Waterfalls"
          subtitle="By Jane Doe · 5 min read"
        />
        <Card.Content>
          Discover the most beautiful waterfalls in the world and tips for your next adventure.
        </Card.Content>
        <Card.Actions>
          <Button variant="text">Read More</Button>
        </Card.Actions>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'A card variant for article/blog preview with media, header, content, and action.',
      },
    },
  },
};

// --- 2a. Article Preview (No Image, Placeholder) ---
export const ArticlePreview_Placeholder: Story = {
  args: {
    children: (
      <>
        <Card.Media
          alt="No image"
          position="top"
        />
        <Card.Header
          title="Exploring the Waterfalls"
          subtitle="By Jane Doe · 5 min read"
        />
        <Card.Content>
          Discover the most beautiful waterfalls in the world and tips for your next adventure.
        </Card.Content>
        <Card.Actions>
          <Button variant="text">Read More</Button>
        </Card.Actions>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Article preview card with no image src, showing the placeholder.',
      },
    },
  },
};

// --- 3a. Product Card (No Image, Placeholder) ---
export const Product_Placeholder: Story = {
  args: {
    interactive: true,
    children: (
      <>
        <Card.Media
          alt="No image"
          position="top"
        />
        <Card.Header
          title="Wireless Headphones"
          subtitle="Noise Cancelling"
          action={<span className="text-primary font-semibold">$199</span>}
        />
        <Card.Content>
          Experience immersive sound with long battery life and comfort fit.
        </Card.Content>
        <Card.Actions>
          <Button variant="text">Buy Now</Button>
        </Card.Actions>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Product card with no image src, showing the placeholder.',
      },
    },
  },
};



// --- 4. User Profile Card ---
export const UserProfile: Story = {
  args: {
    children: (
      <>
        <Card.Header
          avatar={
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
          }
          title="John Smith"
          subtitle="Product Designer"
          action={<Button variant="text">Follow</Button>}
        />
        <Card.Content>
          Passionate about user experience, design systems, and accessibility.
        </Card.Content>
        <Card.Metadata>
          Last active: 2 hours ago
        </Card.Metadata>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'A user profile card with avatar, title, subtitle, action, and metadata.',
      },
    },
  },
};

// --- 5. Actionable Card ---
export const Actionable: Story = {
  args: {
    interactive: true,
    children: (
      <>
        <Card.Header
          title="Actionable Card"
          subtitle="Click or tap to activate"
        />
        <Card.Content>
          This card is interactive and responds to pointer and keyboard events.
        </Card.Content>
        <Card.Actions>
          <Button variant="filled">Primary Action</Button>
        </Card.Actions>
      </>
    ),
    onClick: () => { alert('Card activated!'); },
  },
  parameters: {
    docs: {
      description: {
        story: 'An interactive card with actions and feedback for pointer/keyboard.',
      },
    },
  },
};

// --- 6. Data/Metric Card ---
export const DataMetric: Story = {
  args: {
    children: (
      <>
        <Card.Header
          title="Total Sales"
          action={<span className="text-2xl font-bold text-primary">$12,340</span>}
        />
        <Card.Content>
          <div className="text-sm text-on-surface-variant">+8% from last week</div>
        </Card.Content>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'A card for displaying a key metric or data point.',
      },
    },
  },
};

// --- 7. Multi-Action Card ---
export const MultiAction: Story = {
  args: {
    children: (
      <>
        <Card.Header title="Multi-Action Card" />
        <Card.Content>
          Choose an action below. Cards can support multiple actions.
        </Card.Content>
        <Card.Actions alignment="end">
          <Button variant="text">Dismiss</Button>
          <Button variant="filled">Accept</Button>
        </Card.Actions>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'A card with multiple actions aligned to the end.',
      },
    },
  },
};

// --- 8. Selectable/Stateful Card ---
export const SelectableStateful: Story = {
  args: {
    interactive: true,
    isSelected: true,
    children: (
      <>
        <Card.Header
          title="Selectable Card"
          subtitle="Selected state is visually indicated"
          action={
            <span
              className="inline-block w-5 h-5 rounded-full border-2 border-primary bg-primary"
              aria-label="Selected"
            />
          }
        />
        <Card.Content>
          This card is in a selected state. Use for selection patterns.
        </Card.Content>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'A card that visually indicates selection. Use isSelected prop to control.',
      },
    },
  },
};
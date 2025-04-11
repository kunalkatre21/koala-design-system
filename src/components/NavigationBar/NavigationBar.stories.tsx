import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "./NavigationBar";
import { NavigationBarItem } from "./NavigationBarItem";

// Placeholder icons (simple SVGs)
const HomeIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12L12 4l9 8" />
    <path d="M9 21V9h6v12" />
  </svg>
);
const SearchIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <line x1="16.65" y1="16.65" x2="21" y2="21" />
  </svg>
);
const FavoriteIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
  </svg>
);
const ProfileIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
  </svg>
);
const SettingsIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c.2.63.77 1.09 1.51 1.09H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof NavigationBar>;

// 1. Basic navigation bar with 5 items (icons + labels, selection state)
export const Basic: Story = {
  render: () => {
    const [selected, setSelected] = useState(0);
    const items = [
      { icon: HomeIcon, label: "Home" },
      { icon: SearchIcon, label: "Search" },
      { icon: FavoriteIcon, label: "Favorites" },
      { icon: ProfileIcon, label: "Profile" },
      { icon: SettingsIcon, label: "Settings" },
    ];
    return (
      <div className="w-full bg-background p-4">
        <NavigationBar>
          {items.map((item, i) => (
            <NavigationBarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              selected={selected === i}
              onClick={() => setSelected(i)}
              aria-label={item.label}
            />
          ))}
        </NavigationBar>
      </div>
    );
  },
};

// 2. Navigation bar with only icons
export const IconsOnly: Story = {
  render: () => {
    const [selected, setSelected] = useState(1);
    const items = [HomeIcon, SearchIcon, FavoriteIcon, ProfileIcon];
    return (
      <div className="w-full bg-background p-4">
        <NavigationBar>
          {items.map((icon, i) => (
            <NavigationBarItem
              key={i}
              icon={icon}
              selected={selected === i}
              onClick={() => setSelected(i)}
              aria-label={`Item ${i + 1}`}
            />
          ))}
        </NavigationBar>
      </div>
    );
  },
};

// 3. Navigation bar with a disabled item
export const WithDisabled: Story = {
  render: () => {
    const [selected, setSelected] = useState(0);
    const items = [
      { icon: HomeIcon, label: "Home" },
      { icon: SearchIcon, label: "Search", disabled: true },
      { icon: FavoriteIcon, label: "Favorites" },
    ];
    return (
      <div className="w-full bg-background p-4">
        <NavigationBar>
          {items.map((item, i) => (
            <NavigationBarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              selected={selected === i}
              onClick={() => setSelected(i)}
              disabled={item.disabled}
              aria-label={item.label}
            />
          ))}
        </NavigationBar>
      </div>
    );
  },
};
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TopAppBar, TopAppBarProps } from "./TopAppBar";
import { IconButton } from "../IconButton";

// Simple placeholder SVG icon
const MenuIcon = (
  <svg width="24" height="24" fill="none" aria-hidden="true">
    <rect x="4" y="7" width="16" height="2" rx="1" fill="currentColor" />
    <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
    <rect x="4" y="15" width="16" height="2" rx="1" fill="currentColor" />
  </svg>
);

const MoreVertIcon = (
  <svg width="24" height="24" fill="none" aria-hidden="true">
    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

const SearchIcon = (
  <svg width="24" height="24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M16 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const meta: Meta<TopAppBarProps> = {
  title: "Components/TopAppBar",
  component: TopAppBar,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "#fff" },
        { name: "dark", value: "#121212" }
      ]
    }
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<TopAppBarProps>;

export const Small: Story = {
  args: {
    variant: "small",
    title: "Small App Bar",
    navigationIcon: (
      <IconButton aria-label="Open menu" icon={MenuIcon} />
    ),
    actions: [
      <IconButton aria-label="Search" icon={SearchIcon} />,
      <IconButton aria-label="More" icon={MoreVertIcon} />
    ]
  }
};

export const CenterAligned: Story = {
  args: {
    variant: "center",
    title: "Center Aligned",
    navigationIcon: (
      <IconButton aria-label="Open menu" icon={MenuIcon} />
    ),
    actions: [
      <IconButton aria-label="Search" icon={SearchIcon} />
    ]
  }
};

export const Medium: Story = {
  args: {
    variant: "medium",
    title: "Medium App Bar",
    navigationIcon: (
      <IconButton aria-label="Open menu" icon={MenuIcon} />
    ),
    actions: [
      <IconButton aria-label="Search" icon={SearchIcon} />,
      <IconButton aria-label="More" icon={MoreVertIcon} />
    ]
  }
};

export const MediumScrolled: Story = {
  args: {
    variant: "medium",
    title: "Medium Scrolled",
    scrolled: true,
    navigationIcon: (
      <IconButton aria-label="Open menu" icon={MenuIcon} />
    ),
    actions: [
      <IconButton aria-label="Search" icon={SearchIcon} />
    ]
  }
};

export const Large: Story = {
  args: {
    variant: "large",
    title: "Large App Bar",
    navigationIcon: (
      <IconButton aria-label="Open menu" icon={MenuIcon} />
    ),
    actions: [
      <IconButton aria-label="Search" icon={SearchIcon} />,
      <IconButton aria-label="More" icon={MoreVertIcon} />
    ]
  }
};

export const LargeScrolled: Story = {
  args: {
    variant: "large",
    title: "Large Scrolled",
    scrolled: true,
    navigationIcon: (
      <IconButton aria-label="Open menu" icon={MenuIcon} />
    ),
    actions: [
      <IconButton aria-label="Search" icon={SearchIcon} />
    ]
  }
};

export const NoNavigationIcon: Story = {
  args: {
    variant: "small",
    title: "No Navigation Icon",
    actions: [
      <IconButton aria-label="Search" icon={SearchIcon} />
    ]
  }
};

export const NoActions: Story = {
  args: {
    variant: "center",
    title: "No Actions",
    navigationIcon: (
      <IconButton aria-label="Open menu" icon={MenuIcon} />
    )
  }
};

export const OnlyTitle: Story = {
  args: {
    variant: "small",
    title: "Only Title"
  }
};
import React from 'react';
import { ThemeProvider } from '../src/context/ThemeContext';
import '../src/index.css';
import type { Preview, Decorator } from '@storybook/react'; // Import Decorator type

// Decorator to wrap stories with ThemeProvider
const ThemeDecorator: Decorator = (Story) => (
  <ThemeProvider>
    <Story /> {/* Render Story as a component */}
  </ThemeProvider>
);

// Decorator to handle dark mode class based on Storybook global theme
const DarkModeDecorator: Decorator = (Story, context) => {
  const isDark = context.globals.theme === 'dark';

  // Use useEffect for side effects like DOM manipulation
  React.useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    // Cleanup function to remove the class when the story changes or unmounts
    return () => {
      body.classList.remove('dark');
    };
  }, [isDark]); // Re-run effect if isDark changes

  return <Story />; {/* Render Story as a component */}
};


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Apply decorators: ThemeProvider should wrap DarkMode logic
  decorators: [
    ThemeDecorator,
    DarkModeDecorator,
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
};

export default preview;
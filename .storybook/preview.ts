import '../src/index.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Toggle Tailwind dark class based on Storybook theme
      const isDark = context.globals.theme === 'dark';
      if (typeof document !== 'undefined') {
        document.body.classList.toggle('dark', isDark);
      }
      return Story(context);
    },
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

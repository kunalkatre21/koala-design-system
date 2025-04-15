import { useState } from 'react';
import { useTheme } from './context/ThemeContext';

function App() {
  // Theme state from context
  const { theme, setTheme, customPrimaryColor, setCustomPrimaryColor } = useTheme();

  // Dark mode state (existing)
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  );

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300 bg-primary text-onPrimary dark:bg-primary-dark dark:text-onPrimary-dark">
      <h1 className="text-headline-large font-sans mb-6">Tailwind + M3 Tokens Demo</h1>
      <p className="text-body-large mb-8">
        This box uses <span className="font-bold">primary</span> color roles,{' '}
        <span className="font-bold">headline-large</span> typography, and adapts to{' '}
        <span className="font-bold">dark mode</span>.
      </p>
      <div className="bg-red-500">Test</div>
      <button
        className="px-6 py-3 mb-8 bg-secondary text-onSecondary rounded-large shadow-level2 dark:bg-secondary-dark dark:text-onSecondary-dark dark:shadow-level2-dark font-sans text-title-medium transition-colors"
        onClick={toggleDarkMode}
        type="button"
      >
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </button>

      {/* Theme Selection UI */}
      <div className="flex items-center gap-4 mb-8 p-4 border border-outline rounded-medium bg-surface-variant text-on-surface-variant dark:bg-surface-variant-dark dark:text-on-surface-variant-dark">
        <span className="font-medium">Select Theme:</span>
        <button
          onClick={() => setTheme('theme1')}
          className={`px-3 py-1 rounded-full text-sm ${theme.name === 'Theme 1' ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface hover:bg-primary/10'}`}
        >
          Theme 1 (#215FFF)
        </button>
        <button
          onClick={() => setTheme('theme2')}
          className={`px-3 py-1 rounded-full text-sm ${theme.name === 'Theme 2' ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface hover:bg-primary/10'}`}
        >
          Theme 2 (#6B5CE0)
        </button>
        <button
          onClick={() => setTheme('custom')}
          className={`px-3 py-1 rounded-full text-sm ${theme.name === 'Custom' ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface hover:bg-primary/10'}`}
        >
          Custom
        </button>
        {theme.name === 'Custom' && (
          <div className="flex items-center gap-2">
            <label htmlFor="customColorPicker" className="text-sm">Color:</label>
            <input
              id="customColorPicker"
              type="color"
              value={customPrimaryColor}
              onChange={(e) => setCustomPrimaryColor(e.target.value)}
              className="w-8 h-8 border-none rounded cursor-pointer"
              title="Select custom primary color"
            />
            {/* Optional: Text input for color */}
            {/* <input
              type="text"
              value={customPrimaryColor}
              onChange={(e) => setCustomPrimaryColor(e.target.value)}
              className="w-20 px-2 py-1 text-sm border border-outline rounded bg-surface text-on-surface"
              placeholder="#rrggbb"
            /> */}
          </div>
        )}
      </div>

      {/* Existing Surface Card */}
      <div className="p-8 bg-surface text-onSurface rounded-medium shadow-level3 dark:bg-surface-dark dark:text-onSurface-dark dark:shadow-level3-dark">
        <div className="text-title-large mb-2">Surface Card (Current Primary: {theme.primaryColor})</div>
        <div className="text-body-medium">
          This card uses <span className="font-bold">surface</span> color roles,{' '}
          <span className="font-bold">rounded-medium</span> shape, and{' '}
          <span className="font-bold">level3</span> elevation.
          <br />
          <button className="mt-4 px-4 py-2 bg-primary text-on-primary rounded-full text-sm">
            Themed Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

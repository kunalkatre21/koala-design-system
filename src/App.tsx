import { useState } from 'react';

function App() {
  // For demo: toggle dark mode on <html>
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
      <button
        className="px-6 py-3 mb-8 bg-secondary text-onSecondary rounded-large shadow-level2 dark:bg-secondary-dark dark:text-onSecondary-dark dark:shadow-level2-dark font-sans text-title-medium transition-colors"
        onClick={toggleDarkMode}
        type="button"
      >
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </button>
      <div className="p-8 bg-surface text-onSurface rounded-medium shadow-level3 dark:bg-surface-dark dark:text-onSurface-dark dark:shadow-level3-dark">
        <div className="text-title-large mb-2">Surface Card</div>
        <div className="text-body-medium">
          This card uses <span className="font-bold">surface</span> color roles,{' '}
          <span className="font-bold">rounded-medium</span> shape, and{' '}
          <span className="font-bold">level3</span> elevation.
        </div>
      </div>
    </div>
  );
}

export default App;

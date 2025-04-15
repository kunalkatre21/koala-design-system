import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

// Define the structure for a theme
interface Theme {
  name: string;
  primaryColor: string;
}

// Define the available themes
const themes: Record<string, Theme> = {
  theme1: { name: 'Theme 1', primaryColor: '#215FFF' },
  theme2: { name: 'Theme 2', primaryColor: '#6B5CE0' },
  custom: { name: 'Custom', primaryColor: '#000000' }, // Default custom color
};

// Define the shape of the context data
interface ThemeContextProps {
  theme: Theme;
  customPrimaryColor: string;
  setTheme: (themeName: string) => void;
  setCustomPrimaryColor: (color: string) => void;
}

// Create the context with a default value (or null)
const ThemeContext = createContext<ThemeContextProps | null>(null);

// Create the provider component
// Helper function to convert hex color to space-separated RGB string
const hexToRgbString = (hex: string): string => {
  // Remove the leading # if it exists
  const hexValue = hex.startsWith('#') ? hex.slice(1) : hex;

  // Handle shorthand hex (e.g., #03F) -> #0033FF
  const fullHex = hexValue.length === 3
    ? hexValue.split('').map(char => char + char).join('')
    : hexValue;

  // Ensure we have a valid 6-digit hex code and it's a number
  if (fullHex.length !== 6 || isNaN(parseInt(fullHex, 16))) {
    console.error(`Invalid hex color format provided: ${hex}. Using fallback '0 0 0'.`);
    return '0 0 0'; // Return black as a fallback for invalid hex
  }

  // Parse hex to integers
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  // Return space-separated string
  return `${r} ${g} ${b}`;
};


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage or defaults
  const [currentThemeName, setCurrentThemeName] = useState<string>(() => {
    return localStorage.getItem('themeName') || 'theme1';
  });
  const [customColor, setCustomColor] = useState<string>(() => {
    return localStorage.getItem('customPrimaryColor') || themes.custom.primaryColor;
  });

  // Determine the active theme object
  const activeTheme = useMemo(() => {
    if (currentThemeName === 'custom') {
      return { ...themes.custom, primaryColor: customColor };
    }
    return themes[currentThemeName] || themes.theme1;
  }, [currentThemeName, customColor]);

  // Apply the primary color as a CSS variable to the root element
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', hexToRgbString(activeTheme.primaryColor));
  }, [activeTheme]);

  // Save theme changes to localStorage
  useEffect(() => {
    localStorage.setItem('themeName', currentThemeName);
    // Only save custom color if the custom theme is active,
    // otherwise, we might overwrite a previously saved custom color
    // when switching back to a predefined theme.
    if (currentThemeName === 'custom') {
        localStorage.setItem('customPrimaryColor', customColor);
    }
    // We could also remove the custom color item when not on custom theme:
    // else {
    //  localStorage.removeItem('customPrimaryColor');
    // }
  }, [currentThemeName, customColor]);


  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentThemeName(themeName);
      // No need to explicitly save here, the useEffect above handles it.
    }
  };

  const setCustomPrimaryColor = (color: string) => {
    setCustomColor(color);
    // Automatically switch to custom theme when a custom color is set
    if (currentThemeName !== 'custom') {
      setCurrentThemeName('custom');
    }
    // No need to explicitly save here, the useEffect above handles it.
  };

  const contextValue = useMemo(() => ({
    theme: activeTheme,
    customPrimaryColor: customColor,
    setTheme,
    setCustomPrimaryColor,
  }), [activeTheme, customColor]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook for easy context consumption
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
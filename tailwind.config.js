/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    colors: {
      // Material 3 Color Roles (light mode)
      'primary': '#215FFF',
      'on-primary': '#FFFFFF',
      'primary-container': '#D6E2FF',
      'on-primary-container': '#001A41',
      'secondary': '#5B6B7B',
      'on-secondary': '#FFFFFF',
      'secondary-container': '#DFE3EB',
      'on-secondary-container': '#171C22',
      'tertiary': '#7B5B9B',
      'on-tertiary': '#FFFFFF',
      'tertiary-container': '#F2DAFF',
      'on-tertiary-container': '#271141',
      'error': '#BA1A1A',
      'on-error': '#FFFFFF',
      'error-container': '#FFDAD6',
      'on-error-container': '#410002',
      'background': '#F8FAFF',
      'on-background': '#191C20',
      'surface': '#F8FAFF',
      'on-surface': '#191C20',
      'surface-variant': '#E1E2EC',
      'on-surface-variant': '#44474F',
      'outline': '#757780',
      'inverse-surface': '#2E3136',
      'inverse-on-surface': '#F1F1F6',
      // Dark mode overrides (using Tailwind's dark: variant)
      // These will be referenced in your code using the dark: prefix
      // e.g. className="bg-primary dark:bg-primary-dark"
      'primary-dark': '#AFC6FF',
      'on-primary-dark': '#00306E',
      'primary-container-dark': '#00429B',
      'on-primary-container-dark': '#D6E2FF',
      'secondary-dark': '#BBC7DB',
      'on-secondary-dark': '#273141',
      'secondary-container-dark': '#404A5A',
      'on-secondary-container-dark': '#DFE3EB',
      'tertiary-dark': '#D6BAFF',
      'on-tertiary-dark': '#3D1D5C',
      'tertiary-container-dark': '#563B74',
      'on-tertiary-container-dark': '#F2DAFF',
      'error-dark': '#FFB4AB',
      'on-error-dark': '#690005',
      'error-container-dark': '#93000A',
      'on-error-container-dark': '#FFDAD6',
      'background-dark': '#191C20',
      'on-background-dark': '#E2E2E6',
      'surface-dark': '#191C20',
      'on-surface-dark': '#E2E2E6',
      'surface-variant-dark': '#44474F',
      'on-surface-variant-dark': '#C4C6CF',
      'outline-dark': '#8E9099',
      'inverse-surface-dark': '#E2E2E6',
      'inverse-on-surface-dark': '#2E3136',
    },
    extend: {
      fontSize: {
        // M3 Type Scale
        'display-large': [
          '3.5625rem',
          { lineHeight: '4rem', letterSpacing: '-0.02em', fontWeight: '400' },
        ], // 57px
        'display-medium': [
          '2.8125rem',
          { lineHeight: '3.25rem', letterSpacing: '0', fontWeight: '400' },
        ], // 45px
        'display-small': [
          '2.25rem',
          { lineHeight: '2.75rem', letterSpacing: '0', fontWeight: '400' },
        ], // 36px
        'headline-large': ['2rem', { lineHeight: '2.5rem', letterSpacing: '0', fontWeight: '400' }], // 32px
        'headline-medium': [
          '1.75rem',
          { lineHeight: '2.25rem', letterSpacing: '0', fontWeight: '400' },
        ], // 28px
        'headline-small': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0', fontWeight: '400' }], // 24px
        'title-large': [
          '1.375rem',
          { lineHeight: '1.75rem', letterSpacing: '0', fontWeight: '400' },
        ], // 22px
        'title-medium': [
          '1rem',
          { lineHeight: '1.5rem', letterSpacing: '0.01em', fontWeight: '500' },
        ], // 16px
        'title-small': [
          '0.875rem',
          { lineHeight: '1.25rem', letterSpacing: '0.01em', fontWeight: '500' },
        ], // 14px
        'label-large': [
          '0.875rem',
          { lineHeight: '1.25rem', letterSpacing: '0.01em', fontWeight: '500' },
        ], // 14px
        'label-medium': [
          '0.75rem',
          { lineHeight: '1rem', letterSpacing: '0.01em', fontWeight: '500' },
        ], // 12px
        'label-small': [
          '0.6875rem',
          { lineHeight: '1rem', letterSpacing: '0.01em', fontWeight: '500' },
        ], // 11px
        'body-large': [
          '1rem',
          { lineHeight: '1.5rem', letterSpacing: '0.01em', fontWeight: '400' },
        ], // 16px
        'body-medium': [
          '0.875rem',
          { lineHeight: '1.25rem', letterSpacing: '0.01em', fontWeight: '400' },
        ], // 14px
        'body-small': [
          '0.75rem',
          { lineHeight: '1rem', letterSpacing: '0.01em', fontWeight: '400' },
        ], // 12px
      },
      borderRadius: {
        // M3 Shape Scale
        none: '0px',
        small: '4px',
        medium: '12px',
        large: '28px',
        full: '9999px',
      },
      boxShadow: {
        // M3 Elevation (light mode)
        level0: 'none',
        level1: '0px 1px 2px 0px rgba(0,0,0,0.30), 0px 1.5px 5px 0px rgba(0,0,0,0.15)',
        level2: '0px 3px 6px 0px rgba(0,0,0,0.30), 0px 1.5px 10px 0px rgba(0,0,0,0.10)',
        level3: '0px 6px 10px 0px rgba(0,0,0,0.30), 0px 1.5px 18px 0px rgba(0,0,0,0.10)',
        level4: '0px 8px 12px 0px rgba(0,0,0,0.30), 0px 2px 24px 0px rgba(0,0,0,0.10)',
        level5: '0px 12px 17px 0px rgba(0,0,0,0.30), 0px 2.5px 30px 0px rgba(0,0,0,0.10)',
        // M3 Elevation (dark mode) - use with dark: prefix
        'level0-dark': 'none',
        'level1-dark': '0px 1px 2px 0px rgba(0,0,0,0.60), 0px 1.5px 5px 0px rgba(0,0,0,0.30)',
        'level2-dark': '0px 3px 6px 0px rgba(0,0,0,0.60), 0px 1.5px 10px 0px rgba(0,0,0,0.20)',
        'level3-dark': '0px 6px 10px 0px rgba(0,0,0,0.60), 0px 1.5px 18px 0px rgba(0,0,0,0.20)',
        'level4-dark': '0px 8px 12px 0px rgba(0,0,0,0.60), 0px 2px 24px 0px rgba(0,0,0,0.20)',
        'level5-dark': '0px 12px 17px 0px rgba(0,0,0,0.60), 0px 2.5px 30px 0px rgba(0,0,0,0.20)',
      },
    },
  },
  plugins: [],
};

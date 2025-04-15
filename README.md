# My Design System

A modern, reusable, and accessible design system built with React, TypeScript, Vite, Storybook, and Tailwind CSS. This project provides a robust set of UI components to help you build consistent and beautiful user interfaces quickly and efficiently.

---

## Introduction

**My Design System** aims to accelerate front-end development by offering a comprehensive library of customizable, production-ready UI components. Built with best-in-class tools, it ensures consistency, accessibility, and ease of integration for React projects of any scale.

---

## Features

- **React + TypeScript:** Strongly typed, component-based architecture for reliability and scalability.
- **Tailwind CSS:** Utility-first styling for rapid UI development and easy customization.
- **Storybook Integration:** Interactive documentation and playground for all components.
- **Vite:** Fast development and build tooling.
- **Accessible:** Components follow accessibility best practices.
- **Open Source:** Community-driven and easy to contribute.


---

## Technical Details

- **Tailwind CSS:** This project uses Tailwind CSS v3.4.3 for styling.
- **Configuration:**
    - `tailwind.config.js` uses CommonJS syntax (`module.exports = { ... }`).
    - Custom theme tokens (colors, fonts, etc.) are defined directly under the `theme` key (e.g., `theme.colors`) to ensure utility classes like `bg-primary` are generated.
    - A minimal `postcss.config.cjs` file is included to explicitly configure Tailwind and Autoprefixer for Vite.

---

## Components

The `src/components/` directory includes a growing set of UI primitives and complex components, such as:

- **Button**
- **Card**
- **Checkbox**
- **Dialog**
- **FAB (Floating Action Button)**
- **IconButton**
- **Menu**
- **NavigationBar**
- **RadioButton**
- **Switch**
- **TextField**
- **TopAppBar**

Explore all components and their usage examples in Storybook.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/kunalkatre21/koala-design-system.git
cd koala-design-system
npm install
```

### Running Storybook

Storybook is the primary way to view, test, and interact with all components:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006) (default port).

---

## Visual Regression Testing

This project uses [Chromatic](https://www.chromatic.com/) for automated visual regression testing of all Storybook stories. Chromatic captures screenshots of your components and detects any visual changes over time.

### Running Visual Regression Tests Locally

To run a visual regression test and review UI changes:

```bash
npm run chromatic
```

- This will build your Storybook and upload it to Chromatic in anonymous mode.
- After upload, a browser window will open with the results, showing any visual changes or diffs for all components.
- You can review, accept, or reject changes in the Chromatic UI.

### Key Components Covered

Visual regression tests are automatically run for all components with Storybook stories, including:
- Button
- Card
- Dialog
- NavigationBar

### CI Integration (Optional)

For continuous integration, sign up at [chromatic.com](https://www.chromatic.com/), create a project, and obtain a project-token. Then update the script in `package.json`:

```
"chromatic": "npx chromatic --project-token=<your-token> --exit-once-uploaded"
```

This enables persistent build history and team review workflows.

### Interpreting Results

- **No changes:** Chromatic will report no visual differences.
- **Detected changes:** Chromatic will highlight changed areas and allow you to review diffs in the browser.
- **Failed builds:** Usually indicate Storybook build errors or network issues.

For more details, see the [Chromatic documentation](https://www.chromatic.com/docs/).

---

## Usage

To use components in your own project, install the package (replace with your actual package name):

```bash
npm install koala-design-system
```

Then import and use components:

```tsx
import { Button, Card } from 'koala-design-system';

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <Card>Content here</Card>
    </div>
  );
}
```

Refer to the Storybook documentation for detailed usage and props for each component.

---

## Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository.
2. **Create a new branch** for your feature or fix.
3. **Make your changes** and add tests/stories as needed.
4. **Commit** and **push** your branch.
5. **Open a Pull Request** describing your changes.

Please follow the code style and contribution guidelines outlined in the repository.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

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
git clone https://github.com/your-username/your-design-system-repo.git
cd your-design-system-repo
npm install
```

### Running Storybook

Storybook is the primary way to view, test, and interact with all components:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006) (default port).

---

## Usage

To use components in your own project, install the package (replace with your actual package name):

```bash
npm install your-design-system-package-name
```

Then import and use components:

```tsx
import { Button, Card } from 'your-design-system-package-name';

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

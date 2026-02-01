# Anthology Design System

A React component library built with Storybook, TypeScript, and Tailwind CSS. This design system provides a collection of reusable UI components for building modern web applications.

## Features

- 🎨 **Component Library** - Button, Badge, Input, TextArea, Checkbox, Toggle, Callout, and more
- 📖 **Storybook Documentation** - Interactive component documentation and playground
- 🎯 **TypeScript** - Full type safety and IntelliSense support
- 🎨 **Tailwind CSS** - Utility-first styling with custom design tokens
- ♿ **Accessibility** - Built with a11y best practices (includes Storybook a11y addon)
- 🧪 **Testing** - Vitest for unit testing, Storybook test-runner for interaction tests

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/khalifa707/design-systems-with-storybook.git
cd design-systems-with-storybook

# Install dependencies
npm install
```

### Development

```bash
# Start Storybook development server
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006).

### Available Scripts

| Command                   | Description                        |
| ------------------------- | ---------------------------------- |
| `npm run storybook`       | Start Storybook development server |
| `npm run build-storybook` | Build Storybook for production     |
| `npm run build`           | Build the component library        |
| `npm run lint`            | Run ESLint                         |
| `npm run format`          | Format code with Prettier          |

## Project Structure

```
src/
├── components/       # UI components
│   ├── badge/
│   ├── button/
│   ├── callout/
│   ├── checkbox/
│   ├── icon/
│   ├── input/
│   ├── task-list/
│   ├── text-area/
│   └── toggle/
├── tokens/          # Design tokens (colors, etc.)
└── index.css        # Global styles
```

## Attribution

This project is based on the [Anthology](https://github.com/stevekinney/anthology) repository from Steve Kinney's [Building Design Systems with Storybook](https://stevekinney.net/courses/storybook) course for [Frontend Masters](https://frontendmasters.com).

The original Figma designs can be found [here](https://www.figma.com/file/Qhb4PJucNK8bgvf4N65Jrm/Anthology?type=design&node-id=0%3A1&mode=design&t=Dr1OUnsNFnelFSUN-1).

## License

This project is for educational purposes. Please refer to the original course materials for licensing information.

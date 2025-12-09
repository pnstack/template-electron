# Template Electron

A modern, production-ready Electron application template built with TypeScript, React, and TailwindCSS.

## 🚀 Features

- ⚡ **Vite** - Lightning fast HMR and build tool
- ⚛️ **React 19** - Latest React with hooks
- 🔷 **TypeScript** - Type safety and better DX
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **Electron Builder** - Package and distribute your app
- 🔒 **Secure** - Context isolation and secure IPC

## 📋 Prerequisites

- Node.js 18+ and npm

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/pnstack/template-electron.git

# Navigate to the project directory
cd template-electron

# Install dependencies
npm install
```

## 💻 Development

```bash
# Start the development server
npm run dev
```

This will start the Vite dev server and launch the Electron application with hot-reload enabled.

## 🏗️ Building

```bash
# Build for production
npm run build

# Build and package for your current platform
npm run electron:build

# Build for specific platforms
npm run electron:build:win    # Windows
npm run electron:build:mac    # macOS
npm run electron:build:linux  # Linux
```

The packaged application will be in the `release` directory.

## 📁 Project Structure

```
template-electron/
├── src/
│   ├── main/           # Electron main process
│   │   └── main.ts     # Main process entry
│   ├── preload/        # Preload scripts
│   │   └── preload.ts  # Secure IPC bridge
│   └── renderer/       # React application
│       ├── App.tsx     # Main React component
│       ├── main.tsx    # React entry point
│       ├── index.css   # Tailwind directives
│       └── electron.d.ts # TypeScript definitions
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript config (renderer)
├── tsconfig.node.json  # TypeScript config (main/preload)
└── package.json        # Project dependencies
```

## 🔧 Configuration

### Vite
The Vite configuration (`vite.config.ts`) includes:
- React plugin for JSX/TSX support
- Electron plugin for main and preload scripts
- Path aliases for cleaner imports

### Electron
The main process (`src/main/main.ts`) creates the browser window and handles:
- Window creation and management
- Loading the renderer in dev/prod mode
- IPC communication with renderer

### Tailwind CSS
Configure Tailwind by editing `tailwind.config.js`. The template includes:
- Configured content paths for tree-shaking
- Ready for custom themes and plugins

## 🔒 Security

This template follows Electron security best practices:
- Context isolation enabled
- Node integration disabled
- Secure IPC via preload script
- No direct Node.js access in renderer

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this template for any project!

## 🙏 Acknowledgments

Built with:
- [Electron](https://www.electronjs.org/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

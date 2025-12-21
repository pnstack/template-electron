# Contributing to Template Electron

Thank you for your interest in contributing to Template Electron! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/template-electron.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## 🔍 Code Quality

Before submitting a pull request:

1. **Type check your code:**
   ```bash
   npx tsc --noEmit
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Test the Electron app:**
   ```bash
   npm run electron:build
   ```

## 📝 Commit Guidelines

We follow conventional commit messages:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat: add dark mode support
fix: resolve window positioning issue
docs: update installation instructions
```

## 🔄 Pull Request Process

1. Update the README.md with details of changes if applicable
2. Ensure all CI checks pass
3. Update documentation for any new features
4. Request review from maintainers

### PR Requirements

- Clear description of changes
- Reference any related issues
- All CI/CD checks must pass
- Code must be properly typed (TypeScript)

## 🧪 Testing

Currently, this template doesn't include a testing framework. When adding tests:

1. Choose an appropriate testing framework (Jest, Vitest, etc.)
2. Add tests for new features
3. Ensure existing functionality isn't broken

## 🏗️ Building

### Development Build
```bash
npm run build
```

### Platform-Specific Builds
```bash
npm run electron:build:win    # Windows
npm run electron:build:mac    # macOS
npm run electron:build:linux  # Linux
```

## 📦 Release Process

Releases are automated through GitHub Actions:

1. Update version in `package.json`
2. Create and push a tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. GitHub Actions will automatically build and create a release

## 🐛 Reporting Bugs

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Environment details (OS, Node version, etc.)

## 💡 Feature Requests

We welcome feature requests! Please:

- Check if the feature already exists
- Clearly describe the feature
- Explain the use case
- Consider implementation details

## 📞 Getting Help

- Open an issue for bugs or questions
- Check existing issues before creating new ones
- Be respectful and constructive

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

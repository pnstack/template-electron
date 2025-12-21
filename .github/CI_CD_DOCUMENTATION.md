# CI/CD Documentation

## Overview

This Electron template includes a comprehensive CI/CD setup using GitHub Actions. The workflows are designed to automate testing, building, and releasing across multiple platforms.

## Workflows

### 1. CI Workflow (`ci.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches
- Manual trigger via workflow dispatch

**What it does:**
- Runs on Ubuntu, Windows, and macOS
- Tests with Node.js 18.x and 20.x
- Installs dependencies with caching
- Performs TypeScript type checking
- Builds the project
- Builds the Electron application
- Uploads build artifacts

**Usage:** Automatically runs on every push/PR. No manual intervention needed.

### 2. Release Workflow (`release.yml`)

**Triggers:**
- Push of version tags (e.g., `v1.0.0`)
- Manual trigger with version input

**What it does:**
- Builds for Windows (NSIS installer)
- Builds for macOS (DMG)
- Builds for Linux (AppImage, deb)
- Creates a GitHub release
- Uploads binaries as release assets
- Generates release notes automatically

**Usage:**
```bash
# Create a new release
git tag v1.0.0
git push origin v1.0.0

# Or use manual dispatch from GitHub Actions tab
```

### 3. PR Check Workflow (`pr-check.yml`)

**Triggers:**
- Pull request opened, synchronized, or reopened

**What it does:**
- TypeScript type checking
- Build verification
- PR size warnings (alerts if PR has >1000 changes)

**Usage:** Automatically runs on PR creation/updates.

### 4. Code Quality Workflow (`quality.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches
- Weekly schedule (Mondays at 00:00 UTC)

**What it does:**
- TypeScript type checking
- Checks for console.log statements
- npm security audit
- Bundle size analysis

**Usage:** Runs automatically on schedule and with pushes/PRs.

### 5. Stale Workflow (`stale.yml`)

**Triggers:**
- Daily schedule (00:00 UTC)
- Manual trigger via workflow dispatch

**What it does:**
- Marks issues as stale after 60 days of inactivity
- Marks PRs as stale after 30 days of inactivity
- Closes stale issues/PRs after 7 additional days
- Respects exemption labels (pinned, security, etc.)

**Usage:** Runs automatically daily.

## Dependabot

**Configuration:** `.github/dependabot.yml`

**Updates:**
- npm packages: Weekly
- GitHub Actions: Weekly

**Labels:** `dependencies`, `automated`, `github-actions`

## Issue Templates

### Bug Report (`bug_report.yml`)
Structured form for reporting bugs with:
- Description
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node.js version)

### Feature Request (`feature_request.yml`)
Structured form for suggesting features with:
- Problem statement
- Proposed solution
- Alternatives considered
- Implementation complexity

## Pull Request Template

**Location:** `.github/PULL_REQUEST_TEMPLATE.md`

**Includes:**
- Description
- Type of change
- Related issues
- Changes made
- Testing checklist
- Review checklist

## Security

**Security Policy:** `SECURITY.md`

**Best Practices:**
- npm audit runs in quality workflow
- Dependabot monitors dependencies
- Security label exempts issues from stale bot

## Contributing

**Contributing Guide:** `CONTRIBUTING.md`

**Includes:**
- Development setup
- Code quality guidelines
- Commit message conventions
- PR process
- Building instructions
- Release process

## Badges

The README includes badges for:
- CI workflow status
- Release workflow status
- Code Quality workflow status
- MIT License

## Release Process

### Automated Release (Recommended)

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Commit changes
4. Create and push tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
5. GitHub Actions will automatically:
   - Build for all platforms
   - Create GitHub release
   - Upload binaries
   - Generate release notes

### Manual Release

1. Go to Actions tab on GitHub
2. Select "Release" workflow
3. Click "Run workflow"
4. Enter version (e.g., v1.0.0)
5. Click "Run workflow" button

## Local Testing

Before pushing changes, test locally:

```bash
# Install dependencies
npm ci

# Type check
npx tsc --noEmit

# Build
npm run build

# Test Electron build (will take longer)
npm run electron:build
```

## Troubleshooting

### CI Fails on Type Checking
- Run `npx tsc --noEmit` locally
- Fix type errors
- Commit and push

### Build Fails
- Check `vite.config.ts` configuration
- Ensure all dependencies are installed
- Check for missing files

### Release Fails
- Ensure tag follows semantic versioning (v1.0.0)
- Check `package.json` version matches tag
- Verify `electron-builder` configuration in `package.json`

### Artifacts Not Uploaded
- Check workflow permissions
- Verify artifact paths in workflow
- Ensure build completed successfully

## Maintenance

### Updating Workflows

1. Edit workflow files in `.github/workflows/`
2. Test locally if possible
3. Commit and push to a feature branch
4. Create PR to verify changes
5. Merge when CI passes

### Updating Dependencies

- Dependabot will create PRs automatically
- Review changes in PR
- Merge if CI passes
- Monitor for breaking changes

## Best Practices

1. **Always test locally** before pushing
2. **Use semantic versioning** for releases
3. **Update CHANGELOG.md** for each release
4. **Keep dependencies updated** via Dependabot
5. **Monitor CI failures** and fix promptly
6. **Review Dependabot PRs** regularly
7. **Keep documentation updated** with changes

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Electron Builder Documentation](https://www.electron.build/)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

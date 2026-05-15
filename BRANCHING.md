# Workflow Charter: Branching & Release Strategy

This document defines the governance for the `workflow-charter-drill` repository.

## 1. Branching Model: GitHub Flow
- **main**: The only stable branch. Always deployable. Direct pushes are strictly forbidden.
- **feature/**: For new features or non-critical improvements.
- **bugfix/**: For resolving identified bugs.
- **hotfix/**: For critical production issues (branched from `main` and merged back immediately).

## 2. Commit Standards
We follow **Conventional Commits**:
- `feat:` for new features
- `fix:` for bug fixes
- `chore:` for maintenance
- `docs:` for documentation changes

## 3. Pull Request Requirements
- Must use the PR template.
- Requires successful CI/CD pipeline execution.
- Requires at least 1 approval from a member of the `@CODEOWNERS`.
- No merge conflicts allowed.

## 4. Release Process
- Every merge to `main` must be tagged with a semantic version (e.g., `v1.0.0`).
- Releases are automatically generated via GitHub Actions upon tagging.

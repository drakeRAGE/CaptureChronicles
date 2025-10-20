# Contributing to CaptureChronicles

Thanks for your interest in contributing! This document describes the preferred workflow for reporting issues, proposing changes, and submitting pull requests.

## Table of contents
- How to report bugs and request features
- Getting the code and setting up locally
- Branching, commits and pull requests
- Code style and tests
- PR checklist
- Contact / Security

## 1. Report bugs & request features
- Search existing issues before opening a new one.
- For bugs include:
  - Minimal reproduction steps
  - Expected vs actual behavior
  - Version, screenshots, and any error output
- For features, explain the user problem, proposed solution, and any UI/UX considerations.

## 2. Local setup (Windows)
Frontend is in `gallery/`. Follow README for details. Example steps:

```bash
# from repo root (Windows PowerShell or CMD)
npm install
cd gallery
npm install

# run dev servers
# root backend
npm run dev

# open new terminal and run frontend
cd gallery
npm run dev
```

Create a `.env` in the repo root and in the gallery dir and set required variables according to env examples files.

## 3. Branching, commits and pull requests
- Create a branch per logical change:
  - feat/<short-description>
  - fix/<short-description>
  - docs/<short-description>
- Use clear, concise commit messages. Prefer Conventional Commits style:
  - feat: add new event filtering
  - fix: correct date handling for ongoing events
  - docs: update contributing guide
- Push your branch and open a PR against `main` (or the repository's default branch).

PR review expectations:
- Include a short description of the change and why it’s needed.
- Link related issue (if any).
- Provide screenshots or demo instructions for UI changes.
- Wait for at least one approval and passing CI before merging.

## 4. Code style and tests
- Follow existing code style. If the project uses linters/formatters, run them before committing.
- If available, run tests:
```bash
# run tests if present
npm test
cd gallery && npm test
```
- Add unit tests for new logic where applicable (frontend or backend).

## 5. PR checklist
Before requesting review:
- [ ] Code builds and runs locally.
- [ ] Linter/formatter run.
- [ ] Added/updated tests (when applicable).
- [ ] Updated README or docs for any public-facing changes.
- [ ] Ensured no sensitive secrets are committed.

## 6. Contact & security
- General questions or feedback: crashbrown2004@gmail.com
- Join our Discord: https://discord.gg/JTGaCVy3Y
- For security vulnerabilities, email the same address with details; do not open a public issue.

Thank you for helping improve CaptureChronicles — contributions are welcome!
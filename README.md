# Workflow Charter Drill 🚀

![CI Pipeline](https://github.com/kalviumcommunity/workflow-charter-drill/actions/workflows/ci.yml/badge.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A professional Node.js API demonstration repository designed for the **LU 1.10 — Workflow Charter Design** assignment. This repository follows strict DevOps governance and Git best practices.

## 📌 Project Overview
This project serves as a reference for a stabilized engineering workflow. Originally a disorganized codebase with fragmented history and zero governance, it has been remediated to demonstrate:
- **Clean Git History**: Structured merge commits and conventional messaging.
- **Workflow Governance**: Defined branching strategies and PR standards.
- **Code Stability**: Refactored logic, error handling, and JSDoc documentation.
- **Automation**: Integrated CI/CD via GitHub Actions.

## 🛠 Tech Stack
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Tooling**: GitHub Actions, Dotenv, JWT

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your local machine.
- A GitHub account for forking/contributing.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kalviumcommunity/workflow-charter-drill.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

### Running Locally
```bash
npm start
```
The server will be available at `http://localhost:3000`.

## 🛡 Governance & Workflow
To maintain code quality, this repository strictly enforces the **Workflow Charter**. Please refer to the following documents:
- [**Branching Strategy**](./BRANCHING.md): Our GitHub Flow implementation.
- [**Contribution Guide**](./CONTRIBUTING.md): How to submit changes.
- [**Pull Request Template**](./.github/PULL_REQUEST_TEMPLATE.md): Mandatory for all submissions.

## 📄 License
This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

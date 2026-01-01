# AI-Enhanced Test Automation Practice

## Summary
This project is an educational practice focused on leveraging Artificial Intelligence (AI) to enhance automated software testing. The goal is to generate high-quality test cases for the `https://luxequality.com/` website using AI agents like **Cursor IDE** (with Claude 3.5 Sonnet) and **Claude Desktop**, integrated via the **Model Context Protocol (MCP)**. 

The project demonstrates:
- AI-driven test generation for **Playwright** and **Cypress**.
- Implementation of the **Page Object Model (POM)** design pattern.
- Adherence to **ISTQB** standards for test case documentation.
- Usage of AI Rules (`.cursorrules`) to maintain code quality.

---

## Requirements
To run this project, you need to have the following installed:
- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Cursor IDE** (configured with Claude 3.5 Sonnet)
- **Claude Desktop Client**
- **Playwright MCP** server configured

---

## Installation Steps
1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd <repository-folder>
2. **Install dependencies:**
    ```bash
    npm install
3. **Install Playwright:**
    ```bash
    npx playwright install
4. **Setup Environment**: Ensure your .cursorrules and MCP configurations are active in your IDE.

## How to Run Tests
To run all Playwright tests:
   ```bash
   npx playwright test
   ```

To open Cypress Test Runner:
   ```bash
   npx cypress open
   ```
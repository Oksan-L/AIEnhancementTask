const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl: 'https://luxequality.com/',
    specPattern: 'cypress/e2e/**/*.cy.js',
    experimentalPromptCommand: true,
    supportFile: 'cypress/support/e2e.js',
  },
});
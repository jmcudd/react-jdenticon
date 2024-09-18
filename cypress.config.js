const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    video: false,
    supportFile: false, // Disable the support file
    specPattern: "cypress/integration/**/*.js", // Update this to match your test file location and naming convention
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

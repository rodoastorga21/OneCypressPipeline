const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bwf2uh',
  videoCompression: 15,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

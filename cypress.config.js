
const { defineConfig } = require('cypress');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "reportPageTitle": 'Spendkey Reports',
    "embeddedScreenshots": true,
    "overwrite": true,
    
    "mochaFile": "cypress/reports/results.xml",
      "toConsole": false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
     baseUrl :'https://demo.spendkey.app/dashboard'
  },
  env: {
    DEFAULT_USER_EMAIL: "abhishek@cloudaeon.net",
    DEFAULT_USER_PASSWORD: "Abhishek@123456",
    snapshotOnly: true
  }, 
});


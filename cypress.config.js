const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://gallery-app.vivifyideas.com/",
    env: {
      registeredEmail : "ssss@test.com",
      validPassword : "12345678",
      baseApiUrl : "https://gallery-api.vivifyideas.com/api/"
    }
  },
});

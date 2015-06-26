// An example configuration file.
exports.config = {
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
  seleniumArgs: ["-browserTimeout=60"],
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../tests/e2e/**/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

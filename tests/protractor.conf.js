exports.config = {
  seleniumAddress: 'http://0.0.0.0:4723/wd/hub',
  seleniumArgs: ["-browserTimeout=60"],

  specs: ['../tests/e2e/**/*.js'],

  capabilities: {
    platformName: 'android',
    platformVersion: '5.0',
    deviceName: 'a35353a9',
    browserName: "",
    autoWebview: true,
    app: __dirname + '/../platforms/android/build/outputs/apk/android-debug.apk'
  },

  baseUrl: 'http://192.168.0.52:8100',

  onPrepare: function() {
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
  }
};
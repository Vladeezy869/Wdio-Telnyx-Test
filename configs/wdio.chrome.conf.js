exports.config = {    
    specs: [
        './../test/specs/*.js'
    ],
  
    maxInstances: 10,
    services: [['selenium-standalone', { chrome: 'latest' }]], 
    
    capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--window-size=1920,1080']},
    }],
   
    logLevel: 'info',
   
    bail: 0,
    baseUrl: 'https://telnyx.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    framework: 'mocha',
   
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
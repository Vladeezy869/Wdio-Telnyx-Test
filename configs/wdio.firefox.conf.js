exports.config = {    
    specs: [
        './../test/specs/*.js'
    ],
  
    maxInstances: 5,
    services: [['selenium-standalone', { firefox: 'latest' }]],
    
    capabilities: [{
            maxInstances: 4,
            browserName: "firefox",
            'moz:firefoxOptions': {
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
        disableWebdriverScreenshotsReporting: true,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
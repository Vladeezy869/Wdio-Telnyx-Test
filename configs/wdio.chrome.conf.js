const { config } = require("./wdio.conf");

const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]],
    capabilities: [{
        maxInstances: 2,
        browserName: "chrome",
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1920,1080', '--allow-insecure-localhost'],
        }
    }],
};//

exports.config = chromeConfig;
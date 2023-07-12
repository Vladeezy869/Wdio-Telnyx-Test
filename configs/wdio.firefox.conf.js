const { config } = require('./wdio.conf');

const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', { firefox: 'latest' }]], // https://github.com/mozilla/geckodriver/releases
    capabilities: [
        {
            maxInstances: 2,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['--start-maximized'],
            },
        },
    ],
    path: '/wd/hub',
};

exports.config = firefoxConfig;

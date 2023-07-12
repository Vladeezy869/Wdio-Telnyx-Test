const {config} = require("./wdio.conf");
const crossBrowserConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]],
    capabilities: [
        {
          maxInstances: 1,
          browserName: 'chrome',
          acceptInsecureCerts: true,
          'goog:chromeOptions': {
            args: ['--headless', '--no-sandbox']
          },
        },
        {
          maxInstances: 1,
          browserName: 'firefox',
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: ['--headless']
          },
        },
        {
			maxInstances: 1,
			browserName: "MicrosoftEdge",
			"ms:edgeOptions": {
				args: ["--headless"],
			},
		},
        ],

};
exports.config = crossBrowserConfig;
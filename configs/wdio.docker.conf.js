const { config } = require("./wdio.conf");

const dockerConfig = {
    ...config,
    hostname: "localhost",
    port: 4444,
    path: "/",
    services: ["docker"],
    capabilities: [
        {
            maxInstances: 2,
            browserName: "chrome",
            acceptInsecureCerts: true,
            "goog:chromeOptions": {
                args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1920,1080', '--allow-insecure-localhost'],
        },
        },
        {
            maxInstances: 2,
            browserName: "MicrosoftEdge",
            acceptInsecureCerts: true,
            "ms:edgeOptions": {
                args: ["--headless"],
            },
        },
        {
            maxInstances: 2,
            browserName: "firefox",
            acceptInsecureCerts: true,
            "moz:firefoxOptions": {
                args: ["--headless"],
            },
        },
    ],
};

exports.config = dockerConfig;
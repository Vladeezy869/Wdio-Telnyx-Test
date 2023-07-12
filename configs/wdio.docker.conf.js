const { config } = require("./wdio.conf");
const dockerConfig = {
    ...config,
    services: ['docker'],
    hostname: 'localhost',
    port: 4444,
    path: '/'

};

exports.config = dockerConfig;
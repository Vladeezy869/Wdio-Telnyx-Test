const { config } = require("./wdio.conf");
const dockerConfig = {
    ...config,
    services: ['docker'],
    hostname: 'localhost',
    ports:
      - "4442:4442"
      - "4443:4443"
      - "4444:4444"

};

exports.config = dockerConfig;
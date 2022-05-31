const pino = require('pino')({
    level: process.env.DEBUG_LEVEL || 'error',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            levelFirst: true,
            translateTime: 'SYS:standard'
        }
    }
});

module.exports = pino;

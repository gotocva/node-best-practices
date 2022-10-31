
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

class AppConfig {
    constructor() {
        this.config = {};
        this.env = env
    }
}

module.exports = AppConfig;
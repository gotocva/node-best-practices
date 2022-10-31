import express from 'express';
import AppConfig from './app';

class Express extends AppConfig {

    constructor() {
        super();
        this.app = express();
    }

    start(cb) {
        this.app.listen(this.env.PORT, cb);
    }
}


module.exports = Express;
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dontenv from 'dotenv'
dontenv.config()

import routes from './routes'

class App {

    constructor() {
        this.server = express();

        this.database();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(express.json());
    }

    database() {
        mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true }
        );
    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server
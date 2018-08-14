import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import * as mongoose from 'mongoose';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import {enableProdMode} from '@angular/core';

import { ContactRouter, HeroesRouter } from './routes';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main');
const DIST_FOLDER = join(process.cwd(), './dist');

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.app.use(express.static('src/assets'));
        this.app.use('/api/contact', ContactRouter);
        this.app.use('/api/heroes', HeroesRouter);

        this.app.engine('html', ngExpressEngine({
            bootstrap: AppServerModuleNgFactory,
            providers: [
                provideModuleMap(LAZY_MODULE_MAP)
            ]
        }));

        this.app.set('view engine', 'html');
        this.app.set('views', join(DIST_FOLDER, 'browser'));
        this.app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
            maxAge: '1y'
        }));

        this.app.get('*', (req, res) => {
            res.render('index', { req });
        });
    }

    private mongoSetup(): void {
        const dbName = 'ssr-prototype',
            mongoUrl: string = 'mongodb://localhost:27017/' + dbName;

        mongoose.Promise = global.Promise;
        mongoose.connect(mongoUrl);

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            // we're connected!
            console.log('Connected successfully to MongoDB: ', dbName);
        });
    }

}

export default new App().app;

import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import {Routes} from './routes/index';
import {config} from './config';
import imageRoutes from './routes/imageRoutes';


class App {

    public app: express.Application;
    public indexRoute: Routes = new Routes;

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.loggerSetup();
        this.routes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.connect(
            config.mongo.url,
            {
                dbName: config.mongo.dbName,
                useNewUrlParser: true
            }
        );    
    }

    private loggerSetup(): void {
        this.app.use(morgan('combined'));
    }

    private routes() {
        this.app.use('/images', imageRoutes.getRouter());
    }

}

export default new App().app;

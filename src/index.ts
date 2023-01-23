import 'express-async-errors'
import express from 'express';
import handleError from './error/errorHandlerMiddleware';
//rutas
import SOURCE_1 from './router/source1.router';
import SOURCE_2 from './router/source2.router';
import SOURCE_3 from './router/source3.router';
import logger from './middleware/logger';

class AppServer {

    private app: express.Application;

    constructor() {
        this.app = express()
    }

    private middlewares() {

        this.app.use(express.json());
        this.app.use(logger);
        this.routes();

        //este debe de ser el ultimo middleware
        this.app.use(handleError);
       
    }

    public routes() {
        this.app.use('/api/source1', SOURCE_1);
        this.app.use('/api/source2', SOURCE_2);
        this.app.use('/api/source3', SOURCE_3);
    }

    public AppStart() {
        this.middlewares();
        this.app.listen(4000, () => {
            console.log('server running');
        })
    }

}

export default AppServer;
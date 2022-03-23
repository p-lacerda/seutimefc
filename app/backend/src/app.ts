import * as express from 'express';
import cors = require('cors');
import bodyParser = require('body-parser');

import Routes from './routes/loginRouter.routes';

class App {
  public app: express.Express;

  public Router: Routes = new Routes();
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    this.app.use(cors());
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.Router.routes(this.app);
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    // ...
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log(PORT);
    });
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();

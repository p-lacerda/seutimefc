import * as express from 'express';
import bodyParser = require('body-parser');

import LoginRoutes from './database/routes/loginRouter.routes';

class App {
  public app: express.Express;

  public loginRouter: LoginRoutes = new LoginRoutes();
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.loginRouter.routes(this.app);
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    // ...
  }

  // ...
  // public loadRoutes():void {
  // this.app.use('/login', loginRouter);
  // }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log(PORT);
    });
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();

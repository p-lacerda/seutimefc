import LoginRoutes from './database/routes/loginRouter.routes';

class Routes {
  public LoginRoutes: LoginRoutes = new LoginRoutes();

  public routes(app: any): void {
    app.route('/login', this.LoginRoutes);
  }
}

export default Routes;

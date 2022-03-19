// import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import { isEmailValid, isPasswordValid } from '../middlewares/LoginErrors';
// import userLogin from '../controllers/LoginController';

// const router: Router = Router();

// router.post('/login', [userLogin]);

// export default router;

class LoginRoutes {
  private value: string;

  public LoginController: LoginController = new LoginController();

  public routes(app: any): void {
    console.log(this.value);
    app
      .route('/login')
      .post([isEmailValid, isPasswordValid, LoginController.userLogin]);
  }
}

export default LoginRoutes;

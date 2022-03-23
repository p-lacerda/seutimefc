// import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import ClubsController from '../controllers/ClubsController';
import { isEmailValid, isPasswordValid } from '../middlewares/LoginErrors';
// import userLogin from '../controllers/LoginController';

// const router: Router = Router();

// router.post('/login', [userLogin]);

// export default router;

class Routes {
  private value: string;

  public LoginController: LoginController = new LoginController();

  public ClubsController: ClubsController = new ClubsController();

  public routes(app: any): void {
    console.log(this.value);
    app
      .route('/login')
      .post([isEmailValid, isPasswordValid, LoginController.userLogin]);
    app
      .route('/login/validate')
      .get(LoginController.userVerify);
    app
      .route('/clubs')
      .get(ClubsController.getAll);
    app
      .route('/clubs/:id')
      .get(ClubsController.getById);
  }
}

export default Routes;

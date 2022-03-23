// import { Router } from 'express';
import { authVerificationToken } from '../auth';
import LoginController from '../database/controllers/LoginController';
import ClubsController from '../database/controllers/ClubsController';
import MatchsController from '../database/controllers/MatchsController';
import { isAValidTeam,
  isTheIdExists } from '../database/middlewares/MatchsErrors';
import { isEmailValid, isPasswordValid } from '../database/middlewares/LoginErrors';
// import userLogin from '../controllers/LoginController';

// const router: Router = Router();

// router.post('/login', [userLogin]);

// export default router;

class Routes {
  private value: string;

  public LoginController: LoginController = new LoginController();

  public ClubsController: ClubsController = new ClubsController();

  public MatchsController: MatchsController = new MatchsController();

  public routes(app: any): void {
    console.log(this.value);
    app.route('/matchs/:id/finish').patch(
      [isTheIdExists, authVerificationToken, MatchsController.createFinishedMatch],
    );
    app.route('/matchs/:id').patch([isTheIdExists, authVerificationToken, MatchsController.edit]);
    app.route('/matchs').post([
      [isAValidTeam, authVerificationToken, MatchsController.create],
    ]);
    app.route('/matchs').get(MatchsController.getAll);
    app.route('/clubs/:id').get(ClubsController.getById);
    app.route('/clubs').get(ClubsController.getAll);
    app.route('/login/validate').get(LoginController.userVerify);
    app.route('/login').post([isEmailValid, isPasswordValid, LoginController.userLogin]);
  }
}

export default Routes;

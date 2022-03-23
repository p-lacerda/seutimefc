// import { Router } from 'express';
import { authVerificationToken } from '../../auth';
import LoginController from '../controllers/LoginController';
import ClubsController from '../controllers/ClubsController';
import MatchsController from '../controllers/MatchsController';
import { isTeamDuplicated, isAValidTeam, isInProgress } from '../middlewares/MatchsErrors';
import { isEmailValid, isPasswordValid } from '../middlewares/LoginErrors';
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
    app.route('/matchs').post(
      [isAValidTeam,
        isTeamDuplicated, authVerificationToken, isInProgress, MatchsController.create],
    );
    app.route('/login').post([isEmailValid, isPasswordValid, LoginController.userLogin]);
    app.route('/login/validate').get(LoginController.userVerify);
    app.route('/clubs').get(ClubsController.getAll);
    app.route('/clubs/:id').get(ClubsController.getById);
    app.route('/matchs').get(MatchsController.getAll);
  }
}

export default Routes;

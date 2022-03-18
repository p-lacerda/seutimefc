import { Request, Response } from 'express';
// import LoginService from '../services/LoginService';

class LoginController {
  // Não acessa nenhum atributo do objeto
  static userLogin(req: Request, res: Response) {
    // const { email, password } = req.body;

    // const users = await LoginService.userLogin(email, password);

    return res.status(200).send('Está tudo bem!');
  }
}

// function userLogin(req: Request, res: Response) {
//   // const { email, password } = req.body;

//   // const users = await LoginService.userLogin(email, password);

//   return res.status(200).send('Está tudo bem!');
// }

// export default userLogin;
export default LoginController;

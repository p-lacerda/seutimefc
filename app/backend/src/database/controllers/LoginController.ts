import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

class LoginController {
  // Não acessa nenhum atributo do objeto
  static async userLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    const users = await LoginService.userLogin(email, password);

    const { httpCode, message } = users;

    if (httpCode === 401) {
      return res.status(httpCode).json({ message });
    }

    return res.status(httpCode).json(message);
  }

  static async userVerify(req: Request, res: Response) {
    const token: string | any = req.headers.authorization;

    const user = await LoginService.userVerify(token);

    const { httpCode, message } = user;

    return res.status(httpCode).json(message);
  }
}

// export default userLogin;
export default LoginController;

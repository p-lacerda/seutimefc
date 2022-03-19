import Users from '../models/Users';
import { createToken } from '../../auth/index';
import { IUser } from '../interfaces/User';

class LoginService {
  static async userLogin(email: string, password: string): Promise<IUser> {
    const users: any = await Users.findOne({ where: { email, password } });

    const token: string = createToken(await users);
    return {
      users,
      token,
    };
  }
}

export default LoginService;

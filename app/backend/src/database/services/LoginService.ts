import Users from '../models/Users';
import { createToken, decryptPassword, validationToken } from '../../auth/index';
// import { IUser } from '../interfaces/User';

class LoginService {
  static async userLogin(email: string, password: string): Promise<any> {
    const userData: any = await Users.findOne({ where: { email } });

    // Verificações
    if (!userData) {
      return { httpCode: 401, message: 'Incorrect email or password' };
    }

    if (await decryptPassword(password, userData.password) === false) {
      return { httpCode: 401, message: 'Incorrect email or password' };
    }

    const token: string = await createToken(await userData);

    const user = {
      id: userData.id,
      username: userData.username,
      role: userData.role,
      email: userData.email,
    };

    return {
      httpCode: 200,
      message: { user, token },
    };
  }

  static async userVerify(token: string): Promise<any> {
    const user = await validationToken(token);

    return {
      httpCode: 200,
      message: user?.data?.role,
    };
  }
}

export default LoginService;

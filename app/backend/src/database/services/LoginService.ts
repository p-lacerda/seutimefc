import Users from '../models/Users';

class LoginService {
  static async userLogin(email: string, password: string) {
    const users = await Users.create({
      email,
      password,
    });

    console.log(users, 'USERS--------------------------------------------------------');

    return {
      user: {
        // id: '1',
        username: 'Admin',
        role: 'admin',
        email,
      },
      token: '123.456.789', // Aqui deve ser o token gerado pelo backend.
    };
  }
}

export default LoginService;

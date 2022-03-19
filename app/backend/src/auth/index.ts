import jwt = require('jsonwebtoken');
import { User } from '../database/interfaces/User';

// import { Request, Response, NextFunction } from 'express';

const SECRET_TOKEN = 'seusecretdetoken';

const createToken = (user: User | null) => {
  // const jwtConfig = {
  //   expiresIn: '7d',
  //   algorithm: 'HS256',
  // };

  const token = jwt.sign({ data: user }, SECRET_TOKEN);

  return token;
};

// const validationToken = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization;

//   try {
//     const decoded = jwt.verify(token, SECRET_TOKEN);
//     const { email }
//   } catch (err) {

//   }
// };

const modelFunction = () => {

};

export { createToken, modelFunction };

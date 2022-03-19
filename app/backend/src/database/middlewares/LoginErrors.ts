import { NextFunction, Request, Response } from 'express';

const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const isEmailValid = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!email) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }

  if (!validateEmail(email)) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
};

const isPasswordValid = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }

  if (password.length < 6) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
};

export { isEmailValid, isPasswordValid };

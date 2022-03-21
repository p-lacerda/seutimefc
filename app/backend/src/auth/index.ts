import jwt = require('jsonwebtoken');
import fs = require('fs/promises');
import bcrypt = require('bcryptjs');
import { User } from '../database/interfaces/User';

// import { Request, Response, NextFunction } from 'express';

const createToken = async (user: User | null) => {
  const SECRET_KEY: string = await fs.readFile(`${__dirname}/../../jwt.evaluation.key`, 'utf-8');
  const token = jwt.sign({ data: user }, SECRET_KEY, { expiresIn: '7d', algorithm: 'HS256' });

  return token;
};

const decryptPassword = async (loginPassword: any, hash: any): Promise<boolean> => {
  const isPasswordValid = await bcrypt.compare(loginPassword, hash);
  return isPasswordValid;
};

const validationToken = async (token: string) => {
  const SECRET_KEY: string = await fs.readFile(`${__dirname}/../../jwt.evaluation.key`, 'utf-8');

  try {
    const decoded: any = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err: any) {
    throw new Error(err);
  }
};

export { createToken, decryptPassword, validationToken };

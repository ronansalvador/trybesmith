import { NextFunction, Request, Response } from 'express';
import connection from '../models/connection';
import UserModel from '../models/users.model';

const usermodel = new UserModel(connection);

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const users = await usermodel.getUsers();

  if (!users.includes(username)) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const passwords = await usermodel.getPasswords(username);
  if (!passwords.includes(password)) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  return next();
};

export default verifyUser;
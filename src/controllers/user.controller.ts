import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

export default class UserController {
  userService = new UserService();

  createUser = async (req: Request, res: Response) => {
    const { body } = req;
    const token = jwt.sign({ body }, 'senha', {
      expiresIn: '3d',
    });

    const result = await this.userService.createUser(body);

    if (!result) return res.status(400).json('mensagem de erro');
    return res.status(201).json({ token });
  };
}
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const login = async (req: Request, res: Response) => {
  const { body } = req;
  const token = jwt.sign({ body }, 'senha', {
    expiresIn: '3d',
  });

  res.status(200).json({ token });
};

export default login;

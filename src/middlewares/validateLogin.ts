import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { ILogin } from '../interfaces';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const userLogin = req.body;

  const schema = Joi.object<ILogin>({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(userLogin);
  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ message });
  }

  return next();
};

export default validateLogin;
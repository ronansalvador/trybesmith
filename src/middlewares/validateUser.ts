import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IUser } from '../interfaces';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;

  const schema = Joi.object<IUser>({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
  });

  const { error } = schema.validate(user);
  console.log('error', error);
  if (error) {
    const status = error.details[0].type === 'any.required' ? 400 : 422;
    return res.status(status).json({ message: error.message });
  }

  return next();
};

export default validateUser;

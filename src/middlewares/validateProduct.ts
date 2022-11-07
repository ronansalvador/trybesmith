import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IProduct } from '../interfaces';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  console.log(product);

  if (!product.name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (!product.amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }

  const schema = Joi.object<IProduct>({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(product);
  if (error) {
    const { message } = error.details[0];
    return res.status(422).json({ message });
  }

  return next();
};

export default validateProduct;
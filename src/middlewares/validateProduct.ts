import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IProduct } from '../interfaces';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;

  // if (!product.name) {
  //   return res.status(400).json({ message: '"name" is required' });
  // }

  // if (!product.amount) {
  //   return res.status(400).json({ message: '"amount" is required' });
  // }

  const schema = Joi.object<IProduct>({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(product);
  if (error) {
    console.log('erro', error);
    const status = error.details[0].type === 'any.required' ? 400 : 422;
    return res.status(status).json({ message: error.message });
  }

  return next();
};

export default validateProduct;
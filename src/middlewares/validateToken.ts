import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const verifyToken = (token: string) => {
  try {
    console.log('chegou no verify');
    const data = jwt.verify(token, process.env.JWT_SECRET as string);

    return { type: null, data };
  } catch (_e) {
    return { type: 'UNAUTHORIZED', message: 'Invalid token' };
  }
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const tokenValid = verifyToken(token);

  if (tokenValid.type) {
    return res.status(401).json({ message: tokenValid.message });
  }

  req.body.user = tokenValid.data;

  next();
};

export default validateToken;
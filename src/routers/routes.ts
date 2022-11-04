import { Router } from 'express';
import productRouter from './products.route';
import userRouter from './users.route';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;
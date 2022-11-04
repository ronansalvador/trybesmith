import { Router } from 'express';
import productRouter from './products.route';
import userRouter from './users.route';
import orderRoute from './orders.route';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRoute);

export default router;
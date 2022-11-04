import { Router } from 'express';
import productRouter from './products.route';

const router = Router();

router.use('/products', productRouter);

export default router;
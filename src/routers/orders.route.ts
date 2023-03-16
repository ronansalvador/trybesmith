import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validateToken from '../middlewares/validateToken';

const orderRoute = Router();

const orderController = new OrderController();

orderRoute.get('/', orderController.getOders);
// orderRoute.post('/', (req, res) => res.status(200).json({ message: 'teste rota post order' }));
orderRoute.post('/', validateToken, orderController.ordersPost);

export default orderRoute;
import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService = new OrderService();

  getOders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getOders();
    res.status(200).json(orders);
  };
}
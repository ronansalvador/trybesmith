import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService = new OrderService();

  getOders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getOders();
    res.status(200).json(orders);
  };

  ordersPost = async (req: Request, res: Response) => {
    const orders = req.body;

    const { type, message } = await this
      .orderService.ordersPost({ userId: orders.user.id, productsIds: orders.productsIds });

    if (type === 'BAD_REQUEST') {
      return res.status(400).json({ message });
    }

    if (type === 'INVALID_VALUE') {
      return res.status(422).json({ message });
    }

    return res.status(201).json(message);
  };
  };
}
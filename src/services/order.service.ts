import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import { Order } from '../interfaces';

export default class OrderService {
  orderModel = new OrderModel(connection);

  async getOders(): Promise<Order[]> {
    const result = await this.orderModel.getOders();
    return result;
  }
}
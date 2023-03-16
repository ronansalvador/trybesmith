import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import { Order } from '../interfaces';

export default class OrderService {
  orderModel = new OrderModel(connection);

  async getOders(): Promise<Order[]> {
    const result = await this.orderModel.getOders();
    return result;
  }

  async orderPost() {
    const error = await verifyProductsIds(orders.productsIds);

    if (error.type) {
      return error;
    }

    const orderId = await this.model.modelOrdersPost(orders);
    const updatedProducts = orders.productsIds.map(async (productsId) => (
      this.model.modelOrdersPut(productsId, orderId)
    ));
    await Promise.all(updatedProducts);

    return { type: null, message: orders };
  }
  }
}
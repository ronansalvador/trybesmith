import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getOders(): Promise<Order[]> {
    const query = `
      SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p
      ON p.orderId = o.id
      GROUP BY o.id
      ORDER BY o.userId;
    `;

    const [orders] = await this.connection.execute(query);

    return orders as Order[];
  }
}
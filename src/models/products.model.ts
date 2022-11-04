import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insertProduct(name: string, amount: string): Promise<IProduct> {
    const result = await this.connection
      .execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);`, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, name, amount };
  }

  async getProducts(): Promise<IProduct> {
    const [result] = await this.connection.execute<ResultSetHeader>(`
    SELECT * FROM Trybesmith.Products`, []);
    return result as unknown as IProduct;
  }
}
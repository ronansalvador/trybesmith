import connection from '../models/connection';
import ProductModel from '../models/products.model';
import { IProduct } from '../interfaces';

export default class ProductService {
  ProductModel = new ProductModel(connection);

  async insertProduct(name: string, amount: string): Promise<IProduct> {
    const result = await this.ProductModel.insertProduct(name, amount);
    return result;
  }
}
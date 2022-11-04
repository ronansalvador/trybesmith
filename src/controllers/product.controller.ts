import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  productService = new ProductService();

  postProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const result = await this.productService.insertProduct(name, amount);
    return res.status(201).json(result);
  };

  getProducts = async (req: Request, res: Response) => {
    const result = await this.productService.getProducts();
    return res.status(200).json(result);
  };
}
import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = Router();

const productController = new ProductController();

// productRouter.post('/', (req, res) => productController.postProduct(req, res));

productRouter.post('/', productController.postProduct);

export default productRouter;
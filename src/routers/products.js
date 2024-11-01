import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { Router } from 'express';
import {
  getProductsController,
  getProductByIdController,
} from '../controllers/products.js';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));

router.get('/:id', ctrlWrapper(getProductByIdController));

export default router;

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { Router } from 'express';
import { getProductsController } from '../controllers/products.js';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));

export default router;

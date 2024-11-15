import createHttpError from 'http-errors';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { Router } from 'express';
import {
  getProductsController,
  getProductByIdController,
  createProductController,
} from '../controllers/products.js';
import { createProductSchema } from '../validation/productsValidationSchemas.js';
import { validateBody } from '../middlewares/validateBody.js';
import { validateId } from '../middlewares/validateId.js';
import { validateProductsFilters } from '../middlewares/validateProductsFilters.js';

const router = Router();

router.get('/', validateProductsFilters, ctrlWrapper(getProductsController));

router.get('/:id', validateId('id'), ctrlWrapper(getProductByIdController));

router.post(
  '/',
  validateBody(createProductSchema),
  ctrlWrapper(createProductController),
);
export default router;

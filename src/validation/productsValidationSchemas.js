import Joi from 'joi';
import { PRODUCT_CATEGORIES } from '../constants/index.js';

export const createProductSchema = Joi.object({
  name: Joi.string().min(6).required(),
  price: Joi.number().required(),
  category: Joi.string().valid(...PRODUCT_CATEGORIES),
  description: Joi.string(),
});

export const productsFiltersSchema = Joi.object({
  category: Joi.string().valid(...PRODUCT_CATEGORIES),
  minPrice: Joi.number().min(0),
  maxPrice: Joi.number().max(1000000),
});

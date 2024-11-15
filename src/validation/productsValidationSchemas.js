import Joi from 'joi';
import { PRODUCT_CATEGORIES } from '../constants/index.js';

export const createProductSchema = Joi.object({
  name: Joi.string().min(6).required(),
  price: Joi.number().required(),
  category: Joi.string().valid(...PRODUCT_CATEGORIES),
  description: Joi.string(),
});

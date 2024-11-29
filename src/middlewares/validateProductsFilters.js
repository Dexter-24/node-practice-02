import createHttpError from 'http-errors';
import { productsFiltersSchema } from '../validation/productsValidationSchemas.js';

export const validateProductsFilters = async (req, res, next) => {
  try {
    await productsFiltersSchema.validateAsync(req.query);
    next();
  } catch (error) {
    next(createHttpError(400, `Query parameters not valid: ${error.message}`));
  }
};

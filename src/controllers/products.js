import { getProducts, getProductById } from '../services/products.js';
import createHttpError from 'http-errors';

export const getProductsController = async (req, res) => {
  console.log('getProductsController');
  const data = await getProducts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found all products',
    data,
  });
};

export const getProductByIdController = async (req, res) => {
  const { id } = req.params;

  const data = await getProductById(id);

  if (!data) {
    throw createHttpError(404, 'Not found product!');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found product',
    data,
  });
};

import {
  getProducts,
  getProductById,
  createProduct,
} from '../services/products.js';
import createHttpError from 'http-errors';

export const getProductsController = async (req, res) => {
  console.log('getProductsController');
  const data = await getProducts(req.query);
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

export const createProductController = async (req, res) => {
  const data = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created product!',
    data,
  });
};

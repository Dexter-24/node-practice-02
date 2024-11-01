import { ProductCollection } from '../db/models/product.js';

export const getProducts = () => ProductCollection.find();

// export const getProductById = async (id) => {
//   console.log(id);

//   return await ProductCollection.find({ _id: id });
// };

export const getProductById = async (id) => {
  console.log(id);

  return await ProductCollection.findById(id);
};

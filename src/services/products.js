import { ProductCollection } from '../db/models/product.js';

export const getProducts = async (filter = {}) => {
  // if (filter.category)
  // filter = {
  //   category,
  //   minPrice,
  //   maxPrice,
  // };

  // {
  //   category: filter.category,
  //   price: { $gte: filter.minPrice, $lte: filter.maxPrice },
  // }

  const filterOptions = {};

  if (filter.category) {
    filterOptions.category = filter.category;
  }
  if (filter.minPrice) {
    filterOptions.price = { $gte: filter.minPrice };
  }
  if (filter.maxPrice) {
    filterOptions.price = filterOptions.price
      ? { ...filterOptions.price, $lte: filter.maxPrice }
      : { $lte: filter.maxPrice };
  }

  return await ProductCollection.find(filterOptions);
};

// export const getProductById = async (id) => {
//   console.log(id);

//   return await ProductCollection.find({ _id: id });
// };

export const getProductById = async (id) => {
  console.log(id);

  return await ProductCollection.findById(id);
};

export const createProduct = async (product) => {
  return ProductCollection.create(product);
};

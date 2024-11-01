import { ProductCollection } from '../db/models/product.js';

export const getProducts = () => ProductCollection.find();

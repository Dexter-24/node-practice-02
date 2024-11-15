import { model, Schema } from 'mongoose';
import { PRODUCT_CATEGORIES } from '../../constants/index.js';
const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: PRODUCT_CATEGORIES,
      default: 'other',
    },
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductCollection = model('products', productsSchema);

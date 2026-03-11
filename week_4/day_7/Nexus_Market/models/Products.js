import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    category: {
      type: String,
      required: true,
      index: true
    },

    image: {
      type: String,
      required: true
    },

    stock: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

productSchema.index({ category: 1, price: -1 });

const Product = mongoose.model("Product", productSchema);

export default Product;
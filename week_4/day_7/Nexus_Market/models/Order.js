import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },

  title: String,
  image: String,

  price: Number,

  quantity: {
    type: Number,
    required: true
  }
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    items: [orderItemSchema],

    totalPrice: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      default: "pending"
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
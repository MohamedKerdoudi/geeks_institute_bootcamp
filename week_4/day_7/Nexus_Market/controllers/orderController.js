import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, userId } = req.body;

    const order = new Order({
      user: userId,
      items,
      totalPrice
    });

    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId })
      .populate("user", "name email")
      .lean();

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
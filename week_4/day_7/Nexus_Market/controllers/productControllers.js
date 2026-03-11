import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 12;

    const products = await Product.find()
      .select("title price image category")
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
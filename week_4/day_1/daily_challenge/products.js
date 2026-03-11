db.products.insertMany([
  {
    name: "Solar Power Bank",
    category: "Electronics",
    price: 49.99,
    stock: 100   
  },
  {
    name: "Bamboo Laptop Stand",
    category: "Electronics",
    price: 39.99,
    stock: 15
  },
  {
    name: "Reusable Glass Water Bottle",
    category: "Home",
    price: 19.99,
    stock: 25
  },
  {
    name: "Organic Cotton Throw Blanket",
    category: "Home",
    price: 59.99,
    stock: 8
  },
  {
    name: "Recycled Paper Notebook",
    category: "Stationery",
    price: 7.99,
    stock: 3   
  }
])
db.products.find({ stock: { $lt: 10 } })
db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } }
)
db.products.find().sort({ price: -1 }).limit(1)
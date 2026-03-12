
const menuModel = require('../models/menuModel');


const getMenu = async (req, res) => {
  try {
    const items = await menuModel.getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMenuItem = async (req, res) => {
  try {
    const item = await menuModel.getItemByName(req.params.name);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const addMenuItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newItem = await menuModel.createItem(name, price);
    res.status(201).json({ message: 'Item added successfully', item: newItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const updateMenuItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    const updatedItem = await menuModel.updateItem(req.params.id, name, price);
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item updated successfully', item: updatedItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteMenuItem = async (req, res) => {
  try {
    const deletedItem = await menuModel.deleteItem(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully', item: deletedItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getMenu,
  getMenuItem,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem
};
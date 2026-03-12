
const pool = require('../db');


const getAllItems = async () => {
  const res = await pool.query('SELECT * FROM menu_items ORDER BY item_id');
  return res.rows;
};


const getItemByName = async (name) => {
  const res = await pool.query('SELECT * FROM menu_items WHERE item_name = $1', [name]);
  return res.rows[0];
};


const createItem = async (name, price) => {
  const res = await pool.query(
    'INSERT INTO menu_items (item_name, item_price) VALUES ($1, $2) RETURNING *',
    [name, price]
  );
  return res.rows[0];
};

const updateItem = async (id, name, price) => {
  const res = await pool.query(
    'UPDATE menu_items SET item_name = $1, item_price = $2 WHERE item_id = $3 RETURNING *',
    [name, price, id]
  );
  return res.rows[0];
};


const deleteItem = async (id) => {
  const res = await pool.query('DELETE FROM menu_items WHERE item_id = $1 RETURNING *', [id]);
  return res.rows[0];
};

module.exports = {
  getAllItems,
  getItemByName,
  createItem,
  updateItem,
  deleteItem
};

import React, { useState } from 'react';

const COFFEE_TYPES = [
  'Espresso',
  'Latte',
  'Cappuccino',
  'Americano',
  'Mocha',
  'Flat White',
];

function getRandomCoffee() {
  const index = Math.floor(Math.random() * COFFEE_TYPES.length);
  return COFFEE_TYPES[index];
}

function OrderQueue() {
  const [orders, setOrders] = useState([]);

  const addOrder = () => {
    const newOrder = {
      id: Date.now(), // unique id
      coffee: getRandomCoffee(),
    };
    setOrders([...orders, newOrder]);
  };

  const markAsServed = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div>
      <button onClick={addOrder} style={{ marginBottom: '1rem' }}>
        Add Random Order
      </button>

      {orders.length === 0 ? (
        <p>No orders yet!</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={order.id} style={{ marginBottom: '0.5rem' }}>
              {index + 1}. {order.coffee}{' '}
              <button onClick={() => markAsServed(order.id)}>Mark as Served</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderQueue;
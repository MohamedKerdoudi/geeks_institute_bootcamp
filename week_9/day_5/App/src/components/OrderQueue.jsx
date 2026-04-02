import React from "react";

function OrderQueue() {
  return (
    <section style={{ flex: 1, backgroundColor: "#fff3cd", padding: "1rem", borderRadius: "8px" }}>
      <h2>Order Queue</h2>
      <ul>
        <li>Order #101: Latte</li>
        <li>Order #102: Cappuccino</li>
        <li>Order #103: Espresso</li>
      </ul>
    </section>
  );
}

export default OrderQueue;
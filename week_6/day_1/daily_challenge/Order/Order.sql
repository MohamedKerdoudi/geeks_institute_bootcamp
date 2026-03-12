--1 Create product_orders table

CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--column	purpose
--order_id	unique order identifier
--order_date	when the order was created
--2 Create items table

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    quantity INT DEFAULT 1,
    order_id INT,
    
    FOREIGN KEY (order_id)
    REFERENCES product_orders(order_id)
    ON DELETE CASCADE
);
--3 Insert sample data
Create orders
INSERT INTO product_orders DEFAULT VALUES;
INSERT INTO product_orders DEFAULT VALUES;
Insert items
INSERT INTO items (item_name, price, quantity, order_id)
VALUES
('Keyboard', 50, 1, 1),
('Mouse', 25, 2, 1),
('Monitor', 200, 1, 2);
--4 Function to calculate total price of an order
CREATE OR REPLACE FUNCTION get_order_total(orderId INT)
RETURNS NUMERIC AS
$$
SELECT SUM(price * quantity)
FROM items
WHERE order_id = orderId;
$$
LANGUAGE SQL;
SELECT get_order_total(1);
--5 Create users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL
);
--6 Modify product_orders to reference users

ALTER TABLE product_orders
ADD COLUMN user_id INT;

ALTER TABLE product_orders
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES users(user_id)
ON DELETE CASCADE;
--7 Insert example users
INSERT INTO users (username)
VALUES
('Alice'),
('Bob');
--8 Assign orders to users
UPDATE product_orders
SET user_id = 1
WHERE order_id = 1;

UPDATE product_orders
SET user_id = 2
WHERE order_id = 2;

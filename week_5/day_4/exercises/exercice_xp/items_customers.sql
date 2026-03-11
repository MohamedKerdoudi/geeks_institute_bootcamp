-- 1) Create tables
CREATE TABLE IF NOT EXISTS public.items (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
price INTEGER NOT NULL CHECK (price >= 0)
);

CREATE TABLE IF NOT EXISTS public.customers (
id SERIAL PRIMARY KEY,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL
);

-- 2) Insert data into items
INSERT INTO public.items (name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

-- 3) Insert data into customers
INSERT INTO public.customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

-- 4) Queries

-- a) All the items
SELECT * FROM public.items;

-- b) All the items with a price above 80 (80 not included)
SELECT * FROM public.items
WHERE price > 80;

-- c) All the items with a price below 300 (300 included)
SELECT * FROM public.items
WHERE price <= 300;

-- d) All customers whose last name is 'Smith'

SELECT * FROM public.customers
WHERE last_name = 'Smith';

-- e) All customers whose last name is 'Jones'
SELECT * FROM public.customers
WHERE last_name = 'Jones';

-- f) All customers whose first name is not 'Scott'
SELECT * FROM public.customers
WHERE first_name <> 'Scott';


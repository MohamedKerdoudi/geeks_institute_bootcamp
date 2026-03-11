--Exercise 1: DVD Rental

--1) How many films there are for each rating
SELECT rating, COUNT(*) AS film_count
FROM public.film
GROUP BY rating
ORDER BY rating;

--2) List all movies rated G or PG-13
SELECT film_id, title, rating, length, rental_rate
FROM public.film
WHERE rating IN ('G', 'PG-13')
ORDER BY title;

--3) Further filter: under 2 hours (length < 120) and rental_rate < 3.00. Sort alphabetically
SELECT film_id, title, rating, length, rental_rate
FROM public.film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;

--4) Pick a customer and update to your details (example shows changing customer_id = 1; replace with the row you choose)

SELECT * FROM public.customer WHERE customer_id = 1;


UPDATE public.customer
SET first_name = 'YourFirst',
    last_name  = 'YourLast',
    email      = 'you@example.com',
    activebool = TRUE
WHERE customer_id = 1;

--5) Update the same customer’s address (customer.address_id -> address.address_id)

SELECT address_id FROM public.customer WHERE customer_id = 1;

UPDATE public.address
SET address     = '123 Maple Street',
    address2    = NULL,
    district    = 'Texas',
    postal_code = '73301',
    phone       = '512-555-0101'
WHERE address_id = (SELECT address_id FROM public.customer WHERE customer_id = 1);


--Exercise 2: students table (public database)

UPDATE public.students
SET birth_date = DATE '1998-11-02'
WHERE (first_name, last_name) IN (('Lea', 'Benichou'), ('Marc', 'Benichou'));


--2) Change last_name of David from Grez to Guez
UPDATE public.students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

Delete

--3) Delete student “Lea Benichou”
DELETE FROM public.students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

Count

--4) Count how many students are in the table
SELECT COUNT(*) AS student_count
FROM public.students;

--5) Count how many were born after 2000-01-01
SELECT COUNT(*) AS born_after_2000
FROM public.students
WHERE birth_date > DATE '2000-01-01';

Insert / Alter

--6) Add a column math_grade
ALTER TABLE public.students
ADD COLUMN IF NOT EXISTS math_grade INT;

--7) Add 80 to id = 1
UPDATE public.students SET math_grade = 80 WHERE id = 1;

--8) Add 90 to ids 2 or 4
UPDATE public.students SET math_grade = 90 WHERE id IN (2, 4);

--9) Add 40 to id = 6
UPDATE public.students SET math_grade = 40 WHERE id = 6;

--10) Count how many students have grade > 83
SELECT COUNT(*) AS gt_83
FROM public.students
WHERE math_grade > 83;

--11) Add another “Omer Simpson” with same birth_date as existing Omer; grade = 70
INSERT INTO public.students (first_name, last_name, birth_date, math_grade)
SELECT 'Omer', 'Simpson', birth_date, 70
FROM public.students
WHERE first_name = 'Omer' AND last_name = 'Simpson'
LIMIT 1;

--Bonus: Count how many grades each student has (first_name, last_name, total_grade)

SELECT
  first_name,
  last_name,
  COUNT(math_grade) AS total_grade
FROM public.students
GROUP BY first_name, last_name
ORDER BY last_name, first_name;

--12) Sum of all students’ grades
SELECT SUM(math_grade) AS total_sum_grades
FROM public.students;


--Exercise 3: Items and customers (public database)

--Part I 

--1) Create table purchases
CREATE TABLE IF NOT EXISTS public.purchases (
  id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL REFERENCES public.customers(id),
  item_id     INT NOT NULL REFERENCES public.items(id),
  quantity_purchased INT NOT NULL CHECK (quantity_purchased > 0)
);

--2) Insert purchases using subqueries
-- Scott Scott bought one fan
INSERT INTO public.purchases (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM public.customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
  (SELECT id FROM public.items     WHERE name = 'fan'),
  1
);

-- Melanie Johnson bought ten large desks
INSERT INTO public.purchases (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM public.customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
  (SELECT id FROM public.items     WHERE name = 'large desk'),
  10
);

-- Greg Jones bought two small desks
INSERT INTO public.purchases (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM public.customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
  (SELECT id FROM public.items     WHERE name = 'small desk'),
  2
);

--Part II

--1) All purchases (raw)
SELECT * FROM public.purchases ORDER BY id;

--2) All purchases joined with customers
SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
FROM public.purchases p
JOIN public.customers c ON c.id = p.customer_id
ORDER BY p.id;

--3) Purchases of the customer with ID = 5
SELECT p.*
FROM public.purchases p
WHERE p.customer_id = 5
ORDER BY p.id;

--4) Purchases for a large desk AND a small desk
-- Show customers who bought both items
SELECT c.id AS customer_id, c.first_name, c.last_name
FROM public.customers c
JOIN public.purchases p ON p.customer_id = c.id
JOIN public.items i ON i.id = p.item_id
WHERE i.name IN ('large desk', 'small desk')
GROUP BY c.id, c.first_name, c.last_name
HAVING COUNT(DISTINCT i.name) = 2
ORDER BY c.id;

--5) Show all customers who have made a purchase: first name, last name, item name
SELECT DISTINCT
  c.first_name,
  c.last_name,
  i.name AS item_name
FROM public.purchases p
JOIN public.customers c ON c.id = p.customer_id
JOIN public.items i ON i.id = p.item_id
ORDER BY c.last_name, c.first_name, i.name;



--1) All items, ordered by price (lowest to highest)
SELECT id, name, price
FROM public.items
ORDER BY price ASC, id ASC;

--2) Items with a price above 80 (80 included), ordered by price (highest to lowest)
SELECT id, name, price
FROM public.items
WHERE price >= 80
ORDER BY price DESC, id DESC;

--3) The first 3 customers in alphabetical order of first_name (exclude id)
SELECT first_name, last_name
FROM public.customers
ORDER BY first_name ASC, last_name ASC
LIMIT 3;

--4) All last names only, in reverse alphabetical order (Z-A)
SELECT DISTINCT last_name
FROM public.customers
ORDER BY last_name DESC;

--Exercise 2


--1) Select all columns from the customer table
SELECT *
FROM public.customer;

--2) Display names using alias “full_name”
SELECT (first_name || ' ' || last_name) AS full_name
FROM public.customer;

--3) All distinct create_date values from customer (no duplicates)
SELECT DISTINCT create_date
FROM public.customer
ORDER BY create_date;

--4) All customer details, ordered by first_name descending
SELECT *
FROM public.customer
ORDER BY first_name DESC, last_name DESC;

--5) 
SELECT film_id, title, description, release_year, rental_rate
FROM public.film
ORDER BY rental_rate ASC, film_id ASC;

--6) Address and phone of all customers living in the Texas district (from address table)

SELECT a.address, a.phone
FROM public.customer c
JOIN public.address a ON a.address_id = c.address_id
WHERE a.district = 'Texas'
ORDER BY a.address;

--7) Retrieve all movie details where film_id is either 15 or 150
SELECT *
FROM public.film
WHERE film_id IN (15, 150);

--8) Check if your favorite movie exists (replace Your Favorite Title)

SELECT film_id, title, description, length, rental_rate
FROM public.film
WHERE title = 'Your Favorite Title';

--9) Movies starting with the first two letters of your favorite movie

SELECT film_id, title, description, length, rental_rate
FROM public.film
WHERE title ILIKE 'Yo%';

--10) Find the 10 cheapest movies
SELECT film_id, title, rental_rate
FROM public.film
ORDER BY rental_rate ASC, film_id ASC
LIMIT 10;

--11) Next 10 cheapest movies (without using LIMIT — bonus)

WITH ranked AS (
  SELECT
    film_id, title, rental_rate,
    ROW_NUMBER() OVER (ORDER BY rental_rate ASC, film_id ASC) AS rn
  FROM public.film
)
SELECT film_id, title, rental_rate
FROM ranked
WHERE rn BETWEEN 11 AND 20
ORDER BY rn;

--12) Join customer and payment: first_name, last_name, amount, payment_date ordered by customer id
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM public.customer c
JOIN public.payment p ON p.customer_id = c.customer_id
ORDER BY c.customer_id ASC, p.payment_date ASC, p.payment_id ASC;

--13) Movies which are not in inventory

SELECT f.*
FROM public.film f
LEFT JOIN public.inventory i ON i.film_id = f.film_id
WHERE i.inventory_id IS NULL
ORDER BY f.film_id;

--14) Find which city is in which country

SELECT ci.city_id, ci.city, co.country_id, co.country
FROM public.city ci
JOIN public.country co ON co.country_id = ci.country_id
ORDER BY co.country, ci.city;

--15) Bonus: See how sellers (staff) have been doing — customer id, names, amount, date, ordered by staff who sold the DVD

SELECT
  p.staff_id,
  c.customer_id,
  c.first_name,
  c.last_name,
  p.amount,
  p.payment_date
FROM public.payment p
JOIN public.customer c ON c.customer_id = p.customer_id
ORDER BY p.staff_id ASC, c.customer_id ASC, p.payment_date ASC, p.payment_id ASC;


Exercise 1 – DVD Rentals
--1 List all rentals that are still out (not returned)

SELECT *
FROM rental
WHERE return_date IS NULL;
Explanation
--When a DVD is returned, return_date is filled.
--If it is still rented → return_date remains NULL.

--2 Customers who have not returned their rentals
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    COUNT(r.rental_id) AS outstanding_rentals
FROM customer c
JOIN rental r 
ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name;

--3 All Action films with Joe Swank

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE a.first_name = 'Joe'
AND a.last_name = 'Swank'
AND c.name = 'Action';
-- Exercise 2 – Happy Halloween
--1 Number of stores and their city + country
SELECT 
    s.store_id,
    ci.city,
    co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;
--2 Total viewing time per store

SELECT 
    i.store_id,
    SUM(f.length) AS total_minutes
FROM inventory i
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY i.store_id;
--3 Customers in the cities where stores are located
SELECT DISTINCT
    cu.first_name,
    cu.last_name,
    ci.city
FROM customer cu
JOIN address a ON cu.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city_id IN (
    SELECT a.city_id
    FROM store s
    JOIN address a ON s.address_id = a.address_id
);
--4 Customers in the countries where stores are located
SELECT DISTINCT
    cu.first_name,
    cu.last_name,
    co.country
FROM customer cu
JOIN address a ON cu.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country_id IN (
    SELECT co.country_id
    FROM store s
    JOIN address a ON s.address_id = a.address_id
    JOIN city ci ON a.city_id = ci.city_id
    JOIN country co ON ci.country_id = co.country_id
);
--5 Safe list of movies (no horror / zombie words)
SELECT title, length
FROM film
WHERE film_id NOT IN (
    SELECT film_id
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.name = 'Horror'
)
AND title NOT ILIKE ANY (ARRAY[
'%beast%','%monster%','%ghost%',
'%dead%','%zombie%','%undead%'
])
AND description NOT ILIKE ANY (ARRAY[
'%beast%','%monster%','%ghost%',
'%dead%','%zombie%','%undead%'
]);
--6 Total safe viewing time
Minutes, hours, and days
SELECT 
    SUM(length) AS total_minutes,
    SUM(length)/60 AS total_hours,
    SUM(length)/1440 AS total_days
FROM film
WHERE film_id NOT IN (
    SELECT film_id
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.name='Horror'
)
AND title NOT ILIKE '%beast%'
AND title NOT ILIKE '%monster%'
AND title NOT ILIKE '%ghost%'
AND title NOT ILIKE '%dead%'
AND title NOT ILIKE '%zombie%'
AND title NOT ILIKE '%undead%';
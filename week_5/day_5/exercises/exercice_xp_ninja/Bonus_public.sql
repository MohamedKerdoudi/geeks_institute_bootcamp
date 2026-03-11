
--1) Fetch the last 2 customers in alphabetical order (A–Z), excluding id
SELECT first_name, last_name
FROM public.customers
ORDER BY last_name ASC, first_name ASC
OFFSET GREATEST((SELECT COUNT(*) FROM public.customers) - 2, 0);

Simpler alternative (PostgreSQL-only window function):
SELECT first_name, last_name
FROM (
  SELECT first_name, last_name,
         ROW_NUMBER() OVER (ORDER BY last_name, first_name) AS rn,
         COUNT(*)     OVER () AS total
  FROM public.customers
) t
WHERE rn > total - 2
ORDER BY last_name, first_name;

--2) Delete all purchases made by Scott
DELETE FROM public.purchases
WHERE customer_id IN (
  SELECT id
  FROM public.customers
  WHERE first_name = 'Scott'
    AND last_name  = 'Scott'
);

--3) Does Scott still exist in customers after deleting his purchases?
SELECT *
FROM public.customers
WHERE first_name = 'Scott' AND last_name = 'Scott';

--4) Find all purchases; join with customers so Scott’s order appears but names are blank
SELECT
  p.id AS purchase_id,
  COALESCE(c.first_name, '') AS first_name,
  COALESCE(c.last_name,  '') AS last_name,
  p.customer_id,
  p.item_id,
  p.quantity_purchased
FROM public.purchases p
LEFT JOIN public.customers c
  ON c.id = p.customer_id
ORDER BY p.id;

--5) Find all purchases; join with customers so Scott’s order does NOT appear

SELECT
  p.id AS purchase_id,
  c.first_name,
  c.last_name,
  p.customer_id,
  p.item_id,
  p.quantity_purchased
FROM public.purchases p
JOIN public.customers c
  ON c.id = p.customer_id
ORDER BY p.id;


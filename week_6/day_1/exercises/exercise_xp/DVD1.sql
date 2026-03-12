--1 Get a list of all languages
SELECT *
FROM language;
--2 List all films joined with their languages
(film title, description, language name)

SELECT f.title,
       f.description,
       l.name AS language
FROM film f
INNER JOIN language l
ON f.language_id = l.language_id;
--3 Get all languages even if there are no films in them
Use LEFT JOIN.

SELECT f.title,
       f.description,
       l.name AS language
FROM language l
LEFT JOIN film f
ON f.language_id = l.language_id;
This ensures every language appears even if it has no associated films.

--4 Create a table new_film
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
Insert some films
INSERT INTO new_film (name)
VALUES 
('The Last Hero'),
('Ocean Secret'),
('Midnight Escape');
--5 Create customer_review table
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (film_id)
        REFERENCES new_film(id)
        ON DELETE CASCADE,

    FOREIGN KEY (language_id)
        REFERENCES language(language_id)
);
--6 Add 2 movie reviews
INSERT INTO customer_review 
(film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Amazing Movie', 9, 'One of the best films I have seen!'),
(2, 1, 'Not bad', 7, 'Interesting story and good acting.');
--7 Delete a film that has a review
DELETE FROM new_film
WHERE id = 1;

--Exercise 2 – DVD Rental
--1 Update the language of some films


UPDATE film
SET language_id = 2
WHERE film_id = 10;
Example for multiple films:

UPDATE film
SET language_id = 3
WHERE film_id IN (5, 8, 15);
--2 Which foreign keys exist in the customer table?
--In the customer table, there are usually references to:
--store_id
--address_id

INSERT INTO customer 
(store_id, first_name, last_name, email, address_id, active)
VALUES
(1, 'John', 'Doe', 'john@email.com', 5, 1);
If the referenced IDs do not exist, the insert fails.

--3 Drop the customer_review table
DROP TABLE customer_review;
--Usually it is easy, but only if:
--No other tables reference it.

--  4 How many rentals are still outstanding?

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;
--5 30 most expensive movies still outstanding
SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;
--6 Help your friend find the films
-- Film 1
--About sumo wrestler and actor Penelope Monroe

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE (f.description ILIKE '%sumo%')
AND a.first_name = 'Penelope'
AND a.last_name = 'Monroe';
-- Film 2
--Short documentary (< 60 min) rated R

SELECT title
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';
-- Film 3
--Rented by Matthew Mahan, price > $4, returned between July 28 – Aug 1 2005

SELECT f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND p.amount > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';
-- Film 4
--Matthew Mahan watched it, contains "boat", expensive replacement

SELECT f.title, f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;
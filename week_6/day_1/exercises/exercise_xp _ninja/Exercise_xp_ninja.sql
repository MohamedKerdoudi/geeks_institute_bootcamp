--Exercise 1 – DVD Rentals
--1 Retrieve all films rated G or PG that are not currently rented

SELECT DISTINCT f.film_id, f.title, f.rating
FROM film f
JOIN inventory i ON f.film_id = i.film_id
WHERE f.rating IN ('G','PG')
AND i.inventory_id NOT IN (
    SELECT inventory_id
    FROM rental
    WHERE return_date IS NULL
);



--2 Create a waiting list table for children’s movies
CREATE TABLE waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    customer_id INT NOT NULL,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id)
        REFERENCES film(film_id),

    FOREIGN KEY (customer_id)
        REFERENCES customer(customer_id)
);
--3Number of people waiting for each children’s DVD
Insert test data
INSERT INTO waiting_list (film_id, customer_id)
VALUES
(10,1),
(10,2),
(15,3),
(10,4);

SELECT 
    f.title,
    COUNT(w.waiting_id) AS people_waiting
FROM waiting_list w
JOIN film f ON w.film_id = f.film_id
GROUP BY f.title;

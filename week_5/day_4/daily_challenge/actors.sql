

--1) Count how many actors are in the table**

SELECT COUNT(*) AS actor_count
FROM public.actors;

--2) Try to add a new actor with some blank fields. What will happen?


- Insert with NULLs (will fail if NOT NULL):
INSERT INTO public.actors (first_name, last_name)
VALUES (NULL, 'Doe');

- Insert with empty string (may succeed unless prevented):
INSERT INTO public.actors (first_name, last_name)
VALUES ('', 'Doe');


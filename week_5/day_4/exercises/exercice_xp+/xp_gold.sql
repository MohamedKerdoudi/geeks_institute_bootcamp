Table: public.students(id, first_name, last_name, birth_date DATE)
Fetch the first four students ordered alphabetically by last_name
SELECT first_name, last_name, birth_date
FROM public.students
ORDER BY last_name ASC, first_name ASC
LIMIT 4;

Fetch the details of the youngest student
-- Youngest = greatest birth_date
SELECT first_name, last_name, birth_date
FROM public.students
ORDER BY birth_date DESC
LIMIT 1;


Fetch three students skipping the first two students
-- Use ORDER BY for deterministic paging (choose a consistent order, e.g., id)
SELECT first_name, last_name, birth_date
FROM public.students
ORDER BY id
OFFSET 2
LIMIT 3;



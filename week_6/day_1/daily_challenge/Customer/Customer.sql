--Part I — One-to-One Relationship
--1 Create the customer table
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);
--2 Create the customer_profile table
To enforce One-to-One, make customer_id UNIQUE.

CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE,
    FOREIGN KEY (customer_id) 
    REFERENCES customer(id)
);


--3 Insert customers
INSERT INTO customer (first_name, last_name)
VALUES
('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive');
--4 Insert customer profiles using subqueries
John (logged in)
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (
TRUE,
(SELECT id FROM customer WHERE first_name='John')
);
Jerome (not logged in)
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (
FALSE,
(SELECT id FROM customer WHERE first_name='Jerome')
);
Lea has no profile yet.

--5 Queries with Joins
Use INNER JOIN
SELECT c.first_name
FROM customer c
INNER JOIN customer_profile cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

Use LEFT JOIN (important)

SELECT c.first_name, cp.isLoggedIn
FROM customer c
LEFT JOIN customer_profile cp
ON c.id = cp.customer_id;
SELECT COUNT(*)
FROM customer_profile
WHERE isLoggedIn = FALSE;


SELECT COUNT(*)
FROM customer c
LEFT JOIN customer_profile cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE OR cp.isLoggedIn IS NULL;
--Part II — Many-to-Many Relationship
--1 Create book table
CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);
--2 Insert books
INSERT INTO book (title, author)
VALUES
('Alice In Wonderland','Lewis Carroll'),
('Harry Potter','J.K Rowling'),
('To kill a mockingbird','Harper Lee');
--3 Create student table

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);
--4 Insert students
INSERT INTO student (name, age)
VALUES
('John',12),
('Lera',11),
('Patrick',10),
('Bob',14);
--5 Create library junction table

CREATE TABLE library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,

    PRIMARY KEY (book_fk_id, student_fk_id),

    FOREIGN KEY (book_fk_id)
    REFERENCES book(book_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

    FOREIGN KEY (student_fk_id)
    REFERENCES student(student_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

--6 Insert records using subqueries
--John borrowed Alice in Wonderland
INSERT INTO library
VALUES (
(SELECT book_id FROM book WHERE title='Alice In Wonderland'),
(SELECT student_id FROM student WHERE name='John'),
'2022-02-15'
);
--Bob borrowed To Kill a Mockingbird
INSERT INTO library
VALUES (
(SELECT book_id FROM book WHERE title='To kill a mockingbird'),
(SELECT student_id FROM student WHERE name='Bob'),
'2021-03-03'
);
--Lera borrowed Alice in Wonderland
INSERT INTO library
VALUES (
(SELECT book_id FROM book WHERE title='Alice In Wonderland'),
(SELECT student_id FROM student WHERE name='Lera'),
'2021-05-23'
);
--Bob borrowed Harry Potter
INSERT INTO library
VALUES (
(SELECT book_id FROM book WHERE title='Harry Potter'),
(SELECT student_id FROM student WHERE name='Bob'),
'2021-08-12'
);
--7 Display Data

SELECT *
FROM library;

SELECT s.name, b.title
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;

SELECT AVG(s.age)
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';
 Delete a student


DELETE FROM student
WHERE name = 'John';

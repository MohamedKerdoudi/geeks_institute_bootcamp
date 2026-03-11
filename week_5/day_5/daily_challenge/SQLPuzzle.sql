--Q1
SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);

--Predicted output: 0
--Actual output: 0

--Q2
SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5);

Step-by-step:
- Subquery WHERE id = 5 picks only 5, so it returns {5} (no NULLs).
- Condition: ft.id NOT IN {5}.
- Rows:
  - 5 → NOT IN {5} = FALSE → excluded
  - 6 → TRUE → included
  - 7 → TRUE → included
  - NULL → comparison is UNKNOWN → excluded
- Included: ids 6, 7 → 2 rows.

--Predicted output: 2
--Actual output: 2

--Q3
SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab);

Step-by-step:
- Subquery returns {5, NULL}.
- Because the set contains NULL, any NOT IN comparison becomes UNKNOWN unless the DB can prove it doesn’t need to compare to NULL. Standard behavior: presence of NULL in the right-hand set makes ft.id NOT IN (...) evaluate to UNKNOWN for any non-NULL ft.id (5, 6, 7) and also UNKNOWN for NULL.
- Therefore, no rows pass.

--Predicted output: 0
--Actual output: 0

--Q4
SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL);

--Predicted output: 2
--Actual output: 2

SELECT
	title
FROM
	film
LEFT JOIN film_category
ON film_category.film_id = film.film_id
LEFT JOIN category
ON category.category_id = film_category.category_id
WHERE name = 'Action'

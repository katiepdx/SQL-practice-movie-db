SELECT
	name
FROM
	inventory
LEFT JOIN film
ON film.film_id = inventory.film_id
LEFT JOIN rental
ON rental.inventory_id = inventory.inventory_id
LEFT JOIN film_category
ON film.film_id = film_category.film_id
LEFT JOIN category
ON category.category_id = film_category.category_id
WHERE rental_id IS NULL

SELECT
	title
FROM
	inventory
LEFT JOIN film
ON film.film_id = inventory.film_id
LEFT JOIN rental
ON rental.inventory_id = inventory.inventory_id
WHERE rental_id IS NULL

SELECT
	title
FROM
	customer
LEFT JOIN address
ON address.address_id = customer.address_id
LEFT JOIN city
ON city.city_id = address.city_id
LEFT JOIN rental
ON customer.customer_id = rental.customer_id
LEFT JOIN inventory
ON inventory.inventory_id = rental.inventory_id
LEFT JOIN film
ON film.film_id = inventory.film_id
WHERE city = 'Dundee'

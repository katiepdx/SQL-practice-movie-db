SELECT
	first_name,
	last_name,
	address,
	city
FROM
	customer
LEFT JOIN address
ON address.address_id = customer.address_id
LEFT JOIN city
ON address.city_id = city.city_id

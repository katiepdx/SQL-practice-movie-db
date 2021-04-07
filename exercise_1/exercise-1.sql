SELECT
	address_id
FROM
	address
INNER JOIN city
ON city.city_id = address.city_id
WHERE city = 'Dundee'

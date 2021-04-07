SELECT
	rental_date
FROM
	customer
INNER JOIN rental
ON rental.customer_id = customer.customer_id
WHERE first_name = 'Patricia'

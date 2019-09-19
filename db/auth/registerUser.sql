INSERT INTO devforumuser (first_name, username, hash)
VALUES ($1, $2, $3)
-- return all of the rows that you just created
RETURNING *;
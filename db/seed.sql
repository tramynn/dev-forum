CREATE TABLE devforumusers (
  user_id SERIAL PRIMARY,
  first_name VARCHAR(25) NOT NULL,
  username VARCHAR(15) NOT NULL,
  hash TEXT NOT NULL
)


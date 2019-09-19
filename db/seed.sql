-- table setups
CREATE TABLE devforumuser (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(25) NOT NULL,
  username VARCHAR(15) NOT NULL,
  hash TEXT NOT NULL
);

CREATE TABLE topic (
  topic_id SERIAL PRIMARY KEY,
  topic_name TEXT NOT NULL
);

CREATE TABLE post (
  post_id SERIAL PRIMARY KEY,
  topic_id INTEGER NOT NULL REFERENCES topic(topic_id),
  user_id INTEGER NOT NULL REFERENCES devforumuser(user_id),
  user_post VARCHAR(500)
);

-- Add a user
INSERT INTO devforumuser (first_name, username, hash)
VALUES ('Tramy', 'user1', 'password')
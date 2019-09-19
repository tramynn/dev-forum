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

-- Hardcoded topics
INSERT INTO topic (topic_name)
VALUES ('Front-end'), ('Back-end'), ('Database');

-- get all topics
SELECT * FROM topic;

-- get posts from topic
SELECT * FROM post p
INNER JOIN topic t
ON p.topic_id = t.topic_id;

-- DUMMY DATA for posts
-- use single quotes bc double quotes will check for col
INSERT INTO post (topic_id, user_id, user_post)
VALUES (1, 3, 'First Post'),
(2, 2, 'Hellurz'),
(3, 1, 'Hungry all the time');

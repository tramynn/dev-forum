INSERT INTO post (topic_id, user_id, user_post)
VALUES ($1, $2, $3);

-- get updated one
SELECT * FROM post
WHERE topic_id  = $1;
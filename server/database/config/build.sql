BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  location VARCHAR(125) NOT NULL
);

INSERT INTO users (name, location) VALUES 
(
  'Mohd',
  'Gaza'
), 
(
  'Baraa',
  'Khanyuinis'
);

COMMIT;
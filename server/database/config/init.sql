BEGIN;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL
);

INSERT INTO users (name, location) VALUES
('Muhammad', 'Khan Yunis'),
('Noor', 'Gaza'),
('Ibrahim', 'North'),
('Nadia', 'Khalil'),
('Asmaa', 'Middle'),
('Reem', 'Jerusalem'),
('Mansour', 'Gaza');

COMMIT;
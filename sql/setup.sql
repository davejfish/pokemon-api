-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists pokemon;

CREATE table pokemon (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
);

INSERT INTO pokemon (name, type) VALUES
('bulbasaur', 'grass'),
('ivysaur', 'grass'),
('venasaur', 'grass'),
('charmander', 'fire'),
('charmeleon', 'fire'),
('charizard', 'fire'),
('squirtle', 'water'),
('wartortle', 'water'),
('blastoise', 'water'),
('caterpie', 'bug');

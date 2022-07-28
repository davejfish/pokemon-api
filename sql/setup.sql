-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists attacks_to_pokemon;
DROP table if exists pokemon;
DROP table if exists attacks;

CREATE table pokemon (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    PRIMARY KEY (id)
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


CREATE table attacks (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    atk_name VARCHAR NOT NULL,
    atk_type VARCHAR NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO attacks (atk_name, atk_type) VALUES
('leech seed', 'grass'),
('razor wind', 'grass'),
('mega drain', 'grass'),
('solar beam', 'grass'),
('bubble', 'water'),
('bubble beam', 'water'),
('water gun', 'water'),
('surf', 'water'),
('ember', 'fire'),
('flamethrower', 'fire'),
('fire spin', 'fire'),
('fire blast', 'fire'),
('string shot', 'bug');


CREATE table attacks_to_pokemon (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    atk_id BIGINT NOT NULL REFERENCES attacks (id),
    poke_id BIGINT NOT NULL REFERENCES pokemon (id)
);

INSERT INTO attacks_to_pokemon (atk_id, poke_id) VALUES
(1, 1);
(2, 1);
(1, 2);
(2, 2);
(3, 2);
(1, 3);
(2, 3);
(3, 3);
(4, 3);
(9, 4);
(9, 5);
(10, 5);
(9, 6);
(10, 6);
(11, 6);
(12, 6);
(5, 7);
(7, 7);
(5, 8);
(6, 8);
(7, 8);
(5, 9);
(6, 9);
(7, 9);
(8, 9);
(13, 10);

CREATE TABLE events (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name varchar(55) NOT NULL,
    location varchar(55) NOT NULL,
    price_range INT NOT NULL check (price_range >= 1 and price_range <= 5)
);

INSERT INTO events (id, name, location, price_range) 
VALUES(1, 'Southbank', 'Brisbane', 2); 


ALTER TABLE events ADD COLUMN featured boolean; 
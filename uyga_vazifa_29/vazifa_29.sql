-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 1
CREATE DATABASE IF NOT EXISTS store

USE store

CREATE Table IF NOT EXISTS products (
   id int PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL,
   category VARCHAR(50) NOT NULL,
   price DECIMAL(10,2) NOT NULL,
   stock int NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   )

DESCRIBE products

-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 2

INSERT INTO products (name, category, price, stock) VALUES
("iPhone 13", "Electronics", 900, 10),
("Samsung TV 55", "Electronics", 1200, 5),
("Nike Shoes", "Fashion", 150, 20),
("Adidas T-shirt", "Fashion", 40, 30),
("HP Laptop", "Electronics", 700, 7)

SELECT * FROM products

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 3

SELECT name, category, price FROM products

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 4

SELECT * FROM products WHERE price > 500

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 5

SELECT * FROM products ORDER BY  price DESC

-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala -6

UPDATE products SET price=(price*2) where name="Nike Shoes"

SELECT * FROM products

-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 7

DELETE FROM products WHERE name="Adidas T-shirt"

SELECT * FROM products

-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 8
SELECT * FROM products WHERE name LIKE "S%"

-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 9
SELECT COUNT(*) FROM products

-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 10
SELECT MAX(price) as eng_qimmat, MIN(price) as eng_arzon FROM products

-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 11
SELECT SUM(price) as jami_narx FROM products

-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 12
SELECT AVG(price) as ortacha_narx FROM products
CREATE DATABASE Flowers_shop

USE Flowers_shop

CREATE Table flowers 
(
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(30),
   type VARCHAR(30),
   price DECIMAL(15,2),
   image VARCHAR(100)
)

CREATE Table customers 
(
   id INT(11) PRIMARY KEY AUTO_INCREMENT,
   fullname VARCHAR(30),
   email VARCHAR(30),
   phone VARCHAR(20)
)

CREATE Table orders 
(
   id INT(11) PRIMARY KEY AUTO_INCREMENT,
   customer_id INT(11),
   buy_date DATETIME,
   Foreign Key (customer_id) REFERENCES customers(id)
)

CREATE Table order_item 
(
   id INT(11) PRIMARY KEY AUTO_INCREMENT,
   flower_id INT(11),
   order_id INT(11),
   Foreign Key (flower_id) REFERENCES flowers(id),
   Foreign Key (order_id) REFERENCES orders(id)
)

INSERT INTO flowers (name, type, price, image) VALUES
('Rose', 'Red', 10.99, 'rose.jpg'),
('Tulip', 'Yellow', 8.50, 'tulip.jpg'),
('Lily', 'White', 12.75, 'lily.jpg'),
('Orchid', 'Purple', 15.20, 'orchid.jpg'),
('Sunflower', 'Yellow', 9.30, 'sunflower.jpg')


INSERT INTO customers(fullname, email, phone) VALUES
('Ali Valiyev', 'ali@example.com', '+998901234567'),
('Madina Karimova', 'madina@example.com', '+998933214567'),
('Otabek Nishonov', 'otabek@example.com', '+998977654321'),
('Dilnoza Abdullayeva', 'dilnoza@example.com', '+998901112233'),
('Jasur Rahmonov', 'jasur@example.com', '+998935556677')

SELECT * FROM customers
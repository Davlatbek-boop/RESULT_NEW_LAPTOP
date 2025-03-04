
-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MASALA - 1
DROP PROCEDURE If EXISTS GetCustomerOrders

CREATE PROCEDURE IF NOT EXISTS GetCustomerOrders(IN cus_id INT)
BEGIN
    SELECT * FROM orders where customer_id=cus_id;
END

CALL `GetCustomerOrders`(2)


-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MASALA - 2


DROP PROCEDURE IF EXISTS AddOrder;

CREATE PROCEDURE AddOrder(
    IN p_order_date DATE,
    IN p_total_price DECIMAL(10,2),
    IN p_status_id INT,
    OUT p_order_id INT
)
BEGIN
    INSERT INTO orders (order_date, total_price, status_id)
    VALUES (p_order_date, COALESCE(p_total_price, 0), p_status_id);

    SET p_order_id = LAST_INSERT_ID();
END 

CALL `AddOrder`("2025-01-01", 30000, 1, 3)

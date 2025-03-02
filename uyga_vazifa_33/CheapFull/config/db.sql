CREATE DATABASE cheapfull

DROP DATABASE cheapfull

USE cheapfull

CREATE TABLE gas_station_branch (
   id BIGINT PRIMARY KEY AUTO_INCREMENT,
   gas_station_id BIGINT,
   branch_name VARCHAR(40),
   address VARCHAR(50),
   location VARCHAR(50),
   phone_number VARCHAR(20)
)

CREATE TABLE gas_station (
   id BIGINT PRIMARY KEY AUTO_INCREMENT,
   main_gas_station_name VARCHAR(50)
)

DESC gas_station

CREATE TABLE gas_station_fuel_type (
   id BIGINT PRIMARY KEY AUTO_INCREMENT,
   gas_station_branch_id BIGINT,
   fuel_type_id BIGINT,
   price DECIMAL(10,2)
)

CREATE TABLE fuel_types (
   id BIGINT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(30)
)

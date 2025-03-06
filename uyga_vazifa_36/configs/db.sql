
CREATE DATABASE pharmacy

DROP DATABASE pharmacy

USE pharmacy


CREATE TABLE `Pharmacies`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `region_id` BIGINT NOT NULL,
    `district_id` BIGINT NOT NULL,
    Foreign Key (region_id) REFERENCES region(id),
    Foreign Key (district_id) REFERENCES district(id)
);
CREATE TABLE `Medicines`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `manufacturer` VARCHAR(255) NOT NULL,
    `medicine_type_id` BIGINT NOT NULL,
    `price` FLOAT(53) NOT NULL,
    `expiry_date` DATE NOT NULL,
    `info` TEXT NOT NULL,
    Foreign Key (medicine_type_id) REFERENCES MedicineType(id)
);


CREATE TABLE `Stock`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pharmacy_id` BIGINT NOT NULL,
    `medicine_id` BIGINT NOT NULL,
    `quantity` BIGINT NOT NULL,
    Foreign Key (pharmacy_id) REFERENCES pharmacies(id),
    Foreign Key (medicine_id) REFERENCES medicines(id)
);
CREATE TABLE `District`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `region_id` BIGINT NOT NULL,
    Foreign Key (region_id) REFERENCES Region(id)
);
CREATE TABLE `Region`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);


CREATE TABLE `MedicineType`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);


SELECT m.* FROM medicines m 
LEFT JOIN stock s ON s.medicine_id = m.id 
LEFT JOIN pharmacies p ON s.pharmacy_id = p.id
WHERE m.expiry_date < "2025-03-05" AND p.name="Dorixona №1"

SELECT p.name, m.name, s.quantity as soni FROM stock s
LEFT JOIN pharmacies p ON s.pharmacy_id=p.id
LEFT JOIN medicines m ON s.medicine_id=m.id
WHERE p.name = "Dorixona №1" and m.name = "Paracetamol"

SELECT p.name, m.name, m.price FROM stock s
LEFT JOIN pharmacies p ON s.pharmacy_id=p.id
LEFT JOIN medicines m ON s.medicine_id=m.id
WHERE m.name = "Paracetamol"
ORDER BY m.price ASC

SELECT m.name as medicines, d.name as tuman, m.price as narx FROM  stock s
LEFT JOIN medicines m ON m.id=s.medicine_id
LEFT JOIN medicinetype mt ON mt.id=m.medicine_type_id
LEFT JOIN pharmacies p ON p.id=s.pharmacy_id
LEFT JOIN district d ON d.id=p.district_id
WHERE d.name ="Chilonzor" AND mt.name="Og‘riq qoldiruvchi"
ORDER BY m.price ASC LIMIT 10




INSERT INTO `Region` (`name`) VALUES
('Toshkent'), ('Samarqand'), ('Farg‘ona'), ('Buxoro'), ('Xorazm'),
('Namangan'), ('Andijon'), ('Qashqadaryo'), ('Surxondaryo'), ('Navoiy');


INSERT INTO `District` (`name`, `region_id`) VALUES
('Chilonzor', 1), ('Registon', 2), ('Qo‘qon', 3), ('G‘ijduvon', 4), ('Urganch', 5),
('Chortoq', 6), ('Asaka', 7), ('Shahrisabz', 8), ('Termiz', 9), ('Zarafshon', 10);


INSERT INTO `Pharmacies` (`name`, `address`, `location`, `phone`, `email`, `region_id`, `district_id`) VALUES
('Dorixona №1', 'Chilonzor 10', '41.2995, 69.2401', '+998901234567', 'dori1@example.com', 1, 1),
('Dorixona №2', 'Registon 5', '39.6542, 66.9751', '+998902345678', 'dori2@example.com', 2, 2),
('Dorixona №3', 'Qo‘qon markazi', '40.5283, 70.9422', '+998903456789', 'dori3@example.com', 3, 3),
('Dorixona №4', 'G‘ijduvon 12', '40.1, 64.6', '+998904567890', 'dori4@example.com', 4, 4),
('Dorixona №5', 'Urganch ko‘chasi', '41.55, 60.6333', '+998905678901', 'dori5@example.com', 5, 5),
('Dorixona №6', 'Chortoq 23', '40.9, 71.55', '+998906789012', 'dori6@example.com', 6, 6),
('Dorixona №7', 'Asaka maydoni', '40.6333, 72.2333', '+998907890123', 'dori7@example.com', 7, 7),
('Dorixona №8', 'Shahrisabz 45', '39.05, 66.8333', '+998908901234', 'dori8@example.com', 8, 8),
('Dorixona №9', 'Termiz bozori', '37.2333, 67.3', '+998909012345', 'dori9@example.com', 9, 9),
('Dorixona №10', 'Zarafshon 78', '41.5833, 64.2', '+998901123456', 'dori10@example.com', 10, 10);


INSERT INTO `MedicineType` (`name`) VALUES
('Og‘riq qoldiruvchi'), ('Antibiotik'), ('Vitamin'), ('Allergiyaga qarshi'), ('Yurak dorisi'),
('Parazitar vosita'), ('Oshqozon dori'), ('Qon bosimi uchun'), ('Jigar dorisi'), ('Ko‘z tomchisi');


INSERT INTO `Medicines` (`name`, `manufacturer`, `medicine_type_id`, `price`, `expiry_date`, `info`) VALUES 
('Paracetamol', 'Pharma Inc.', 1, 2.5, '2025-01-15', 'Og‘riq qoldiruvchi va isitma tushiruvchi vosita.'),
('Ibuprofen', 'MedLife', 1, 3.0, '2024-12-10', 'Yallig‘lanishga qarshi va og‘riq qoldiruvchi vosita.'),
('Ceftriaxone', 'BioTech', 2, 8.5, '2026-06-20', 'Bakterial infeksiyalarni davolash uchun antibiotik.'),
('Vitamin C', 'VitaCorp', 3, 1.5, '2025-09-05', 'Immunitetni mustahkamlash uchun vitamin.'),
('Loratadin', 'AllergoPharm', 4, 4.0, '2024-11-30', 'Allergiya simptomlarini yengillashtiruvchi vosita.'),
('Nitroglycerin', 'CardioMed', 5, 10.0, '2026-04-18', 'Yurak ishemik kasalliklarida qo‘llaniladigan dori.'),
('Amoxicillin', 'Antibio Ltd.', 2, 5.0, '2025-08-22', 'Ko‘plab bakterial infeksiyalar uchun antibiotik.'),
('Metronidazole', 'MediCare', 6, 3.5, '2025-07-10', 'Parazitar va bakterial infeksiyalar uchun dori.'),
('Diclofenac', 'PainRelief Co.', 1, 6.0, '2024-10-15', 'Og‘riq va yallig‘lanish uchun steroid bo‘lmagan dorivor vosita.'),
('Aspirin', 'Bayer', 1, 2.0, '2025-02-28', 'Qon suyultiruvchi va og‘riq qoldiruvchi dori.');


INSERT INTO `Stock` (`pharmacy_id`, `medicine_id`, `quantity`) VALUES 
(1, 1, 50),  -- Paracetamol (Dorixona №1)
(1, 2, 30),  -- Ibuprofen (Dorixona №1)
(2, 3, 20),  -- Ceftriaxone (Dorixona №2)
(2, 4, 40),  -- Vitamin C (Dorixona №2)
(3, 5, 60),  -- Loratadin (Dorixona №3)
(3, 6, 80),  -- Nitroglycerin (Dorixona №3)
(4, 7, 70),  -- Amoxicillin (Dorixona №4)
(4, 8, 90),  -- Metronidazole (Dorixona №4)
(5, 9, 100), -- Diclofenac (Dorixona №5)
(5, 10, 110); -- Aspirin (Dorixona №5)

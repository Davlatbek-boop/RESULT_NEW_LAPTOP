CREATE DATABASE Univer

USE Univer

CREATE Table faculty (id INT(11) PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50))

INSERT INTO faculty (name) VALUES
("Dasturlash"),
("SMM")

CREATE Table region (id INT(11) PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30))

INSERT INTO region (name) VALUES
("Toshkent"),
("Samarqand"),
("Andijon"),
("Farg'ona"),
("Namangan"),
("Navoiy"),
("Buxoro"),
("Jizzax"),
("Sirdaryo"),
("Xorazm"),
("Surxondaryo"),
("Qashqadaryo"),
("Qoraqalpog'iston Respublikasi")

CREATE Table gruppa (
   id INT(11) PRIMARY KEY AUTO_INCREMENT, 
   name VARCHAR(30), 
   faculty_id INT(11),
   Foreign Key (faculty_id) REFERENCES faculty(id)
   )

INSERT INTO gruppa (name, faculty_id) VALUES
("N121",1),
("N18",1),
("N123",2)

CREATE Table student (
   id int(11) PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(30),
   region_id int(11),
   group_id int(11),
   Foreign Key (region_id) REFERENCES region(id),
   Foreign Key (group_id) REFERENCES gruppa(id)
)

INSERT INTO student (name, region_id, group_id) VALUES
("Davlat",2,2),
("Timur",6,2),
("Abbos",5,3),
("G'anisher",2,1),
("Abdurahmon",11,3),
("Quvondiq",8,2),
("Sardor",1,1),
("Ibrohim",9,2),
("Nodir",7,3),
("Aziza",2,1)


SELECT st.id, st.name as Ismi, rg.name as shahar, gr.name as guruh, ft.name as fakultet
FROM student st
JOIN region rg on st.region_id = rg.id
JOIN gruppa gr on st.group_id = gr.id
LEFT JOIN faculty ft on gr.faculty_id = ft.id
WHERE st.name LIKE "A%"


-------------------
SELECT st.id, st.name as Ismi, reg.name as shahar, gr.name as guruh, f.name as fakultet
FROM student st
LEFT JOIN region reg on st.region_id = reg.id
LEFT JOIN gruppa gr on st.group_id = gr.id
LEFT JOIN faculty f on gr.faculty_id = f.id
WHERE st.region_id = 2
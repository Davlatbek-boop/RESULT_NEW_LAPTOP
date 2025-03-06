const db = require("../configs/db");

const getAllExpired = (req, res) => {
  const { pharmacyName } = req.body;
  db.query(
    `SELECT m.* FROM medicines m 
LEFT JOIN stock s ON s.medicine_id = m.id 
LEFT JOIN pharmacies p ON s.pharmacy_id = p.id
WHERE m.expiry_date < "2025-03-07" AND p.name=?`,
    [pharmacyName],
    (error, result) => {
      if (error) {
        console.log("Error selecting expired");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const getAllByMedicines = (req, res) => {
  const { pharmacyName, medicineName } = req.body;
  db.query(
    `SELECT p.name as pharmacy, m.name, s.quantity as soni FROM stock s
LEFT JOIN pharmacies p ON s.pharmacy_id=p.id
LEFT JOIN medicines m ON s.medicine_id=m.id
WHERE p.name = ? and m.name = ?`,
    [pharmacyName, medicineName],
    (error, result) => {
      if (error) {
        console.log("Error selected medicines by pharmacy");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const getMedicinesFilter = (req, res) => {
  const { medName } = req.body;
  db.query(
    `SELECT m.name as medicin, p.name as pharmacy, m.price FROM stock s
LEFT JOIN pharmacies p ON s.pharmacy_id=p.id
LEFT JOIN medicines m ON s.medicine_id=m.id
WHERE m.name = ?
ORDER BY m.price ASC`,
    [medName],
    (error, result) => {
      if (error) {
        console.log("Error selecting medicines filter");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(200).send(result);
    }
  );
};

const getAllByMedicinesDistrict = (req, res) => {
  const { districtName, medicineName } = req.body;
  db.query(
    `SELECT m.name as medicines, d.name as tuman, m.price as narx FROM  stock s
LEFT JOIN medicines m ON m.id=s.medicine_id
LEFT JOIN medicinetype mt ON mt.id=m.medicine_type_id
LEFT JOIN pharmacies p ON p.id=s.pharmacy_id
LEFT JOIN district d ON d.id=p.district_id
WHERE d.name = ? AND mt.name=?
ORDER BY m.price ASC LIMIT 10`,
    [districtName, medicineName],
    (error, result) => {
      if (error) {
        console.log("Error selected medicines by pharmacy");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};








const getAllMedicines = (req, res) => {
  db.query("SELECT * FROM medicines", (error, result) => {
    if (error) {
      console.log("Error selecting medicines");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const getMedicinesByID = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM medicines WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting medicines");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const addMedicin = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "INSERT INTO medicines (name, manufacturer, medicine_type_id, price, expiry_date, info) VALUES (?,?,?,?,?,?) ",
    [name, manufacturer, medicine_type_id, price, expiry_date, info],
    (error, result) => {
      if (error) {
        console.log("Error posting medicines");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const updateMedicinByID = (req, res) => {
  const id = req.params.id;
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "UPDATE medicines SET name=?, manufacturer=?, medicine_type_id=?, price=?, expiry_date=?, info=? WHERE id = ?",
    [name, manufacturer, medicine_type_id, price, expiry_date, info, id],
    (error, result) => {
      if (error) {
        console.log("Error updating medicines");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const deleteMedicinByID = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM medicines WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error deleting medicines");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(201).send(result);
  });
};

module.exports = {
  getAllExpired,
  getAllByMedicines,
  getMedicinesFilter,
  getAllByMedicinesDistrict,
  getAllMedicines,
  getMedicinesByID,
  addMedicin,
  updateMedicinByID,
  deleteMedicinByID,
};

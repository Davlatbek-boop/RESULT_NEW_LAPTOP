const db = require("../configs/db");

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
  getAllMedicines,
  getMedicinesByID,
  addMedicin,
  updateMedicinByID,
  deleteMedicinByID,
};

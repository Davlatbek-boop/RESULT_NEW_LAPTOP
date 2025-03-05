const db = require("../configs/db");

const getAllMedicineType = (req, res) => {
  db.query("SELECT * FROM medicinetype", (error, result) => {
    if (error) {
      console.log("Error selecting medicinetype");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const getMedicineTypeByID = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM medicinetype WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting medicinetype");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const addMedicineType = (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO medicinetype (name) VALUES (?) ", [name], (error, result) => {
    if (error) {
      console.log("Error posting medicinetype");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(201).send(result);
  });
};

const updateMedicineTypeByID = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE medicinetype SET name=? WHERE id = ?",
    [name, id],
    (error, result) => {
      if (error) {
        console.log("Error updating medicinetype");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const deleteMedicineTypeByID = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM medicinetype WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error deleting medicinetype");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(201).send(result);
  });
};

module.exports = {
  getAllMedicineType,
  getMedicineTypeByID,
  addMedicineType,
  updateMedicineTypeByID,
  deleteMedicineTypeByID,
};

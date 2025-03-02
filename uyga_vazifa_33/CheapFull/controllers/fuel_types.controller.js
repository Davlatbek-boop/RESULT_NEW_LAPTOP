const db = require("../config/db");

const getAllFuelTypes = (req, res) => {
  db.query("SELECT * FROM fuel_types", (error, result) => {
    if (error) {
      console.log("Error selecting fuel_types");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

const getFuelTypesById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM fuel_types WHERE id=?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting fuel_types");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

const addFuelTypes = (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO fuel_types (name) VALUES (?)",
    [name],
    (error, result) => {
      if (error) {
        console.log("Error ADDING fuel_types");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const updateFuelTypesById = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE fuel_types SET name=? WHERE id=?",
    [name, id],
    (error, result) => {
      if (error) {
        console.log("Error ADDING fuel_types");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const deleteFuelTypesById = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM fuel_types WHERE id=?", [id], (error, result) => {
    if (error) {
      console.log("Error ADDING fuel_types");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

module.exports = {
  getAllFuelTypes,
  getFuelTypesById,
  addFuelTypes,
  updateFuelTypesById,
  deleteFuelTypesById,
};

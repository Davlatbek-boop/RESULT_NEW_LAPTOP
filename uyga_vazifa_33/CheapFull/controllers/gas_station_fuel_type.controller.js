const db = require("../config/db");

const getAllStationFuelType = (req, res) => {
  db.query("SELECT * FROM gas_station_fuel_type", (error, result) => {
    if (error) {
      console.log("Error selecting gas_station_fuel_type");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

const getStationFuelTypeById = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM gas_station_fuel_type WHERE id=?",
    [id],
    (error, result) => {
      if (error) {
        console.log("Error selecting gas_station_fuel_type");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const addStationFuelType = (req, res) => {
  const { gas_station_branch_id, fuel_type_id, price } = req.body;
  db.query(
    "INSERT INTO gas_station_fuel_type (gas_station_branch_id, fuel_type_id, price) VALUES (?,?,?)",
    [gas_station_branch_id, fuel_type_id, price],
    (error, result) => {
      if (error) {
        console.log("Error ADDING gas_station_fuel_type");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(201).send(result);
    }
  );
};

const updateStationFuelTypeById = (req, res) => {
  const id = req.params.id;
  const { gas_station_branch_id, fuel_type_id, price } = req.body;
  db.query(
    "UPDATE gas_station_fuel_type SET gas_station_branch_id=?, fuel_type_id=?, price=? WHERE id=?",
    [gas_station_branch_id, fuel_type_id, price, id],
    (error, result) => {
      if (error) {
        console.log("Error ADDING gas_station_fuel_type");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const deleteStationFuelTypeById = (req, res) => {
  const id = req.params.id;
  db.query(
    "DELETE FROM gas_station_fuel_type WHERE id=?",
    [id],
    (error, result) => {
      if (error) {
        console.log("Error ADDING gas_station_fuel_type");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

module.exports = {
  getAllStationFuelType,
  getStationFuelTypeById,
  addStationFuelType,
  updateStationFuelTypeById,
  deleteStationFuelTypeById,
};

const db = require("../config/db");

const getAllStation = (req, res) => {
  db.query("SELECT * FROM gas_station", (error, result) => {
    if (error) {
      console.log("Error selecting gas_station");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

const getStationById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM gas_station WHERE id=?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting gas_station");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

const addStation = (req, res) => {
  const { main_gas_station_name } = req.body;
  db.query(
    "INSERT INTO gas_station (main_gas_station_name) VALUES (?)",
    [main_gas_station_name],
    (error, result) => {
      if (error) {
        console.log("Error ADDING gas_station");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const updateStationById = (req, res) => {
  const id = req.params.id;
  const { main_gas_station_name } = req.body;
  db.query(
    "UPDATE gas_station SET main_gas_station_name=? WHERE id=?",
    [main_gas_station_name, id],
    (error, result) => {
      if (error) {
        console.log("Error ADDING gas_station");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const deleteStationById = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM gas_station WHERE id=?", [id], (error, result) => {
    if (error) {
      console.log("Error ADDING gas_station");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

module.exports = {
  getAllStation,
  getStationById,
  addStation,
  updateStationById,
  deleteStationById,
};

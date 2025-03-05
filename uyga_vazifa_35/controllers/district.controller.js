const db = require("../configs/db");

const getAllDistrict = (req, res) => {
  db.query("SELECT * FROM district", (error, result) => {
    if (error) {
      console.log("Error selecting district");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const getDistrictByID = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM district WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting district");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const addDistrict = (req, res) => {
  const { name, region_id } = req.body;
  db.query(
    "INSERT INTO district (name, region_id) VALUES (?,?) ",
    [name, region_id],
    (error, result) => {
      if (error) {
        console.log("Error posting district");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const updateDistrictByID = (req, res) => {
  const id = req.params.id;
  const { name, region_id } = req.body;
  db.query(
    "UPDATE district SET name=?, region_id=? WHERE id = ?",
    [name, region_id, id],
    (error, result) => {
      if (error) {
        console.log("Error updating district");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const deleteDistrictByID = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM district WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error deleting district");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(201).send(result);
  });
};

module.exports = {
  getAllDistrict,
  getDistrictByID,
  addDistrict,
  updateDistrictByID,
  deleteDistrictByID,
};

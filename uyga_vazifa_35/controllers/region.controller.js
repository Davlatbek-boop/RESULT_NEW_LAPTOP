const db = require("../configs/db");

const getAllRegion = (req, res) => {
  db.query("SELECT * FROM region", (error, result) => {
    if (error) {
      console.log("Error selecting region");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const getRegionByID = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM region WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting region");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const addRegion = (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO region (name) VALUES (?) ",
    [name],
    (error, result) => {
      if (error) {
        console.log("Error posting region");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const updateRegionByID = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE region SET name=? WHERE id = ?",
    [name, id],
    (error, result) => {
      if (error) {
        console.log("Error updating region");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const deleteRegionByID = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM region WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error deleting region");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(201).send(result);
  });
};

module.exports = {
  getAllRegion,
  getRegionByID,
  addRegion,
  updateRegionByID,
  deleteRegionByID,
};

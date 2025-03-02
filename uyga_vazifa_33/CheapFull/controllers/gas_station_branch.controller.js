const db = require("../config/db");

const getAllStationBranch = (req, res) => {
  db.query("SELECT * FROM gas_station_branch", (error, result) => {
    if (error) {
      console.log("Error selecting gas_station_branch");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

const getStationBranchById = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM gas_station_branch WHERE id=?",
    [id],
    (error, result) => {
      if (error) {
        console.log("Error selecting gas_station_branch");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const addStationBranch = (req, res) => {
  const { gas_station_id, branch_name, address, location, phone_number } =
    req.body;
  db.query(
    "INSERT INTO gas_station_branch (gas_station_id, branch_name, address, location, phone_number) VALUES (?,?,?,?,?)",
    [gas_station_id, branch_name, address, location, phone_number],
    (error, result) => {
      if (error) {
        console.log("Error ADDING gas_station_branch");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const updateStationBranchById = (req, res) => {
  const id = req.params.id;
  const { gas_station_id, branch_name, address, location, phone_number } =
    req.body;
  db.query(
    "UPDATE gas_station_branch SET gas_station_id=?, branch_name=?, address=?, location=?, phone_number=? WHERE id=?",
    [gas_station_id, branch_name, address, location, phone_number, id],
    (error, result) => {
      if (error) {
        console.log("Error ADDING gas_station_branch");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

const deleteStationBranchById = (req, res) => {
  const id = req.params.id;
  db.query(
    "DELETE FROM gas_station_branch WHERE id=?",
    [id],
    (error, result) => {
      if (error) {
        console.log("Error ADDING gas_station_branch");
        return res.status(500).send({ error: "Interval server error" });
      }
      res.status(200).send(result);
    }
  );
};

module.exports = {
  getAllStationBranch,
  getStationBranchById,
  addStationBranch,
  updateStationBranchById,
  deleteStationBranchById,
};

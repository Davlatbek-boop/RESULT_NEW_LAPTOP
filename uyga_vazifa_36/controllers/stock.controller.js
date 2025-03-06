const db = require("../configs/db");



const getAllStock = (req, res) => {
  db.query("SELECT * FROM stock", (error, result) => {
    if (error) {
      console.log("Error selecting stock");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const getStockByID = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM stock WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting stock");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const addStock = (req, res) => {
  const { pharmacy_id, medicine_id, quantity } = req.body;
  db.query(
    "INSERT INTO stock (pharmacy_id, medicine_id, quantity) VALUES (?,?,?) ",
    [pharmacy_id, medicine_id, quantity],
    (error, result) => {
      if (error) {
        console.log("Error posting stock");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const updateStockByID = (req, res) => {
  const id = req.params.id;
  const { pharmacy_id, medicine_id, quantity } = req.body;
  db.query(
    "UPDATE stock SET pharmacy_id=?, medicine_id=?, quantity=? WHERE id = ?",
    [pharmacy_id, medicine_id, quantity, id],
    (error, result) => {
      if (error) {
        console.log("Error updating stock");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const deleteStockByID = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM stock WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error deleting stock");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(201).send(result);
  });
};

module.exports = {
  getAllStock,
  getStockByID,
  addStock,
  updateStockByID,
  deleteStockByID,
};

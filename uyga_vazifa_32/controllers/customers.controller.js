const db = require("../config/db");

const getAllCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (error, results) => {
    if (error) {
      console.log("Error selecting customers");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(results);
  });
};

const getCustomerById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM customers WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting one customers");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

const addNewCustomer = (req, res) => {
  const { first_name, last_name, phone, email, password, address } = req.body;
  db.query(
    "INSERT INTO customers (first_name, last_name, phone, email, password, address) VALUES (?, ?, ?, ?, ?, ?)",
    [first_name, last_name, phone, email, password, address],
    (error, result)=>{
      if (error){
         console.log("Error edding customer");
         return res.status(500).send({ Error: "Internal Server error" });
      }
      res.status(201).send(result)
    }
  );
};

const updateCustomerById = (req, res)=>{
   const id = req.params.id
   const {first_name, last_name, phone, email, password, address} = req.body
   db.query(
     "UPDATE customers SET first_name=?, last_name=?, phone=?, email=?, password=?, address=? WHERE id = ?",
     [first_name, last_name, phone, email, password, address, id],
     (error, result)=>{
      if (error){
         console.log("Error updating customer");
         return res.status(500).send({error:"Internal Server error"})
      }
      res.status(200).send(result)
     }
   );
}

const deleteCustomerById = (req, res)=>{
   const id = req.params.id
   db.query("DELETE FROM customers WHERE id = ?", [id],
      (error, result)=>{
         if (error){
            console.log("Error deleting customers");
            return res.status(500).send({error:"Internal Server error"})
         }
         res.status(200).send(result)
      }
   )
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  addNewCustomer,
  updateCustomerById,
  deleteCustomerById,
};

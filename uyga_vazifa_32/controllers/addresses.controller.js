const db = require("../config/db");

const getAllAddresses = (req, res) => {
  db.query("SELECT * FROM address", (error, results) => {
    if (error) {
      console.log("Error selecting addresses");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(results);
  });
};

const getAddresById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM address WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting address");
      return res.status(500).send({ error: "Interval server error" });
    }
    res.status(200).send(result);
  });
};

const addAddress = (req, res) => {
  const { name, customer_id, region, city, street } = req.body;
  db.query(
    "INSERT INTO address (name, customer_id, region, city, street) VALUES (?,?,?,?,?)",
    [name, customer_id, region, city, street],
    (error, result)=>{
      if (error){
         console.log("Error adding address");
         return res.status(500).send({error: "Interval server error"})
      }
      res.status(201).send(result)
    }
  );
};

const updateAddressById = (req, res)=>{
   const id = req.params.id
   const {name, customer_id, region, city, street} = req.body
   db.query(
     "UPDATE address SET name=?, customer_id=?, region=?, city=?, street=? WHERE id=?",
     [name, customer_id, region, city, street, id],
     (error, result)=>{
      if (error){ 
         console.log("Error updating address");
         return res.status(500).send({error: "Interval server error"})
      }
      res.status(200).send(result)
     }
   );
}

const deleteAddressById = (req, res)=>{
   const id = req.params.id
   db.query("DELETE FROM address WHERE id=?", [id], 
      (error, result)=>{
         if (error){
            console.log("Error deleting address");
            return res.status(500).send("Interval server error")
         }
         res.status(200).send(result)
      }
   )
}

module.exports= {
   getAllAddresses,
   getAddresById,
   addAddress,
   updateAddressById,
   deleteAddressById,
}
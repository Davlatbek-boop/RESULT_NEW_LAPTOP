const db = require("../config/db");
const { getAddresById, updateAddressById } = require("./addresses.controller");
const { updateCustomerById } = require("./customers.controller");

const getAllCategory = (req, res)=>{
   db.query("SELECT * FROM category", (error, results)=>{
      if (error){
         console.log("Error selecting category");
         return res.status(500).send({ error: "Internal Server error" });
      }
      res.status(200).send(results)
   });
}

const getCategoryById = (req, res) => {
   const id = req.params.id
   db.query("SELECT * FROM category WHERE id=?", [id],
      (error, result)=>{
         if(error){
            console.log("Error selecting category");
            return res.status(500).send({error: "Internal server error"})
         }
         res.status(200).send(result)
      }
   )
}

const addCategory = (req, res)=>{
   const {name} = req.body
   db.query("INSERT INTO category (name) VALUES (?)",[name], 
      (error, result)=>{
         if (error){
            console.log("Error adding category");
            return res.status(200).send({error: "Internal serval error"})
         }
         res.status(201).send(result)
      }
   )
}

const updateCategoryById = (req, res)=>{
   const id = req.params.id
   const {name} = req.body
   db.query("UPDATE category SET name=? WHERE id = ?",[name, id],
      (error, result)=>{
         if (error){
            console.log("Error creating category");
            return res.status(500).send({error: "Internal server error"})
         }
         res.status(200).send(result)
      }
   )
}


const deleteCategoryById = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM category WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error creating category");
      return res.status(500).send({ error: "Internal server error" });
    }
    res.status(200).send(result);
  });
};


module.exports = {
   getAllCategory,
   getCategoryById,
   addCategory,
   updateCategoryById,
   deleteCategoryById,
}
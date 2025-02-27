const db = require("../config/db");

const getAllFlowers = (req, res) => {
  try {
    db.query("SELECT * FROM flowers", (error, results) => {
      if (error) {
        console.log("Error selecting flowers", error);
        return res.status(500).send({ error: "Internal Server error" });
      }
      res.send(results);
    });
  } catch (error) {
    console.log(error);
    res.send(`Ma'lumot olishda xatolik`);
  }
};

const getFlowerById = (req, res)=>{
   const id = req.params.id
   db.query(`SELECT * FROM FLOWERS WHERE id = ?`,[id], (Error, result) => {
     if (Error) {
       console.log("Error selecting flower", Error);
       return res.status(500).send({ Error: "Internal Server error" });
     }

     res.status(200).send(result);
   });
}

const addNewFlower = (req, res) => {
  const {
    name,
    color,
    price,
    category_id,
    count,
    description,
    import_from,
    photo,
  } = req.body;
  db.query(
    `INSERT INTO flowers (name, color, price, category_id, count, description, import_from, photo)
        VALUES (?,?,?,?,?,?,?,?)`,
    [name, color, price, category_id, count, description, import_from, photo],
    (Error, results) => {
      if (Error) {
        console.log("Error selecting flowers", Error);
        return res.status(500).send({ Error: "Internal Server error" });
      }
      res.status(201).send(results); 
    }
  );
};

const updateFlowerById = (req, res) => {
   const {
     name,
     color,
     price,
     category_id,
     count,
     description,
     import_from,
     photo,
   } = req.body;

   const id = req.params.id;

   db.query(
     "UPDATE flowers set name=?, color=?, price=?, category_id=?, count=?, description=?, import_from=?, photo=? WHERE id=?",
     [name, color, price, category_id, count, description, import_from, photo, id],
     (error, results) => {
      if (error) {
        console.log("Error updating flower", error);
        return res.status(500).send({ error: "Internal Server error" });
      }

      res.status(200).send(results);
});
}

const deleteFlowerById = (req, res) =>{
   const id = req.params.id
   db.query("DELETE FROM flowers WHERE id= ?",[id],
      (error, result) =>{
         if (error){
             console.log("Error deleting flower", Error);
             return res.status(500).send({ error: "Internal Server error" });
         }

      res.status(200).send(result);
      }
   )
}



module.exports = {
  getAllFlowers,
  addNewFlower,
  getFlowerById,
  updateFlowerById,
  deleteFlowerById
};

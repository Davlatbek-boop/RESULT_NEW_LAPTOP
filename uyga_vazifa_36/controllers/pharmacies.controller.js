const db = require("../configs/db");

const getAllPharmacies = (req, res) => {
  db.query("SELECT * FROM pharmacies", (error, result) => {
    if (error) {
      console.log("Error selecting pharmacies");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const getPharmaciesByID = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM pharmacies WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log("Error selecting pharmacies");
      return res.status(500).send({ error: "Internel server error" });
    }
    res.status(200).send(result);
  });
};

const addPharmacy = (req, res) => {
  const { name, address, location, phone, email, region_id, district_id } = req.body;
  db.query(
    "INSERT INTO pharmacies (name, address, location, phone, email, region_id, district_id) VALUES (?,?,?,?,?,?,?) ",
    [name, address, location, phone, email, region_id, district_id],
    (error, result) => {
      if (error) {
        console.log("Error posting pharmacies");
        return res.status(500).send({ error: "Internel server error" });
      }
      res.status(201).send(result);
    }
  );
};

const updatePharmacyByID = (req, res)=>{
   const id = req.params.id
   const {name, address, location, phone, email, region_id, district_id}=req.body
   db.query(
     "UPDATE pharmacies SET name=?, address=?, location=?, phone=?, email=?, region_id=?, district_id=? WHERE id = ?",
     [name, address, location, phone, email, region_id, district_id, id],
     (error, result) => {
       if (error) {
         console.log("Error updating pharmacies");
         return res.status(500).send({ error: "Internel server error" });
       }
       res.status(201).send(result);
     }
   );
}

const deletePharmacyByID = (req, res)=>{
   const id = req.params.id
   db.query("DELETE FROM pharmacies WHERE id = ?", [id], (error, result) => {
     if (error) {
       console.log("Error deleting pharmacies");
       return res.status(500).send({ error: "Internel server error" });
     }
     res.status(201).send(result);
   });
}

module.exports = {
  getAllPharmacies,
  getPharmaciesByID,
  addPharmacy,
  updatePharmacyByID,
  deletePharmacyByID,
};

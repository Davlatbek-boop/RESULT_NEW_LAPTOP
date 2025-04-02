const {
  addNewCountry,
  getAllCountrys,
  getCountryById,
  updateCountryById,
  deleteCountryById,
} = require("../controllers/country.controller");

const router = require("express").Router();

router.post("/", addNewCountry);
router.get("/", getAllCountrys);
router.get("/:id", getCountryById);
router.put("/:id", updateCountryById);
router.delete("/:id", deleteCountryById);

module.exports = router;

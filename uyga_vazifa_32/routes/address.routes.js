const {
  getAllAddresses,
  getAddresById,
  addAddress,
  updateAddressById,
  deleteAddressById,
} = require("../controllers/addresses.controller");
const router = require("express").Router();

router.get("/", getAllAddresses);
router.get("/:id", getAddresById);
router.post("/", addAddress);
router.put("/:id", updateAddressById);
router.delete("/:id", deleteAddressById);

module.exports = router

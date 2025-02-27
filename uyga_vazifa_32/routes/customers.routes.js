const {
  getAllCustomers,
  getCustomerById,
  addNewCustomer,
  updateCustomerById,
  deleteCustomerById,
} = require("../controllers/customers.controller");
const router = require("express").Router();

router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.post("/", addNewCustomer);
router.put("/:id", updateCustomerById);
router.delete("/:id", deleteCustomerById)


module.exports = router;

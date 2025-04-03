const {
  addNewCompany,
  getAllCompanys,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
} = require("../controllers/company.controller");

const router = require("express").Router();

router.post("/", addNewCompany);
router.get("/", getAllCompanys);
router.get("/:id", getCompanyById);
router.put("/:id", updateCompanyById);
router.delete("/:id", deleteCompanyById);

module.exports = router;

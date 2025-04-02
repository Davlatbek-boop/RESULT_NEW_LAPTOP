const {
  addNewCompanyWorker,
  getAllCompanyWorkers,
  getCompanyWorkerById,
  updateCompanyWorkerById,
  deleteCompanyWorkerById,
} = require("../controllers/company_worker.controller");

const router = require("express").Router();

router.post("/", addNewCompanyWorker);
router.get("/", getAllCompanyWorkers);
router.get("/:id", getCompanyWorkerById);
router.put("/:id", updateCompanyWorkerById);
router.delete("/:id", deleteCompanyWorkerById);

module.exports = router;

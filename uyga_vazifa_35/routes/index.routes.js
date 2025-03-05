const router = require("express").Router();

const indexPharmacies = require("./pharmacies.routes");
const indexMedicines = require("./medicines.routes");
const indexStock = require("./stock.routes");
const indexDistrict = require("./district.routes");
const indexRegion = require("./region.routes");
const indexMedicineType = require("./medicineType.routes");

router.use("/pharmacies", indexPharmacies);
router.use("/medicines", indexMedicines);
router.use("/stocks", indexStock);
router.use("/district", indexDistrict);
router.use("/region", indexRegion);
router.use("/medtype", indexMedicineType);

module.exports = router;

const router = require("express").Router();
const usersRoute = require("./users.routes");
const userDocRoute = require("./user_documents.routes")
const userSkillsRoute= require("./user_skills.routes")
const passportDataRoute = require("./passport_data.routes")




router.use("/users", usersRoute);
router.use("/userdoc",userDocRoute)
router.use("/userskills", userSkillsRoute)
router.use("/passportdata", passportDataRoute)


module.exports = router;

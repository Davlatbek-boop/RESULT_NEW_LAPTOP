const router = require("express").Router()
const langsRoute = require("./langs.routes")
const tagsRoute = require("./tags.routes")
const categoryRoute = require("./category.routes")
const newsWithLangsRoute = require("./newsWithLangs.routes")
const usersRoute = require("./users.routes")
const newsRoute = require("./news.routes")

router.use("/langs", langsRoute)
router.use("/tags", tagsRoute)
router.use("/category", categoryRoute)
router.use("/newswlangs", newsWithLangsRoute)
router.use("/users", usersRoute)
router.use("/news", newsRoute)

module.exports = router
const router = require("express").Router();
const langsRoute = require("./langs.routes");
const tagsRoute = require("./tags.routes");
const categoryRoute = require("./category.routes");
const newsWithLangsRoute = require("./newsWithLangs.routes");
const usersRoute = require("./users.routes");
const newsRoute = require("./news.routes");
const mediaRoute = require("./media.routes");
const commentsRoute = require("./comments.routes");
const reportsRoute = require("./reports.routes");
const likesRoute = require("./likes.routes");
const viewsRoute = require("./views.routes");
const newsTagsRoute = require("./newsTags.routes")
const authorsRoute = require("./authors.routes")
const notifactionRoute = require("./notifactions.routes")
const otpRoute =require("./otp.routes")

router.use("/langs", langsRoute);
router.use("/tags", tagsRoute);
router.use("/category", categoryRoute);
router.use("/newswlangs", newsWithLangsRoute);
router.use("/users", usersRoute);
router.use("/news", newsRoute);
router.use("/media", mediaRoute);
router.use("/comments", commentsRoute);
router.use("/reports", reportsRoute);
router.use("/likes", likesRoute);
router.use("/views", viewsRoute);
router.use("/newstag", newsTagsRoute)
router.use("/author", authorsRoute)
router.use("/notifaction", notifactionRoute)
router.use("/otp", otpRoute)

module.exports = router;

const router = require("express").Router();

const wordsRoute = require("./words.routes");
const usersRoute = require("./users.routes");
const languageRoute = require("./language.routes");
const etymologyRoute = require("./Etymology.routes");
const pronunciationRoute = require("./pronunciation.routes");
const categoryRoute = require("./category.routes");
const speechRoute = require("./part_of_speech.routes");
const relationRoute = require("./relation_type.routes");
const definitionRoute = require("./definition.routes");
const related_wordRoute = require("./releted_words.routes");
const translationRoute = require("./translation.routes");
const exampleRoute = require("./example.routes");
const word_categoriesRoute = require("./word_categories.routes");
const discussionRoute = require("./discussion.routes");
const edit_Route = require("./edit_history.routes")

router.use("/words", wordsRoute);
router.use("/users", usersRoute);
router.use("/language", languageRoute);
router.use("/etymology", etymologyRoute);
router.use("/pronunciation", pronunciationRoute);
router.use("/category", categoryRoute);
router.use("/speech", speechRoute);
router.use("/relation", relationRoute);
router.use("/definition", definitionRoute);
router.use("/related", related_wordRoute);
router.use("/translation", translationRoute);
router.use("/example", exampleRoute);
router.use("/word/categories", word_categoriesRoute);
router.use("/discussion", discussionRoute);
router.use("/edit", edit_Route)

module.exports = router;

const router = require("express").Router();

const { addUser, getUser, deleteUser } = require("../controllers/users");

router.route("/").get(getUser);

router.route("/add").post(addUser);

router.route("/delete").delete(deleteUser);

module.exports = router;

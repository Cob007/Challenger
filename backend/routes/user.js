const router = require("express").Router();

const controller = require("../controllers/user-controller");

router
.route("/user")
.get(controller.index);

router
.route("/user/register")
.post(controller.register);

router
.route("/user/login")
.post(controller.login);

router
.route("/user/login/:userId")
.get(controller.userById);

module.exports = router;

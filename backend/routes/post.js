const router = require("express").Router();

const { authorize } = require("../constant/Authorize");
const controller = require('../controllers/post-controller')

router
.route('/post/:challengeId')
.get(authorize, controller.get)
.post(authorize, controller.create)


router
.route('/post/vote/:postId')
.get(authorize, controller.vote)

router
.route('/reward')
.get(authorize, controller.reward)




module.exports = router
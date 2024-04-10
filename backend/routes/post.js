const router = require("express").Router();

const controller = require('../controllers/post-controller')

router
.route('/user')
.get(controller.getPostByUserId)


module.exports = router
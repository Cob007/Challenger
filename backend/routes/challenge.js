const router = require("express").Router();

const controller = require('../controllers/challenge-controller')

router
.route('/challenger')
.get(controller.getAll)
.post(controller.post)


module.exports = router
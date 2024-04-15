const router = require("express").Router();

const { authorize } = require("../constant/Authorize");
const controller = require('../controllers/challenge-controller')

router
.route('/challenge')
.get(authorize,  controller.getAll)
.post(authorize, controller.post)

router 
.route('/challenge/:challengeId')
.get(authorize, controller.getChallengeById);

module.exports = router
const router = require('express').Router();
const {postUser, getUsers} = require('../controllers/userController');
const {isAuthenticated} = require("../middleware/auth")

router.route('/postuser').post(postUser);
router.route('/getusers').get(isAuthenticated, getUsers);

module.exports = router;

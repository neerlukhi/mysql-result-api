var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller')

/* GET home page. */
// router.post('/', user.result);
router.post('/result', user.result);
router.get('/', user.get_result);

module.exports = router;

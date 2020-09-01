var router = require('express').Router();
var team = require('./team');

router.route('/team',team );

module.exports = router;
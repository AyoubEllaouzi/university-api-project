const express = require('express');
const router = express.Router();

//const getData = require('../services/getUniversities');
const getUniversities = require('../services/getUniversities');
router.get('/universities', getUniversities);

module.exports = router;
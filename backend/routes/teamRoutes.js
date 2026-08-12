const express = require('express');

const { getTeam } = require('../controllers/teamController');

const router = express.Router();

router.get('/team', getTeam);

module.exports = router;

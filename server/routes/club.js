const express = require('express');
const router = express.Router();
const clubController = require('../controllers/club');

router.post('/', clubController.createClub);
router.get('/', clubController.getClubs)
router.patch('/:id', clubController.updateClub)

module.exports = router;

const router = require('express').Router();
const ticketMasterController = require('../controllers/ticketmaster')

router.get('/', ticketMasterController.allEvent)

module.exports = router
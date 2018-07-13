const router = require('express').Router();
const ticketMasterController = require('../controllers/ticketmaster')

router.get('/event', ticketMasterController.allEvent)
router.get('/venue', ticketMasterController.allVenue)
router.get('/attraction', ticketMasterController.allAttractions)
router.get('/findevent', ticketMasterController.findEvent)

module.exports = router
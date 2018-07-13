const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
/* GET home page. */
router.post('/register', userController.register);
// router.post('/', (req, res) => {
//   console.log(req.body)
// })


module.exports = router;

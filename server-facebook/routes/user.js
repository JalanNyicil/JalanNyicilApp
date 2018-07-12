const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', (req,res)=>{
    res.send('OK')
});
router.post('/', userController.fbLogin);

module.exports = router;

const express = require('express');
const router = express.Router();
const twotter = require('../controller/twotter_controller');

router.get('/', twotter.getAllTwott);
router.post('/login');
router.post('/', twotter.postTwott);
router.post('/retweet', twotter.retweet);
router.get('/search', twotter.searchTwott);
router.get('/timeline', twotter.getTimeLine);

module.exports = router;

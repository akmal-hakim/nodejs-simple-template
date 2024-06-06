const path = require('path');
const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/TestLearnIfUseMVC', mainController.homepageOverview);


router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../', 'views/test.html'));
});


module.exports = router;
const express                                = require('express');
const router                                 = express.Router();
const path                                   = require('path');
const file                                   = path.join(__dirname, '../../../../dist/lars-concepcion-us/index.html');

//==========================================================================
//====================== HTTP GET METHOD CONTAINER =========================
//==========================================================================

router.get('/', (req, res) => {
    res.sendFile(file);
    // res.redirect('/admin')
})

router.get('/timeline', (req, res) => {
    res.sendFile(file)
})

router.get('/portfolio', (req, res) => {
    res.sendFile(file);
})

router.get('/about', (req, res) => {
    res.sendFile(file);
})

router.get('/admin', (req, res) => {
    res.sendFile(file);
})

module.exports = router;
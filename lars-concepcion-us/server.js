const express                                                     = require('express'),
      server                                                      = express(),
      path                                                        = require('path'),
      b0dy_parser                                                 = require('body-parser')

//====================== Server Config ===========================
//================================================================
server.use(express.static(path.join(__dirname, 'dist/lars-concepcion-us')));
server.use(b0dy_parser.urlencoded({extended: true}))
// for json object
server.use(b0dy_parser.json({limit: '50mb'}));

//==========================================================================
//============================== SEND THIS FILE ============================
//==========================================================================
const file = path.join(__dirname, 'dist/lars-concepcion-us/index.html');

//==========================================================================
//====================== HTTP GET METHOD CONTAINER =========================
//==========================================================================
//landing page route
server.get('/', (req, res) => {
    // res.sendFile(file);
    res.redirect('/admin')
})

server.get('/portfolio', (req, res) => {
    res.sendFile(file);
})

server.get('/about', (req, res) => {
    res.sendFile(file);
})

server.get('/admin', (req, res) => {
    res.sendFile(file);
})
//==========================================================================
//====================== HTTP POST METHOD CONTAINER ========================
//==========================================================================
server.post('/formHandler', (req, res) => {
    const form = req.body;
    console.log(form);
    res.send(form);
})

//==========================================================================
//====================== HTTP DELETE METHOD CONTAINER ======================
//==========================================================================

//==========================================================================
//====================== HTTP DELETE METHOD CONTAINER ======================
//==========================================================================

// ============================= SERVER LISTENER ===========================
// =========================================================================
server.listen('4000', () => {
    console.log('node is running in port 4000');
})
const express                                                     = require('express'),
      server                                                      = express(),
      path                                                        = require('path')

//====================== Server Config ===========================
//================================================================
server.use(express.static(path.join(__dirname, 'dist/lars-concepcion-us')));

//====================== HTTP GET METHOD CONTAINER =========================
//==========================================================================

//landing page route
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/lars-concepcion-us/index.html'));
})

//====================== HTTP POST METHOD CONTAINER =========================
//==========================================================================
server.post('formHandler', (req, res) => {
    console.log(req.body);
})

// ============================= SERVER LISTENER ============================
// ===========================================================================
server.listen('4000', () => {
    console.log('node is running in port 4000');
})
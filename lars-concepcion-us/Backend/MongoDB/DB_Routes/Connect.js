m0ng00se                                            = require('mongoose');

function DB_Connector() {
    m0ng00se.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });
    console.log('server: ===============>>>>>' + ' MongoDB Connected')
}

module.exports = DB_Connector;
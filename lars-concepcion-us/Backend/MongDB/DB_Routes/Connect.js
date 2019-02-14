m0ng00se                                            = require('mongoose');

function DB_Connector() {
    m0ng00se.connect('mongodb://localhost:27017/MyDataBaseServer', { useNewUrlParser: true });
    console.log('Node server is Successfully Connected to MongoDB instance!')
}

module.exports = DB_Connector;
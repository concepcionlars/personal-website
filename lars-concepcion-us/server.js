//======================================================================================
//=============================== Require All Node_Modules =============================
//======================================================================================
const express                                                     = require('express'),
      server                                                      = express(),
      path                                                        = require('path'),
      b0dy_parser                                                 = require('body-parser'),
      m0ng00se                                                    = require('mongoose'),
      m0ng0db                                                     = require('mongodb');
      fs                                                          = require('fs'),
      crypto 													  = require('crypto'),

//===========================
//======== DB Schema ========
//===========================
    profilePhotoSchema                                            = require('./Backend/MongoDB/DB_Models/profileschema/profilePhotoSchema/profilePhotoSchema.js')
    imageFileSchema                                               = require('./Backend/MongoDB/DB_Models/imageFileSchema.js')
    profileSchema                                                 = require('./Backend/MongoDB/DB_Models/profileschema/profileschema.js')
    educationInfoSchema                                           = require('./Backend/MongoDB/DB_Models/profileschema/educationSchema/educationInformationSchema.js')
//======================================================================================
//=============================== Require All Custom Modules ===========================
//======================================================================================
const myPostRoutes                                                = require('./Backend/Server-Side/Routes/Post-Routes/post.js');
const myGetRoutes                                                 = require('./Backend/Server-Side/Routes/Get-Routes/get.js')
const mySchemaGetter                                              = require('./Backend/Server-Side/Routes/Get-Routes/mySchemaGetter.js')
const myImageFileRoutes                                           = require('./Backend/Server-Side/Routes/Post-Routes/imageUploader.js')
const DB_Connector                                                = require('./Backend/MongoDB/DB_Routes/Connect');
const conn                                                        = m0ng00se.connection;

//================================================================
//====================== Server Side Script ======================
//================================================================
const MyDatabaseSchemaGetter                                      = require('./Backend/Server-Side/Server-Side-Script/DatabaseGetter.js');
const schemaGenerator                                             = require('./Backend/Server-Side/Server-Side-Script/schemaGenerator.js')

//================================================================
//====================== Server Config ===========================
//================================================================
server.use(express.static(path.join(__dirname, 'dist/lars-concepcion-us')));
server.use(b0dy_parser.urlencoded({extended: true}))
// for json object
server.use(b0dy_parser.json({limit: '50mb'}));

//================================================================
//==================== MongoDB Server Config =====================
//================================================================


//================================================================
//======================= Automated Script =======================
//================================================================
// connect node server to mongodb
DB_Connector();
//only for new user
schemaGenerator();

//==========================================================================
//============================== SEND THIS FILE ============================
//==========================================================================
const file = path.join(__dirname, 'dist/lars-concepcion-us/index.html');

//==========================================================================
//====================== HTTP GET METHOD CONTAINER =========================
//==========================================================================
server.use(myGetRoutes);
server.use(mySchemaGetter);
//==========================================================================
//====================== HTTP POST METHOD CONTAINER ========================
//==========================================================================
server.use(myPostRoutes);
server.use(myImageFileRoutes);

//==========================================================================
//====================== HTTP DELETE METHOD CONTAINER ======================
//==========================================================================

//==========================================================================
//====================== HTTP UPDATE METHOD CONTAINER ======================
//==========================================================================

function cdr() {
    profileSchema.find({primary: true}, (err, foundImage) => {
        if(err) {
            throw err;
        } else {
            console.log(foundImage)
        }
    })
}

// cdr()

// ============================= SERVER LISTENER ===========================
// =========================================================================
server.listen('4000', () => {
    console.log('server: ===============>>>>>' + ' http://localhost:4000');
})
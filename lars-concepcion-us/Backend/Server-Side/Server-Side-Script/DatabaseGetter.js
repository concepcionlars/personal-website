const m0ng00se         = require('mongoose');
//===========================
//======== DB Schema ========
//===========================
const profilePhotoSchema   = require('../../MongoDB/DB_Models/profileschema/profilePhotoSchema/profilePhotoSchema.js');
const imageFileSchema      = require('../../MongoDB/DB_Models/imageFileSchema.js');
const profileSchema        = require('../../MongoDB/DB_Models/profileschema/profileschema.js');

function MyDatabaseSchemaGetter() {
    // console.log('testing!');
}

module.exports = MyDatabaseSchemaGetter;


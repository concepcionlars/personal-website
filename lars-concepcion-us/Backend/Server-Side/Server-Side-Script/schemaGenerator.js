const m0ng00se                          = require('mongoose');
//===========================
//======== DB Schema ========
//===========================
const profilePhotoSchema   = require('../../MongoDB/DB_Models/profileschema/profilePhotoSchema/profilePhotoSchema.js');
const imageFileSchema      = require('../../MongoDB/DB_Models/imageFileSchema.js');
const profileSchema        = require('../../MongoDB/DB_Models/profileschema/profileschema.js');

//create a empty schema to be used in this site
const schema = {
    primary: true,
    firstname: 'unknown',
    lastname: 'unknown',
    headline: '',
    introduction: '',
    summary: '',
    address: {
        country: 'unknown',
        region: 'unknown',
        zip: null
    },
}

function schemaGenerator() {
    profileSchema.find((err, data) => {
        if(data == '') {
            console.log('server: ============>>>>>' + ' No Profile Schema Found');
            console.log('server: ===============>>>>>' + ' Creating a new one..');
            //create a temporary profileSchema to be used by a new user
            //this schema will be used a preference for future use.
            //if the user made a changes all you need to do is to update the schema
            //instead of creating a new one
            profileSchema.create(schema ,(err, data) => {
                if(err) {
                    console.log('something went wrong creating a schema');
                    console.log(err);
                } else {
                    console.log('server: ===============>>>>>' + ' Profile Schema is Successfully Created');
                }
            })
        } else {
            console.log('server: ===============>>>>>' + ' Profile Schema Found')
        }
    })
}

module.exports = schemaGenerator;
var m0ng00se = require('mongoose');

var profileSchema = {
    primary: Boolean,
    fullname : {
        firstname: String,
        lastname: String
    },
    headline: String,
    introduction: String,
    summary: String,
    address: {
        country: String,
        zip: Number
    },
    education: [{
        type: m0ng00se.Schema.Types.ObjectId,
        ref: 'educationInfoSchema'
    }],
    profilePhoto: [{
        type: m0ng00se.Schema.Types.ObjectId,
        ref: 'imageFileSchema'
    }],
    coverPhoto: [{
        type: m0ng00se.Schema.Types.ObjectId,
        ref: 'imageFileSchema'
    }],
    logo: [{
        type: m0ng00se.Schema.Types.ObjectId,
        ref: 'imageFileSchema'
    }]
}

module.exports = m0ng00se.model('profileSchema', profileSchema)
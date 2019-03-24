var m0ng00se = require('mongoose');

var profilePhotoSchema = {
    rotation: Number,
    zoom: Number,
    imageFile: Object,
    dateCreated: {
        type: Date,
        default: Date.now
    }
}

module.exports = m0ng00se.model('profilePhotoSchema', profilePhotoSchema)
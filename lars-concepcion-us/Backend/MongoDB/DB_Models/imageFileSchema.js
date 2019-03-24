var m0ng00se = require('mongoose');

var imageFileSchema = {
    filename: String,
    md5: String,
    chunkSize: Number,
    length: Number,
    schemaType: String,
    rotation: Number,
    zoom: Number,
    uploadDate: String
}

module.exports = m0ng00se.model('imageFileSchema', imageFileSchema);
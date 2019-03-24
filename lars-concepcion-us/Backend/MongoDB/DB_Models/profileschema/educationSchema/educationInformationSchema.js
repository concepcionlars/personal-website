const m0ng00se                  = require('mongoose');

const educationInfoSchema = {
    schoolname: String,
    degree: String,
    fieldOfStudy: String,
    selected: Boolean,
    expectedYear: {
        fromYear: Number,
        toYear: Number
    },
    description: String,
    activityAndSociety: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
}

module.exports = m0ng00se.model('educationInfoSchema', educationInfoSchema);
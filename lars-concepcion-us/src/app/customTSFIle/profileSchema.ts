type educationArray = Array<{
    _id: String,
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
    dateCreated: String
}>

export class profileSchema {
    firstname : String;
    lastname : String;
    primary : Boolean;
    headline : String;
    introduction : String;
    summary : String;
    country : String;
    zip : Number;
    education : educationArray;
    profilePhoto : Object;
    coverPhoto : Object;
    logo : Object
}


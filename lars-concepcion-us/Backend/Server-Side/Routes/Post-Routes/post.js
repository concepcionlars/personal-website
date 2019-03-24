const server                        = require('express');
const router                        = server.Router();
const m0ng00se                      = require('mongoose');
const m0ng0db                       = require('mongodb');

//===============================================================
//==================== timeline post handler ====================
//===============================================================
    router.post('/headersFormHandler', (req, res) => {
        const data = req.body;

        profileSchema.findOne({primary: true}, (err, foundSchema) => {
            if(err) {
                throw err;
            } else {
                foundSchema.firstname = data.firstname;
                foundSchema.lastname = data.lastname;
                foundSchema.headline = data.headline;
                foundSchema.introduction = data.introduction;
                foundSchema.summary = data.summary;
                foundSchema.address.country = data.address.country;
                // foundSchema.address.region = data.address.region;
                foundSchema.address.zip = data.address.zip;
                foundSchema.save()
                console.log(foundSchema)
            }
        })
    })

    router.post('/educationFormHandler', (req, res) => {
        const data = req.body;
        const information = {
            schoolname: data.schoolname,
            degree: data.degree,
            fieldOfStudy: data.fieldOfStudy,
            selected: false,
            expectedYear: {
                fromYear: data.expectedYear.fromYear,
                toYear: data.expectedYear.toYear
            },
            description: data.description,
            activityAndSociety: data.ActAndSociety
        }

        educationInfoSchema.create(information, (err, newSchema) => {
            if(err) {
                throw err;
            } else {
                console.log(newSchema);
                console.log('done creating and saving new education information schema');
                console.log('merging schema to main schema')
                profileSchema.findOne({primary: true}, (err, foundSchema) => {
                    if(err) {
                        throw err;
                    } else {
                        foundSchema.education.push(newSchema._id);
                        foundSchema.save();
                        console.log('successfuly merge to main schema')
                    }
                })
            }
        })
    })

//===============================================================
//==================== contact post handler ====================
//===============================================================

    router.post('/contactFormHandler', (req, res) => {
        const form = req.body;
        console.log(form);
        res.send(form);
    })


    router.post('/imagePreloader', (req, res) => {
        const file = req.body;
        const path = './temp/' + file.filename;

        // server side validation
        if(file.type == 'image/jpeg' || file.type == 'image/jpg') {
            const binary64 = file.blob.slice(23, file.blob.length);
            const buff = new Buffer.from(binary64, 'base64');
            const encodedImage = fs.writeFileSync(path, buff);
        } 
        
        else if (file.type == 'image/png' || file.type == 'image/gif') {
            const binary64 = file.blob.slice(22, file.blob.length);
            const buff = new Buffer.from(binary64, 'base64');
            const encodedImage = fs.writeFileSync(path, buff);
        } 

    })

module.exports = router;
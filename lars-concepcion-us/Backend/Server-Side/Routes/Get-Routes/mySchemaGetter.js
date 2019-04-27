const router                        = require('express').Router();

router.get('/timeline/node._src', (req, res) => {
    profileSchema.findOne({primary: true}).populate('education').populate('profilePhoto').exec((err, foundSchema) => {
        if(err) {
            throw err;
        } else {
            const data = {
                firstname : foundSchema.fullname.firstname,
                lastname : foundSchema.fullname.lastname,
                primary : foundSchema.primary,
                headline : foundSchema.headline,
                introduction : foundSchema.introduction,
                summary : foundSchema.summary,
                country : foundSchema.address.country,
                zip : foundSchema.address.zip,
            }
            res.send(data)
        }
    })
})

router.get('/headers/node._src', (req, res) => {
    profileSchema.findOne({primary: true}).populate('profilePhoto').populate('coverPhoto').populate('logo').exec(
        (err, populatedSchema) => {
            const metadata = {
                profilePhoto : populatedSchema.profilePhoto,
                coverPhoto : populatedSchema.coverPhoto,
                logo : populatedSchema.logo
            }
            res.send(metadata)
        }
    )
})

module.exports = router;

const router                        = require('express').Router();

router.get('/timeline/node._src', (req, res) => {
    profileSchema.findOne({primary: true}).populate('education').populate('profilePhoto').exec((err, foundSchema) => {
        if(err) {
            throw err;
        } else {
            console.log(foundSchema)
            res.send(foundSchema)
        }
    })
})

module.exports = router;

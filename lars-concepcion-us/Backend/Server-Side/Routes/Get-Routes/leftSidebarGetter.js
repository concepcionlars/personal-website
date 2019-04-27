const router                = require('express')();

router.get('/timeline/leftSidebar/node._src', (req, res) => {
    imageFileSchema.find({schemaType: 'profile_photo'}, (err, foundPhoto) => {
        if(err) {
            console.log(err);
        } else {
            res.send(foundPhoto);
        }
    })
})

module.exports = router;
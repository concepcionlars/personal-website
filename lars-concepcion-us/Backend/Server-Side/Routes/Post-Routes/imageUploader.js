const server                            = require('express');
const router                            = server.Router();
const m0ng0db                           = require('mongodb');

//====================================================================
//============= Profile, Cover and Logo Image Uploader ===============
//====================================================================

//profile, Cover and Logo Uploader
router.post('/imageSettingHandler', (req, res) => {
    const imageMetadata = req.body.imageProperty;
    const imageRotation = req.body.rotate;
    const imageZoom = req.body.zoom;
    const schema = req.body.schemaType;

    /*GENERATE A 32BIT NAME TO BE SAVE IN MONGODB DATABASE*/
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        //to generate random letter and numbers
        for (var i = 0; i < 36; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    
    //creata a unique name to be saved in db
    const name = makeid() + imageMetadata.size;
    //specify a path for writing
    const path = './temp/' + imageMetadata.name;

    //transfer and encode base64 image blob
    const buff = new Buffer.from(imageMetadata.blob, 'base64');
    var writeFile = fs.writeFileSync(path, buff);

    //create a function to upload files in mongodb gridfsbucket
    //connect node server to mongodb instance
    const test = require('assert');
    m0ng0db.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
        const db = client.db('mydb');
        const bucket = new m0ng0db.GridFSBucket(db);

        var readstream = fs.createReadStream(path);
        readstream.on('data', (data) => {
            console.log(data);
        })
        readstream.on('close', () => {
            console.log('uploading to server')
        })
        var license = fs.readFileSync(path)
        var uploadStream = bucket.openUploadStream(name);
        const id = uploadStream.id;

        //wait for stream to finish
        uploadStream.once('finish', (files) => {
            var chunksColl = db.collection('fs.chunks');
            var chunksQuery = chunksColl.find({ files_id: id });
    
            // Get all the chunks
            chunksQuery.toArray(function(error, docs) {
                var filesColl = db.collection('fs.files');
                var filesQuery = filesColl.find({ _id: id });

                filesQuery.toArray((error, docs) => {     
                    var hash = crypto.createHash('md5');
                    hash.update(license);
                    test.equal(docs[0].md5, hash.digest('hex'));
    
                    // make sure we created indexes
                    filesColl.listIndexes().toArray(function(error, indexes) {
        
                        chunksColl.listIndexes().toArray(function(error, indexes) {
                          // get all metadata and save to json schema before pushing to mongodb instance
                            var image = {
                                filename: files.filename,
                                md5: files.md5,
                                chunkSize: files.chunkSize,
                                length: files.length,
                                schemaType: schema,
                                rotation: imageRotation,
                                zoom: imageZoom,
                                uploadDate: files.uploadDate
                            }
                            // creating a new instance in image file schema a mongodb collection
                            // callback function is not yet created in this fill <<<================ noted callback is not yet created
                            imageFileSchema.create(image, (err, newImage) => {
                                if(err) {
                                    throw err;
                                } else {
                                  //after creating a new image in mongodb collections the created image will be push
                                  // IN profile schema collections.
                                    profileSchema.findOne({primary: true}, (err, foundSchema) => {
                                        if(err) {
                                            throw err;
                                        } else {
                                            foundSchema[schema] = newImage._id;
                                            foundSchema.save();
                                          //when the request is success send a status code to client/front end side.
                                            res.send({'statusCode' : res.statusCode, 'statusMessage' : 'success', 'data' : newImage});
                                            console.log('preloading image')
                                        }
                                    })
                                }
                            })
                        });
                    });
                });
            });
        })
        //pipe the image to mongoDB instance
        readstream.pipe(uploadStream);
    })
})

module.exports = router;

const m0ng0db                               = require('mongodb')
const logoImageGenerator                    = require('./logoImageGenerator');
//===========================
//========= DB Model ========
//===========================
const imageFileSchema                       = require('../../MongoDB/DB_Models/imageFileSchema.js');
const profileSchema                         = require('../../MongoDB/DB_Models/profileschema/profileschema.js');
const path                                  = 'src/assets/default_image/balance.jpg';
const name                                  = 'default_cover';


function coverImageGenerator() {
    //create a function to upload files in mongodb gridfsbucket
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
                            const defaultImage = {
                                filename: files.filename,
                                md5: files.md5,
                                chunkSize: files.chunkSize,
                                length: files.length,
                                schemaType: 'cover_photo', //<<<<<<< for expiremental purposes
                                rotation: 0,
                                zoom: 0,
                                uploadDate: files.uploadDate,
                            }
                            imageFileSchema.create(defaultImage, (err, newImageFile) => {
                                if(err) {
                                    console.log(err);
                                } else {
                                    console.log(newImageFile);
                                    profileSchema.findOne({primary: true}, (err, foundSchema) => {
                                        if(err) {
                                            throw err;
                                        } else {
                                            foundSchema.coverPhoto = newImageFile.id;
                                            foundSchema.save();
                                            logoImageGenerator();
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
}

module.exports = coverImageGenerator;
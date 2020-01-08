const router = require('express').Router();
const m0ng0db = require('mongodb');

router.get('/node._src/:filename/:id/:chunkSize/:length/:schemaType', (req, res) => {
    const filename = req.params.filename;  //>>>>> send a filename parameters
    const files_id = req.params.id; //>>>>>> send a id parameters
    const chunkSize = req.params.chunkSize; //>>>>>>> send a chunksize parameters
    const length = req.params.length; //>>>>>>>> send a length parameters
    const schematype = req.params.schemaType; //>>>>>>>> send a schemaType parameters

    m0ng0db.connect('mongodb://localhost/27017', {useNewUrlParser : true}, (err, client)=>{
      const db = client.db('mydb');
      const bucket = new m0ng0db.GridFSBucket(db);

      const downloadStream = bucket.openDownloadStreamByName(filename);

      downloadStream.on('data', (data)=>{
        console.log('preloading images.....')
      })

      downloadStream.pipe(res);
    })
})

module.exports = router;

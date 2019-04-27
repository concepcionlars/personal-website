const router = require('express').Router();
const m0ng0db = require('mongodb');

router.get('/node._src/:filename/:id/:chunkSize/:length/:schemaType', (req, res) => {
    const filename = req.params.filename;
    const id = req.params.id;
    const chunkSize = req.params.chunkSize;
    const length = req.params.length;
    const schematype = req.params.schemaType;

	m0ng0db.connect('mongodb://localhost/27017', {useNewUrlParser : true}, (err, client)=>{
		const db = client.db('mydb');
		const bucket = new m0ng0db.GridFSBucket(db);

		const downloadStream = bucket.openDownloadStreamByName(filename);

		downloadStream.on('data', (data)=>{
			// console.log(data)
		})

		downloadStream.pipe(res);
	})
})

module.exports = router;
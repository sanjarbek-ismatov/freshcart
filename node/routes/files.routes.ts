import express from "express";
import mongoose from "mongoose";
const fileRoute = express.Router()
import { GridFSBucket } from 'mongodb';

let gfb: GridFSBucket;

const connection = mongoose.connection;

connection.once('open', () => {
    gfb = new GridFSBucket(connection.db as any, { bucketName: 'uploads' });
});

fileRoute.get('/all', async (req, res) => {
     const files = await gfb.find().toArray()
    res.status(200).send(files)
})
fileRoute.get('/image/:filename', async (req, res) => {
    const file = await gfb.find({ filename: req.params.filename }).toArray();

    if (!file || !file.length) {
        return res.status(404).json({ code: 404, message: 'Not found' });
    }

    const readStream = gfb.openDownloadStreamByName(file[0].filename);

    if (file[0].contentType && file[0].contentType.includes('image')) {
        readStream.on('error', () => {
            res.status(500).json({ code: 500, message: 'Server error' });
        });
        readStream.pipe(res);
    } else {
        res.status(404).json({ code: 404, message: 'File is not an image' });
    }

    res.end();
})

export default fileRoute
import express from "express";
import mongoose from "mongoose";
import Grid from "gridfs-stream";
const fileRoute = express.Router()
var gfs: Grid.Grid, gfb;
const connection = mongoose.connection
connection.once('open', () => {
    gfs = Grid(connection.db, mongoose.mongo)
    gfs.collection('uploads')
    gfb = new mongoose.mongo.GridFSBucket(connection.db, {bucketName: 'uploads'})
})

fileRoute.get('/image/:filename', async (req, res) => {
     gfs.files.find().toArray((err, file) => {
        if(err) console.log(err)
        console.log(file)
    })
     gfs.files.findOne({filename: req.params.filename}, (err, file) => {
        if(err) console.log(err)
        console.log(file)
    })
    res.status(200).send('ok')
})
export default fileRoute
import express from 'express'
import upload from '../controllers/uploading.js';
const uploaingrouter = express.Router()


uploaingrouter.route("/").post(upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log('wsl lhna');

    if (!file) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    }

    res.send(file);
})


export default uploaingrouter


// les identifiants de wifi

/// 8.14582681.00.00.100001
// 0668000115
// 21555560

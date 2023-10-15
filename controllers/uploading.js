
import multer from 'multer';


//

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })

//


export default upload
// protfolio colors
//#141526
// #189dd5
//#5f49aa
//#141526
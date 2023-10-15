import express from "express"
import dotenv from "dotenv"
import "express-async-errors";
dotenv.config()
import cookieParser from "cookie-parser";

import connectDb from "./connection.js";
import authRouter from "./routes/auth.js";
import roomsRouter from "./routes/rooms.js";
import hotelRouter from "./routes/hotel.js";
import usersRouter from "./routes/users.js";
import managecities from "./routes/cities.js"
import errornotfournd from "./middlware/errornotfound.js"
import errorhanler from "./middlware/errorhandler.js"
import cors from "cors"
import start from "./utils/Popilate.js";

import uploaingrouter from "./routes/uploadingrouter.js";
const app = express()
app.use(cors())
app.use(express.urlencoded({ extends: false }));
app.use(express.json());
app.use(cookieParser())
// server data 
const port = process.env.PORT || 5000
const secret = process.env.MONGO;
// uploaingrouter
// routes
// cors gives the otorety to any other url to connect to the server
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/hotel', hotelRouter)
app.use('/api/rooms', roomsRouter)
app.use('/api/cities', managecities)
app.use('/api/uploadFileAPI', uploaingrouter)

app.get("/populate", (req, res, next) => {
    try {
        start()
        res.send("done")
    } catch (error) {







        next(error)
    }
})











// errors
app.use(errorhanler);
app.use(errornotfournd);




//

app.listen(port, () => {
    console.log('server start listening ' + `port ${port}`);
    connectDb(secret);

})













/** 
import express from "express";
import dotenv from "dotenv";
import connectDb from "./connection/connectDb"
dotenv.config();
const app = express()
const port = process.env.port || 5000
const MONGO = precess.evn.MONGO
app.listen(port, () => {
    console.log(`"start connecting to port ${port}`);
    connectDb(MONGO)

})

*/




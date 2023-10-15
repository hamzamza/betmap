import express from "express"
import { updateRoom, createRoom, getRoom, getRooms, deleteRoom, getHotelrooms, updateRoomunvailablity } from "../controllers/roomsController.js"
import Rooms from "../models/Rooms.js"
import ver from "../utils/verifyToken.js"
const { verifyAdmin } = ver
const router = express.Router()
router.route('/').get(getRooms)
router.route("/roomsbyhotel/:id").get(getHotelrooms)
// just for set up the serever to reomve letter
router.route('/delette').delete(async (req, res) => {
    await Rooms.deleteMany({})
    res.send("done ")
})

router.route('/roomunvailablity/:id').put(updateRoomunvailablity)
router.route("/:id").put(verifyAdmin, updateRoom).get(getRoom).delete( deleteRoom).post( createRoom)




export default router
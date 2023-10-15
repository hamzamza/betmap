import express from "express"
import { getHotels, createHotel, deleteall, countByCity, countByType, updateHotel, gethHotel, deleteHotel } from "../controllers/hotelControllers.js"
import ver from "../utils/verifyToken.js"
const { verifyAdmin } = ver
const router = express.Router()
router.route('/').get(getHotels).post( createHotel)
router.route('/deletall').delete(deleteall)
router.route('/countByType').get(countByType)
router.route('/countByCity').get(countByCity)
router.route("/select/:id").put( updateHotel).get(gethHotel).delete( deleteHotel)


export default router

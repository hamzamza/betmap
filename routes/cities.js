import { createCity, deletCity, getcities, deletallCity } from '../controllers/citiescontroller.js'
import express from 'express'
const router = express.Router()





router.route("/managecities").post(createCity).get(getcities).delete(deletallCity)
router.route("/managecities/:id").delete(deletCity)

export default router
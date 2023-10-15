import express from "express"
import ver from "../utils/verifyToken.js"

import ctr from "../controllers/userController.js"
import User from "../models/User.js"
const router = express.Router()

/* router.route("/checkauth").get(ver.verifyToken, async (req, res, next) => {
    const us = await User.findById(req.user.id)
    res.send(`hello user ${us.username}`)

})
router.route("/checkuser/:id").get(ver.verifyUser, (req, res) => {
    res.send("user done ")
})
router.route("/amIAnAdmin").get(ver.verifyAdmin, (req, res) => {
    const msg = req.user.isAdmin ? "you'r admin " : "you are normal user"
    res.status(200).send(msg)
})*/
router.route('/').get(ctr.getUsers).post(ctr.createUser)
router.route("/:id").put(ver.verifyUser, ctr.updateUser).get(ver.verifyUser, ctr.getUser).delete(ver.verifyUser, ctr.updateUser)
// here i added the option to create a new user for the admin
export default router
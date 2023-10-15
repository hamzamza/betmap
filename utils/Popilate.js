import bcrypt from "bcryptjs"
import er from "../errors/createError.js";
import User from "../models/User.js"
const start = async () => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync("hash", salt);
        await User.create({
            username: "32alib",
            email: "a3ywadb",
            password: hash,
            isAdmin: true
        })
    }
    catch (error) {
        throw er.createError('hhhh', 400)
    }
}
export default start
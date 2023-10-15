import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import er from "../errors/createError.js"
import jwt from 'jsonwebtoken'

const register = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        if (hash) {
            const newUser = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: hash,
            })
            res.status(200).json(newUser)

        }
        else {
            throw new Error()
        }

    } catch (error) {
        throw er.createError("username already existe", 400)
    }

}


const login = async (req, res, next) => {
    const user = await User.findOne({ username: req.body.username })
    if (user) {

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return next(er.createError("password incorrect", 500))
        }
        {
            const { password, isAdmin, ...otherDetails } = user._doc
            const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
            return res.cookie("access_token", token, { httpOnly: true }).status(200).json({ details: { ...otherDetails }, isAdmin: isAdmin })
        }
    }
    next(er.createError("username doesn't existe", 404))



}

export default { register, login }
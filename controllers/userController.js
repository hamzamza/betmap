
import err from "../errors/createError.js";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import er from "../errors/createError.js"

// create
const createUser = async (req, res) => {
    try {
        const body = req.body
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        if (hash) {
            const newUser = await User.create({ ...body, password: hash })
            res.status(200).json(newUser)

        }
        else {
            throw new Error()
        }

    } catch (error) {
        throw er.createError("username already existe", 400)
    }

}

// update
const updateUser = async (req, res, next) => {
    try {
        const body = req.body
        console.log(body);
        await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { returnDocument: "after" })
    }
    catch (error) {
        return next(err.createError("username already existe", 500))
    }
    res.status(200).json("User updated successfully")
}

// get one User
const getUser = async (req, res) => {
    const id = req.params.id
    const oneUser = await User.findById(id)
    res.status(200).json(oneUser)

}

// get muultiple Users

const getUsers = async (req, res) => {
    const users = await User.find({})
    if (!users) {
        throw createError("no users yet ", 500)
    }
    res.status(200).json(users)

}
const deleteUser = async (req, res) => {
    const id = req.params.id
    const deletedUser = await User.findByIdAndDelete(id)
    res.status(200).json(deletedUser)
}

export default { updateUser, createUser, getUser, getUsers, deleteUser }
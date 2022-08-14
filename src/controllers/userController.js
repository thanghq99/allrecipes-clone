const e = require('express')
const User = require('../models/user')

const create = async (req, res, next) => {
    const {
        username,
        password,
        email,
        avatar,
        greeting
    } = req.body

    try {
        let findUsername = await User.findOne({ username: username}).exec()
        if (findUsername) {
            return res.status(409).json({ message: "Username already existed." })
        } else {
            let findEmail = await User.findOne({ email: email}).exec()
            if (findEmail) {
                return res.status(409).json({ message: "Email already existed." })
            } else {
                const user = new User({
                    username,
                    password,
                    email,
                    avatar,
                    greeting
                })
                await user.save()
                return res.status(200).json('User has been created.')
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}

const getById = async (req, res, next) => {
    const { id } = req.params

    try {
        const user = await User.findById(id).lean().exec()
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ message: "User not found." })
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error."})
    }
}

const getAll = async (req, res, next) => {
    try {
        const users = await User.find({}).lean().exec()
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." })
    }
}

// findOneAndUpdate with runValidators: true
// User.update({_id: id}, client, { runValidators: true }, function(err) {
//     ....
//   });
const updateById = async (req, res, next) => {
    const { id } = req.params
    const {
        username,
        password,
        email,
        avatar,
        greeting
    } = req.body

    if (!username) return res.status(400).json({ message: "Username required." })
    if (!password) return res.status(400).json({ message: "Password required." })
    if (!email) return res.status(400).json({ message: "Email required." })

    try {
        const user = await User.findById(id).exec()
        if(user) {
            user.username = username
            user.password = password
            user.email = email
            user.avatar = avatar
            user.greeting = greeting

            await user.save()
            return res.status(200).json('User has been updated.')
        } else {
            return res.status(404).json({ message: "User not found." })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}

const deleteById = async (req, res, next) => {
    const { id } = req.params

    try {
        // Do i need to check if it exists or not?
        await User.findByIdAndDelete(id)
        return res.status(200).json('User has been deleted.')
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." })
    }
}

module.exports = { create, getById, getAll, updateById, deleteById }
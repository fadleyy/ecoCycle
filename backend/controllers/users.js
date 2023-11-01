import Users from "../models/user_model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'nik', 'name', 'email']
        })
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

export const register = async (req, res) => {
    const { nik, name, email, password, confPassword } = req.body
    if (password !== confPassword) return res.status(400).json({ msg: 'password tidak sama coy' })
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await Users.create({
            nik,
            name,
            email,
            password: hashPassword,
        })
        res.json({ msg: "register berhasil!" })
    } catch (error) {
        console.log(error)
    }
}

export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                name: req.body.name
            }
        })
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if (!match) return res.status(400).json({ msg: "password salah" })
        const userId = user[0].id
        const nik = user[0].nik
        const name = user[0].name
        const email = user[0].email
        const accessToken = jwt.sign({ userId, nik, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        })
        const refreshToken = jwt.sign({ userId, nik, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        })
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        res.json({ accessToken })
    } catch (error) {
        res.status(404).json({ msg: "username tidak ditemukan" })
    }
}

export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken) return res.sendStatus(204)
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    })
    if (!user[0]) return res.sendStatus(204)
    const userId = user[0].id
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    })
    res.clearCookie('refreshToken')
    return res.status(200).json({ msg: "logout berhasil" });
}
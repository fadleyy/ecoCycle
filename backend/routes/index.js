import express from "express";
import { Login, getUsers, register, Logout } from "../controllers/users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router()

router.get('/users', verifyToken, getUsers)
router.post('/register', register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)

export default router
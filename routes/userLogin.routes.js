import express from "express"
import {verifyToken} from '../middleware/verifyToken.js'
import { login, logout, signup } from "../controllers/userLogin.js"

const router = express.Router()

router.post('/login',login)
router.post('/logout',logout)
router.post('/signup',signup)

export default router
import express from "express";
import {login, logout, refreshToken, register} from "../controllers/authCtrl.js";


const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/refreshToken', refreshToken)
router.get('/logout', logout)

export default router
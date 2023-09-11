import express from "express";
import {auth} from "../middleware/auth.js";
import {createArticle, getArticles} from "../controllers/articleCtrl.js";



const router = express.Router()

router.post('/create', auth, createArticle)
router.get('/getArticles', auth, getArticles)

export default router
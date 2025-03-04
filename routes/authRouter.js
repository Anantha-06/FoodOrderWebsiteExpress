import express from 'express'
import { login, signUp } from '../controllers/authContoller.js'


const router=express.Router()

router.post("/login",login)
router.post("/signup",signUp)
router.get("/profile")
router.put("/update")

export const authRouter = router
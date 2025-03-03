import express from 'express'


const router=express.Router()

router.post("/login")
router.post("/signup")
router.get("/profile")
router.put("/update")

export const userRouter = router
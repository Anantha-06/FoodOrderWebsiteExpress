import express from 'express'
import { authRouter } from './authrouter.js'

const router = express.Router()

router.use("/user",authRouter)
export const apiRouter = router
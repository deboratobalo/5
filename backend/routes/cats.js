import express from "express"
import { getCats } from "../controllers/cat.js"

const router = express.Router()

router.get("/", getCats)

export default router


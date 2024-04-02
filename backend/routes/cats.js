import express from "express"

const router = express.Router()

router.get("/", getCats)

export default router


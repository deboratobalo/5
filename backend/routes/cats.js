import express from "express"
import { getCats, addCat, updateCat } from "../controllers/cat.js"

const router = express.Router()

router.get("/", getCats)

router.post("/", addCat)

router.put("/:id", updateCat)
export default router


import express from "express"
import { getAllCats, getCat, getAgeCat, } from "../controllers/cat.js"

const router = express.Router()

// router.get("/", getAllCats)

// router.get("/:id", getCat)

// router.get("/age", getAgeCat)

router.get("/", (req, res) =>{
    return getAllCats(req, res)
} )

router.get("/cats/:id", (req, res) =>{
    return getCat(req, res)
})

router.get("/age", (req, res) => {
    return getAgeCat(req, res);
})

export default router


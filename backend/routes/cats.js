import express from "express";
import { getAllCats, getAgeCat, getAgeYoungCat } from "../controllers/cat.js";

const router = express.Router();

router.get("/", (req, res) => {
  return getAllCats(req, res);
});

router.get("/age", (req, res) => {
  return getAgeCat(req, res);
});

router.get("/age-young", (req, res) => {
  return getAgeYoungCat(req, res);
});

export default router;

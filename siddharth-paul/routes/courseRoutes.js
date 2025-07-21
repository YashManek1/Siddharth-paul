import express from "express";
import { getCourse } from "../controllers/courseController.js";

const router = express.Router();

router.get("/:tabName", getCourse);

export default router;

import express from "express";
import { submitClientInfo } from "../controllers/clientInfoController.js";

const router = express.Router();

router.post("/", submitClientInfo);

export default router;

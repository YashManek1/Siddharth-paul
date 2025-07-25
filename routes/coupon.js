import express from "express";
import { discountCoupon } from "../controllers/couponController.js";
const router = express.Router();

router.post("/apply", discountCoupon);

export default router;

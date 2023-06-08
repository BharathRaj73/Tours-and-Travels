import express from "express";
import {
  createReview,
  getTourReviews,
} from "./../controllers/reviewController.js";
import { verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.post("/:tourId", verifyUser, createReview);

router.get("/:tourId", verifyUser, getTourReviews);

export default router;

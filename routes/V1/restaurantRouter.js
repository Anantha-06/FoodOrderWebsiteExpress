import express from "express";
import { createRestaurant } from "../../controllers/restaurantController.js";
import { authMiddleware, roleMiddleware } from "../../middileware/authmiddileware.js";
import { upload } from "../../middileware/multermiddileware.js";
const router = express.Router();

router.post("/create",authMiddleware,roleMiddleware("admin"),upload.single("image"),createRestaurant)

export const restaurantRouter = router;

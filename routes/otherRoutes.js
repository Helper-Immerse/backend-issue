import express from "express";
import {
    contact,
    courseRequest,
    getDashboardStats,
    helloC
} from "../controllers/otherController.js";

import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// contact form
router.route("/contact").post(contact);

router.route("/getHello").get(helloC)

// Request form
router.route("/courserequest").post(courseRequest);

// Get Admin Dashboard Stats
router
    .route("/admin/stats")
    .get(isAuthenticated, authorizeAdmin, getDashboardStats);

export default router;

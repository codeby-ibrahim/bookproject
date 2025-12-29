import express from "express";
import { signup } from "../controller/users.controller.js";

const router = express.Router();

// ✅ POST route
router.post("/signup", signup);

export default router;

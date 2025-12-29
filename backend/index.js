import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoutes from "./routes/Book.route.js";
import userRouter from "./routes/users.router.js";

// 🔹 Load environment variables FIRST
dotenv.config();

const app = express();
app.use(express.json())

// 🔹 Middlewares
app.use(cors());
app.use(express.json());

// 🔹 Env variables
const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;

// 🔴 Safety check
if (!DATABASE_URL) {
    console.error("❌ DATABASE_URL is missing in .env file");
    process.exit(1);
}

// 🔹 MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        process.exit(1);
    }
};

// 🔹 Call DB
connectDB();

// 🔹 Routes
app.use("/api/books", bookRoutes);
app.use("/api/users", userRouter);

// 🔹 Server start
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

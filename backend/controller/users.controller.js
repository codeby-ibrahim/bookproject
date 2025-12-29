import User from "../models/users.model.js";
import bycrypt from "bcryptjs";
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // 🔹 Basic validation
        if (!fullname || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // 🔹 Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        // 🔹 Create new user
        const hashepassword = await bycrypt.hash(password, 10);
        const newUser = new User({
            fullname,
            email,
            password, // (plain text for now – learning stage)
        });

        await newUser.save();

        return res.status(201).json({
            message: "User created successfully",
        });
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

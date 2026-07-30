import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
    try {
        const { name, email, password, leetcode, codeforces } = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            codeforcesHandle: codeforces,
            leetcodeUsername: leetcode,
        });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export async function login(req, res) {

    try {

        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Compare password
        console.log("User:", user);
console.log("Entered password:", password);
console.log("Stored password:", user.password);
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

}


export async function getProfile(req, res) {
    try {
        const user = await User.findById(req.user.id).select("-password");

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}


export async function updateProfile(req, res) {
    try {
        console.log("BODY:", req.body);
        console.log("USER:", req.user);

        const {
            name,
            codeforcesHandle,
            leetcodeUsername,
            githubUsername,
        } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        user.name = name;
        user.codeforcesHandle = codeforcesHandle;
        user.leetcodeUsername = leetcodeUsername;
        user.githubUsername = githubUsername;

        await user.save();

        return res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        console.error("UPDATE PROFILE ERROR:");
        console.error(error);
        console.error(error.stack);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
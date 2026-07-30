import User from "../models/User.js";
import { getDashboardData } from "../services/dashboardService.js";

export async function getDashboard(req, res) {
    try {

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const data = await getDashboardData(
            user.codeforcesHandle,
            user.leetcodeUsername,
            user._id
        );

        res.status(200).json(data);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}
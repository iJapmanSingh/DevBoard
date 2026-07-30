import Task from "../models/Task.js";

export async function createTask(req, res) {
    try {

        const { title } = req.body;

        const task = await Task.create({
            title,
            user: req.user.id,
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}
export async function getTasks(req, res) {
    try {

        const tasks = await Task.find({
            user: req.user.id,
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            tasks,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}
export async function updateTask(req, res) {
    try {
        const { id } = req.params;

        const task = await Task.findOne({
            _id: id,
            user: req.user.id,
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        task.title = req.body.title ?? task.title;
        task.completed = req.body.completed ?? task.completed;

        await task.save();

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
export async function deleteTask(req, res) {
    try {
        const { id } = req.params;

        const task = await Task.findOne({
            _id: id,
            user: req.user.id,
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        await task.deleteOne();

        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}
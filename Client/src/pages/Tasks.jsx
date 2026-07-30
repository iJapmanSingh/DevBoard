import DashboardLayout from "../layouts/DashboardLayout";
import { useState, useEffect } from "react";
import TaskInput from "../components/tasks/TaskInput";
import TaskCard from "../components/tasks/TaskCard";

import {
    getTasks,
    createTask,
    updateTask as updateTaskAPI,
    deleteTask as deleteTaskAPI,
} from "../services/taskService";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    async function fetchTasks() {
        try {
            const data = await getTasks();
            setTasks(data.tasks);
        } catch (error) {
            console.error(error);
        }
    }

    async function addTask() {
        if (input.trim() === "") return;

        try {
            await createTask(input);
            setInput("");
            fetchTasks();
        } catch (error) {
            console.error(error);
        }
    }

    async function toggleTask(id) {
        const task = tasks.find((task) => task._id === id);

        try {
            await updateTaskAPI(id, {
                completed: !task.completed,
            });

            fetchTasks();
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteTask(id) {
        try {
            await deleteTaskAPI(id);
            fetchTasks();
        } catch (error) {
            console.error(error);
        }
    }

    async function updateTask(id, newTitle) {
        try {
            await updateTaskAPI(id, {
                title: newTitle,
            });

            fetchTasks();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>

            <TaskInput
                input={input}
                setInput={setInput}
                addTask={addTask}
            />

            <div className="mt-6 flex flex-col gap-4">
                {tasks.map((task) => (
                    <TaskCard
                        key={task._id}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />
                ))}
            </div>
        </DashboardLayout>
    );
}

export default Tasks;
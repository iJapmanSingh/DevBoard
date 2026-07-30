import { useState } from "react";

function TaskCard({
    task,
    toggleTask,
    deleteTask,
    updateTask,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);

    function handleSave(e) {
        e.stopPropagation();

        if (title.trim() === "") return;

        updateTask(task._id, title);
        setIsEditing(false);
    }

    function handleCancel(e) {
        e.stopPropagation();

        setTitle(task.title);
        setIsEditing(false);
    }

    return (
        <div
            onClick={() => !isEditing && toggleTask(task._id)}
            className="bg-slate-800 p-4 rounded-lg cursor-pointer hover:bg-slate-700 transition"
        >
            {isEditing ? (
                <input
                    value={title}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-900 text-white border border-slate-600 rounded px-3 py-2 outline-none focus:border-blue-500"
                />
            ) : (
                <h3 className="text-lg font-semibold">
                    {task.title}
                </h3>
            )}

            <p className="text-slate-300 mt-2">
                Status: {task.completed ? "Completed ✅" : "Pending ⏳"}
            </p>

            <div className="flex gap-3 mt-4">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                        >
                            Save
                        </button>

                        <button
                            onClick={handleCancel}
                            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsEditing(true);
                            }}
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                        >
                            Edit
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteTask(task._id);
                            }}
                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default TaskCard;
function TaskInput({ input, setInput , addTask , editingTask}) {
    return (
        <div>

        <input
            type="text"
            value={input}
            placeholder="Enter a task..."
            onChange={(e) => setInput(e.target.value)}
            className="bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-2 w-full outline-none focus:border-blue-500 placeholder:text-slate-400"
        />
 

            <button onClick={addTask}>
                {editingTask ? "Update Task" : "Add Task"}
            </button>

        </div>
    );
}

export default TaskInput;
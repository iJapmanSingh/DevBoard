import api from "./api";

export async function getTasks() {
    const response = await api.get("/tasks");
    return response.data;
}

export async function createTask(title) {
    const response = await api.post("/tasks", { title });
    return response.data;
}

export async function updateTask(id, data) {
    const response = await api.put(`/tasks/${id}`, data);
    return response.data;
}

export async function deleteTask(id) {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
}



import api from "./api";

export async function fetchDashboard() {

    const response = await api.get("/dashboard");

    return response.data;
}
import api from "./api";

export async function getProfile() {
    const response = await api.get("/auth/profile");
    return response.data;
}

export async function updateProfile(profile) {
    const response = await api.put("/auth/profile", profile);
    return response.data;
}
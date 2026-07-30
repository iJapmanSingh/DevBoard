import axios from "axios";

const BASE_URL = "http://localhost:8000/api/auth";

export async function signup(data) {
    const response = await axios.post(
        `${BASE_URL}/signup`,
        data
    );

    return response.data;
}

export async function login(data) {
    const response = await axios.post(
        `${BASE_URL}/login`,
        data
    );

    return response.data;
}
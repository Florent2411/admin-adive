import apiClient from "../../client";

export async function login(identifier, password) {
    const response = await apiClient.post("/auth/local", { identifier, password });
    return response.data;
}

export async function setupAccount({
    token,
    ...rest
}) {
    const response = await apiClient.post("/accounts/setup-account", { ...rest }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export async function register({ username, email, password }) {
    const response = await apiClient.post("/auth/local/register", { username, email, password });
    return response.data;
}
import { apiClient } from "../client";

export async function login(identifier, password) {
    const result = await apiClient.post("/auth/local", {
        identifier,
        password
    })

    return result.data;
};
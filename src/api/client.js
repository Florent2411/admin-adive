import axios from "axios";
import config from "../config";

const createApiClient = () => {
    const apiClient = axios.create({
        baseURL: config.apiUrl,
        headers: {
            "Content-Type": "application/json",
        }
    });

    const setAuthToken = (token) => {
        apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    apiClient.setAuthToken = setAuthToken;

    return apiClient;
}

export const apiClient = createApiClient();

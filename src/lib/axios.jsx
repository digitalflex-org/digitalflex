import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.message);
        return Promise.reject(error);
    }
);

import axios, { AxiosError } from "axios";

export const httpClient = axios.create({
    baseURL: '/',
    timeout: 10000,
});

httpClient.interceptors.request.use((config: any) => {
    const token = localStorage.getItem('token')

    config.headers.Authorization = token;
    return config;
});

httpClient.interceptors.response.use((response: any) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
}, (error: AxiosError) => {
    const { response } = error;
    if (!response) {
        return null;
    }

    if (response.status >= 400 && response.status < 500) {
        return response.data
    }
});


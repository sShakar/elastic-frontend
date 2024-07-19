import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

/**
 *  @description Initialize axios instance with default configuration
 */
export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_DEFAULT_BASE_API
});

axiosInstance.interceptors.request.use(requestCallback, errorCallback);
axiosInstance.interceptors.response.use(responseCallback, errorCallback);

function requestCallback(config: InternalAxiosRequestConfig) {
	return config;
}
async function responseCallback(response: AxiosResponse) {
	return response.data;
}
function errorCallback(error: AxiosError) {
	return Promise.reject(error.response?.data);
}

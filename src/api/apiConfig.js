import axios from "axios";

const serverUrl = "http://127.0.0.1:8080/api";

const axiosInstance = axios.create({
    baseURL: serverUrl,
    headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});

export default axiosInstance;
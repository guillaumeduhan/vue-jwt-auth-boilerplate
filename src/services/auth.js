import axios from "axios";

const BASE_URL = `http://localhost:1337`

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: "", // retrieve auth_token
    },
});

export default {
    login: async (payload) => {
        return axiosInstance
            .post(`${BASE_URL}/auth/local`, payload)
    },
}

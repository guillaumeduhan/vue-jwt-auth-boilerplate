import axios from "axios";

const STRAPI_URL = `http://localhost:1337`

const axiosInstance = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "", // retrieve auth_token
  },
});

export default {
  login: async ({ identifier, password }) => {
    return axiosInstance
      .post(`${STRAPI_URL}/auth/local`, { identifier, password })
  },
  logout: async () => {
    return axiosInstance
      .post(`${STRAPI_URL}/logout`)
  }
}
